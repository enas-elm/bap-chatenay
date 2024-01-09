export type InformationPersonnelles = {
    gender: string;
    nom: string;
    prenom: string;
    phone: string;
    email: string;
    birthdate: string;
    job: string;
};

export type HorairesDeTravail = {
    moyenDeTransport: string;
    tempsTrajet: string | number;
    horairesIrreguliers: string;
    heuresSupplementaires: string;
    heuresTravailSemaine: string | number;
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