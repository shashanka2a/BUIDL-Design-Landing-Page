# Modern Landing Page with AI Design Theme

## Overview

This is a modern landing page built with Next.js and React, designed to showcase "buidl.design" - a platform for AI-powered design and rapid prototyping. The application features a clean, professional design with sections for hero content, features, community stats, trending projects, and call-to-action areas. The landing page is fully responsive and optimized for static export.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: Next.js 14 with TypeScript and Pages Router architecture
- **Styling**: Tailwind CSS with custom design tokens and CSS variables for theming
- **Component Library**: Built on Radix UI primitives with custom shadcn/ui components
- **Animation**: Framer Motion for smooth transitions and interactive elements
- **Layout Pattern**: Component-based architecture with dedicated sections (Hero, Features, Community, TrendingProjects, JoinCTA)

### Build Configuration
- **Static Export**: Configured for static site generation with `output: 'export'`
- **Image Optimization**: Disabled for static export compatibility
- **Development Server**: Custom port configuration (5000) with host binding
- **ESLint**: Configured but ignored during builds for faster deployment

### Component System
- **UI Components**: Comprehensive set of reusable components including cards, buttons, badges, dialogs, and form elements
- **Design Tokens**: CSS custom properties for colors, spacing, and typography with light/dark theme support
- **Responsive Design**: Mobile-first approach with responsive grid layouts and flexible components
- **Accessibility**: Built on Radix UI primitives ensuring proper ARIA attributes and keyboard navigation

### Content Architecture
- **Static Content**: Hard-coded content suitable for landing page with community stats, feature descriptions, and project showcases
- **Asset Management**: SVG-based illustrations and icons for scalability and performance
- **Image Fallbacks**: Custom ImageWithFallback component for graceful error handling

### Development Workflow
- **TypeScript**: Strict type checking with proper component prop typing
- **Path Aliases**: Configured @ alias for clean imports from src directory
- **Hot Reloading**: React Fast Refresh enabled for development efficiency

## External Dependencies

### Core Framework Dependencies
- **Next.js**: React framework for production-ready applications
- **React & React DOM**: Core React libraries for component rendering
- **TypeScript**: Type safety and enhanced developer experience

### UI and Styling Libraries
- **Tailwind CSS**: Utility-first CSS framework with PostCSS processing
- **Radix UI**: Comprehensive set of accessible component primitives
- **Class Variance Authority**: Type-safe component variants
- **clsx**: Utility for conditional CSS class names
- **Framer Motion**: Animation library for smooth interactions

### Development Tools
- **ESLint**: Code linting with Next.js recommended rules
- **PostCSS & Autoprefixer**: CSS processing and vendor prefixing

### Additional UI Components
- **Lucide React**: Icon library for consistent iconography
- **React Hook Form**: Form handling and validation
- **React Day Picker**: Date picker component
- **Input OTP**: One-time password input component
- **Embla Carousel**: Carousel component for content sliders
- **CMDK**: Command palette component for search interfaces

### Theme and Utilities
- **next-themes**: Theme switching functionality
- **React Resizable Panels**: Resizable layout components

Note: No database or backend services are currently integrated. The application is designed as a static landing page with no server-side dependencies.