import Image from 'next/image'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Link from 'next/link.js'
import { buttonVariants } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <MaxWidthWrapper className='mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center'>
      <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl'>
        Évaluez votre <span className='text-blue-600'>Usure Professionnel</span> facilement.
      </h1>

      <p className='mt-5 max-w-prose text-zinc-700 sm:text-lg'>
        Notre formulaire interactif est conçu pour vous aider à calculer précisément l'utilisation professionnelle de vos ressources. Commencez simplement en saisissant vos informations pour une analyse rapide et personnalisée.
      </p>

      <Link
        className={buttonVariants({
          size: 'lg',
          className: 'mt-5',
        })}
        href='/dashboard'
        target='_blank'>
        Commencer maintenant{' '}
        <ArrowRight className='ml-2 h-5 w-5' />
      </Link>
    </MaxWidthWrapper>
  )
}
