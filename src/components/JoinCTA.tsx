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
              Join thousands of creators who are already using buidl.design to bring their ideas to life. 
              Start your journey from prompt to product today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="text-lg px-8 py-6 min-w-[200px]">
                Get Started Free
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 min-w-[200px]">
                Book a Demo
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
          <div className="grid md:grid-cols-4 gap-8">
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
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Templates</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Changelog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Status</a></li>
              </ul>
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