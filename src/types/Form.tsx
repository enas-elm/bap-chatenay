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
    // ... structure de vos champs pour HorairesDeTravail
};
export type LEffortMental = {
    espaceDeTravail: string;
    expositionADesRisques: string;
    expositionADesVibrations: string;
};
export type SatisfactionEtEvolutionDeCarriere = {
    // ... structure de vos champs pour HorairesDeTravail
};
export type Resultat = {
    // ... structure de vos champs pour HorairesDeTravail
};
export type ResponseType = {
    InformationPersonnelles?: InformationPersonnelles;
    HorairesDeTravail?: HorairesDeTravail;
    LEnvironnement?: LEnvironnement;
    LEffortMental?: LEffortMental;
    SatisfactionEtEvolutionDeCarriere?: SatisfactionEtEvolutionDeCarriere;
    Resultat?: Resultat;
};