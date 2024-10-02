import {
  vitePlugin as remix,
  cloudflareDevProxyVitePlugin as remixCloudflareDevProxy,
} from "@remix-run/dev";
import { flatRoutes } from 'remix-flat-routes';
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import adapter from '@hono/vite-dev-server/cloudflare'
import serverAdapter from 'hono-remix-adapter/vite'

export default defineConfig({
  plugins: [
    remixCloudflareDevProxy(),
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
      routes: async (defineRoutes) => {
        return flatRoutes('routes', defineRoutes, {
          ignoredRouteFiles: [
            '.*',
            '**/*.css',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__*.*',
            '**/*.server.*',
            '**/*.client.*',
          ],
        });
      },
    }),
    serverAdapter({
      adapter,
      entry: 'server/index.ts',
    }),
    tsconfigPaths(),
  ],
});
