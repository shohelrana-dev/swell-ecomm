'use client'

import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'

export default function Page() {
    const { isLoaded, isSignedIn, user } = useUser()
    const router                         = useRouter()

    if ( isLoaded && !isSignedIn ) {
        router.push( '/login?redirectUrl=/dashboard' )
    }

    return (
        <section className='py-24'>
            <div className='container'>
                <h1 className='text-3xl font-bold'>Dashboard</h1>
                <p>Welcome { user?.fullName }</p>
            </div>
        </section>
    )
}