export type InformationPersonnelles = {
    gender: "" | "Homme" | "Femme" | "Autre";
    nom: string;
    prenom: string;
    phone: string;
    email: string;
    birthdate: string;
    job: string;
    hasDisabilityOrIllness?: "" | "true" | "false";
    disabilityOrIllnessDetails?: string;
};

export type HorairesDeTravail = {
    moyenDeTransport?: string | undefined
    tempsTrajet?: string | undefined
    horairesIrreguliers?: string | undefined
    heuresSupplementaires?: string | undefined
    heuresTravailSemaine?: string | undefined
};

export type LEnvironnement = {
    espaceDeTravailInadapte: string | undefined
    expositionProduitsToxiques: string | undefined
    expositionVibrations: string | undefined
};

export type LEffortPhysique = {
    positionStatique: string | undefined
    expositionRisquesPhysiques: string | undefined
    deplacementsFrequents: string | undefined
    travailRepetitif: string | undefined
    problemesPhysiquesLiesAuTravail: string | undefined
};

export type LEffortMental = {
    forteConcentrationRequise: string | undefined
    fatigueMentaleOuStress: string | undefined
    impactNegatifSurViePersonnelle: string | undefined
};

export type SatisfactionEtEvolutionDeCarriere = {
    satisfactionTravail: string | undefined
    motivationPourTachesQuotidiennes: string | undefined
    possibiliteEvolutionCarriere: string | undefined
    optionsReconversion: string | undefined
};

export type Resultat = {
    // ... structure de vos champs pour HorairesDeTravail
};

export type ResponseType = {
    InformationPersonnelles?: InformationPersonnelles;
    HorairesDeTravail?: HorairesDeTravail;
    LEnvironnement?: LEnvironnement;
    LEffortPhysique?: LEffortPhysique;
    LEffortMental?: LEffortMental;
    SatisfactionEtEvolutionDeCarriere?: SatisfactionEtEvolutionDeCarriere;
    Resultat?: Resultat;
};


// Information personnelles
//  Quel est votre genre ?
//  Nom
//  Prénom
//  Numéro de téléphone
//  Email
//  Date de naissance
//  Profession
//  Avez - vous un handicap ou une maladie chronique ?
//  Si oui, lequel ?

// Horaires de travail
//  Comment vous rendez - vous au travail ?
//  Combien de temps vous prends le trajet pour le travail ?
//  Vos horaires de travail sont - elles irrégulières ?
//  Vous arrive - t - il fréquemment de faire des heures supplémentaires ?
//  Vous arrive - t - il fréquemment de faire des heures supplémentaires ?

// Environement :
//  Votre espace de travail est - il inadapté ? (restreint, encombré... )
//  Etes - vous exposer à des produits(toxiques, poussières) ?
//  Etes - vous exposer à des vibrations du corps entier(conduite) ou membres supérieurs(outils vibrants) ?

// Physique :
//  Etes - vous toujours dans la même position lors de votre travail ? (assis, debout... )
//  Êtes - vous régulièrement exposé(e) à des risques physiques dans votre travail(charges lourdes, posture contraignante, utilisation d'équipements lourds, etc.) ?
//  Faites - vous de nombreux déplacements et / ou longs ?
//  Le travail est-il répétitif ?
//  Avez - vous eu des problèmes physiques récurrents ou des douleurs liées à votre travail ?

// Mental : fait
//  Votre travail demande-t-il beaucoup de concentration ?
//  Ressentez-vous du de la fatigue mentale ou du stress lié à votre travail ?
//  Votre travail impacte négativement votre vie personnelle ou votre santé en dehors du travail ?

// Satisfaction et évolution de carrière :
//  Êtes - vous satisfait(e) de votre travail actuel ?
//  Ressentez-vous de la motivation pour accomplir vos tâches quotidiennes ?
//  Envisagez-vous la possibilité de faire évoluer votre carrière ?
//  Dans quel(s) métier(s) pouvez-vous envisagez une reconversion ?