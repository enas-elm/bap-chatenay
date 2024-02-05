import { NextResponse } from 'next/server';
import { db } from '@/db/index';

export const POST = async (req: Request) => {
    const data = await req.json();

    try {
        const { startDate, endDate } = data;

        const allUsers = await db.user.findMany({
            where: {
                createdAt: {
                    gte: new Date(`${startDate}T00:00:00.000Z`),
                    lte: new Date(`${endDate}T23:59:59.999Z`),
                }
            }
        });

        const allFormResponses = await db.formResponse.findMany({
            where: {
                createdAt: {
                    gte: new Date(`${startDate}T00:00:00.000Z`),
                    lte: new Date(`${endDate}T23:59:59.999Z`),
                }
            }
        });

        const EffortMental = await db.effortMental.findMany({
            where: {
                createdAt: {
                    gte: new Date(`${startDate}T00:00:00.000Z`),
                    lte: new Date(`${endDate}T23:59:59.999Z`),
                }
            }
        });
        const EffortPhysical = await db.effortPhysique.findMany({
            where: {
                createdAt: {
                    gte: new Date(`${startDate}T00:00:00.000Z`),
                    lte: new Date(`${endDate}T23:59:59.999Z`),
                }
            }
        });
        const Environment = await db.environnement.findMany({
            where: {
                createdAt: {
                    gte: new Date(`${startDate}T00:00:00.000Z`),
                    lte: new Date(`${endDate}T23:59:59.999Z`),
                }
            }
        });
        const HoraireDetravil = await db.horairesDeTravail.findMany({
            where: {
                createdAt: {
                    gte: new Date(`${startDate}T00:00:00.000Z`),
                    lte: new Date(`${endDate}T23:59:59.999Z`),
                }
            }
        });
        const Satisfation = await db.satisfactionEtEvolutionDeCarriere.findMany({
            where: {
                createdAt: {
                    gte: new Date(`${startDate}T00:00:00.000Z`),
                    lte: new Date(`${endDate}T23:59:59.999Z`),
                }
            }
        });

        // if the data is empty return an error
        if (allUsers.length === 0 || allFormResponses.length === 0 || EffortMental.length === 0 || EffortPhysical.length === 0 || Environment.length === 0 || HoraireDetravil.length === 0 || Satisfation.length === 0) {
            return NextResponse.json({
                status: 400,
                message: 'No data found',
                body: 'No data found'
            });
        }

        const allData = {
            allUsers,
            allFormResponses,
            EffortMental,
            EffortPhysical,
            Environment,
            HoraireDetravil,
            Satisfation
        }

        //check if the

        return NextResponse.json({
            status: 200,
            message: 'Success',
            body: allData
        });
    } catch (error) {
        return NextResponse.json(error);
    }

}