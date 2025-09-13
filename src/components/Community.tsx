import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { useEffect, useState, useRef } from 'react'

const communityStats = [
  { label: 'Active Builders', value: '12,500+', targetNumber: 12500, color: 'bg-blue-500' },
  { label: 'Projects Created', value: '45,000+', targetNumber: 45000, color: 'bg-green-500' },
  { label: 'Code Generated', value: '2.3M+ lines', targetNumber: 2300000, suffix: ' lines', color: 'bg-purple-500' }
]

const recentActivity = [
  { user: 'alex_dev', action: 'created', project: 'E-commerce Dashboard', time: '2 hours ago' },
  { user: 'sarah_ui', action: 'shared', project: 'Mobile Banking App', time: '4 hours ago' },
  { user: 'mike_design', action: 'forked', project: 'SaaS Landing Page', time: '6 hours ago' },
  { user: 'jenny_code', action: 'published', project: 'Portfolio Template', time: '8 hours ago' }
]

function AnimatedCounter({ targetNumber, suffix = '+' }: { targetNumber: number, suffix?: string }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const counterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let start = 0
          const duration = 2000
          const increment = targetNumber / (duration / 16)
          
          const timer = setInterval(() => {
            start += increment
            if (start >= targetNumber) {
              setCount(targetNumber)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, 16)
          
          return () => clearInterval(timer)
        }
      },
      { threshold: 0.5 }
    )
    
    if (counterRef.current) {
      observer.observe(counterRef.current)
    }
    
    return () => observer.disconnect()
  }, [targetNumber, hasAnimated])
  
  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M'
    } else if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K'
    }
    return num.toString()
  }
  
  return (
    <div ref={counterRef} className="text-2xl font-bold">
      {formatNumber(count)}{suffix}
    </div>
  )
}

export function Community() {
  return (
    <section id="community" className="py-32 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-20">
          <Badge className="mb-6 text-sm px-4 py-2 bg-primary/10 text-primary border-primary/20">
            #buidl
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Join the Builder Community
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Connect with thousands of creators, share your work, and get inspired by others.
          </p>
        </div>
        
        {/* Community Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {communityStats.map((stat, index) => (
            <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-8 pb-6">
                <div className={`w-4 h-4 ${stat.color} rounded-full mx-auto mb-4`}></div>
                <AnimatedCounter 
                  targetNumber={stat.targetNumber} 
                  suffix={stat.suffix || '+'} 
                />
                <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
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
                
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}