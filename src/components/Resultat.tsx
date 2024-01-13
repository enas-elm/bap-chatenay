'use client'
import { useState, useEffect } from "react";
import { Result1 } from "./Questions/Result1";
import { Result2 } from "./Questions/Result2";
import { saveUserResponse } from "@api/prisma/saveUserResponse";

type ResultProps = {
    getResponse: object;
};

export const Resultat = ({ getResponse }: ResultProps) => {
    const [showResult1, setShowResult1] = useState(false);

    useEffect(() => {
        const score = calculerScoreUsure(getResponse);
        const seuilUsure = 15;
        setShowResult1(score >= seuilUsure);
    }, [getResponse]);

    return (
        <div className="flex flex-col justify-between h-full">
            {showResult1 ? <Result1 /> : <Result2 />}
        </div>
    );
};

function calculerScoreUsure(reponses: any) {
    let score = 0;

    /* -------------------------------------------------------------------------- */
    /*                          Information Personnelles                          */
    /* -------------------------------------------------------------------------- */
    if (reponses.InformationPersonnelles.hasDisabilityOrIllness === 'true') {
        score += 2;
        const maladie = reponses.InformationPersonnelles.disabilityOrIllnessDetails;
        score += calculerScoreMaladie(maladie);
    }

    /* -------------------------------------------------------------------------- */
    /*                             Horaires de Travail                            */
    /* -------------------------------------------------------------------------- */
    if (estSuperieurAUnHeure(reponses.HorairesDeTravail.tempsTrajet)) {
        score += 1;
    }
    if (reponses.HorairesDeTravail.horairesIrreguliers === 'true') {
        score += 2;
    }
    if (reponses.HorairesDeTravail.heuresSupplementaires === 'true') {
        score += 2;
    }
    const minutesTotales = convertirEnMinutes(reponses.HorairesDeTravail.heuresTravailSemaine);
    if (minutesTotales > 2400) { // 40 heures * 60 minutes
        score += 2;
    }

    /* -------------------------------------------------------------------------- */
    /*                                Environnement                               */
    /* -------------------------------------------------------------------------- */
    if (reponses.LEnvironnement.espaceDeTravailInadapte === 'true') {
        score += 2;
    }
    if (reponses.LEnvironnement.expositionProduitsToxiques === 'true') {
        score += 3;
    }
    if (reponses.LEnvironnement.expositionVibrations === 'true') {
        score += 2;
    }

    /* -------------------------------------------------------------------------- */
    /*                               Effort Physique                              */
    /* -------------------------------------------------------------------------- */
    if (reponses.LEffortPhysique.positionStatique === 'true') {
        score += 1; // Position statique prolongée
    }
    if (reponses.LEffortPhysique.expositionRisquesPhysiques === 'true') {
        score += 2; // Exposition à des risques physiques
    }
    if (reponses.LEffortPhysique.travailRepetitif === 'true') {
        score += 2; // Travail répétitif
    }
    if (reponses.LEffortPhysique.deplacementsFrequents === 'true') {
        score += 1; // Déplacements fréquents ou prolongés
    }
    if (reponses.LEffortPhysique.problemesPhysiquesLiesAuTravail === 'true') {
        score += 2; // Problèmes physiques liés au travail
    }

    /* -------------------------------------------------------------------------- */
    /*                                Effort Mental                               */
    /* -------------------------------------------------------------------------- */

    if (reponses.LEffortMental.forteConcentrationRequise === 'true') {
        score += 2; // Exigence de forte concentration
    }
    if (reponses.LEffortMental.fatigueMentaleOuStress === 'true') {
        score += 2; // Fatigue mentale ou stress
    }
    if (reponses.LEffortMental.impactNegatifSurViePersonnelle === 'true') {
        score += 3; // Impact négatif sur la vie personnelle ou la santé
    }

    /* -------------------------------------------------------------------------- */
    /*                  Satisfaction et Évolution Professionnelle                 */
    /* -------------------------------------------------------------------------- */
    if (reponses.SatisfactionEtEvolutionDeCarriere.satisfactionTravail === 'false') {
        score += 2;
    }
    if (reponses.SatisfactionEtEvolutionDeCarriere.motivationPourTachesQuotidiennes === 'false') {
        score += 2;
    }
    if (reponses.SatisfactionEtEvolutionDeCarriere.possibiliteEvolutionCarriere === 'false') {
        score += 1;
    }
    if (reponses.SatisfactionEtEvolutionDeCarriere.optionsReconversion) {
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
