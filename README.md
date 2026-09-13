# SiteGoons

Marketing site for [sitegoons.com](https://sitegoons.com) — custom software solutions.

Built with React, Vite, and Tailwind CSS. Deployed on Cloudflare Pages.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

Pushes to `main` auto-deploy via Cloudflare Pages. Manual deploy:

```bash
npm run build
npx wrangler pages deploy dist --project-name sitegoons
```
