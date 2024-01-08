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

// D'autres types pour d'autres étapes...

export type ResponseType = {
    InformationPersonnelles?: InformationPersonnelles;
    HorairesDeTravail?: HorairesDeTravail;
};