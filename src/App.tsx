import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Community } from './components/Community'
import { TrendingProjects } from './components/TrendingProjects'
import { JoinCTA } from './components/JoinCTA'
import { Header } from './components/Header'

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <Community />
        <TrendingProjects />
        <JoinCTA />
      </main>
    </div>
  )
}