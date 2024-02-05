'use client'
import { useState, useEffect, use } from "react";
import { Result1 } from "./Questions/Result1";
import { Result2 } from "./Questions/Result2";
import * as api from "../lib/apiRequest/formRequest";
import { ResponseType } from "@/types/Form";
import { calculerScoreUsure } from "@/lib/scoreCalculators";

type ResultProps = {
    dataFormResponse: ResponseType;
};

export const Resultat = ({ dataFormResponse }: ResultProps) => {
    const [showResult1, setShowResult1] = useState(false);
    const [priorite, setPriorite] = useState('');

    useEffect(() => {
        const score = calculerScoreUsure(dataFormResponse);
        const seuilUsure = 10;
        setShowResult1(score.score >= seuilUsure);
        setPriorite(score.priorite);

        const apiCalls = async () => {
            const email = dataFormResponse?.InformationPersonnelles?.email;
            if (!email) {
                console.error('Aucun email fourni dans dataFormResponse');
                return;
            }

            const userExists = await api.checkIfUserExistsByEmail(email);

            if (userExists === false) {
                await api.createUser(dataFormResponse);
            }

            const user = await api.getUserByEmail(email);
            if (!user || !user.body) {
                console.error('Impossible de récupérer l\'ID de l\'utilisateur');
                return;
            }


            // get first element from the user.body and get the id from it
            const { id } = user.body[0];
            const linkUserToResponse = await api.associateResponseToUser({ userId: id });
            if (!linkUserToResponse || !linkUserToResponse.body) {
                console.error('Impossible de lier l\'utilisateur à la réponse');
                return;
            }

            const responseId = linkUserToResponse.body.body.id;
            const dataAnswers = {
                formResponseId: responseId,
                HorairesDeTravail: dataFormResponse.HorairesDeTravail,
                InformationPersonnelles: dataFormResponse.InformationPersonnelles,
                LEnvironnement: dataFormResponse.LEnvironnement,
                LEffortPhysique: dataFormResponse.LEffortPhysique,
                LEffortMental: dataFormResponse.LEffortMental,
                SatisfactionEtEvolutionDeCarriere: dataFormResponse.SatisfactionEtEvolutionDeCarriere,
            }
            await api.createAnswers(dataAnswers);

            const dataScore = {
                formResponseId: responseId,
                value: score.priorite,
                label: score.priorite,
            }
            await api.createPriority(dataScore);
        };

        apiCalls().catch(error => {
            console.error('Une erreur est survenue lors des appels API:', error);
        });

    }, []);

    return (
        <div className="flex flex-col justify-between h-full">
            {showResult1 ? <Result1 /> : <Result2 />}
        </div>
    );
};

