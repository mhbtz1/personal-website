import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import About from './pages/About'
import PostsIndex from './pages/PostsIndex'
import Post from './pages/Post'
import Projects from './pages/Projects'
import Videos from './pages/Videos'
import Resume from './pages/Resume'
import NotFound from './pages/NotFound'

/**
 * Routes without a router, so the prerenderer can wrap them in a StaticRouter
 * while the browser wraps them in a BrowserRouter.
 */
export function AppRoutes() {
  return (
    <Layout>
      <Routes>
        {/* Posts are the landing page — the writing is the point of the site. */}
        <Route path="/" element={<PostsIndex />} />
        <Route path="/posts/:slug" element={<Post />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/resume" element={<Resume />} />

        {/* Legacy paths kept so previously-shared links keep resolving. */}
        <Route path="/posts" element={<Navigate to="/" replace />} />
        <Route path="/articles" element={<Navigate to="/" replace />} />
        <Route path="/content" element={<Navigate to="/videos" replace />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
