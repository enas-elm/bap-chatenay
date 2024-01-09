'use client'
import { useState } from "react";
import { Button } from "../ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link";

export const Resultat = () => {
    return (
        <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col gap-2">
                <h3 className="text-3xl font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Votre évaluation indique des signes d'usure professionnelle</h3>

                <p className="pt-8">Vous semblez être dans un cas d’usure professionnel. Pour vous aider, nous vous recommandons vivement de prendre rendez-vous avec l'un de nos agents de mairie. Ils pourront vous fournir un soutien personnalisé, explorer des options de reconversion professionnelle et vous orienter vers des ressources adaptées à votre situation.
                    <br />
                    <br />
                    Contactez-nous pour planifier un rendez-vous ou pour obtenir des informations supplémentaires.
                </p>
            </div>

            <div>
                <Card>
                    <CardHeader>
                        <CardDescription>Prenez rendez-vous avec un de nos agent de mairie pour mieux vous guider dans votre démarche de reconversion</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                </Card>

            </div>

            <div className="flex justify-between w-full pb-28">
                <Link href={"/"}>
                    <Button variant={"secondary"}>Revenir à l’accueil</Button>
                </Link>
            </div>
        </div >
    );
};
