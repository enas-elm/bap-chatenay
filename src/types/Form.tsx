export type InformationPersonnelles = {
    gender: "" | "Homme" | "Femme" | "Autre";
    nom: string;
    prenom: string;
    phone: string;
    email: string | undefined;
    birthdate: string;
    job: string;
    hasDisabilityOrIllness?: "" | "true" | "false";
    disabilityOrIllnessDetails?: string;
};

export type HorairesDeTravail = {
    moyenDeTransport?: string
    tempsTrajet?: string
    horairesIrreguliers?: string
    heuresSupplementaires?: string
    heuresTravailSemaine?: string
};

export type LEnvironnement = {
    espaceDeTravailInadapte: string
    expositionProduitsToxiques: string
    expositionVibrations: string
};

export type LEffortPhysique = {
    positionStatique: string
    expositionRisquesPhysiques: string
    deplacementsFrequents: string
    travailRepetitif: string
    problemesPhysiquesLiesAuTravail: string
};

export type LEffortMental = {
    forteConcentrationRequise: string
    fatigueMentaleOuStress: string
    impactNegatifSurViePersonnelle: string
};

export type SatisfactionEtEvolutionDeCarriere = {
    satisfactionTravail: string
    motivationPourTachesQuotidiennes: string
    possibiliteEvolutionCarriere: string
    optionsReconversion: string
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