import Image from 'next/image'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
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
                    <h2 className='text-3xl font-bold'>Les Avantages Clés</h2>
                    <p className='mt-2 text-zinc-700'>Découvrez comment notre approche peut bénéficier à votre entreprise</p>
                </div>
                <div className='flex w-full items-center justify-center mt-9 gap-10'>
                    {/* Carte 1 */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Réduction de l'Usure</CardTitle>
                            <CardDescription>80% de réduction en moyenne</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Amélioration significative de la gestion des ressources humaines.</p>
                        </CardContent>
                        <CardFooter>
                            <p>Impact direct sur le bien-être des employés.</p>
                        </CardFooter>
                    </Card>

                    {/* Carte 2 */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Productivité Accrue</CardTitle>
                            <CardDescription>Augmentation de 50%</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Optimisation des performances et de l'efficacité.</p>
                        </CardContent>
                        <CardFooter>
                            <p>Meilleure allocation des ressources.</p>
                        </CardFooter>
                    </Card>

                    {/* Carte 3 */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Coûts Réduits</CardTitle>
                            <CardDescription>Diminution de 30%</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Réduction des coûts liés au turnover et à l'absentéisme.</p>
                        </CardContent>
                        <CardFooter>
                            <p>Économies substantielles pour l'entreprise.</p>
                        </CardFooter>
                    </Card>

                    {/* Carte 4 */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Satisfaction Client</CardTitle>
                            <CardDescription>95% de clients satisfaits</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Amélioration notable de l'environnement de travail.</p>
                        </CardContent>
                        <CardFooter>
                            <p>Résultats positifs et concrets.</p>
                        </CardFooter>
                    </Card>

                    {/* Carte 5 */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Intégration Rapide</CardTitle>
                            <CardDescription>2 fois plus rapide</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Accélération du processus d'accueil des nouveaux employés.</p>
                        </CardContent>
                        <CardFooter>
                            <p>Facilitation de l'adaptation et de la montée en compétence.</p>
                        </CardFooter>
                    </Card>

                </div>
            </div>

            <section className='my-12 px-20'>
                <div className='text-center'>
                    <h2 className='text-3xl font-bold'>Ce Que Disent Nos Clients</h2>
                    <p className='mt-2 text-zinc-700'>Témoignages de satisfaction...</p>
                </div>
                <div className='flex justify-center mt-5 gap-4'>

                    {/* Témoignage 1 */}
                    <div className='testimonial-card'>
                        <p className='testimonial-text'>
                            "Depuis que j'utilise ce service, la productivité de mon équipe a nettement augmenté. Nous sommes mieux équipés pour gérer l'usure professionnelle."
                        </p>
                        <div className='testimonial-author'>
                            <p>Jean Dupont, Directeur RH, Entreprise XYZ</p>
                        </div>
                    </div>

                    {/* Témoignage 2 */}
                    <div className='testimonial-card'>
                        <p className='testimonial-text'>
                            "Un outil incroyablement utile pour mesurer et améliorer le bien-être au travail. Hautement recommandé !"
                        </p>
                        <div className='testimonial-author'>
                            <p>Marie Lefebvre, Responsable du bien-être, ABC Corp</p>
                        </div>
                    </div>

                    {/* Témoignage 3 */}
                    <div className='testimonial-card'>
                        <p className='testimonial-text'>
                            "J'ai été impressionné par la précision de l'analyse et les conseils personnalisés qui ont suivi. Un excellent service client !"
                        </p>
                        <div className='testimonial-author'>
                            <p>Marc Bernard, CEO, Tech Solutions</p>
                        </div>
                    </div>

                </div>
            </section>

            <section className='my-12 bg-gray-100 py-8'>
                <div className='text-center'>
                    <h2 className='text-3xl font-bold'>Questions Fréquentes</h2>
                </div>
                <div className='mt-5'>
                </div>
            </section>

            <section className='my-12 text-center'>
                <h2 className='text-3xl font-bold'>Prêt à Évaluer Votre Usure Professionnelle ?</h2>
                <Link
                    className={buttonVariants({
                        size: 'lg',
                        className: 'mt-5',
                    })}
                    href='/formulaire'
                >
                    Commencez Maintenant <ArrowRight className='ml-2 h-5 w-5' />
                </Link>
            </section>
        </>
    )
}
