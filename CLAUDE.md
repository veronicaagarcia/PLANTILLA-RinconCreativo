# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro-based web template for Hermes to showcase capabilities to potential clients. It's a reusable template designed for creating professional websites quickly. The live demo is at https://hermesplantilla1.netlify.app/

## Development Commands

```bash
# Install dependencies (preferred package manager)
pnpm install

# Start development server
pnpm run dev
# or
pnpm run start

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

The development server runs on http://localhost:4321 by default.

## Performance Optimizations Applied

The template has been optimized with:

- **Image optimization**: Sharp integration with lazy loading
- **Code splitting**: Vendor chunks (React, EmailJS/SweetAlert2)
- **Compression**: HTML, CSS, JavaScript minification
- **Font optimization**: Preconnect to Google Fonts
- **Prefetching**: Critical resources prefetched
- **Build optimization**: CSS code splitting, bundle analysis

## Architecture & Structure

### Tech Stack
- **Astro 4.16.7**: Static site generator with component islands
- **React 18.3.1**: For interactive components
- **Tailwind CSS**: Utility-first styling
- **EmailJS**: Contact form functionality
- **SweetAlert2**: Alert notifications

### Key Architectural Patterns

**Layout System**: Single main layout at `src/layouts/Layout.astro` serves as the entry point, injecting metadata from mock files and rendering pages through slots.

**Content Management**: All customizable content lives in `src/mock/` directory:
- `textViews/` contains page-specific content and metadata
- `homeText.js` is the primary content source rendered in Layout.astro
- Each page has its dedicated mock file for content and SEO metadata

**Component Structure**: 
- Layout components in `src/layouts/componentsLayout/`
- Reusable UI components in `src/components/`
- React components used for interactivity (client:load directive)

**Styling**: Custom Tailwind configuration with brand colors:
- `COLOR1: "#1A1E2E"` (dark)
- `COLOR2: "#FF3366"` (accent)
- `COLOR3: "#00C9A7"` (secondary)
- `CBACKGROUND: "#F4F5F7"` (background)

### SEO Implementation
Metadata is centralized in mock files with `metaTitle` and `metaContent` properties. The Layout.astro automatically generates:
- Open Graph tags for social sharing
- Twitter Card metadata
- SEO-optimized descriptions

## Customization Workflow

1. **Content**: Modify mock files in `src/mock/textViews/` for text content and metadata
2. **Images**: Replace files in `public/images/` (initially keep same filenames, then rename descriptively for SEO)
3. **Branding**: Update `homeText.js` for client name and logo
4. **Colors**: Modify `tailwind.config.mjs` for brand color scheme

## Important Notes

- The template uses `pnpm` as the preferred package manager
- All pages use Spanish as the default language (`lang="es"`)
- Contact form integration requires EmailJS configuration
- Image optimization: Replace with same filenames initially, then use descriptive SEO-friendly names
- Font configuration uses Bebas Neue for headings and Source Sans Pro for body text