import Head from 'next/head'
import { Hero } from '../src/components/Hero'
import { Features } from '../src/components/Features'
import { Header } from '../src/components/Header'
import { HowItWorks } from '../src/components/HowItWorks'
import { Footer } from '../src/components/Footer'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>#buidl - AI Design Platform | From Prompt to Product | No-Code Design Tool</title>
        <meta name="description" content="Transform ideas into beautiful designs with #buidl - the AI-powered design platform. From prompt to product in minutes. No-code design tool for creators, developers, and entrepreneurs." />
        <meta name="keywords" content="AI design, no-code design, prompt to product, design automation, AI tools, web design, app design, rapid prototyping, design platform, creative AI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Features />
          <HowItWorks />
        </main>
        <Footer />
      </div>
    </>
  )
}