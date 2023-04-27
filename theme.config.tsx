import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Epitech Documentation + Survival Guide</span>,
  project: {
    link: 'https://github.com/reuban-bryenton/epitech-unofficial-docs',
  },
  docsRepositoryBase: 'https://github.com/reuban-bryenton/epitech-unofficial-docs/tree/main/',
  footer: {
    text: 'Epitech Documentation + Survival Guide - Reuban Bryenton',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s - Epitech Docs'
    }
  }
}


export default config
