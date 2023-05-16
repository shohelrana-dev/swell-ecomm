import '@/assets/styles/main.css'
import { ClerkProvider } from '@clerk/nextjs/app-beta'
import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import { Inter } from 'next/font/google'
import { PropsWithChildren } from "react"

const inter = Inter( {
    subsets: ['latin']
} )

export const metadata = {
    title: 'next ecommerce',
    description: 'Created by Shohel Rana'
}

export default function RootLayout( { children }: PropsWithChildren ) {
    return (
        <html
            lang='en'
            className={ `${ inter.className } h-full scroll-smooth antialiased` }
        >
        <body className='flex h-full flex-col text-stone-700'>
        <ClerkProvider>
            <Header/>
            <main className='grow bg-white'>{ children }</main>
            <Footer/>
        </ClerkProvider>
        </body>
        </html>
    )
}