# Jayden Ruddock

My portfolio, built with Next.js and TypeScript. Fonts, photographs, and my resume are served locally.

## Development

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:3000.

## Production

```sh
npm run typecheck
npm run build
npm start
```

The static site is built in `out/`. `npm start` previews it at http://127.0.0.1:3000.

GitHub Actions deploys pushes to `main` to https://spacewalker215.github.io/MyPortfolio/. The workflow sets `NEXT_PUBLIC_BASE_PATH=/MyPortfolio` for the deployment build. Local builds use the root path by default.

To preview the deployment path locally, set `NEXT_PUBLIC_BASE_PATH=/MyPortfolio` before both `npm run build` and `npm start`.

## Editing

- Project descriptions and contact links: `src/lib/content.ts`
- Biography and page structure: `src/app/page.tsx`
- Styles: `src/app/globals.css`
- Resume: `public/Jayden-Ruddock-Resume.pdf`
- Portrait: `public/images/jayden.jpg`
