import { Button } from './ui/button'
import { useEffect, useState } from 'react'

export function Hero() {
  const [displayText, setDisplayText] = useState('')
  const fullText = 'From Prompt to Product'
  
  useEffect(() => {
    let currentIndex = 0
    const typeWriter = () => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex))
        currentIndex++
      }
    }
    
    const interval = setInterval(() => {
      typeWriter()
      if (currentIndex > fullText.length) {
        clearInterval(interval)
      }
    }, 100)
    
    return () => clearInterval(interval)
  }, [])
  
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background to-muted/30 py-32 md:py-40">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
            <span className="inline-block min-h-[1.2em]">{displayText}</span>
            <span className="text-primary animate-pulse">|</span>{' '}
            <span className="inline-block hover:scale-110 hover:-translate-y-1 transition-transform duration-150 cursor-default">
              <svg viewBox="0 0 40 40" className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 inline-block">
                <defs>
                  <linearGradient id="brandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
                <circle cx="20" cy="20" r="18" fill="url(#brandGradient)" opacity="0.1"/>
                <path d="M12 20 L20 12 L18 20 L28 20 L20 28 L22 20 Z" fill="url(#brandGradient)"/>
                <circle cx="20" cy="20" r="2" fill="white"/>
              </svg>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform your ideas into beautiful, functional designs with #buidl. 
            Build faster, design smarter, create better.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <Button size="lg" className="text-xl px-10 py-7 transition-all duration-200 hover:scale-105 hover:shadow-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              Start Building
            </Button>
            <Button variant="outline" size="lg" className="text-xl px-10 py-7 transition-all duration-200 hover:scale-105 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:text-white border-2 border-purple-600/20">
              View Examples
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}