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