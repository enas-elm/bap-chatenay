import { NextResponse } from 'next/server';
import { db } from '@/db/index';

export const GET = async (req: Request) => {
    // this api route return all EffortMental, EffortPhysical, Environment, HoraireDetravil, Satisfation from data base
    try {
        const EffortMental = await db.effortMental.findMany();
        const EffortPhysical = await db.effortPhysique.findMany();
        const Environment = await db.environnement.findMany();
        const HoraireDetravil = await db.horairesDeTravail.findMany();
        const Satisfation = await db.satisfactionEtEvolutionDeCarriere.findMany();

        const Ansewers = {
            EffortMental,
            EffortPhysical,
            Environment,
            HoraireDetravil,
            Satisfation
        }
        return NextResponse.json({
            status: 200,
            message: 'Success',
            body: Ansewers
        });
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: 'Internal server error',
            error: error
        });
    }
}