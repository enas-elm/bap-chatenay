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

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"



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
    const initials = `${prenom.charAt(0)}${nom.charAt(0)}`;

    const renderAnswers = (answers: any) => {
      // Création d'un tableau de clés et de valeurs à partir de l'objet answers
      const answerEntries = Object.entries(answers);

      return (
        <>

          <Table>
            <TableHead>
              <TableRow className="flex">
                {answerEntries.map(([key, _]) => (
                  <TableHeader className="w-[100px]" key={key}>{key}</TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                {answerEntries.map(([_, value], index) => {
                  // Supposons que chaque catégorie contient un tableau, prenez le premier élément
                  const firstItem = value[0];
                  return (
                    <TableCell key={index}>
                      {/* Affichez les détails souhaités de chaque première réponse */}
                      {firstItem && Object.values(firstItem).join(", ")}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableBody>
          </Table>
        </>
      );
    };



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
          <DialogContent className="">
            <DialogHeader>
              <DialogTitle>Consultation rapide des response</DialogTitle>
              <DialogDescription>
                Vous retrouverez tout les element ici
              </DialogDescription>
            </DialogHeader>
            <div className="w-full">
              {renderAnswers(answers)}
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