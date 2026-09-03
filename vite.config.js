
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// Relative asset paths so the built bundle works on GitHub Pages (project subpath, user site, or custom domain)
export default defineConfig({
  base: './',
  define: {
    // Fallback so a static `vite build` (e.g. on GitHub Actions) can still reach the Base44 backend
    'import.meta.env.VITE_BASE44_APP_ID': JSON.stringify(
      process.env.VITE_BASE44_APP_ID || '6a9955210eb7e7144a0fda64'
    ),
  },
  plugins: [
    base44({
      // Support for legacy code that imports the base44 SDK with @/integrations, @/entities, etc.
      // can be removed if the code has been updated to use the new SDK imports from @base44/sdk
      legacySDKImports: process.env.BASE44_LEGACY_SDK_IMPORTS === 'true',
      hmrNotifier: true,
      navigationNotifier: true,
      analyticsTracker: true,
      visualEditAgent: true
    }),
    react(),
  ]
});