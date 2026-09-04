import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import path from 'path'

import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'
import rehypeKatex from 'rehype-katex'

const WORDS_PER_MINUTE = 220

/**
 * Injects `readingMinutes` into each post's YAML frontmatter at build time.
 *
 * Must run after remark-frontmatter (which parses the `---` block into a yaml
 * node) and before remark-mdx-frontmatter (which turns that node into the
 * exported `frontmatter` object).
 *
 * Doing it here rather than in the client means the raw post source never has
 * to be shipped to the browser just to be counted.
 */
function remarkReadingTime() {
  return (tree: { children: { type: string; value: string }[] }, file: { value: unknown }) => {
    const source = String(file.value)
    // Fenced code reads far slower per word and would skew a word-count estimate.
    const prose = source
      .replace(/^---\n[\s\S]*?\n---\n/, '')
      .replace(/```[\s\S]*?```/g, '')
    const words = prose.split(/\s+/).filter(Boolean).length
    const minutes = Math.max(1, Math.round(words / WORDS_PER_MINUTE))

    const yamlNode = tree.children.find((node) => node.type === 'yaml')
    if (yamlNode) yamlNode.value += `\nreadingMinutes: ${minutes}`
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // MDX must run before the React plugin so the JSX it emits gets transformed.
    {
      enforce: 'pre',
      ...mdx({
        remarkPlugins: [
          remarkFrontmatter,
          remarkReadingTime,
          // Turns the YAML block into `export const frontmatter = {...}`.
          [remarkMdxFrontmatter, { name: 'frontmatter' }],
          remarkGfm,
          remarkMath,
        ],
        rehypePlugins: [
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: 'append',
              properties: { className: 'heading-anchor', ariaHidden: true, tabIndex: -1 },
              content: { type: 'text', value: '#' },
            },
          ],
          rehypeHighlight,
          rehypeKatex,
        ],
      }),
    },
    react(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    hmr: {
      port: 3005,
    },
  },
  esbuild: {
    target: 'esnext',
  },
  build: {
    minify: 'terser',
  },
})
