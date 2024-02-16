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
import Footer from '@/components/Footer'

export default function Home() {
    return (
        <>
            <Navbar />

            <MaxWidthWrapper className='mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center'>
                <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl'>
                    Découvrez l'Impact de votre Activité avec notre <span className='text-primary'>Diagnostic Professionnel</span>
                </h1>

                <p className='mt-5 max-w-prose text-zinc-700 sm:text-lg'>
                    Grâce à notre outil interactif, évaluez avec précision comment votre travail affecte vos ressources et votre bien-être. Entrez vos données pour obtenir instantanément des insights personnalisés et des solutions sur mesure.
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
                    <h2 className='text-3xl font-bold'>Découvrez les bénéfices de notre service</h2>
                    <p className='mt-2 text-zinc-700'>Profitez d'une approche personnalisée et complète pour évaluer et gérer l'usure professionnelle</p>
                </div>
                <div className='flex flex-wrap w-full items-stretch justify-center mt-9 gap-10'>
                    {/* Carte 1 */}
                    <Card className='w-1/4'>
                        <CardHeader>
                            <CardTitle>Diagnostic Approfondi</CardTitle>
                            <CardDescription>Analyse précise et fiable</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Notre questionnaire détaillé vous garantit une analyse approfondie de votre bien-être au travail.</p>
                        </CardContent>
                        <CardFooter>
                            <p>Détectez et agissez rapidement face aux signes d'épuisement professionnel.</p>
                        </CardFooter>
                    </Card>

                    {/* Carte 2 */}
                    <Card className='w-1/4'>
                        <CardHeader>
                            <CardTitle>Interface Intuitive</CardTitle>
                            <CardDescription>Gestion simplifiée de votre santé au travail</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Visualisez votre évolution et gérez votre profil professionnel grâce à un tableau de bord ergonomique.</p>
                        </CardContent>
                        <CardFooter>
                            <p>Optimisez votre parcours professionnel pour un équilibre durable.</p>
                        </CardFooter>
                    </Card>

                    {/* Carte 3 */}
                    <Card className='w-1/4'>
                        <CardHeader>
                            <CardTitle>Boîte à Outils Complète</CardTitle>
                            <CardDescription>Ressources enrichissantes à portée de main</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Explorez une vaste sélection de ressources pour combattre efficacement l'usure professionnelle.</p>
                        </CardContent>
                        <CardFooter>
                            <p>Accédez à des guides exclusifs, articles experts, et astuces pratiques.</p>
                        </CardFooter>
                    </Card>

                    {/* Carte 4 */}
                    <Card className='w-1/4'>
                        <CardHeader>
                            <CardTitle>Conseil Personnalisé</CardTitle>
                            <CardDescription>Soutien expert sur-mesure</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Bénéficiez de l'expertise de nos conseillers pour un accompagnement adapté à vos besoins.</p>
                        </CardContent>
                        <CardFooter>
                            <p>Des réponses concrètes et personnalisées pour chaque défi professionnel.</p>
                        </CardFooter>
                    </Card>

                    {/* Carte 5 */}
                    <Card className='w-1/4'>
                        <CardHeader>
                            <CardTitle>Stratégies Préventives</CardTitle>
                            <CardDescription>Éduquez-vous pour une carrière saine</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Initiez-vous aux meilleures pratiques pour anticiper et prévenir l'usure professionnelle.</p>
                        </CardContent>
                        <CardFooter>
                            <p>Adoptez une approche proactive pour une santé professionnelle optimale.</p>
                        </CardFooter>
                    </Card>
                </div>
            </div>

            <MaxWidthWrapper className='mb-12 mt-5 flex flex-col items-center justify-center'>
                    <Image 
                        src={'/team.jpg'}
                        alt='team'
                        width={800}
                        height={500}
                        className='rounded-lg mb-7'
                    />

                <h3 className='max-w-xl text-m font-bold md:text-xl lg:text-xl'>
                    Rencontrez Nos Experts Dédiés
                </h3>

                <p className='mt-5 max-w-prose text-zinc-700 sm:text-m'>
                    Après soumission de votre formulaire, vous serez entre de bonnes mains. Notre équipe d'agents, composée de professionnels expérimentés et passionnés, est prête à analyser vos réponses avec le plus grand soin. Spécialisés dans l'évaluation de l'usure professionnelle, ils utilisent une approche personnalisée pour chaque dossier, garantissant ainsi des conseils précis et adaptés à votre situation unique.
                    <br /><br />

                    Notre promesse ? Une prise en charge complète et empathique. Nous comprenons l'importance de votre bien-être au travail et nous nous engageons à vous fournir un soutien sur-mesure. Grâce à leur expertise et leur écoute, nos agents élaborent des stratégies efficaces pour vous aider à naviguer vers un équilibre professionnel optimal.
                    <br /><br />

                    Avec une réactivité sans faille, notre équipe s'assure que chaque question trouve sa réponse, chaque préoccupation est adressée. Nous sommes là pour vous accompagner dans votre parcours, offrant non seulement des solutions, mais aussi un véritable partenariat dans la gestion de votre carrière.
                </p>
            </MaxWidthWrapper>
            <Footer />
        </>
    )
}
