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

Hosted on [Cloudflare Pages](https://sitegoons.com) (`sitegoons` project).

### Manual deploy

```bash
npm run build
npx wrangler pages deploy dist --project-name sitegoons
```

### GitHub Actions (auto-deploy on push to `main`)

Repo: [github.com/FieldsBarnettCFA/site-goons](https://github.com/FieldsBarnettCFA/site-goons)

Add one repository secret to enable CI deploys:

| Secret | Value |
|--------|-------|
| `CLOUDFLARE_API_TOKEN` | API token with **Account → Cloudflare Pages → Edit** |

`CLOUDFLARE_ACCOUNT_ID` is already set as a repo variable (`59140f15e41466ef95ff7df6be2fc2f7`).
