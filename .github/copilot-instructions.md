# Copilot Instructions for Twitch Streamer Portfolio

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview
This is a Next.js TypeScript portfolio website for a Twitch streamer. The project uses:
- Next.js 15 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Responsive design principles
- SEO optimization

## Code Style & Standards
- Use TypeScript for all components and pages
- Follow React functional component patterns with hooks
- Use Tailwind CSS for all styling
- Implement responsive design (mobile-first approach)
- Use semantic HTML elements for accessibility
- Follow Next.js App Router conventions

## Component Structure
- Create reusable components in `src/components/`
- Use proper TypeScript interfaces for props
- Implement proper error boundaries
- Use React Server Components where appropriate
- Client components should be marked with 'use client'

## Styling Guidelines
- Use Tailwind utility classes
- Implement dark/light mode support
- Use consistent spacing and typography scale
- Ensure responsive breakpoints (sm, md, lg, xl)
- Use proper color contrast for accessibility

## Performance & SEO
- Optimize images with Next.js Image component
- Use proper metadata for SEO
- Implement lazy loading where appropriate
- Minimize bundle size with proper imports
- Use proper caching strategies

## Twitch Integration
- Use Twitch API for live status and stream data
- Implement proper error handling for API calls
- Use environment variables for API keys
- Cache API responses appropriately

## File Organization
- Pages in `src/app/` directory
- Components in `src/components/`
- Utilities in `src/lib/`
- Types in `src/types/`
- Styles in global CSS file with Tailwind directives
