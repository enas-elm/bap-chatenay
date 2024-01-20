import { NextResponse } from 'next/server';
import { db } from '@/db/index';

export const POST = async (req: Request) => {
    const data = await req.json();

    try {
        const { formResponseId } = data;

        const { heuresSupplementaires, heuresTravailSemaine, horairesIrreguliers, moyenDeTransport, tempsTrajet } = data.HorairesDeTravail;
        const horairesDeTravail = await db.horairesDeTravail.create({
            data: {
                heuresSupplementaires: heuresSupplementaires,
                heuresTravailSemaine: heuresTravailSemaine,
                horairesIrreguliers: horairesIrreguliers,
                moyenDeTransport: moyenDeTransport,
                tempsTrajet: tempsTrajet,
                formResponseId: formResponseId,
            },
        });

        const { fatigueMentaleOuStress, forteConcentrationRequise, impactNegatifSurViePersonnelle } = data.EffortMental;
        const effortMental = await db.effortMental.create({
            data: {
                fatigueMentaleOuStress: fatigueMentaleOuStress,
                forteConcentrationRequise: forteConcentrationRequise,
                impactNegatifSurViePersonnelle: impactNegatifSurViePersonnelle,
                formResponseId: formResponseId,
            },
        });

        const { deplacementsFrequents, expositionRisquesPhysiques, positionStatique, problemesPhysiquesLiesAuTravail, travailRepetitif } = data.EffortPhysique;
        const effortPhysique = await db.effortPhysique.create({
            data: {
                deplacementsFrequents: deplacementsFrequents,
                expositionRisquesPhysiques: expositionRisquesPhysiques,
                positionStatique: positionStatique,
                problemesPhysiquesLiesAuTravail: problemesPhysiquesLiesAuTravail,
                travailRepetitif: travailRepetitif,
                formResponseId: formResponseId,
            },
        });

        const { espaceDeTravailInadapte, expositionProduitsToxiques, expositionVibrations } = data.Environnement;
        const environnement = await db.environnement.create({
            data: {
                espaceDeTravailInadapte: espaceDeTravailInadapte,
                expositionProduitsToxiques: expositionProduitsToxiques,
                expositionVibrations: expositionVibrations,
                formResponseId: formResponseId,
            },
        });

        const { motivationPourTachesQuotidiennes, optionsReconversion, possibiliteEvolutionCarriere, satisfactionTravail } = data.SatisfactionEtEvolutionDeCarriere;
        const satisfactionEtEvolutionDeCarriere = await db.satisfactionEtEvolutionDeCarriere.create({
            data: {
                motivationPourTachesQuotidiennes: motivationPourTachesQuotidiennes,
                optionsReconversion: optionsReconversion,
                possibiliteEvolutionCarriere: possibiliteEvolutionCarriere,
                satisfactionTravail: satisfactionTravail,
                formResponseId: formResponseId,
            },
        });

        return NextResponse.json({
            status: 200,
            message: 'Answers created',
            body: {
                horairesDeTravail,
                effortMental,
                effortPhysique,
                environnement,
                satisfactionEtEvolutionDeCarriere,
            }
        });
    } catch (error) {
        return NextResponse.json(error);
    }

}