# Welcome to Remix + Cloudflare + Hono RPC

- 📖 [Remix docs](https://remix.run/docs)
- 📖 [Remix Cloudflare docs](https://remix.run/guides/vite#cloudflare)

## Created .env
```sh
touch .env 
```

`.env` : 共通
```
VITE_API_URL="https://****/" -- 本番環境のURLを
```

`.env.local` : pnpm run dev 時
```env
VITE_API_URL="http://localhost:5173/"
```

`.env.preview` : pnpm run preview 時
```env
VITE_API_URL="http://localhost:8788/"
```

## Development

Run the dev server:

```sh
pnpm run dev
```

To run Wrangler:

```sh
pnpm run preview
```

## Typegen

Generate types for your Cloudflare bindings in `wrangler.toml`:

```sh
pnpm run typegen
```

You will need to rerun typegen whenever you make changes to `wrangler.toml`.

## Deployment

First, build your app for production:

```sh
pnpm run build
```

Then, deploy your app to Cloudflare Pages:

```sh
pnpm run deploy
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.
