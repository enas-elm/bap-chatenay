import Image from 'next/image'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className='flex flex-col items-center justify-center min-h-screen py-2'>
        <h1 className='text-6xl font-bold'>
          Welcome to{' '}
          <a className='text-blue-600' href='https://nextjs.org'>
            BAP Chatenay
          </a>
        </h1>

        <p className='mt-3 text-2xl text-center'>
          Log on to check whether you are suffering from professional wear and tear and get help for a potential retraining, with the help of our advisers.
        </p>
      </div>
    </MaxWidthWrapper>
  )
}
