'use client'
import { useState, useEffect, use } from "react";
import { Result1 } from "./Questions/Result1";
import { Result2 } from "./Questions/Result2";
import { checkIfUserExists, createUser, getUserId, createAnswers, associateResponseToUser } from "./apiRequest/formRequest";
import { ResponseType } from "@/types/Form";

type ResultProps = {
    dataFormResponse: ResponseType;
};

export const Resultat = ({ dataFormResponse }: ResultProps) => {
    const [showResult1, setShowResult1] = useState(false);

    useEffect(() => {
        // const score = calculerScoreUsure(dataFormResponse);
        // const seuilUsure = 15;
        // setShowResult1(score >= seuilUsure);


        const apiCalls = async () => {
            const email = dataFormResponse?.InformationPersonnelles?.email;
            const userExists = await checkIfUserExists(email);
            if (userExists.message === 'User not found') {
                await createUser(dataFormResponse);
                const user = await getUserId(email);
                const userId = user.body.id;
                const data = {
                    userId: userId,
                }
                const linkUserToResponse = await associateResponseToUser(data);
                const responseId = linkUserToResponse.body.body.id;
                const Answersdata = {
                    formResponseId: responseId,
                    HorairesDeTravail: dataFormResponse.HorairesDeTravail,
                    InformationPersonnelles: dataFormResponse.InformationPersonnelles,
                    LEnvironnement: dataFormResponse.LEnvironnement,
                    LEffortPhysique: dataFormResponse.LEffortPhysique,
                    LEffortMental: dataFormResponse.LEffortMental,
                    SatisfactionEtEvolutionDeCarriere: dataFormResponse.SatisfactionEtEvolutionDeCarriere,
                }
                await createAnswers(Answersdata);
            } else {
                const user = await getUserId(email);
                const userId = user.body.id;
                const data = {
                    userId: userId,
                }
                const linkUserToResponse = await associateResponseToUser(data);
                const responseId = linkUserToResponse.body.body.id;
                const Answersdata = {
                    formResponseId: responseId,
                    HorairesDeTravail: dataFormResponse.HorairesDeTravail,
                    InformationPersonnelles: dataFormResponse.InformationPersonnelles,
                    LEnvironnement: dataFormResponse.LEnvironnement,
                    LEffortPhysique: dataFormResponse.LEffortPhysique,
                    LEffortMental: dataFormResponse.LEffortMental,
                    SatisfactionEtEvolutionDeCarriere: dataFormResponse.SatisfactionEtEvolutionDeCarriere,
                }
                await createAnswers(Answersdata);
            }
        }
        apiCalls();
    }, []);

    return (
        <div className="flex flex-col justify-between h-full">
            {showResult1 ? <Result1 /> : <Result2 />}
        </div>
    );
};

function calculerScoreUsure(reponses: any) {
    let score = 0;
    score += calculerScoreInfoPersonnelles(reponses.InformationPersonnelles);
    score += calculerScoreHorairesTravail(reponses.HorairesDeTravail);
    score += calculerScoreEnvironnement(reponses.LEnvironnement);
    score += calculerScoreEffortPhysique(reponses.LEffortPhysique);
    score += calculerScoreEffortMental(reponses.LEffortMental);
    score += calculerScoreSatisfactionEvolution(reponses.SatisfactionEtEvolutionDeCarriere);
    return score;
}

function calculerScoreInfoPersonnelles(info: { hasDisabilityOrIllness: string; disabilityOrIllnessDetails: any; }) {
    let score = 0;
    if (info.hasDisabilityOrIllness === 'true') {
        score += 2
            ;
        const maladie = info.disabilityOrIllnessDetails;
        score += calculerScoreMaladie(maladie);
    }
    return score;
}

function calculerScoreHorairesTravail(horaires: { tempsTrajet: String; horairesIrreguliers: string; heuresSupplementaires: string; heuresTravailSemaine: String; }) {
    let score = 0;
    if (estSuperieurAUnHeure(horaires.tempsTrajet)) {
        score += 1;
    }
    if (horaires.horairesIrreguliers === 'true') {
        score += 2;
    }
    if (horaires.heuresSupplementaires === 'true') {
        score += 2;
    }
    const minutesTotales = convertirEnMinutes(horaires.heuresTravailSemaine);
    if (minutesTotales > 2400) { // 40 heures * 60 minutes
        score += 2;
    }
    return score;
}

