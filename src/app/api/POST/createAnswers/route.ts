import { NextResponse } from 'next/server';
import { db } from '@/db/index';

export const POST = async (req: Request) => {
    const data = await req.json();
    try {
        const { heuresSupplementaires, heuresTravailSemaine, horairesIrreguliers, moyenDeTransport, tempsTrajet, formResponseId } = data.HorairesDeTravail;
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

        const { fatigueMentaleOuStress, forteConcentrationRequise, impactNegatifSurViePersonnelle, formResponseId: formResponseId2 } = data.EffortMental;
        const effortMental = await db.effortMental.create({
            data: {
                fatigueMentaleOuStress: fatigueMentaleOuStress,
                forteConcentrationRequise: forteConcentrationRequise,
                impactNegatifSurViePersonnelle: impactNegatifSurViePersonnelle,
                formResponseId: formResponseId2,
            },
        });

        const { deplacementsFrequents, expositionRisquesPhysiques, positionStatique, problemesPhysiquesLiesAuTravail, travailRepetitif, formResponseId: formResponseId3 } = data.EffortPhysique;
        const effortPhysique = await db.effortPhysique.create({
            data: {
                deplacementsFrequents: deplacementsFrequents,
                expositionRisquesPhysiques: expositionRisquesPhysiques,
                positionStatique: positionStatique,
                problemesPhysiquesLiesAuTravail: problemesPhysiquesLiesAuTravail,
                travailRepetitif: travailRepetitif,
                formResponseId: formResponseId3,
            },
        });

        const { espaceDeTravailInadapte, expositionProduitsToxiques, expositionVibrations, formResponseId: formResponseId4 } = data.Environnement;
        const environnement = await db.environnement.create({
            data: {
                espaceDeTravailInadapte: espaceDeTravailInadapte,
                expositionProduitsToxiques: expositionProduitsToxiques,
                expositionVibrations: expositionVibrations,
                formResponseId: formResponseId4,
            },
        });

        const { motivationPourTachesQuotidiennes, optionsReconversion, possibiliteEvolutionCarriere, satisfactionTravail, formResponseId: formResponseId5 } = data.SatisfactionEtEvolutionDeCarriere;
        const satisfactionEtEvolutionDeCarriere = await db.satisfactionEtEvolutionDeCarriere.create({
            data: {
                motivationPourTachesQuotidiennes: motivationPourTachesQuotidiennes,
                optionsReconversion: optionsReconversion,
                possibiliteEvolutionCarriere: possibiliteEvolutionCarriere,
                satisfactionTravail: satisfactionTravail,
                formResponseId: formResponseId5,
            },
        });

        return NextResponse.json({ horairesDeTravail, effortMental, effortPhysique, environnement, satisfactionEtEvolutionDeCarriere });
    } catch (error) {
        return NextResponse.json(error);
    }
}