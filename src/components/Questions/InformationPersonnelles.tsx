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
import { Input } from "@/components/ui/input"
import { InformationPersonnelles } from "@/types/Form";


type InformationPersonnellesProps = {
    onNextStep: (response?: InformationPersonnelles) => void;
    onPreviousStep: () => void;
};


export const QuestionInformationPersonnelles: React.FC<InformationPersonnellesProps> = ({ onNextStep, onPreviousStep }) => {
    const formSchema = z.object({
        gender: z.enum(['Homme', 'Femme', 'Autre'], { required_error: "Veuillez sélectionner un genre." }),
        nom: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères." }),
        prenom: z.string().min(2, { message: "Le prénom doit contenir au moins 2 caractères." }),
        phone: z.string()
            .min(10, { message: "Le numéro de téléphone doit contenir au moins 10 chiffres." })
            .regex(/^(?:\+33|0)[1-9](\d{2}){4}$/, { message: "Le format du numéro de téléphone est invalide. Un format français est attendu." }),
        email: z.string()
            .email({ message: "L'adresse e-mail n'est pas valide." }),
        birthdate: z.string()
            .regex(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d{2}$/, { message: "La date de naissance doit être au format JJ/MM/AAAA." }),
        job: z.string().min(2, { message: "La profession doit contenir au moins 2 caractères." }),
        hasDisabilityOrIllness: z.enum(['true', 'false'], { required_error: "Ce champ est requis." }),
        disabilityOrIllnessDetails: z.string().optional(),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            gender: undefined,
            nom: "yy",
            prenom: "yy",
            phone: "0658292330",
            email: "yy@gmail.com",
            birthdate: "12/05/2001",
            job: "yy",
            hasDisabilityOrIllness: "false",
            disabilityOrIllnessDetails: "",
        },
    })

    const hasDisabilityOrIllness = form.watch('hasDisabilityOrIllness');

    // 2. Define a submit handler.
    const onSubmit = (values: z.infer<typeof formSchema>) => {
        onNextStep(values);
    };

    return (
        <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col gap-2 h-full">
                <h3 className="text-3xl font-bold text-gray-900 sm:text-3xl">
                    Comment vos informations personnelles influencent-elles votre bien-être au travail ?
                </h3>
                <p>
                    Évaluez le lien entre vos caractéristiques personnelles et votre expérience professionnelle.
                </p>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 pt-14 flex flex-col justify-between h-full">
                        <div className="from-container flex flex-col gap-10">

                            <div className="from-wrapper flex gap-11 w-full">
                                <div className="form-item w-1/2">
                                    <FormField
                                        control={form.control}
                                        name="gender"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-col gap-4">
                                                <FormLabel>Genre</FormLabel>
                                                <FormControl>
                                                    <ToggleGroup type="single" onValueChange={field.onChange} defaultValue={field.value} size={"lg"} className="flex gap-8" variant={"outline"}>
                                                        <ToggleGroupItem value="Homme" className="hover:bg-primary hover:text-white">Homme</ToggleGroupItem>
                                                        <ToggleGroupItem value="Femme" className="hover:bg-primary hover:text-white">Femme</ToggleGroupItem>
                                                        <ToggleGroupItem value="Autre" className="hover:bg-primary hover:text-white">Autre</ToggleGroupItem>
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
                                        name="nom"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Nom</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Doe" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className=" form-item w-1/2">
                                    <FormField
                                        control={form.control}
                                        name="prenom"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Prénom</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="John" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                            </div>

                            <div className=" from-wrapper flex gap-11 w-full">
                                <div className="form-item w-1/2">
                                    <FormField
                                        control={form.control}
                                        name="phone"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Votre Téléphone</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="06 12 34 56 78" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className=" w-1/2">
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Votre Email</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="JohnDoe@gmail.com" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>

                            <div className="form-wrapper flex gap-11 w-full">
                                <div className="form-item w-1/2">
                                    <FormField
                                        control={form.control}
                                        name="birthdate"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Votre date de naissance</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="DD/MM/YYYY" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className="form-item w-1/2">
                                    <FormField
                                        control={form.control}
                                        name="job"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Votre Profession</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Profession" {...field} />
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
                                        name="hasDisabilityOrIllness"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-col gap-4">
                                                <FormLabel>Avez-vous une maladie ou un handicap qu’il soit physique ou mental ?</FormLabel>
                                                <FormControl>
                                                    <ToggleGroup type="single" onValueChange={field.onChange} defaultValue={field.value} size={"lg"} className="flex gap-8" variant={"outline"}>
                                                        <ToggleGroupItem value="true" className="hover:bg-primary hover:text-white">Oui</ToggleGroupItem>
                                                        <ToggleGroupItem value="false" className="hover:bg-primary hover:text-white">Non</ToggleGroupItem>
                                                    </ToggleGroup>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                {hasDisabilityOrIllness === 'true' && (
                                    <div className="form-item w-1/2">
                                        <FormField
                                            control={form.control}
                                            name="disabilityOrIllnessDetails"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Si oui, lequel</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Indiquer votre handicap" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                )}

                            </div>
                        </div>

                        <div className="form-actions flex justify-between w-full">
                            <Button variant={"secondary"} onClick={onPreviousStep}>Précédent</Button>
                            <Button type="submit" >Suivant</Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div >
    );
}