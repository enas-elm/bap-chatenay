import Image from 'next/image'
import MaxWidthWrapper from '@/components/layouts/MaxWidthWrapper'
import Link from 'next/link.js'
import { buttonVariants } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function Home() {
    return (
        <>
            <Navbar />
            <MaxWidthWrapper className='mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center'>
                <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl'>
                    Évaluez votre <span className='text-primary'>Usure Professionnel</span> facilement.
                </h1>

                <p className='mt-5 max-w-prose text-zinc-700 sm:text-lg'>
                    Notre formulaire interactif est conçu pour vous aider à calculer précisément l'utilisation professionnelle de vos ressources. Commencez simplement en saisissant vos informations pour une analyse rapide et personnalisée.
                </p>

                <Link
                    className={buttonVariants({
                        size: 'lg',
                        className: 'mt-5',
                    })}
                    href='/formulaire'
                >
                    Commencer maintenant{' '}
                    <ArrowRight className='ml-2 h-5 w-5' />
                </Link>
            </MaxWidthWrapper>

            <div className='px-20 bg-gray-100 py-8'>
                <div className='text-center'>
                    <h2 className='text-3xl font-bold'>Découvrez les Bénéfices de Notre Service</h2>
                    <p className='mt-2 text-zinc-700'>Profitez d'une approche personnalisée et complète pour évaluer et gérer l'usure professionnelle</p>
                </div>
                <div className='flex w-full items-center justify-center mt-9 gap-10'>
                    {/* Carte 1 */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Évaluation Précise</CardTitle>
                            <CardDescription>Détection fiable de l'usure</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Utilisation d'un formulaire détaillé pour une évaluation précise de votre situation professionnelle.</p>
                        </CardContent>
                        <CardFooter>
                            <p>Identification rapide des risques d'usure professionnelle.</p>
                        </CardFooter>
                    </Card>

                    {/* Carte 2 */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Tableau de Bord Intuitif</CardTitle>
                            <CardDescription>Suivi et gestion facilités</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Accès à un tableau de bord pour suivre vos évaluations et consulter vos progrès.</p>
                        </CardContent>
                        <CardFooter>
                            <p>Gestion efficace de votre parcours vers le bien-être professionnel.</p>
                        </CardFooter>
                    </Card>

                    {/* Carte 3 */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Ressources Utiles</CardTitle>
                            <CardDescription>Accès à des informations clés</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Obtenez des ressources approfondies pour comprendre et combattre l'usure professionnelle.</p>
                        </CardContent>
                        <CardFooter>
                            <p>Guides, articles, et conseils pratiques à votre disposition.</p>
                        </CardFooter>
                    </Card>
                    {/* Carte 4 */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Support Spécialisé</CardTitle>
                            <CardDescription>Accompagnement personnalisé</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Accès direct à des experts pour obtenir des conseils et un soutien personnalisés.</p>
                        </CardContent>
                        <CardFooter>
                            <p>Solutions adaptées à votre situation spécifique.</p>
                        </CardFooter>
                    </Card>

                    {/* Carte 5 */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Prévention et Sensibilisation</CardTitle>
                            <CardDescription>Agir avant l'apparition du problème</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Apprenez à reconnaître et à prévenir l'usure professionnelle avant qu'elle ne s'aggrave.</p>
                        </CardContent>
                        <CardFooter>
                            <p>Des stratégies proactives pour maintenir une santé professionnelle durable.</p>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </>
    )
}
