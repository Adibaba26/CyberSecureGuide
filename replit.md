# CyberAware - Cybersecurity Education Platform

## Overview

CyberAware is a mobile-first educational platform designed to teach cybersecurity awareness to students through interactive lessons, quizzes, and resources. The application provides cyber safety tips, interactive quizzes, educational posters, and learning resources in an engaging, mobile-optimized interface.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query (TanStack Query) for server state management
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Styling**: Tailwind CSS with custom mobile-first design system
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API endpoints for data retrieval and quiz submission
- **Development Server**: Vite middleware integration for seamless development experience

### Data Storage Solutions
- **Primary Database**: PostgreSQL with Neon serverless database (now active)
- **ORM**: Drizzle ORM for type-safe database operations
- **Database Seeding**: Automated data population with sample content
- **Schema**: Shared TypeScript schema definitions with Zod validation

## Key Components

### Database Schema
- **cyber_tips**: Stores cybersecurity tips with icons and color coding
- **quiz_questions**: Contains quiz questions with multiple choice options and explanations
- **quiz_attempts**: Tracks user quiz performance and completion data
- **resources**: Educational resources including videos, websites, PDFs, and courses
- **cyber_trends**: Latest cybersecurity news and developments with severity levels
- **foundations**: Pakistani education NGOs with donation methods and contact information
- **contact_submissions**: User messages and inquiries submitted through the contact form

### Responsive Interface Design
- **Mobile-First**: Touch-friendly navigation with bottom navigation bar
- **Desktop Layout**: Sidebar navigation with larger content areas for PC users
- **Cross-Platform**: Works seamlessly on mobile devices, tablets, and desktop computers
- **Progressive Web App**: Installable on devices with native app-like experience
- **Touch Interactions**: Optimized touch targets and feedback animations
- **Status Bar Simulation**: Native mobile app appearance on mobile devices

### Core Features
1. **Cyber Tips Section**: Displays essential security practices with visual icons
2. **Interactive Quiz**: Multiple-choice cybersecurity knowledge assessment
3. **Educational Posters**: Visual safety reminders with high-quality images
4. **Learning Resources**: Curated collection of external educational materials
5. **Cyber Trends**: Latest cybersecurity developments and emerging threats
6. **Education Foundations**: Directory of verified Pakistani education NGOs with donation information
7. **Donation Guide**: Step-by-step instructions for supporting educational causes
8. **Contact System**: Message submission and helpline information
9. **Progress Tracking**: Quiz attempt history and performance analytics

## Data Flow

1. **Client Request**: React components make API requests using React Query
2. **API Processing**: Express.js routes handle requests and validate data with Zod schemas
3. **Data Access**: Storage layer (memory or database) processes queries through Drizzle ORM
4. **Response**: JSON data returned to client with proper error handling
5. **State Management**: React Query caches responses and manages loading states
6. **UI Updates**: Components re-render based on query state changes

## External Dependencies

### Core Dependencies
- **Database**: @neondatabase/serverless for PostgreSQL connectivity
- **ORM**: drizzle-orm and drizzle-kit for database operations
- **UI Library**: @radix-ui/* components for accessible UI primitives
- **Query Management**: @tanstack/react-query for server state
- **Validation**: zod for runtime type checking and schema validation
- **Styling**: tailwindcss for utility-first CSS framework

### Development Tools
- **Build**: vite for development server and production builds
- **TypeScript**: Full type safety across client and server
- **ESBuild**: Fast bundling for server-side code
- **Hot Reload**: Vite HMR for rapid development cycles

## Deployment Strategy

### Build Process
1. **Client Build**: Vite compiles React app to static assets in `dist/public`
2. **Server Build**: ESBuild bundles Express server to `dist/index.js`
3. **Asset Serving**: Production server serves client assets and API endpoints

### Environment Configuration
- **Development**: Uses Vite dev server with middleware mode
- **Production**: Node.js server serves both API and static files
- **Database**: Environment variable-based database connection
- **Port Configuration**: Configurable port with external port mapping

### Deployment Targets
- **Replit**: Configured for Replit's autoscale deployment target
- **Database**: Requires PostgreSQL database URL environment variable
- **Static Assets**: Client build output served from Express server

## Recent Changes
- June 23, 2025: Added light/dark mode toggle with system preference detection
- June 23, 2025: Implemented theme persistence using localStorage
- June 23, 2025: Updated UI components to support dark mode styling
- June 23, 2025: Updated foundations with authentic donation information from user
- June 23, 2025: Added real contact numbers and bank details for Pakistani education NGOs
- June 23, 2025: Added Education Foundations section with verified Pakistani NGOs
- June 23, 2025: Added donation guide and contact system for user inquiries
- June 23, 2025: Implemented responsive design for both mobile and desktop users
- June 23, 2025: Added copy-to-clipboard functionality for donation details
- June 23, 2025: Migrated from in-memory storage to PostgreSQL database
- June 23, 2025: Added automated database seeding with sample data
- June 23, 2025: Added Cyber Trends section with latest security developments
- June 23, 2025: Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.