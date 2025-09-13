import { AnimatedWorkflow } from './AnimatedWorkflow'

export function HowItWorks() {
  return (
    <section className="py-24 bg-gradient-to-br from-muted/30 to-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your ideas into beautiful designs in just a few simple steps
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Generated Illustration */}
          <div className="text-center">
            <AnimatedWorkflow />
          </div>
        </div>
      </div>
    </section>
  )
}