function calculerScoreEnvironnement(env: { espaceDeTravailInadapte: string; expositionProduitsToxiques: string; expositionVibrations: string; }) {
    let score = 0;
    if (env.espaceDeTravailInadapte === 'true') {
        score += 2;
    }
    if (env.expositionProduitsToxiques === 'true') {
        score += 3;
    }
    if (env.expositionVibrations === 'true') {
        score += 2;
    }
    return score;
}

function calculerScoreEffortPhysique(effort: { positionStatique: string; expositionRisquesPhysiques: string; travailRepetitif: string; deplacementsFrequents: string; problemesPhysiquesLiesAuTravail: string; }) {
    let score = 0;
    if (effort.positionStatique === 'true') {
        score += 1; // Position statique prolongée
    }
    if (effort.expositionRisquesPhysiques === 'true') {
        score += 2; // Exposition à des risques physiques
    }
    if (effort.travailRepetitif === 'true') {
        score += 2; // Travail répétitif
    }
    if (effort.deplacementsFrequents === 'true') {
        score += 1; // Déplacements fréquents ou prolongés
    }
    if (effort.problemesPhysiquesLiesAuTravail === 'true') {
        score += 2; // Problèmes physiques liés au travail
    }
    return score;
}

function calculerScoreEffortMental(effort: { forteConcentrationRequise: string; fatigueMentaleOuStress: string; impactNegatifSurViePersonnelle: string; }) {
    let score = 0;
    if (effort.forteConcentrationRequise === 'true') {
        score += 2; // Exigence de forte concentration
    }
    if (effort.fatigueMentaleOuStress === 'true') {
        score += 2; // Fatigue mentale ou stress
    }
    if (effort.impactNegatifSurViePersonnelle === 'true') {
        score += 3; // Impact négatif sur la vie personnelle ou la santé
    }
    return score;
}

function calculerScoreSatisfactionEvolution(satisfaction: { satisfactionTravail: string; motivationPourTachesQuotidiennes: string; possibiliteEvolutionCarriere: string; optionsReconversion: any; }) {
    let score = 0;
    if (satisfaction.satisfactionTravail === 'false') {
        score += 2;
    }
    if (satisfaction.motivationPourTachesQuotidiennes === 'false') {
        score += 2;
    }
    if (satisfaction.possibiliteEvolutionCarriere === 'false') {
        score += 1;
    }
    if (satisfaction.optionsReconversion) {
        score += 1;
    }
    return score;
}

function calculerScoreMaladie(maladie: String) {
    let score = 0;
    const maladies = maladie.split(',');
    maladies.forEach(maladie => {
        switch (maladie) {
            case 'Asthme':
            case 'Eczéma':
            case 'Hypertension':
            case 'Cholestérol Élevé':
                score += 1;
                break;
            case 'Diabète':
            case 'Dépression':
            case 'Maladies Cardiovasculaires':
            case 'Maladies Pulmonaires Chroniques':
            case 'Migraines Chroniques':
                score += 2;
                break;
            case 'Cancer':
            case 'Maladies Neurologiques':
            case 'Troubles Bipolaires':
            case 'Maladies Auto-immunes':
                score += 3;
                break;
            case 'Maladies Chroniques Sévères avec complications':
                score += 4;
                break;
        }
    });
    return score;
}

function estSuperieurAUnHeure(tempsTrajet: String) {
    const regex = /^(\d+)(h|min|s)$/;
    const match = tempsTrajet.match(regex);

    if (match) {
        const duree = parseInt(match[1], 10);
        const unite = match[2];

        if (unite === 'h' || (unite === 'min' && duree >= 60) || (unite === 's' && duree >= 3600)) {
            return true;
        }
    }

    return false;
}

function convertirEnMinutes(heuresTravailSemaine: String) {
    const regex = /(\d+)h(\d+)min(\d+)s/;
    const match = heuresTravailSemaine.match(regex);

    if (match) {
        const heures = parseInt(match[1], 10);
        const minutes = parseInt(match[2], 10);
        const secondes = parseInt(match[3], 10);

        return heures * 60 + minutes + secondes / 60;
    }

    return 0;
}