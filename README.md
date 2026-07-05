# Personal Site

A lean, static personal resume site built with Vue 3, TypeScript, and vite-ssg.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

1. Push this repo to GitHub (name it `adelabdallah.github.io` for a user site, or any name for a project site).
2. Go to **Settings → Pages → Build and deployment** and set source to **GitHub Actions**.
3. Push to `master` — the workflow in `.github/workflows/deploy.yml` builds and deploys automatically.

For a project site (not a user site), set `base` in `vite.config.ts` to your repo name (e.g. `'/personal_site/'`).

## Editing content

All copy lives in [`src/content/resume.ts`](src/content/resume.ts):

- `subtitlePhrases` — random subtitle lines shown on page load
- `about`, `experience`, `skills`
- Social profile URLs

Set `pdfResumeAvailable` to `true` and add `public/resume.pdf` to enable the download button.

## Theme

Light theme by default. Respects system dark mode preference on first visit. Manual toggle is saved to `localStorage`.
