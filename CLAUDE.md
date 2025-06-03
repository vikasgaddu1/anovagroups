# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Essential Commands
- `npm run dev` - Start development server on port 5173
- `npm run build` - Build for production (output to `dist/`)
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint with React-specific rules

### Project Setup
- `npm install` - Install dependencies (React 18, Vite, Tailwind CSS, Lucide React icons)

## Architecture Overview

### Tech Stack
- **Framework**: React 18 with Vite build tool
- **Styling**: Tailwind CSS with custom color palette (primary/secondary themes)
- **Icons**: Lucide React
- **Build**: Vite with manual chunk splitting for React/ReactDOM and Lucide icons

### Project Structure
This is a single-page React application for Anova Groups, a consulting company in Morrisville, NC. The app follows a component-based architecture:

```
src/
├── main.jsx          # React app entry point
├── App.jsx           # Main app component with section routing
├── App.css           # Global styles
└── [SectionName].jsx # Individual page sections as components
```

### Component Architecture
- **Single Page App**: All sections are rendered in `App.jsx` in sequence
- **Section Components**: Each major page section is a separate component (Hero, Services, About, Testimonials, Contact)
- **Layout Components**: Header and Footer wrap the main content
- **No Router**: Currently a single-page scroll experience, no React Router

### Styling System
- **Tailwind CSS**: Utility-first CSS framework
- **Custom Colors**: 
  - `primary.*` - Blue color palette (50-900 shades)
  - `secondary.*` - Gray/slate color palette (50-900 shades)
- **Font**: Inter as primary sans-serif font
- **Responsive**: Mobile-first responsive design patterns

### Component Import Patterns
Components currently use relative imports from the `src/` directory. Note that some components reference `@/components/ui/button` which suggests a planned shadcn/ui integration, but the actual implementation may use different patterns.

### Content & Business Context
The website serves Anova Groups (Gaddu LLC), a professional consulting firm located at 117 Bruington Ct, Morrisville, NC. The site focuses on:
- Strategic consulting services
- Business optimization
- Implementation support
- Local NC market with broader reach

When editing content, maintain the professional consulting tone and ensure all business information aligns with the Morrisville, NC location and consulting service focus.