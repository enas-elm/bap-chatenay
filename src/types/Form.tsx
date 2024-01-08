export type InformationPersonnelles = {
    nom: string;
    prenom: string;
    phone: string;
    email: string;
    job: string;
};

export type HorairesDeTravail = {
    // ... structure de vos champs pour HorairesDeTravail
};
export type LEnvironnement = {
    // ... structure de vos champs pour HorairesDeTravail
};
export type LEffortMental = {
    // ... structure de vos champs pour HorairesDeTravail
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