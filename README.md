# Emerald Euphoria Website

Premium Vite + React concept website for Emerald Euphoria.

## Run locally

1. Install dependencies:
   `npm install`
2. Start development server:
   `npm run dev`
3. Build for production:
   `npm run build`

## Project structure

- `src/App.jsx`: page components and routing
- `src/siteData.js`: hotel content, contact details, room info and booking links
- `src/styles.css`: premium emerald/gold visual system
- `public/images/`: replaceable gallery and room visuals
- `public/hotel-logo.svg`: editable logo mark

## Content notes

- The address and map coordinates are wired for Emerald Euphoria in Neeladri Vihar, Bhubaneswar.
- The current booking phone and WhatsApp CTA use the publicly visible booking support number found on the OYO listing because a direct hotel WhatsApp number could not be verified from the available sources in this environment.
- The project now bundles real room photos downloaded from the property's public OYO listing, plus custom branded fallback artwork for sections where a matching public facade or event image was not exposed.
- If you want to replace any image with your exact uploaded files, place them in `public/images/` and update the image paths inside `src/siteData.js`.
