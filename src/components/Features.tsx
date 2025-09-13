import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

const features = [
  {
    title: 'AI-Powered Design',
    description: 'Transform text prompts into stunning designs instantly.',
    icon: (
      <svg viewBox="0 0 60 60" className="w-12 h-12">
        <rect x="10" y="20" width="40" height="30" rx="4" fill="#3b82f6" opacity="0.1" stroke="#3b82f6" strokeWidth="2"/>
        <circle cx="30" cy="15" r="8" fill="#3b82f6" opacity="0.2"/>
        <circle cx="30" cy="15" r="4" fill="#3b82f6"/>
        <path d="M30 23 L20 35 L40 35 Z" fill="#3b82f6" opacity="0.3"/>
        <circle cx="25" cy="40" r="2" fill="#3b82f6"/>
        <circle cx="35" cy="40" r="2" fill="#3b82f6"/>
      </svg>
    )
  },
  {
    title: 'Rapid Prototyping',
    description: 'Build functional prototypes in minutes, not hours.',
    icon: (
      <svg viewBox="0 0 60 60" className="w-12 h-12">
        <circle cx="30" cy="30" r="20" fill="none" stroke="#10b981" strokeWidth="3" strokeDasharray="10,5"/>
        <circle cx="30" cy="30" r="12" fill="#10b981" opacity="0.1"/>
        <path d="M30 18 L30 30 L42 30" stroke="#10b981" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="30" cy="30" r="2" fill="#10b981"/>
      </svg>
    )
  },
  {
    title: 'Smart Components',
    description: 'Pre-built components that adapt to your design system.',
    icon: (
      <svg viewBox="0 0 60 60" className="w-12 h-12">
        <rect x="15" y="15" width="12" height="12" rx="2" fill="#f59e0b" opacity="0.2" stroke="#f59e0b" strokeWidth="2"/>
        <rect x="33" y="15" width="12" height="12" rx="2" fill="#f59e0b" opacity="0.2" stroke="#f59e0b" strokeWidth="2"/>
        <rect x="15" y="33" width="12" height="12" rx="2" fill="#f59e0b" opacity="0.2" stroke="#f59e0b" strokeWidth="2"/>
        <rect x="33" y="33" width="12" height="12" rx="2" fill="#f59e0b" opacity="0.2" stroke="#f59e0b" strokeWidth="2"/>
        <line x1="27" y1="21" x2="33" y2="21" stroke="#f59e0b" strokeWidth="2"/>
        <line x1="21" y1="27" x2="21" y2="33" stroke="#f59e0b" strokeWidth="2"/>
      </svg>
    )
  },
  {
    title: 'Export Anywhere',
    description: 'Export as code, images, or to your favorite tools.',
    icon: (
      <svg viewBox="0 0 60 60" className="w-12 h-12">
        <rect x="15" y="10" width="30" height="20" rx="3" fill="#8b5cf6" opacity="0.1" stroke="#8b5cf6" strokeWidth="2"/>
        <path d="M30 35 L20 45 L25 45 L25 50 L35 50 L35 45 L40 45 Z" fill="#8b5cf6" opacity="0.3"/>
        <path d="M30 30 L30 45" stroke="#8b5cf6" strokeWidth="3" strokeLinecap="round"/>
        <path d="M25 40 L30 45 L35 40" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" fill="none"/>
      </svg>
    )
  }
]

export function Features() {
  return (
    <section id="features" className="py-32 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Everything you need to build better
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Powerful features designed to streamline your design workflow and boost productivity.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 transition-transform duration-200 group-hover:scale-110 group-hover:rotate-3">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}