import Head from 'next/head'

import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Head>
        <title>Paige Nelmes | Full Stack Developer</title>
      </Head>
      <Navbar></Navbar>
    </main>
  )
}
