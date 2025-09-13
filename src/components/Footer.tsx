export function Footer() {
  return (
    <footer className="mt-24 border-t bg-background/80 backdrop-blur">
      <div className="container px-4 mx-auto py-12">
        <div className="text-center space-y-8">
          <div>
            <div className="flex items-center justify-center space-x-2 mb-4">
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
  )
}