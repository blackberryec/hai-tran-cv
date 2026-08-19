# Hai Tran Nam — Portfolio & Engineering CV

A two-view personal website built with Next.js 16:

- `/` — editorial portfolio, experience and 2026 field notes
- `/cv` — print-first engineering résumé preview
- `/Hai-Tran-Nam-CV-2026.pdf` — downloadable professional CV

## Local development

```bash
npm install
npm run dev
```

## Verification

```bash
npm run lint
npm run typecheck
npm run build
```

Profile content is kept in `src/data/profile.json` so the website and PDF source can share one factual model.
