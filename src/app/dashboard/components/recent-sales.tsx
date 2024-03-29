'use client'

import React, { useEffect, useState, useCallback } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@ui/avatar';
import { Button } from '@ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@ui/dialog';
import { DataTable } from './data-tables/Modal-data-table';
import { EffortMentalcolumns } from './colums/EffortMentalcolumns';
import { EffortPhysiquecolumns } from './colums/EffortPhysiquecolumns';
import { Environnementcolumns } from './colums/Environnementcolumns';
import { HorairesDeTravailcolumns } from './colums/HorairesDeTravailcolumns';
import { Satisfactioncolumns } from './colums/Satisfactioncolumns';
import * as api from "@/lib/apiRequest/formRequest";
import { HorairesDeTravail, LEnvironnement, LEffortPhysique, LEffortMental, SatisfactionEtEvolutionDeCarriere } from '@/types/Form';

interface ResponseType {
    id: number;
    email: string;
    nom: string;
    prenom: string;
}

interface AnswersType {
    effortMental: LEffortMental[];
    effortPhysique: LEffortPhysique[];
    environnement: LEnvironnement[];
    HorairesDeTravail: HorairesDeTravail[];
    SatisfactionEtEvolutionDeCarriere: SatisfactionEtEvolutionDeCarriere[];
}

