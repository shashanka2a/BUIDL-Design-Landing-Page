import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'

export function JoinCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 to-muted/30">
      <div className="container px-4 mx-auto">
        <Card className="max-w-4xl mx-auto border-2 bg-background/50 backdrop-blur">
          <CardContent className="p-12 text-center">
            <div className="mb-8">
              {/* CTA Illustration */}
              <svg viewBox="0 0 200 120" className="w-32 h-20 mx-auto mb-6">
                <circle cx="100" cy="60" r="50" fill="currentColor" className="text-primary" opacity="0.1"/>
                <circle cx="100" cy="60" r="35" fill="currentColor" className="text-primary" opacity="0.2"/>
                <circle cx="100" cy="60" r="20" fill="currentColor" className="text-primary"/>
                
                {/* Surrounding elements */}
                <circle cx="60" cy="30" r="8" fill="#3b82f6" opacity="0.6"/>
                <circle cx="140" cy="30" r="6" fill="#10b981" opacity="0.6"/>
                <circle cx="170" cy="70" r="5" fill="#f59e0b" opacity="0.6"/>
                <circle cx="150" cy="100" r="7" fill="#8b5cf6" opacity="0.6"/>
                <circle cx="50" cy="100" r="6" fill="#ef4444" opacity="0.6"/>
                <circle cx="30" cy="70" r="4" fill="#06b6d4" opacity="0.6"/>
                
                {/* Connection lines */}
                <line x1="68" y1="38" x2="85" y2="50" stroke="currentColor" strokeWidth="2" className="text-primary opacity-30"/>
                <line x1="132" y1="38" x2="115" y2="50" stroke="currentColor" strokeWidth="2" className="text-primary opacity-30"/>
                <line x1="162" y1="75" x2="135" y2="68" stroke="currentColor" strokeWidth="2" className="text-primary opacity-30"/>
                
                {/* Center icon */}
                <path d="M90 55 L95 60 L110 45" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Building?
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of creators building with buidl.design.
            </p>
            
            <div className="flex justify-center mb-8">
              <Button size="lg" className="text-lg px-10 py-7 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-200 hover:scale-105 hover:shadow-lg">
                Get Started Free
              </Button>
            </div>
            
            <div className="text-sm text-muted-foreground">
              No credit card required • Free forever plan available
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Footer */}
      <footer className="mt-24 border-t bg-background/80 backdrop-blur">
        <div className="container px-4 mx-auto py-12">
          <div className="text-center space-y-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">B</span>
                </div>
                <span className="font-bold text-xl">buidl.design</span>
              </div>
              <p className="text-sm text-muted-foreground">
                From prompt to product, powered by AI.
              </p>
            </div>
            
            <div className="flex justify-center space-x-8">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Docs</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Discord</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Twitter</a>
            </div>
          </div>
          
          <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
            © 2024 buidl.design. All rights reserved.
          </div>
        </div>
      </footer>
    </section>
  )
}