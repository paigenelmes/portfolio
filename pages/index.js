import Head from 'next/head'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Head>
        <title>Paige Nelmes | Full Stack Developer</title>
      </Head>
      <div>
        <p>
          Hi, my name is Paige. This is my portfolio!
        </p>
      </div>
    </main>
  )
}
