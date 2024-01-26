'use client'

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@ui/avatar"
import { Button } from "@ui/button"
import { useEffect, useState } from "react"
import { getAnswers, getFormResponse, getSpecificFormResponse } from "@/components/apiRequest/formRequest"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { DataTable } from './Modal-data-table'
import { EffortMentalcolumns } from './EffortMentalcolumns'
import { EffortPhysiquecolumns } from './EffortPhysiquecolumns'
import { Environnementcolumns } from './Environnementcolumns'
import { HorairesDeTravailcolumns } from './HorairesDeTravailcolumns'
import { Satisfactioncolumns } from './Satisfactioncolumns'

export function RecentSales() {
  const [latestResponses, setLatestResponses] = useState([]);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    const fetchLatestResponses = async () => {
      const responses = await getFormResponse();
      setLatestResponses(responses.body.slice(-5).reverse());
    };
    fetchLatestResponses();
  }, []);

  const festAnswers = async (id: number) => {
    const responses = await getSpecificFormResponse(`${id}`);

    const formResponceId = responses.body[0].id;

    const answers = await getAnswers(`${formResponceId}`);
    setAnswers(answers.body)
  }

  const renderResponseItem = (response: any) => {
    const { email, nom, prenom } = response;
    console.log(response);
    const initials = `${prenom.charAt(0)}${nom.charAt(0)}`;

    const EffortMentalTasks = [
      {
        fatigueMentaleOuStress: "true",
        forteConcentrationRequise: "true",
        impactNegatifSurViePersonnelle: "true",
      },
    ]

    const EffortPhysiqueTasks = [
      {
        deplacementsFrequents: "true",
        expositionRisquesPhysiques: "true",
        positionStatique: "true",
        problemesPhysiquesLiesAuTravail: "true",
        travailRepetitif: "true",
      },
    ]

    const EnvironnementTasks = [
      {
        espaceDeTravailInadapte: "true",
        expositionProduitsToxiques: "true",
        expositionVibrations: "true",
      },
    ]

    const HorairesDeTravailTasks = [
      {
        heuresSupplementaires: "true",
        heuresTravailSemaine: "35h",
        horairesIrreguliers: "true",
        moyenDeTransport: "true",
        tempsTrajet: "2h",
      },
    ]

    const SatisfactionTasks = [
      {
        motivationPourTachesQuotidiennes: "true",
        optionsReconversion: "true",
        possibiliteEvolutionCarriere: "true",
        satisfactionTravail: "true",
      },
    ]

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
            <Button className="ml-auto font-medium" onClick={
              () => {
                festAnswers(response.id)
              }
            }>Voir le formulaire</Button>
          </DialogTrigger>
          <DialogContent style={{
            width: "100%",
            maxWidth: "none",
          }}>
            <DialogHeader>
              <DialogTitle>Consulter le dernier formulaire de {`${prenom} ${nom}`}</DialogTitle>
              <DialogDescription>
                Vous retrouverez tout les element ci-dessous :
              </DialogDescription>
            </DialogHeader>
            <div className="w-full flex flex-col gap-y-10">
              <div>
                <p className="pb-3">Horraire de travail</p>
                {/* @ts-ignore */}
                <DataTable columns={HorairesDeTravailcolumns} data={HorairesDeTravailTasks} />
              </div>

              <div>
                <p className="pb-3">Effort Physique</p>
                <DataTable columns={EffortPhysiquecolumns} data={EffortPhysiqueTasks} />
              </div>

              <div>
                <p className="pb-3">Satisfaction</p>
                {/* @ts-ignore */}
                <DataTable columns={Satisfactioncolumns} data={SatisfactionTasks} />
              </div>

              <div>
                <p className="pb-3">Effort Mental</p>
                <DataTable columns={EffortMentalcolumns} data={EffortMentalTasks} />
              </div>

              <div>
                <p className="pb-3">Environement</p>
                {/* @ts-ignore */}
                <DataTable columns={Environnementcolumns} data={EnvironnementTasks} />
              </div>


            </div>
          </DialogContent>
        </Dialog>

      </div>
    );
  };

  return (
    <div className="space-y-8">
      {latestResponses.map(renderResponseItem)}
    </div>
  );
}