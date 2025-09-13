import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

const trendingProjects = [
  {
    title: 'Modern SaaS Dashboard',
    description: 'A comprehensive dashboard with analytics, user management, and billing.',
    tags: ['React', 'Dashboard', 'Analytics'],
    author: 'alex_builds',
    likes: 234,
    views: '1.2k',
    thumbnail: (
      <svg viewBox="0 0 300 200" className="w-full h-40">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <rect x="20" y="20" width="60" height="160" fill="#e2e8f0" rx="4"/>
        <rect x="100" y="20" width="180" height="40" fill="#3b82f6" opacity="0.1" rx="4"/>
        <rect x="100" y="80" width="85" height="50" fill="#10b981" opacity="0.2" rx="4"/>
        <rect x="195" y="80" width="85" height="50" fill="#f59e0b" opacity="0.2" rx="4"/>
        <rect x="100" y="140" width="180" height="40" fill="#8b5cf6" opacity="0.1" rx="4"/>
        <circle cx="50" cy="40" r="8" fill="#3b82f6"/>
        <circle cx="50" cy="70" r="6" fill="#10b981"/>
        <circle cx="50" cy="100" r="6" fill="#f59e0b"/>
      </svg>
    )
  },
  {
    title: 'E-commerce Mobile App',
    description: 'Beautiful mobile shopping experience with smooth animations.',
    tags: ['Mobile', 'E-commerce', 'UI/UX'],
    author: 'sarah_creates',
    likes: 189,
    views: '890',
    thumbnail: (
      <svg viewBox="0 0 300 200" className="w-full h-40">
        <rect width="300" height="200" fill="#f8fafc" rx="8"/>
        <rect x="100" y="30" width="100" height="140" fill="white" stroke="#e2e8f0" strokeWidth="2" rx="20"/>
        <rect x="110" y="50" width="80" height="6" fill="#3b82f6" rx="3"/>
        <rect x="110" y="70" width="80" height="30" fill="#10b981" opacity="0.2" rx="4"/>
        <rect x="110" y="110" width="35" height="20" fill="#f59e0b" opacity="0.3" rx="2"/>
        <rect x="155" y="110" width="35" height="20" fill="#ef4444" opacity="0.3" rx="2"/>
        <rect x="110" y="140" width="80" height="8" fill="#8b5cf6" rx="4"/>
        <circle cx="150" cy="40" r="3" fill="#6b7280"/>
      </svg>
    )
  }
]

export function TrendingProjects() {
  return (
    <section id="projects" className="py-32 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Trending Projects
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover amazing projects built by our community. Get inspired and build something incredible.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8 mb-16">
          {trendingProjects.map((project, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/20 hover:-translate-y-1">
              <div className="flex flex-col lg:flex-row">
                <CardHeader className="p-0 lg:w-2/5">
                  <div className="overflow-hidden rounded-t-lg lg:rounded-l-lg lg:rounded-t-none h-48 lg:h-full">
                    <div className="w-full h-full flex items-center justify-center">
                      {project.thumbnail}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8 lg:w-3/5">
                  <div className="flex items-start justify-between mb-3">
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </div>
                  
                  <CardDescription className="mb-6 text-lg">
                    {project.description}
                  </CardDescription>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-sm px-3 py-1">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="font-medium">by {project.author}</span>
                    <div className="flex items-center gap-6">
                      <span>❤️ {project.likes}</span>
                      <span>👁️ {project.views}</span>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="outline" size="lg" className="text-lg px-8 py-6 transition-all duration-200 hover:scale-105 hover:bg-primary hover:text-primary-foreground">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}