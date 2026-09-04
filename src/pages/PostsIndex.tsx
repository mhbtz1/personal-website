import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import { seoForPath } from '../lib/seo'
import { posts, formatDate } from '../lib/posts'
import '../css/posts.css'

/**
 * Previously-published pieces that live on LinkedIn. Tracking parameters have
 * been stripped from the URLs. Migrate these into src/posts/*.mdx over time.
 */
const EXTERNAL_POSTS = [
  {
    title: 'Primitives for Agentic Applications',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7398482291158634496/',
  },
  {
    title: 'Evaluating Agents for Critical Applications',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7395151671783301120/',
  },
  {
    title: 'Agent Design Thoughts',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7391927297546657792/',
  },
  {
    title: 'UX For AI Applications',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7389351368324710400/',
  },
]

export default function PostsIndex() {
  return (
    <div className="page">
      <Seo {...seoForPath('/')} />

      <h1 className="page-title">Posts</h1>

      {posts.length === 0 ? (
        <p className="empty-state">Nothing published yet.</p>
      ) : (
        <ul className="rule-list">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link to={`/posts/${post.slug}`} className="row">
                <div className="chrome meta-row">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span>{post.readingMinutes} min</span>
                </div>
                <h2 className="row-title">{post.title}</h2>
                <p className="row-summary">{post.abstract}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}

      {EXTERNAL_POSTS.length > 0 && (
        <section className="elsewhere" aria-labelledby="elsewhere-heading">
          <h2 className="chrome elsewhere-heading" id="elsewhere-heading">
            Elsewhere
          </h2>
          <ul className="rule-list">
            {EXTERNAL_POSTS.map((item) => (
              <li key={item.url}>
                <a
                  className="row elsewhere-row"
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="elsewhere-title">{item.title}</span>
                  <span className="chrome">LinkedIn &#8599;</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  )
}
