import { Button } from './ui/button'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">B</span>
          </div>
          <span className="font-bold text-xl">buidl.design</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="hover:text-primary transition-colors">Features</a>
          <a href="#community" className="hover:text-primary transition-colors">Community</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
        </nav>
        
        <Button>Get Started</Button>
      </div>
    </header>
  )
}