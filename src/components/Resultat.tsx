'use client'
import { useState, useEffect } from "react";
import { Result1 } from "./Questions/Result1";
import { Result2 } from "./Questions/Result2";
import { saveUserResponse } from "@api/prisma/saveUserResponse";

type ResultProps = {
    getResponse: object; // Assurez-vous que c'est le bon type
};

export const Resultat = ({ getResponse }: ResultProps) => {
    const [show, setShow] = useState(false);
    const [response, setResponse] = useState({});

    // Enregistrer la réponse de l'utilisateur dans la base de données
    useEffect(() => {
        saveUserResponse(response);
    }, [response]);

    // Mettre à jour 'response' en fonction de 'getResponse'

    useEffect(() => {
        // Mettre à jour 'show' en fonction de 'getResponse'
        // Exemple : setShow(getResponse.shouldShowResult1);
    }, [getResponse]);

    return (
        <div className="flex flex-col justify-between h-full">
            {show ? <Result1 /> : <Result2 />}
        </div>
    );
};
