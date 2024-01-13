'use client'
import { useState, useEffect } from "react";
import { Result1 } from "./Questions/Result1";
import { Result2 } from "./Questions/Result2";
import { saveUserResponse } from "@api/prisma/saveUserResponse";

type ResultProps = {
    getResponse: object;
};

// Critère d'usure
/* 

    Information personnelles
        Présence d'un Handicap ou Maladie Chronique : +2 points
        Si oui, lequel  : 
            Asthme, Eczéma, Hypertension, Cholestérol Élevé : 
            Impact modéré sur l'usure professionnelle. Score: +1

            Diabète, Dépression, Maladies Cardiovasculaires (y compris maladies coronariennes), Maladies Pulmonaires Chroniques (COPD), Migraines Chroniques : 
            Impact considérable. Score: +2

            Cancer, Maladies Neurologiques (comme la Sclérose en Plaques, Épilepsie), Troubles Bipolaires, Maladies Auto-immunes (comme le Lupus, la Polyarthrite Rhumatoïde) : 
            Impact majeur sur l'usure professionnelle. Score: +3

            Maladies Chroniques Sévères avec complications (par exemple, Diabète avec complications, Maladies Cardiaques Sévères, Maladies Pulmonaires avec Insuffisance Respiratoire) : 
            Impact très élevé. Score: +4

    Horaires de travail: 
        Comment vous rendez-vous au travail ?
            Critère : Long trajet ou mode de transport stressant.
            Scoring : Si le trajet est supérieur à 1 heure ou si le mode de transport est particulièrement stressant (par exemple, conduite dans un trafic dense), ajoutez +1 point.
            Combien de temps vous prend le trajet pour le travail ?

            Critère : Temps de trajet long.
            Scoring : Si le trajet est supérieur à 1 heure (aller simple), ajoutez +1 point.
            Vos horaires de travail sont-elles irrégulières ?

            Critère : Horaires irréguliers.
            Scoring : Si oui, ajoutez +2 points.
            Vous arrive-t-il fréquemment de faire des heures supplémentaires ?

            Critère : Heures supplémentaires fréquentes.
            Scoring : Si oui, ajoutez +2 points pour chaque occurrence fréquente d'heures supplémentaires.

    L’Environnement
        Votre espace de travail est-il inadapté ? (restreint, encombré... )
            Critère : Espace de travail inadapté.
            Scoring : Si l'utilisateur répond "oui", ajoutez +2 points. Un environnement de travail inadapté peut augmenter le stress et diminuer la satisfaction au travail.
            Êtes-vous exposé à des produits (toxiques, poussières) ?

            Critère : Exposition à des produits dangereux.
            Scoring : Si "oui", ajoutez +3 points. L'exposition à des substances toxiques ou irritantes peut avoir un impact significatif sur la santé physique et mentale.
            Êtes-vous exposé à des vibrations du corps entier (conduite) ou membres supérieurs (outils vibrants) ?

            Critère : Exposition à des vibrations.
            Scoring : Si "oui", ajoutez +2 points. L'exposition régulière à des vibrations peut entraîner des problèmes physiques à long terme et augmenter le stress.


    L’Effort physique
    Critères et Scoring pour l'Effort Physique
        Êtes-vous toujours dans la même position lors de votre travail ? (assis, debout... )

        Critère : Position statique prolongée.
        Scoring : Si "oui", ajoutez +1 point. Rester dans la même position pendant de longues périodes peut contribuer à des problèmes physiques et à un inconfort accru.
        Êtes-vous régulièrement exposé(e) à des risques physiques dans votre travail (charges lourdes, posture contraignante, utilisation d'équipements lourds, etc.) ?

        Critère : Exposition à des risques physiques.
        Scoring : Si "oui", ajoutez +2 points. L'exposition régulière à des risques physiques peut augmenter le risque de blessures et de fatigue.
        Faites-vous de nombreux déplacements et/ou longs ?

        Critère : Déplacements fréquents ou prolongés.
        Scoring : Si "oui", ajoutez +1 point. De fréquents ou longs déplacements peuvent contribuer à la fatigue et au stress.
        Avez-vous eu des problèmes physiques récurrents ou des douleurs liées à votre travail ?

        Critère : Problèmes physiques liés au travail.
        Scoring : Si "oui", ajoutez +2 points. Les problèmes physiques récurrents peuvent être un indicateur fort d'usure professionnelle.


    L’Effort mental
        Critères et Scoring pour l'Effort Mental
                Votre travail demande-t-il beaucoup de concentration ?

                Critère : Exigence de forte concentration.
                Scoring : Si "oui", ajoutez +2 points. Un travail nécessitant une concentration intense peut contribuer à la fatigue mentale.
                Ressentez-vous de la fatigue mentale ou du stress lié à votre travail ?

                Critère : Fatigue mentale ou stress.
                Scoring : Si "oui", ajoutez +2 points. La fatigue mentale ou le stress constant sont des indicateurs importants d'usure professionnelle.
                Votre travail impacte négativement votre vie personnelle ou votre santé en dehors du travail ?

                Critère : Impact négatif sur la vie personnelle ou la santé.
                Scoring : Si "oui", ajoutez +3 points. L'impact négatif sur la vie personnelle ou la santé indique un niveau élevé de stress ou de déséquilibre travail-vie personnelle.


    Satisfaction et évolution de carrière
        Critères et Scoring pour la Satisfaction et l'Évolution Professionnelle
            Êtes-vous satisfait(e) de votre travail actuel ?

            Critère : Satisfaction au travail.
            Scoring : Si "non", ajoutez +2 points. Un faible niveau de satisfaction au travail peut être un indicateur d'usure professionnelle.
            Ressentez-vous de la motivation pour accomplir vos tâches quotidiennes ?

            Critère : Motivation au travail.
            Scoring : Si "non", ajoutez +2 points. Le manque de motivation peut signaler un désengagement et contribuer à l'usure professionnelle.
            Envisagez-vous la possibilité de faire évoluer votre carrière ?

            Critère : Perspectives d'évolution professionnelle.
            Scoring : Si "non", ajoutez +1 point. L'absence de perspectives d'évolution peut diminuer la satisfaction et l'engagement au travail.
            Dans quel(s) métier(s) pouvez-vous envisager une reconversion ?

            Critère : Considération de reconversion.
            Scoring : Si l'utilisateur envisage activement une reconversion, ajoutez +1 point. Cela peut indiquer un désir de changement significatif lié à un manque de satisfaction dans le poste actuel.
*/

export const Resultat = ({ getResponse }: ResultProps) => {
    const [showResult1, setShowResult1] = useState(false);

    console.log(getResponse);

    return (
        <div className="flex flex-col justify-between h-full">
            {showResult1 ? <Result1 /> : <Result2 />}
        </div>
    );
};
