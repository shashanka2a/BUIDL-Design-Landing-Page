import { useEffect, useState } from 'react'

export function AnimatedWorkflow() {
  const [currentStep, setCurrentStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % 3)
    }, 2000) // Change step every 2 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full max-w-4xl mx-auto">
      <svg 
        viewBox="0 0 800 300" 
        className="w-full h-auto"
        style={{ filter: 'drop-shadow(0 10px 30px rgba(139, 92, 246, 0.1))' }}
      >
        {/* Background */}
        <rect width="800" height="300" fill="white" rx="20" />
        
        {/* Connection Lines */}
        <defs>
          <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
        
        {/* Animated Flow Lines */}
        <line x1="180" y1="150" x2="320" y2="150" stroke="url(#flowGradient)" strokeWidth="3" strokeDasharray="10,5">
          <animate attributeName="stroke-dashoffset" values="0;15;0" dur="3s" repeatCount="indefinite" />
        </line>
        <line x1="480" y1="150" x2="620" y2="150" stroke="url(#flowGradient)" strokeWidth="3" strokeDasharray="10,5">
          <animate attributeName="stroke-dashoffset" values="0;15;0" dur="3s" repeatCount="indefinite" begin="1s" />
        </line>
        
        {/* Step 1: User Typing on Laptop */}
        <g transform="translate(80, 80)">
          {/* Laptop Base */}
          <rect x="0" y="80" width="120" height="8" rx="4" 
                fill={currentStep === 0 ? "#8b5cf6" : "#e5e7eb"} 
                className="transition-all duration-500"/>
          {/* Laptop Screen */}
          <rect x="10" y="20" width="100" height="60" rx="5" 
                fill={currentStep === 0 ? "#1e1b4b" : "#6b7280"} 
                className="transition-all duration-500"/>
          <rect x="15" y="25" width="90" height="50" rx="3" fill="#000000"/>
          
          {/* Screen Content - Code Lines */}
          <rect x="20" y="30" width="30" height="3" fill="#3b82f6" opacity={currentStep === 0 ? 1 : 0.3}>
            {currentStep === 0 && <animate attributeName="width" values="0;30;30" dur="1s" />}
          </rect>
          <rect x="20" y="38" width="50" height="3" fill="#8b5cf6" opacity={currentStep === 0 ? 1 : 0.3}>
            {currentStep === 0 && <animate attributeName="width" values="0;50;50" dur="1.2s" />}
          </rect>
          <rect x="20" y="46" width="25" height="3" fill="#10b981" opacity={currentStep === 0 ? 1 : 0.3}>
            {currentStep === 0 && <animate attributeName="width" values="0;25;25" dur="0.8s" />}
          </rect>
          
          {/* Typing Hands */}
          <ellipse cx="35" cy="90" rx="8" ry="4" fill="#fbbf24" opacity={currentStep === 0 ? 1 : 0.5}>
            {currentStep === 0 && <animateTransform attributeName="transform" type="translate" values="0,0;1,-1;0,0" dur="0.3s" repeatCount="indefinite" />}
          </ellipse>
          <ellipse cx="65" cy="90" rx="8" ry="4" fill="#fbbf24" opacity={currentStep === 0 ? 1 : 0.5}>
            {currentStep === 0 && <animateTransform attributeName="transform" type="translate" values="0,0;-1,-1;0,0" dur="0.4s" repeatCount="indefinite" />}
          </ellipse>
          
          {/* Glow Effect */}
          {currentStep === 0 && (
            <circle cx="60" cy="50" r="80" fill="none" stroke="#8b5cf6" strokeWidth="2" opacity="0.3">
              <animate attributeName="r" values="80;90;80" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.3;0.1;0.3" dur="2s" repeatCount="indefinite" />
            </circle>
          )}
        </g>

        {/* Step 2: AI Network Nodes */}
        <g transform="translate(350, 80)">
          {/* Glowing Connection Lines */}
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Network Connection Lines with Glow Effect */}
          <line x1="30" y1="30" x2="60" y2="40" 
                stroke={currentStep === 1 ? "#8b5cf6" : "#d1d5db"} 
                strokeWidth={currentStep === 1 ? "3" : "1"} 
                filter={currentStep === 1 ? "url(#glow)" : ""}>
            {currentStep === 1 && <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />}
          </line>
          <line x1="90" y1="30" x2="60" y2="40" 
                stroke={currentStep === 1 ? "#3b82f6" : "#d1d5db"} 
                strokeWidth={currentStep === 1 ? "3" : "1"} 
                filter={currentStep === 1 ? "url(#glow)" : ""}>
            {currentStep === 1 && <animate attributeName="opacity" values="0.3;1;0.3" dur="1.8s" repeatCount="indefinite" />}
          </line>
          <line x1="30" y1="30" x2="20" y2="60" 
                stroke={currentStep === 1 ? "#8b5cf6" : "#d1d5db"} 
                strokeWidth={currentStep === 1 ? "3" : "1"} 
                filter={currentStep === 1 ? "url(#glow)" : ""}>
            {currentStep === 1 && <animate attributeName="opacity" values="0.3;1;0.3" dur="1.2s" repeatCount="indefinite" />}
          </line>
          <line x1="90" y1="30" x2="100" y2="60" 
                stroke={currentStep === 1 ? "#3b82f6" : "#d1d5db"} 
                strokeWidth={currentStep === 1 ? "3" : "1"} 
                filter={currentStep === 1 ? "url(#glow)" : ""}>
            {currentStep === 1 && <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />}
          </line>
          <line x1="60" y1="40" x2="20" y2="60" 
                stroke={currentStep === 1 ? "#06b6d4" : "#d1d5db"} 
                strokeWidth={currentStep === 1 ? "3" : "1"} 
                filter={currentStep === 1 ? "url(#glow)" : ""}>
            {currentStep === 1 && <animate attributeName="opacity" values="0.3;1;0.3" dur="1.6s" repeatCount="indefinite" />}
          </line>
          <line x1="60" y1="40" x2="100" y2="60" 
                stroke={currentStep === 1 ? "#06b6d4" : "#d1d5db"} 
                strokeWidth={currentStep === 1 ? "3" : "1"} 
                filter={currentStep === 1 ? "url(#glow)" : ""}>
            {currentStep === 1 && <animate attributeName="opacity" values="0.3;1;0.3" dur="1.4s" repeatCount="indefinite" />}
          </line>
          <line x1="20" y1="60" x2="100" y2="60" 
                stroke={currentStep === 1 ? "#10b981" : "#d1d5db"} 
                strokeWidth={currentStep === 1 ? "3" : "1"} 
                filter={currentStep === 1 ? "url(#glow)" : ""}>
            {currentStep === 1 && <animate attributeName="opacity" values="0.3;1;0.3" dur="1.7s" repeatCount="indefinite" />}
          </line>
          
          {/* AI Network Nodes */}
          <circle cx="30" cy="30" r="6" 
                  fill={currentStep === 1 ? "#8b5cf6" : "#e5e7eb"} 
                  stroke={currentStep === 1 ? "#ffffff" : "#d1d5db"} 
                  strokeWidth="2"
                  filter={currentStep === 1 ? "url(#glow)" : ""}>
            {currentStep === 1 && <animate attributeName="r" values="6;10;6" dur="2s" repeatCount="indefinite" />}
          </circle>
          <circle cx="90" cy="30" r="6" 
                  fill={currentStep === 1 ? "#3b82f6" : "#e5e7eb"} 
                  stroke={currentStep === 1 ? "#ffffff" : "#d1d5db"} 
                  strokeWidth="2"
                  filter={currentStep === 1 ? "url(#glow)" : ""}>
            {currentStep === 1 && <animate attributeName="r" values="6;10;6" dur="1.8s" repeatCount="indefinite" />}
          </circle>
          <circle cx="60" cy="40" r="8" 
                  fill={currentStep === 1 ? "#06b6d4" : "#e5e7eb"} 
                  stroke={currentStep === 1 ? "#ffffff" : "#d1d5db"} 
                  strokeWidth="2"
                  filter={currentStep === 1 ? "url(#glow)" : ""}>
            {currentStep === 1 && <animate attributeName="r" values="8;12;8" dur="1.5s" repeatCount="indefinite" />}
          </circle>
          <circle cx="20" cy="60" r="5" 
                  fill={currentStep === 1 ? "#10b981" : "#e5e7eb"} 
                  stroke={currentStep === 1 ? "#ffffff" : "#d1d5db"} 
                  strokeWidth="2"
                  filter={currentStep === 1 ? "url(#glow)" : ""}>
            {currentStep === 1 && <animate attributeName="r" values="5;8;5" dur="2.2s" repeatCount="indefinite" />}
          </circle>
          <circle cx="100" cy="60" r="5" 
                  fill={currentStep === 1 ? "#f59e0b" : "#e5e7eb"} 
                  stroke={currentStep === 1 ? "#ffffff" : "#d1d5db"} 
                  strokeWidth="2"
                  filter={currentStep === 1 ? "url(#glow)" : ""}>
            {currentStep === 1 && <animate attributeName="r" values="5;8;5" dur="1.9s" repeatCount="indefinite" />}
          </circle>
          
          {/* Data Flow Particles */}
          {currentStep === 1 && (
            <>
              <circle cx="30" cy="30" r="2" fill="#ffffff" opacity="0.8">
                <animateMotion dur="2s" repeatCount="indefinite">
                  <mpath href="#path1"/>
                </animateMotion>
              </circle>
              <circle cx="90" cy="30" r="2" fill="#ffffff" opacity="0.8">
                <animateMotion dur="2.5s" repeatCount="indefinite">
                  <mpath href="#path2"/>
                </animateMotion>
              </circle>
              <path id="path1" d="M 30,30 L 60,40 L 20,60" fill="none" opacity="0"/>
              <path id="path2" d="M 90,30 L 60,40 L 100,60" fill="none" opacity="0"/>
            </>
          )}
          
          {/* Outer Glow Ring */}
          {currentStep === 1 && (
            <circle cx="60" cy="45" r="50" fill="none" stroke="#8b5cf6" strokeWidth="1" opacity="0.2">
              <animate attributeName="r" values="50;70;50" dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.2;0.05;0.2" dur="3s" repeatCount="indefinite" />
            </circle>
          )}
        </g>

        {/* Step 3: Final App/Dashboard */}
        <g transform="translate(620, 60)">
          {/* Monitor Base */}
          <rect x="0" y="90" width="100" height="15" rx="7" 
                fill={currentStep === 2 ? "#374151" : "#9ca3af"} 
                className="transition-all duration-500"/>
          <rect x="40" y="105" width="20" height="8" fill={currentStep === 2 ? "#374151" : "#9ca3af"}/>
          
          {/* Monitor Screen */}
          <rect x="-10" y="0" width="120" height="90" rx="8" 
                fill={currentStep === 2 ? "#1f2937" : "#6b7280"} 
                className="transition-all duration-500"/>
          <rect x="-5" y="5" width="110" height="80" rx="5" fill="#000000"/>
          
          {/* Dashboard Content */}
          <rect x="5" y="15" width="35" height="25" rx="3" 
                fill={currentStep === 2 ? "#3b82f6" : "#6b7280"} 
                opacity={currentStep === 2 ? 1 : 0.3}>
            {currentStep === 2 && <animate attributeName="height" values="0;25;25" dur="1s" />}
          </rect>
          <rect x="50" y="20" width="35" height="20" rx="3" 
                fill={currentStep === 2 ? "#10b981" : "#6b7280"} 
                opacity={currentStep === 2 ? 1 : 0.3}>
            {currentStep === 2 && <animate attributeName="height" values="0;20;20" dur="1.2s" />}
          </rect>
          
          {/* Chart Elements */}
          <polyline points="5,60 15,50 25,55 35,45 45,50" 
                    fill="none" 
                    stroke={currentStep === 2 ? "#8b5cf6" : "#6b7280"} 
                    strokeWidth="2" 
                    opacity={currentStep === 2 ? 1 : 0.3}>
            {currentStep === 2 && (
              <animate attributeName="stroke-dasharray" values="0,100;100,0" dur="1.5s" />
            )}
          </polyline>
          
          {/* Success Indicator */}
          {currentStep === 2 && (
            <circle cx="50" cy="25" r="15" fill="none" stroke="#10b981" strokeWidth="2" opacity="0.5">
              <animate attributeName="r" values="15;25;15" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.5;0.1;0.5" dur="2s" repeatCount="indefinite" />
            </circle>
          )}
        </g>

        {/* Step Labels */}
        <text x="140" y="220" textAnchor="middle" 
              fill={currentStep === 0 ? "#8b5cf6" : "#6b7280"} 
              className="text-lg font-semibold transition-all duration-500">
          1. Type Your Idea
        </text>
        <text x="400" y="220" textAnchor="middle" 
              fill={currentStep === 1 ? "#8b5cf6" : "#6b7280"} 
              className="text-lg font-semibold transition-all duration-500">
          2. AI Processing
        </text>
        <text x="680" y="220" textAnchor="middle" 
              fill={currentStep === 2 ? "#8b5cf6" : "#6b7280"} 
              className="text-lg font-semibold transition-all duration-500">
          3. Get Your Product
        </text>
      </svg>
    </div>
  )
}