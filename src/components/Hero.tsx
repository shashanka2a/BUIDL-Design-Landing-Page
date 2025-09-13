import { Button } from './ui/button'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background to-muted/30 py-24 md:py-32">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            From Prompt to Product{' '}
            <span className="inline-block animate-bounce">⚡</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transform your ideas into beautiful, functional designs with AI-powered tools. 
            Build faster, design smarter, create better.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="text-lg px-8 py-6">
              Start Building
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              View Examples
            </Button>
          </div>
          
          {/* Hero Vector Illustration */}
          <div className="relative max-w-3xl mx-auto">
            <svg viewBox="0 0 600 400" className="w-full h-auto">
              {/* Background circles */}
              <circle cx="150" cy="100" r="2" fill="currentColor" className="text-muted-foreground opacity-20" />
              <circle cx="450" cy="80" r="3" fill="currentColor" className="text-muted-foreground opacity-30" />
              <circle cx="500" cy="320" r="2" fill="currentColor" className="text-muted-foreground opacity-20" />
              <circle cx="100" cy="300" r="2" fill="currentColor" className="text-muted-foreground opacity-25" />
              
              {/* Main illustration */}
              <rect x="100" y="150" width="400" height="200" rx="20" fill="currentColor" className="text-card" stroke="currentColor" strokeWidth="2" className="text-border"/>
              
              {/* Screen content - design elements */}
              <rect x="120" y="170" width="80" height="12" rx="6" fill="#3b82f6" opacity="0.8" />
              <rect x="220" y="170" width="120" height="12" rx="6" fill="currentColor" className="text-muted" />
              <rect x="360" y="170" width="100" height="12" rx="6" fill="currentColor" className="text-muted" />
              
              <rect x="120" y="200" width="200" height="8" rx="4" fill="currentColor" className="text-muted-foreground opacity-30" />
              <rect x="120" y="220" width="160" height="8" rx="4" fill="currentColor" className="text-muted-foreground opacity-30" />
              
              {/* Design blocks */}
              <rect x="120" y="250" width="100" height="80" rx="8" fill="#10b981" opacity="0.1" stroke="#10b981" strokeWidth="2" />
              <rect x="240" y="250" width="100" height="80" rx="8" fill="#f59e0b" opacity="0.1" stroke="#f59e0b" strokeWidth="2" />
              <rect x="360" y="250" width="100" height="80" rx="8" fill="#ef4444" opacity="0.1" stroke="#ef4444" strokeWidth="2" />
              
              {/* Floating elements */}
              <circle cx="80" cy="200" r="15" fill="#8b5cf6" opacity="0.2" />
              <rect x="72" y="192" width="16" height="16" rx="3" fill="#8b5cf6" />
              
              <circle cx="520" cy="180" r="12" fill="#06b6d4" opacity="0.2" />
              <polygon points="520,172 528,188 512,188" fill="#06b6d4" />
              
              {/* Connection lines */}
              <line x1="95" y1="200" x2="100" y2="200" stroke="currentColor" strokeWidth="2" className="text-muted-foreground opacity-40" strokeDasharray="5,5" />
              <line x1="500" y1="180" x2="500" y2="180" stroke="currentColor" strokeWidth="2" className="text-muted-foreground opacity-40" strokeDasharray="5,5" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}