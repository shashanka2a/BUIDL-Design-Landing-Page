import Head from 'next/head'
import { Hero } from '../src/components/Hero'
import { Features } from '../src/components/Features'
import { Header } from '../src/components/Header'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>BUIDL Design Landing</title>
        <meta name="description" content="From Prompt to Product - Transform your ideas into beautiful, functional designs with AI-powered tools. Build faster, design smarter, create better." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Features />
        </main>
      </div>
    </>
  )
}