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
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"


type HorairesDeTravailProps = {
    onNextStep: (response?: HorairesDeTravail) => void;
    onPreviousStep: () => void;
};

const transportOptions = ["Voiture", "Transport en commun", "Vélo", "Marche", "Autre"];

export const QuestionHorairesDeTravail: React.FC<HorairesDeTravailProps> = ({ onNextStep, onPreviousStep }) => {
    const formSchema = z.object({
        moyenDeTransport: z.string().regex(/Voiture|Transport en commun|Vélo|Marche|Autre/, { message: "Veuillez indiquer votre moyen de transport." }),
        // le regex doit prendre en compte cest format la 1h, 1min, 1s et 1h30, 1min30, 1s30 ou 1h30min, 1h30s, 1min30s ect
        tempsTrajet: z.string().regex(/^[0-9]{1,2}h[0-9]{1,2}min$|^[0-9]{1,2}h$|^[0-9]{1,2}min$|^[0-9]{1,2}s$|^[0-9]{1,2}h[0-9]{1,2}min[0-9]{1,2}s$|^[0-9]{1,2}h[0-9]{1,2}s$|^[0-9]{1,2}min[0-9]{1,2}s$/, { message: "Veuillez indiquer votre temps de trajet." }),
        horairesIrreguliers: z.string().regex(/true|false/, { message: "Veuillez indiquer si vos horaires sont irréguliers oui ou non" }),
        heuresSupplementaires: z.string().regex(/true|false/, { message: "Veuillez indiquer si vous faites des heures supplémentaires oui ou non" }),
        heuresTravailSemaine: z.string()
            .regex(/^[0-9]{1,2}h$|^[0-9]{1,2}min$|^[0-9]{1,2}s$|^[0-9]{1,2}h[0-9]{1,2}min$|^[0-9]{1,2}h[0-9]{1,2}s$|^[0-9]{1,2}min[0-9]{1,2}s$/, { message: "Veuillez indiquer votre temps de trajet." }),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            moyenDeTransport: "",
            tempsTrajet: "",
            horairesIrreguliers: "",
            heuresSupplementaires: "",
            heuresTravailSemaine: "",
        },
    })

    // 2. Define a submit handler.
    const onSubmit = (values: z.infer<typeof formSchema>) => {
        onNextStep(values);
    };

    return (
        <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col gap-2 h-full">
                <h3 className="text-3xl font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                    Votre Horaires de Travail Contribuent-ils à l'Usure Professionnelle ?
                </h3>
                <p>
                    Découvrez l'impact de vos horaires sur votre bien-être professionnel.
                </p>

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
                                            <FormControl>
                                                <ToggleGroup type="single" onValueChange={field.onChange} defaultValue={field.value} size={"lg"} variant={"outline"}>
                                                    <ToggleGroupItem value="true" className="hover:bg-primary hover:text-white">Oui</ToggleGroupItem>
                                                    <ToggleGroupItem value="false" className="hover:bg-primary hover:text-white">Non</ToggleGroupItem>
                                                </ToggleGroup>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="form-item w-1/2">
                                <FormField
                                    control={form.control}
                                    name="heuresSupplementaires"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Vous arrive-t-il fréquemment de faire des heures supplémentaires  ?</FormLabel>
                                            <FormControl>
                                                <ToggleGroup type="single" onValueChange={field.onChange} defaultValue={field.value} size={"lg"} variant={"outline"}>
                                                    <ToggleGroupItem value="true" className="hover:bg-primary hover:text-white">Oui</ToggleGroupItem>
                                                    <ToggleGroupItem value="false" className="hover:bg-primary hover:text-white">Non</ToggleGroupItem>
                                                </ToggleGroup>
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
