import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

const communityStats = [
  { label: 'Active Builders', value: '12,500+', color: 'bg-blue-500' },
  { label: 'Projects Created', value: '45,000+', color: 'bg-green-500' },
  { label: 'Code Generated', value: '2.3M+ lines', color: 'bg-purple-500' },
  { label: 'Time Saved', value: '180,000+ hours', color: 'bg-orange-500' }
]

const recentActivity = [
  { user: 'alex_dev', action: 'created', project: 'E-commerce Dashboard', time: '2 hours ago' },
  { user: 'sarah_ui', action: 'shared', project: 'Mobile Banking App', time: '4 hours ago' },
  { user: 'mike_design', action: 'forked', project: 'SaaS Landing Page', time: '6 hours ago' },
  { user: 'jenny_code', action: 'published', project: 'Portfolio Template', time: '8 hours ago' }
]

export function Community() {
  return (
    <section id="community" className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-sm px-3 py-1 bg-primary/10 text-primary border-primary/20">
            #buidl
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join the Builder Community
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with thousands of creators, share your work, and get inspired by others.
          </p>
        </div>
        
        {/* Community Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {communityStats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <div className={`w-3 h-3 ${stat.color} rounded-full mx-auto mb-2`}></div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Community Illustration */}
          <div className="order-2 lg:order-1">
            <svg viewBox="0 0 400 300" className="w-full h-auto">
              {/* Background network */}
              <circle cx="80" cy="80" r="30" fill="#3b82f6" opacity="0.1"/>
              <circle cx="320" cy="80" r="30" fill="#10b981" opacity="0.1"/>
              <circle cx="200" cy="220" r="30" fill="#f59e0b" opacity="0.1"/>
              <circle cx="120" cy="180" r="25" fill="#8b5cf6" opacity="0.1"/>
              <circle cx="280" cy="180" r="25" fill="#ef4444" opacity="0.1"/>
              
              {/* Connections */}
              <line x1="95" y1="95" x2="130" y2="165" stroke="currentColor" strokeWidth="2" className="text-muted-foreground opacity-30" strokeDasharray="5,5"/>
              <line x1="305" y1="95" x2="270" y2="165" stroke="currentColor" strokeWidth="2" className="text-muted-foreground opacity-30" strokeDasharray="5,5"/>
              <line x1="145" y1="180" x2="185" y2="205" stroke="currentColor" strokeWidth="2" className="text-muted-foreground opacity-30" strokeDasharray="5,5"/>
              <line x1="255" y1="180" x2="215" y2="205" stroke="currentColor" strokeWidth="2" className="text-muted-foreground opacity-30" strokeDasharray="5,5"/>
              
              {/* User avatars */}
              <circle cx="80" cy="80" r="20" fill="#3b82f6"/>
              <circle cx="80" cy="80" r="15" fill="white"/>
              <text x="80" y="85" textAnchor="middle" className="text-xs font-bold" fill="#3b82f6">A</text>
              
              <circle cx="320" cy="80" r="20" fill="#10b981"/>
              <circle cx="320" cy="80" r="15" fill="white"/>
              <text x="320" y="85" textAnchor="middle" className="text-xs font-bold" fill="#10b981">S</text>
              
              <circle cx="200" cy="220" r="20" fill="#f59e0b"/>
              <circle cx="200" cy="220" r="15" fill="white"/>
              <text x="200" y="225" textAnchor="middle" className="text-xs font-bold" fill="#f59e0b">M</text>
              
              <circle cx="120" cy="180" r="18" fill="#8b5cf6"/>
              <circle cx="120" cy="180" r="13" fill="white"/>
              <text x="120" y="185" textAnchor="middle" className="text-xs font-bold" fill="#8b5cf6">J</text>
              
              <circle cx="280" cy="180" r="18" fill="#ef4444"/>
              <circle cx="280" cy="180" r="13" fill="white"/>
              <text x="280" y="185" textAnchor="middle" className="text-xs font-bold" fill="#ef4444">D</text>
              
              {/* Center hub */}
              <circle cx="200" cy="140" r="35" fill="currentColor" className="text-primary" opacity="0.1"/>
              <circle cx="200" cy="140" r="25" fill="currentColor" className="text-primary"/>
              <text x="200" y="135" textAnchor="middle" className="text-xs font-bold" fill="white">#buidl</text>
              <text x="200" y="150" textAnchor="middle" className="text-xs font-bold" fill="white">HUB</text>
            </svg>
          </div>
          
          {/* Recent Activity */}
          <div className="order-1 lg:order-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-muted last:border-0">
                    <div className="flex-1">
                      <p className="text-sm">
                        <span className="font-medium">{activity.user}</span>{' '}
                        <span className="text-muted-foreground">{activity.action}</span>{' '}
                        <span className="font-medium">{activity.project}</span>
                      </p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
                
                <div className="pt-4">
                  <Button variant="outline" className="w-full">
                    Join Discord Community
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}