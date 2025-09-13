import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

const features = [
  {
    title: 'AI-Powered Design',
    description: 'Transform text prompts into stunning designs with cutting-edge AI technology.',
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
    description: 'Build functional prototypes in minutes, not hours. Iterate quickly and efficiently.',
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
    description: 'Pre-built, customizable components that adapt to your design system automatically.',
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
    description: 'Export your designs as code, images, or directly to your favorite design tools.',
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
    <section id="features" className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need to build better
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to streamline your design workflow and boost productivity.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-primary/20 transition-colors">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
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