// app/api/user/[userId].ts
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { db } from '@/db';

export const GET = async (
    req: Request,
    { params }: { params: { responceFormId: string } }
) => {
    const ResponseFormId = params.responceFormId

    if (!ResponseFormId) {
        return NextResponse.json({
            status: 400,
            message: 'Missing ResponseForm id',
        });
    }

    try {
        const effortMental = await db.effortMental.findMany({
            where: { formResponseId: parseInt(ResponseFormId) },
        });

        const effortPhysique = await db.effortPhysique.findMany({
            where: { formResponseId: parseInt(ResponseFormId) },
        });

        const environnement = await db.environnement.findMany({
            where: { formResponseId: parseInt(ResponseFormId) },
        });

        const HorairesDeTravail = await db.horairesDeTravail.findMany({
            where: { formResponseId: parseInt(ResponseFormId) },
        });

        const SatisfactionEtEvolutionDeCarriere = await db.satisfactionEtEvolutionDeCarriere.findMany({
            where: { formResponseId: parseInt(ResponseFormId) },
        });

        const answers = {
            effortMental,
            effortPhysique,
            environnement,
            HorairesDeTravail,
            SatisfactionEtEvolutionDeCarriere
        }

        if (!answers) {
            return NextResponse.json({
                status: 404,
                message: 'ResponseForm not found',
            });
        }

        return NextResponse.json({
            status: 200,
            message: 'ResponseForm found',
            body: answers,
        });
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: 'Internal server error',
        });
    }
}
