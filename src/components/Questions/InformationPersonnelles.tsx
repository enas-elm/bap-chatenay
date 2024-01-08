'use client'

import Link from "next/link";
import { useState } from "react";

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




type InformationPersonnellesProps = {
    onNextStep: (response: ResponseType) => void;
};

export const QuestionInformationPersonnelles: React.FC<InformationPersonnellesProps> = ({ onNextStep }) => {
    const [response, setResponse] = useState<ResponseType>('default');

    const handleSubmit = () => {
        onNextStep(response);
    };

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
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }



    return (
        <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col gap-2">
                <h3 className="text-3xl font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Etes-vous en usure professionnel ?</h3>
                <p>Répondez à ce formulaire</p>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 pt-28">
                        <div className="flex gap-11">
                            <div className=" w-1/2">
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

                            <div className="w-1/2">
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

                        <div className="flex gap-11">
                            <div className=" w-1/2">
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

                        <div className="w-1/2">
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
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
            </div>

            <div className="flex justify-between w-full pb-28">
                <Link href={"/"}>
                    <Button variant={"secondary"}>Précédent</Button>
                </Link>
                <Button onClick={handleSubmit}>Commencer</Button>
            </div>
        </div >
    );
}