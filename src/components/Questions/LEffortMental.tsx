// components/QuestionForm.tsx
'use client'
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
import { LEffortMental } from "@/types/Form.jsx"

type LEffortMentalProps = {
    onNextStep: (response?: LEffortMental) => void;
    onPreviousStep: () => void;
};

export const QuestionLEffortMental: React.FC<LEffortMentalProps> = ({ onNextStep, onPreviousStep }) => {
    const formSchema = z.object({
        espaceDeTravail: z.string(),
        expositionADesRisques: z.string(),
        expositionADesVibrations: z.string(),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            espaceDeTravail: "",
            expositionADesRisques: "",
            expositionADesVibrations: "",
        },
    })

    // 2. Define a submit handler.
    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values);
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
                                    name="espaceDeTravail"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col gap-4">
                                            <FormLabel>Votre espace de travail est-il inadapté ? (restreint, encombré... )</FormLabel>
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
                                    name="expositionADesRisques"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col gap-4">
                                            <FormLabel>Etes-vous exposer à des produits (toxiques, poussières) ?</FormLabel>
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
                                    name="expositionADesVibrations"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col gap-4">
                                            <FormLabel>Etes-vous exposer à des vibrations du corps entier (conduite) ou membres supérieurs (outils vibrants) ?</FormLabel>
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

