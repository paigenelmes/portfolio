import Head from 'next/head';
import Main from '@/components/Main';
import About from '@/components/About';
import { Skills } from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Design from '@/components/Design';
import Navbar from '@/components/Navbar';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Paige Nelmes | Full Stack Developer</title>
      </Head>
      <Navbar></Navbar>
      <Main></Main>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Design></Design>
      <Contact></Contact>
    </div>
  )
}
