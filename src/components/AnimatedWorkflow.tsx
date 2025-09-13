import { useEffect, useState } from 'react'

export function AnimatedWorkflow() {
  const [currentStep, setCurrentStep] = useState(0)
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % 3)
    }, 3000) // Slower transition for better viewing

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full max-w-6xl mx-auto">
      <svg 
        viewBox="0 0 900 350" 
        className="w-full h-auto"
        style={{ filter: 'drop-shadow(0 10px 30px rgba(139, 92, 246, 0.1))' }}
      >
        {/* Background */}
        <rect width="900" height="350" fill="white" rx="20" />
        
        {/* Gradient Definitions */}
        <defs>
          <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <linearGradient id="stepGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="hoverGlow">
            <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Flow Arrows Between Steps */}
        <g stroke="url(#flowGradient)" strokeWidth="2" fill="none" opacity="0.6">
          {/* Arrow 1 -> 2 */}
          <path d="M 240 150 L 320 150" markerEnd="url(#arrowhead)">
            <animate attributeName="stroke-dasharray" values="0,20;20,0;0,20" dur="4s" repeatCount="indefinite" />
          </path>
          {/* Arrow 2 -> 3 */}
          <path d="M 580 150 L 660 150" markerEnd="url(#arrowhead)">
            <animate attributeName="stroke-dasharray" values="0,20;20,0;0,20" dur="4s" repeatCount="indefinite" begin="1s" />
          </path>
        </g>
        
        {/* Arrow Marker Definition */}
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                  refX="10" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="url(#flowGradient)" />
          </marker>
        </defs>

        {/* Step 1: User Typing on Laptop */}
        <g transform="translate(80, 60)" 
           className="cursor-pointer transition-all duration-300"
           onMouseEnter={() => setHoveredStep(0)}
           onMouseLeave={() => setHoveredStep(null)}>
          
          {/* Hover Glow Background */}
          {(hoveredStep === 0 || currentStep === 0) && (
            <circle cx="80" cy="75" r="90" fill="none" stroke="#8b5cf6" strokeWidth="2" opacity="0.2"
                    filter="url(#hoverGlow)">
              <animate attributeName="r" values="90;110;90" dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.2;0.05;0.2" dur="3s" repeatCount="indefinite" />
            </circle>
          )}
          
          {/* Laptop - Consistent Flat Design */}
          <g>
            {/* Laptop Base */}
            <rect x="20" y="110" width="120" height="12" rx="6" 
                  fill={currentStep === 0 || hoveredStep === 0 ? "#8b5cf6" : "#e5e7eb"} 
                  className="transition-all duration-500"/>
            {/* Laptop Screen Frame */}
            <rect x="25" y="40" width="110" height="70" rx="8" 
                  fill={currentStep === 0 || hoveredStep === 0 ? "#1e1b4b" : "#6b7280"} 
                  className="transition-all duration-500"/>
            {/* Screen */}
            <rect x="30" y="45" width="100" height="60" rx="5" fill="#000000"/>
            
            {/* Code Lines with Consistent Style */}
            <rect x="35" y="52" width="40" height="4" rx="2" fill="#3b82f6" 
                  opacity={currentStep === 0 ? 1 : 0.4}>
              {currentStep === 0 && <animate attributeName="width" values="0;40;40" dur="1.2s" />}
            </rect>
            <rect x="35" y="62" width="60" height="4" rx="2" fill="#8b5cf6" 
                  opacity={currentStep === 0 ? 1 : 0.4}>
              {currentStep === 0 && <animate attributeName="width" values="0;60;60" dur="1.5s" />}
            </rect>
            <rect x="35" y="72" width="35" height="4" rx="2" fill="#10b981" 
                  opacity={currentStep === 0 ? 1 : 0.4}>
              {currentStep === 0 && <animate attributeName="width" values="0;35;35" dur="1s" />}
            </rect>
            <rect x="35" y="82" width="50" height="4" rx="2" fill="#f59e0b" 
                  opacity={currentStep === 0 ? 1 : 0.4}>
              {currentStep === 0 && <animate attributeName="width" values="0;50;50" dur="1.3s" />}
            </rect>
            
            {/* Typing Indicator */}
            <rect x="85" y="82" width="2" height="4" fill="#ffffff" opacity={currentStep === 0 ? 1 : 0}>
              {currentStep === 0 && <animate attributeName="opacity" values="1;0;1" dur="0.8s" repeatCount="indefinite" />}
            </rect>
          </g>
        </g>

        {/* Step 2: AI Network Nodes with Enhanced Animation */}
        <g transform="translate(380, 60)" 
           className="cursor-pointer transition-all duration-300"
           onMouseEnter={() => setHoveredStep(1)}
           onMouseLeave={() => setHoveredStep(null)}>
          
          {/* Hover Glow Background */}
          {(hoveredStep === 1 || currentStep === 1) && (
            <circle cx="80" cy="75" r="90" fill="none" stroke="#3b82f6" strokeWidth="2" opacity="0.2"
                    filter="url(#hoverGlow)">
              <animate attributeName="r" values="90;110;90" dur="2.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.2;0.05;0.2" dur="2.5s" repeatCount="indefinite" />
            </circle>
          )}
          
          {/* Always Active Subtle Glow for AI Processing */}
          <circle cx="80" cy="75" r="70" fill="none" stroke="#8b5cf6" strokeWidth="1" opacity="0.1">
            <animate attributeName="r" values="70;85;70" dur="4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.1;0.03;0.1" dur="4s" repeatCount="indefinite" />
          </circle>
          
          {/* Network Connection Lines with Enhanced Glow */}
          <g strokeLinecap="round">
            <line x1="50" y1="50" x2="80" y2="65" 
                  stroke={currentStep === 1 || hoveredStep === 1 ? "#8b5cf6" : "#d1d5db"} 
                  strokeWidth={currentStep === 1 || hoveredStep === 1 ? "3" : "2"} 
                  filter={currentStep === 1 || hoveredStep === 1 ? "url(#glow)" : ""}>
              <animate attributeName="opacity" values="0.4;1;0.4" dur="2.1s" repeatCount="indefinite" />
            </line>
            <line x1="110" y1="50" x2="80" y2="65" 
                  stroke={currentStep === 1 || hoveredStep === 1 ? "#3b82f6" : "#d1d5db"} 
                  strokeWidth={currentStep === 1 || hoveredStep === 1 ? "3" : "2"} 
                  filter={currentStep === 1 || hoveredStep === 1 ? "url(#glow)" : ""}>
              <animate attributeName="opacity" values="0.4;1;0.4" dur="2.5s" repeatCount="indefinite" />
            </line>
            <line x1="50" y1="50" x2="40" y2="85" 
                  stroke={currentStep === 1 || hoveredStep === 1 ? "#06b6d4" : "#d1d5db"} 
                  strokeWidth={currentStep === 1 || hoveredStep === 1 ? "3" : "2"} 
                  filter={currentStep === 1 || hoveredStep === 1 ? "url(#glow)" : ""}>
              <animate attributeName="opacity" values="0.4;1;0.4" dur="1.8s" repeatCount="indefinite" />
            </line>
            <line x1="110" y1="50" x2="120" y2="85" 
                  stroke={currentStep === 1 || hoveredStep === 1 ? "#10b981" : "#d1d5db"} 
                  strokeWidth={currentStep === 1 || hoveredStep === 1 ? "3" : "2"} 
                  filter={currentStep === 1 || hoveredStep === 1 ? "url(#glow)" : ""}>
              <animate attributeName="opacity" values="0.4;1;0.4" dur="2.3s" repeatCount="indefinite" />
            </line>
            <line x1="80" y1="65" x2="40" y2="85" 
                  stroke={currentStep === 1 || hoveredStep === 1 ? "#f59e0b" : "#d1d5db"} 
                  strokeWidth={currentStep === 1 || hoveredStep === 1 ? "3" : "2"} 
                  filter={currentStep === 1 || hoveredStep === 1 ? "url(#glow)" : ""}>
              <animate attributeName="opacity" values="0.4;1;0.4" dur="1.9s" repeatCount="indefinite" />
            </line>
            <line x1="80" y1="65" x2="120" y2="85" 
                  stroke={currentStep === 1 || hoveredStep === 1 ? "#ef4444" : "#d1d5db"} 
                  strokeWidth={currentStep === 1 || hoveredStep === 1 ? "3" : "2"} 
                  filter={currentStep === 1 || hoveredStep === 1 ? "url(#glow)" : ""}>
              <animate attributeName="opacity" values="0.4;1;0.4" dur="2.7s" repeatCount="indefinite" />
            </line>
          </g>
          
          {/* AI Network Nodes with Consistent Design */}
          <circle cx="50" cy="50" r="8" 
                  fill={currentStep === 1 || hoveredStep === 1 ? "#8b5cf6" : "#e5e7eb"} 
                  stroke="#ffffff" strokeWidth="2"
                  filter={currentStep === 1 || hoveredStep === 1 ? "url(#glow)" : ""}>
            <animate attributeName="r" values="8;12;8" dur="2.4s" repeatCount="indefinite" />
          </circle>
          <circle cx="110" cy="50" r="8" 
                  fill={currentStep === 1 || hoveredStep === 1 ? "#3b82f6" : "#e5e7eb"} 
                  stroke="#ffffff" strokeWidth="2"
                  filter={currentStep === 1 || hoveredStep === 1 ? "url(#glow)" : ""}>
            <animate attributeName="r" values="8;12;8" dur="2.1s" repeatCount="indefinite" />
          </circle>
          <circle cx="80" cy="65" r="10" 
                  fill={currentStep === 1 || hoveredStep === 1 ? "#06b6d4" : "#e5e7eb"} 
                  stroke="#ffffff" strokeWidth="2"
                  filter={currentStep === 1 || hoveredStep === 1 ? "url(#glow)" : ""}>
            <animate attributeName="r" values="10;15;10" dur="2.8s" repeatCount="indefinite" />
          </circle>
          <circle cx="40" cy="85" r="6" 
                  fill={currentStep === 1 || hoveredStep === 1 ? "#10b981" : "#e5e7eb"} 
                  stroke="#ffffff" strokeWidth="2"
                  filter={currentStep === 1 || hoveredStep === 1 ? "url(#glow)" : ""}>
            <animate attributeName="r" values="6;10;6" dur="2.6s" repeatCount="indefinite" />
          </circle>
          <circle cx="120" cy="85" r="6" 
                  fill={currentStep === 1 || hoveredStep === 1 ? "#f59e0b" : "#e5e7eb"} 
                  stroke="#ffffff" strokeWidth="2"
                  filter={currentStep === 1 || hoveredStep === 1 ? "url(#glow)" : ""}>
            <animate attributeName="r" values="6;10;6" dur="2.2s" repeatCount="indefinite" />
          </circle>
          
          {/* Data Flow Particles */}
          <circle cx="50" cy="50" r="2" fill="#ffffff" opacity="0.8">
            <animateMotion dur="3s" repeatCount="indefinite">
              <path d="M 0,0 L 30,15 L -10,35 L 30,15 L 70,35 Z" />
            </animateMotion>
          </circle>
          <circle cx="110" cy="50" r="2" fill="#ffffff" opacity="0.8">
            <animateMotion dur="3.5s" repeatCount="indefinite">
              <path d="M 0,0 L -30,15 L 10,35 L -30,15 L -70,35 Z" />
            </animateMotion>
          </circle>
        </g>

        {/* Step 3: Final App/Dashboard with Consistent Design */}
        <g transform="translate(720, 60)" 
           className="cursor-pointer transition-all duration-300"
           onMouseEnter={() => setHoveredStep(2)}
           onMouseLeave={() => setHoveredStep(null)}>
          
          {/* Hover Glow Background */}
          {(hoveredStep === 2 || currentStep === 2) && (
            <circle cx="80" cy="75" r="90" fill="none" stroke="#10b981" strokeWidth="2" opacity="0.2"
                    filter="url(#hoverGlow)">
              <animate attributeName="r" values="90;110;90" dur="3.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.2;0.05;0.2" dur="3.5s" repeatCount="indefinite" />
            </circle>
          )}
          
          {/* Desktop Monitor - Flat Design */}
          <g>
            {/* Monitor Stand */}
            <rect x="70" y="125" width="20" height="10" rx="5" 
                  fill={currentStep === 2 || hoveredStep === 2 ? "#374151" : "#9ca3af"}/>
            <rect x="20" y="135" width="120" height="15" rx="7" 
                  fill={currentStep === 2 || hoveredStep === 2 ? "#374151" : "#9ca3af"}/>
            
            {/* Monitor Frame */}
            <rect x="10" y="40" width="140" height="95" rx="12" 
                  fill={currentStep === 2 || hoveredStep === 2 ? "#1f2937" : "#6b7280"} 
                  className="transition-all duration-500"/>
            {/* Screen */}
            <rect x="15" y="45" width="130" height="85" rx="8" fill="#000000"/>
            
            {/* Dashboard Interface Elements */}
            <rect x="25" y="55" width="50" height="30" rx="6" 
                  fill={currentStep === 2 || hoveredStep === 2 ? "#3b82f6" : "#6b7280"} 
                  opacity={currentStep === 2 ? 1 : 0.4}>
              {currentStep === 2 && <animate attributeName="height" values="0;30;30" dur="1.2s" />}
            </rect>
            <rect x="85" y="60" width="50" height="25" rx="6" 
                  fill={currentStep === 2 || hoveredStep === 2 ? "#10b981" : "#6b7280"} 
                  opacity={currentStep === 2 ? 1 : 0.4}>
              {currentStep === 2 && <animate attributeName="height" values="0;25;25" dur="1.5s" />}
            </rect>
            
            {/* Chart Elements */}
            <polyline points="25,110 35,100 45,105 55,95 65,100 75,90" 
                      fill="none" 
                      stroke={currentStep === 2 || hoveredStep === 2 ? "#8b5cf6" : "#6b7280"} 
                      strokeWidth="3" 
                      strokeLinecap="round"
                      opacity={currentStep === 2 ? 1 : 0.4}>
              {currentStep === 2 && (
                <animate attributeName="stroke-dasharray" values="0,100;50,0" dur="2s" />
              )}
            </polyline>
            
            {/* Dashboard Icons */}
            <circle cx="120" cy="70" r="3" 
                    fill={currentStep === 2 || hoveredStep === 2 ? "#f59e0b" : "#6b7280"}/>
            <rect x="110" y="100" width="8" height="8" rx="2" 
                  fill={currentStep === 2 || hoveredStep === 2 ? "#ef4444" : "#6b7280"}/>
          </g>
          
          {/* Success Pulse */}
          {currentStep === 2 && (
            <circle cx="80" cy="75" r="20" fill="none" stroke="#10b981" strokeWidth="2" opacity="0.6">
              <animate attributeName="r" values="20;40;20" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.6;0.1;0.6" dur="2s" repeatCount="indefinite" />
            </circle>
          )}
        </g>
      </svg>

      {/* Enhanced Step Descriptions with Better Hierarchy */}
      <div className="grid md:grid-cols-3 gap-12 mt-16 px-8">
        <div className={`text-center transition-all duration-300 ${hoveredStep === 0 || currentStep === 0 ? 'transform scale-105' : ''}`}
             onMouseEnter={() => setHoveredStep(0)}
             onMouseLeave={() => setHoveredStep(null)}>
          <h3 className={`text-2xl font-bold mb-4 transition-all duration-300 ${
            currentStep === 0 || hoveredStep === 0 ? 'text-purple-600' : 'text-gray-900'
          }`}>
            1. Type Your Idea
          </h3>
          <p className="text-base text-muted-foreground leading-relaxed">
            Simply describe what you want to create. Our AI understands natural language and design concepts.
          </p>
        </div>
        
        <div className={`text-center transition-all duration-300 ${hoveredStep === 1 || currentStep === 1 ? 'transform scale-105' : ''}`}
             onMouseEnter={() => setHoveredStep(1)}
             onMouseLeave={() => setHoveredStep(null)}>
          <h3 className={`text-2xl font-bold mb-4 transition-all duration-300 ${
            currentStep === 1 || hoveredStep === 1 ? 'text-blue-600' : 'text-gray-900'
          }`}>
            2. AI Processing
          </h3>
          <p className="text-base text-muted-foreground leading-relaxed">
            Our advanced AI network processes your prompt and generates beautiful, functional designs.
          </p>
        </div>
        
        <div className={`text-center transition-all duration-300 ${hoveredStep === 2 || currentStep === 2 ? 'transform scale-105' : ''}`}
             onMouseEnter={() => setHoveredStep(2)}
             onMouseLeave={() => setHoveredStep(null)}>
          <h3 className={`text-2xl font-bold mb-4 transition-all duration-300 ${
            currentStep === 2 || hoveredStep === 2 ? 'text-green-600' : 'text-gray-900'
          }`}>
            3. Get Your Product
          </h3>
          <p className="text-base text-muted-foreground leading-relaxed">
            Receive production-ready designs you can immediately use, customize, and deploy.
          </p>
        </div>
      </div>
    </div>
  )
}