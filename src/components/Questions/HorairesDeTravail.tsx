// components/QuestionForm.tsx
'use client'

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { HorairesDeTravail } from "@/types/Form";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

import Link from "next/link"



type HorairesDeTravailProps = {
    onNextStep: (response?: HorairesDeTravail) => void;
    onPreviousStep: () => void;
};

const transportOptions = ["Voiture", "Transport en commun", "Vélo", "Marche", "Autre"];

export const QuestionHorairesDeTravail: React.FC<HorairesDeTravailProps> = ({ onNextStep, onPreviousStep }) => {
    const formSchema = z.object({
        moyenDeTransport: z.enum(["Voiture", "Transport en commun", "Vélo", "Marche", "Autre", ""]),
        horairesIrreguliers: z.boolean(),
        tempsTrajet: z.union([z.string(), z.number().positive()]),
        heuresSupplementaires: z.boolean(),
        heuresTravailSemaine: z.number().min(0).max(168)
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            moyenDeTransport: "",
            horairesIrreguliers: false,
            tempsTrajet: "",
            heuresSupplementaires: false,
            heuresTravailSemaine: 0,
        },
    })

    // 2. Define a submit handler.
    const onSubmit = (values: z.infer<typeof formSchema>) => {
        onNextStep(values);
    };

    return (
        <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col gap-2 h-full">
                <h3 className="text-3xl font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Etes-vous en usure professionnel ?</h3>
                <p>Répondez à ce formulaire</p>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 pt-28 flex flex-col justify-between h-full">

                        <div className="from-wrapper flex gap-11 w-full">
                            <div className="form-item w-1/2">
                                <FormField
                                    control={form.control}
                                    name="moyenDeTransport"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col gap-4">
                                            <FormLabel>Comment vous rendez-vous au travail ?</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Sélectionner votre mode de déplacement" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {transportOptions.map((option) => (
                                                        <SelectItem key={option} value={option}>
                                                            {option}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="form-item w-1/2">
                                <FormField
                                    control={form.control}
                                    name="tempsTrajet"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col gap-4">
                                            <FormLabel>Combien de temps vous prends le trajet pour le travail ?</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Indiquer votre temps de trajet" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>

                        <div className="from-wrapper flex gap-11 w-full">
                            <div className="form-item w-1/2">
                                <FormField
                                    control={form.control}
                                    name="horairesIrreguliers"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col gap-4">
                                            <FormLabel>Vos horaires de travail sont-elles irrégulières ?</FormLabel>
                                            <ToggleGroup size={"lg"} type="single" variant='outline'>
                                                <ToggleGroupItem
                                                    value="true"
                                                    aria-label="Oui"
                                                >
                                                    Oui
                                                </ToggleGroupItem>
                                                <ToggleGroupItem
                                                    value="false"
                                                    aria-label="Non"
                                                >
                                                    Non
                                                </ToggleGroupItem>
                                            </ToggleGroup>

                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="form-item w-1/2">
                                <FormField
                                    control={form.control}
                                    name="moyenDeTransport"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Vous arrive-t-il fréquemment de faire des heures supplémentaires  ?</FormLabel>
                                            <ToggleGroup size={"lg"} type="single" variant='outline'>
                                                <ToggleGroupItem
                                                    value="true"
                                                    aria-label="Oui"
                                                >
                                                    Oui
                                                </ToggleGroupItem>
                                                <ToggleGroupItem
                                                    value="false"
                                                    aria-label="Non"
                                                >
                                                    Non
                                                </ToggleGroupItem>
                                            </ToggleGroup>

                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>

                        <div className="from-wrapper flex gap-11 w-full">
                            <div className="form-item w-1/2">
                                <FormField
                                    control={form.control}
                                    name="heuresTravailSemaine"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Combien d’heures travaillez-vous en moyenne dans la semaine ?</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Indiquer votre taux horaire" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>

                        <div className="form-actions flex justify-between w-full pb-28">
                            <Button variant={"secondary"} onClick={onPreviousStep}>Précédent</Button>
                            <Button type="submit" >Suivant</Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div >
    );
};
