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
          <div className="mb-16 text-center">
            <AnimatedWorkflow />
          </div>
          
          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4">Describe Your Vision</h3>
              <p className="text-muted-foreground">
                Simply type what you want to create. Our AI understands natural language and design concepts.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4">AI Magic Happens</h3>
              <p className="text-muted-foreground">
                Our advanced AI processes your prompt and generates beautiful, functional designs tailored to your needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4">Get Your Product</h3>
              <p className="text-muted-foreground">
                Receive production-ready designs you can immediately use, customize, and deploy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}