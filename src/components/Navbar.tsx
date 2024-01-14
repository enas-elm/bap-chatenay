import Link from 'next/link'
import MaxWidthWrapper from './layouts/MaxWidthWrapper'
import { buttonVariants } from './ui/button'
import {
    LoginLink,
    RegisterLink,
    getKindeServerSession,
} from '@kinde-oss/kinde-auth-nextjs/server'
import MobileNav from './MobileNav'
import UserAccountNav from './UserAccountNav'


const Navbar = async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    return (
        <nav className='sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
            <MaxWidthWrapper>
                <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
                    <Link
                        href='/'
                        className='flex z-40 font-semibold'>
                        <span>BAP Chatenay</span>
                    </Link>

                    <MobileNav isAuth={!!user} />

                    <div className='hidden items-center space-x-4 sm:flex'>
                        {!user ? (
                            <>
                                <LoginLink
                                    className={buttonVariants({
                                        variant: 'ghost',
                                        size: 'sm',
                                    })}>
                                    Sign in
                                </LoginLink>
                                <RegisterLink
                                    className={buttonVariants({
                                        size: 'sm',
                                    })}>
                                    Sign up
                                </RegisterLink>
                            </>
                        ) : (
                            <>
                                <Link
                                    href='/dashboard'
                                    className={buttonVariants({
                                        variant: 'ghost',
                                        size: 'sm',
                                    })}>
                                    Dashboard
                                </Link>

                                <UserAccountNav
                                    name={
                                        !user.given_name || !user.family_name
                                            ? 'Your Account'
                                            : `${user.given_name} ${user.family_name}`
                                    }
                                    email={user.email ?? ''}
                                    imageUrl={user.picture ?? ''}
                                />
                            </>
                        )}
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    )
}

export default Navbar
