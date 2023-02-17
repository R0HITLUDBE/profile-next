import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import SkillAll from '@/components/SkillAll'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Rohit Ludbe</title>
        <meta name="description" content="Rohit Ludbe is a web and Android developer from Mumbai." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <main >
        <Navbar />
        <Hero />
        <Projects />
        <SkillAll />
        <Contact />
      </main>
    </>
  )
}
