// components/QuestionForm.tsx
'use client'
import { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

type HorairesDeTravailProps = {
    onNextStep: () => void;
    onPreviousStep: () => void;
};

export const QuestionHorairesDeTravail: React.FC<HorairesDeTravailProps> = ({ onNextStep }) => {
    const handleStart = () => {
        onNextStep();
    };

    return (
        <div className="flex flex-col justify-between h-full">
            <div className="flex justify-between w-full pb-28">
                <Link href={"/"}>
                    <Button variant={"secondary"}>Revenir à l’accueil</Button>
                </Link>
                <Button onClick={handleStart}>Commencer</Button>
            </div>
        </div >
    );
};