export function RecentSales() {
    const [latestResponses, setLatestResponses] = useState<ResponseType[]>([]);
    const [answers, setAnswers] = useState<AnswersType | null>(null);

    useEffect(() => {
        fetchLatestResponses();
    }, []);

    const fetchLatestResponses = useCallback(async () => {
        const responses = await api.getLast5SubmittedForms();
        //@ts-ignore
        setLatestResponses(responses.body)
    }, []);

    const festAnswers = useCallback(async (id: number) => {
        const responses = await api.getFormResponseByUserId(`${id}`);
        const formResponceId = responses.body[0].id;
        const fetchedAnswers = await api.getAnswers(`${formResponceId}`);
        setAnswers(fetchedAnswers.body);
    }, []);

    const renderResponseItem = useCallback((response: ResponseType) => {
        const { email, nom, prenom } = response;
        const initials = `${prenom.charAt(0)}${nom.charAt(0)}`;

        const EffortMentalTasks = answers?.effortMental?.length
            ? answers.effortMental.map(item => (
                {
                    fatigueMentaleOuStress: item.fatigueMentaleOuStress,
                    forteConcentrationRequise: item.forteConcentrationRequise,
                    impactNegatifSurViePersonnelle: item.impactNegatifSurViePersonnelle,
                }))
            : [
                {
                    fatigueMentaleOuStress: "true",
                    forteConcentrationRequise: "true",
                    impactNegatifSurViePersonnelle: "true",
                },
            ];

        const EffortPhysiqueTasks = answers?.effortPhysique?.length
            ? answers.effortPhysique.map(item => (
                {
                    deplacementsFrequents: item.deplacementsFrequents,
                    expositionRisquesPhysiques: item.expositionRisquesPhysiques,
                    positionStatique: item.positionStatique,
                    problemesPhysiquesLiesAuTravail: item.problemesPhysiquesLiesAuTravail,
                    travailRepetitif: item.travailRepetitif,
                }))
            : [
                {
                    deplacementsFrequents: "true",
                    expositionRisquesPhysiques: "true",
                    positionStatique: "true",
                    problemesPhysiquesLiesAuTravail: "true",
                    travailRepetitif: "true",
                },
            ];

        const EnvironnementTasks = answers?.environnement?.length
            ? answers.environnement.map(item => (
                {
                    espaceDeTravailInadapte: item.espaceDeTravailInadapte,
                    expositionProduitsToxiques: item.expositionProduitsToxiques,
                    expositionVibrations: item.expositionVibrations,
                }))
            : [
                {
                    espaceDeTravailInadapte: "true",
                    expositionProduitsToxiques: "true",
                    expositionVibrations: "true",
                },
            ];

        const HorairesDeTravailTasks = answers?.HorairesDeTravail?.length
            ? answers.HorairesDeTravail.map(item => (
                {
                    heuresSupplementaires: item.heuresSupplementaires,
                    heuresTravailSemaine: item.heuresTravailSemaine,
                    horairesIrreguliers: item.horairesIrreguliers,
                    moyenDeTransport: item.moyenDeTransport,
                    tempsTrajet: item.tempsTrajet,
                }))
            : [
                {
                    heuresSupplementaires: "true",
                    heuresTravailSemaine: "35h",
                    horairesIrreguliers: "true",
                    moyenDeTransport: "true",
                    tempsTrajet: "3h",
                },
            ];

        const SatisfactionTasks = answers?.SatisfactionEtEvolutionDeCarriere?.length
            ? answers.SatisfactionEtEvolutionDeCarriere.map(item => (
                {
                    motivationPourTachesQuotidiennes: item.motivationPourTachesQuotidiennes,
                    optionsReconversion: item.optionsReconversion,
                    possibiliteEvolutionCarriere: item.possibiliteEvolutionCarriere,
                    satisfactionTravail: item.satisfactionTravail,
                }))
            : [
                {
                    motivationPourTachesQuotidiennes: "true",
                    optionsReconversion: "",
                    possibiliteEvolutionCarriere: "true",
                    satisfactionTravail: "true",
                },
            ];


        return (
            <div className="flex items-center" key={response.id}>
                <Avatar className="h-9 w-9">
                    <AvatarImage src="" alt="Avatar" />
                    <AvatarFallback>{initials}</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">{`${prenom} ${nom}`}</p>
                    <p className="text-sm text-muted-foreground">{email}</p>
                </div>

                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="ml-auto font-medium" onClick={() => festAnswers(response.id)}>
                            Voir le formulaire
                        </Button>
                    </DialogTrigger>
                    <DialogContent style={{ width: "75%", maxWidth: "none" }}>
                        <DialogHeader>
                            <DialogTitle>Consulter le dernier formulaire de {`${prenom} ${nom}`}</DialogTitle>
                            <DialogDescription>
                                {/* Cree un text qui indique a l'utilisateur que la prioriter de cette utilisateur est : et que toute les information du formulaire sont ci dessous  */}
                                Vous pouvez consulter les response de {`${prenom} ${nom}`} ci dessous :
                            </DialogDescription>
                        </DialogHeader>
                        <div className="flex flex-col gap-y-6">
                            <>
                                <p className="pb-3">Effor Mentale</p>
                                <DataTable
                                    columns={EffortMentalcolumns}
                                    data={EffortMentalTasks.map(item => (
                                        {
                                            ...item,
                                            forteConcentrationRequise: item.forteConcentrationRequise === "true" ? "Oui" : "Non",
                                            fatigueMentaleOuStress: item.fatigueMentaleOuStress === "true" ? "Oui" : "Non",
                                            impactNegatifSurViePersonnelle: item.impactNegatifSurViePersonnelle === "true" ? "Oui" : "Non",
                                        }))}
                                />
                            </>
                            <>
                                <p className="pb-3">Effort Physique</p>
                                <DataTable columns={EffortPhysiquecolumns} data={EffortPhysiqueTasks.map(item => (
                                    {
                                        ...item,
                                        deplacementsFrequents: item.deplacementsFrequents === "true" ? "Oui" : "Non",
                                        expositionRisquesPhysiques: item.expositionRisquesPhysiques === "true" ? "Oui" : "Non",
                                        positionStatique: item.positionStatique === "true" ? "Oui" : "Non",
                                        problemesPhysiquesLiesAuTravail: item.problemesPhysiquesLiesAuTravail === "true" ? "Oui" : "Non",
                                        travailRepetitif: item.travailRepetitif === "true" ? "Oui" : "Non",
                                    }))} />
                            </>

                            <>
                                <p className="pb-3">Environnement</p>
                                {/* @ts-ignore */}
                                <DataTable columns={Environnementcolumns} data={EnvironnementTasks.map(item => (
                                    {
                                        ...item,
                                        espaceDeTravailInadapte: item.espaceDeTravailInadapte === "true" ? "Oui" : "Non",
                                        expositionProduitsToxiques: item.expositionProduitsToxiques === "true" ? "Oui" : "Non",
                                        expositionVibrations: item.expositionVibrations === "true" ? "Oui" : "Non",
                                    }))} />
                            </>

                            <>
                                <p className="pb-3">Horaires de travail</p>
                                {/* @ts-ignore */}
                                <DataTable columns={HorairesDeTravailcolumns} data={HorairesDeTravailTasks.map(item => (
                                    {
                                        ...item,
                                        heuresSupplementaires: item.heuresSupplementaires === "true" ? "Oui" : "Non",
                                        heuresTravailSemaine: item.heuresTravailSemaine,
                                        horairesIrreguliers: item.horairesIrreguliers === "true" ? "Oui" : "Non",
                                        moyenDeTransport: item.moyenDeTransport,
                                        tempsTrajet: item.tempsTrajet,
                                    }))} />
                            </>

                            <>
                                <p className="pb-3">Satisfaction</p>
                                {/* @ts-ignore */}
                                <DataTable columns={Satisfactioncolumns} data={SatisfactionTasks.map(item => (
                                    {
                                        ...item,
                                        motivationPourTachesQuotidiennes: item.motivationPourTachesQuotidiennes === "true" ? "Oui" : "Non",
                                        optionsReconversion: item.optionsReconversion,
                                        possibiliteEvolutionCarriere: item.possibiliteEvolutionCarriere === "true" ? "Oui" : "Non",
                                        satisfactionTravail: item.satisfactionTravail === "true" ? "Oui" : "Non",
                                    }))} />
                            </>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }, [answers, festAnswers]);


    return (
        <div className="space-y-8">
            rr
        </div>
    );
}