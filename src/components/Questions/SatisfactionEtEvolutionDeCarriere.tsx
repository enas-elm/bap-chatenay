// components/QuestionForm.tsx
'use client'
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

import { SatisfactionEtEvolutionDeCarriere } from "@/types/Form"

type SatisfactionEtEvolutionDeCarriereProps = {
    onNextStep: (response?: SatisfactionEtEvolutionDeCarriere) => void;
    onPreviousStep: () => void;
};

export const QuestionSatisfactionEtEvolutionDeCarriere: React.FC<SatisfactionEtEvolutionDeCarriereProps> = ({ onNextStep, onPreviousStep }) => {
    const formSchema = z.object({
        satisfactionTravail: z.string(),
        motivationPourTachesQuotidiennes: z.string(),
        possibiliteEvolutionCarriere: z.string(),
        optionsReconversion: z.string(),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            satisfactionTravail: "",
            motivationPourTachesQuotidiennes: "",
            possibiliteEvolutionCarriere: "",
            optionsReconversion: "",
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
                    Votre Satisfaction et Évolution Professionnelle : Clés de votre Bien-être au Travail
                </h3>

                <p>
                    Évaluez le degré de satisfaction dans votre carrière actuelle et les perspectives d'évolution.
                </p>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 pt-28 flex flex-col justify-between h-full">

                        <div className="from-wrapper flex gap-11 w-full">
                            <div className="form-item w-1/2">
                                <FormField
                                    control={form.control}
                                    name="satisfactionTravail"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col gap-4">
                                            <FormLabel>VÊtes-vous satisfait(e) de votre travail actuel ?</FormLabel>
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
                                    name="motivationPourTachesQuotidiennes"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col gap-4">
                                            <FormLabel>Ressentez-vous de la motivation pour accomplir vos tâches quotidiennes ?</FormLabel>
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
                                    name="possibiliteEvolutionCarriere"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col gap-4">
                                            <FormLabel>Envisagez-vous la possibilité de faire évoluer votre carrière ?</FormLabel>
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
                                    name="optionsReconversion"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col gap-4">
                                            <FormLabel>Dans quel(s) métier(s) pouvez-vous envisagez une reconversion ?</FormLabel>
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