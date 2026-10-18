import Seo from '../components/Seo'
import WritingRow from '../components/WritingRow'
import { seoForPath } from '../lib/seo'
import { WRITING } from '../data/writing'

export default function PostsIndex() {
  return (
    <div className="page">
      <Seo {...seoForPath('/writing')} />

      <h1 className="page-title">Writing</h1>

      <ul className="rule-list">
        {WRITING.map((entry) => (
          <WritingRow key={entry.href} entry={entry} showAbstract />
        ))}
      </ul>
    </div>
  )
}
