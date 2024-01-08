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
import { Input } from "@/components/ui/input"
import { InformationPersonnelles } from "@/types/Form";


type InformationPersonnellesProps = {
    onNextStep: (response?: InformationPersonnelles) => void;
    onPreviousStep: () => void;
};


export const QuestionInformationPersonnelles: React.FC<InformationPersonnellesProps> = ({ onNextStep, onPreviousStep }) => {
    const formSchema = z.object({
        nom: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères." }),
        prenom: z.string().min(2, { message: "Le prénom doit contenir au moins 2 caractères." }),
        phone: z.string().min(10, { message: "Le numéro de téléphone doit contenir au moins 10 chiffres." })
            .regex(/^\+?[0-9]+$/, { message: "Le format du numéro de téléphone est invalide." }),
        email: z.string().email({ message: "L'email n'est pas valide." }),
        job: z.string().min(2, { message: "La profession doit contenir au moins 2 caractères." }),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nom: "",
            prenom: "",
            phone: "",
            email: "",
            job: "",
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
                        <div className="from-container flex flex-col gap-10">
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
                                                <FormLabel>Téléphone</FormLabel>
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
                                                <FormLabel>Email</FormLabel>
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
                                        name="job"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Profession</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Profession" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
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
}