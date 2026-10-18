import Seo from '../components/Seo'
import WritingRow from '../components/WritingRow'
import { seoForPath } from '../lib/seo'
import { WRITING } from '../data/writing'
import '../css/posts.css'

export default function PostsIndex() {
  return (
    <div className="page">
      <Seo {...seoForPath('/writing')} />

      <h1 className="page-title">Writing</h1>
      <p className="page-lede">
        Essays and notes on systems, ML infrastructure, and building with agents. Newest first; pieces
        published elsewhere are marked with where they live.
      </p>

      <ul className="rule-list">
        {WRITING.map((entry) => (
          <WritingRow key={entry.href} entry={entry} showAbstract />
        ))}
      </ul>
    </div>
  )
}
