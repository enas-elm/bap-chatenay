'use client'
import { useState, useEffect } from "react";
import { Result1 } from "./Questions/Result1";
import { Result2 } from "./Questions/Result2";

type ResultProps = {
    getResponse: object; // Assurez-vous que c'est le bon type
};

export const Resultat = ({ getResponse }: ResultProps) => {
    const [show, setShow] = useState(false);

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
