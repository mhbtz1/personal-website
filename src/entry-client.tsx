import ReactDOM from 'react-dom/client'
import App from './App'
import { getPost, preloadBody } from './lib/posts'

import '@fontsource/source-serif-4/latin-400.css'
import '@fontsource/source-serif-4/latin-400-italic.css'
import '@fontsource/source-serif-4/latin-600.css'
import '@fontsource/ibm-plex-mono/latin-400.css'
import '@fontsource/ibm-plex-mono/latin-500.css'
import './index.css'
import 'katex/dist/katex.min.css'

async function boot() {
  const root = document.getElementById('root')!

  // On a prerendered article the server emitted the full body. Resolve the same
  // chunk before hydrating so the client's first render matches the markup
  // already on the page.
  const postMatch = window.location.pathname.match(/^\/posts\/([^/]+)\/?$/)
  if (postMatch) {
    const post = getPost(postMatch[1])
    if (post) {
      const mod = await post.load()
      preloadBody(post.slug, mod.default)
    }
  }

  if (root.hasChildNodes()) {
    ReactDOM.hydrateRoot(root, <App />)
  } else {
    ReactDOM.createRoot(root).render(<App />)
  }
}

void boot()
