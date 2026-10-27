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

GitHub Actions deploys pushes to `main` to https://jaydenruddock.com/. The custom domain serves the site from the root, so the deployment build leaves `NEXT_PUBLIC_BASE_PATH` unset. Local builds do the same. `public/CNAME` keeps the domain attached to each Pages deployment.

## Editing

- Project descriptions and contact links: `src/lib/content.ts`
- Navigation labels and matching section headings: `src/lib/sections.ts`
- Biography and page structure: `src/app/page.tsx`
- Styles: `src/app/globals.css`
- Resume: `public/Jayden-Ruddock-Resume.pdf`
- Portrait: `public/images/jayden.webp`

## Adding or updating projects

Edit `src/lib/content.ts`. Each project is an entry in one of three lists:

- `selectedWork`: featured work, displayed in detail.
- `moreProjects`: additional projects, displayed in a compact list.
- `experiments`: prototypes and unfinished work, under the Experiments heading.

Entries appear in list order. Add a project by copying an existing entry, or move an entry between lists to change where it appears. The page renders each list automatically; no component or CSS changes are needed.

Every project needs a unique `name` and a `paragraphs` list. Optional fields are `role`, `status`, `href`, `linkLabel`, and `demoHref`. Set `linkLabel` whenever you supply `href`. Use `demoHref` for an additional live-site link, and omit links that are not available. Keep descriptions factual and give collaboration credit where appropriate.

To add visuals, place files in `public/projects/` and add a `logo` path or a `preview` object to the project entry. Use paths starting with `/projects/`. The site adds `NEXT_PUBLIC_BASE_PATH` only when that variable is set. Leave it unset for jaydenruddock.com. A preview needs `src`, descriptive `alt` text, a short `caption`, and the image's actual `width` and `height`. Screenshots link to `demoHref` when supplied, otherwise `href`; previews without a destination remain static images. Both fields are optional, so text-only entries keep their existing layout.

Use WebP assets, preserve the original aspect ratio, and export logos at about twice their displayed dimensions. Keep screenshots at their existing desktop resolution so the interface remains legible. Supply image dimensions to reserve space while loading. The first project's preview loads eagerly; later previews load as they approach the viewport.

Project logos come from their project repositories, with the Jack Academy wordmark supplied separately. The Internship Grabber and Texas NSBE screenshots show their public homepages, captured October 25, 2026. Use public-facing screens without account or personal information when replacing screenshots.

Update contact destinations in `contacts` in the same file. The visible email is derived from its mail link. Replace the public resume PDF with a copy intended for publication, without private contact details.

Section labels are shared between navigation and headings through `src/lib/sections.ts`. Keep the existing section IDs when changing labels so saved links continue to work. The More projects section retains `#archive` for compatibility.

## Reviewing changes

Create a branch from the latest `main`, make the update, and run `npm run typecheck` and `npm run build`. Open a pull request for review. Pull requests run the same checks automatically and do not deploy the site. Merging into `main` triggers deployment.
