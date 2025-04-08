import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"
import github from '@astrojs/github'

import robotsTxt from "astro-robots-txt"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), robotsTxt()],
  site: 'https://porfolio.dev/',
  adater: github(),
  base: 'https://coriamartinn.github.io/portfolio-dev'
})
