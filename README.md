# NishaFlix

A responsive streaming-discovery experience by Nisha Batool, built with React and Vite. Browse a curated catalog, search titles and genres, open title details, and save favorites to a browser-persisted watchlist.

Created by Nisha.

## Getting started

```sh
npm install
npm run dev
```

## Available scripts

- `npm run dev` — start the Vite development server.
- `npm run build` — create a production build in `dist/`.
- `npm run preview` — serve the production build locally.
- `npm run lint` — run ESLint.

## Project structure

```text
src/
  components/   Reusable title cards and title details dialog
  data/         Curated catalog and collection definitions
  App.jsx       Application shell, navigation, search, and watchlist
  App.css       Responsive catalog and dialog styles
  index.css     Global styles and accessible defaults
```

Catalog artwork is loaded from Unsplash. Trailer buttons open YouTube search results; video playback and account services are not part of this frontend-only demo.
