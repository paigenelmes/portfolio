import Head from 'next/head';
import Main from '@/components/Main';
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Paige Nelmes | Full Stack Developer</title>
      </Head>
      <Navbar></Navbar>
      <Main></Main>
    </div>
  )
}
