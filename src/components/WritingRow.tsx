import { Link } from 'react-router-dom'
import { isExternal, type WritingEntry } from '../data/writing'
import '../css/entries.css'

function shortDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    timeZone: 'UTC',
  })
}

export default function WritingRow({ entry, showAbstract = false }: { entry: WritingEntry; showAbstract?: boolean }) {
  const body = (
    <>
      <time className="chrome writing-date" dateTime={entry.date}>
        {shortDate(entry.date)}
      </time>
      <span className="writing-main">
        <span className="writing-title">{entry.title}</span>
        {showAbstract && entry.abstract && <span className="writing-abstract">{entry.abstract}</span>}
      </span>
      <span className="chrome writing-venue">
        {isExternal(entry) ? <>{entry.venue} &#8599;</> : entry.readingMinutes ? `${entry.readingMinutes} min` : ''}
      </span>
    </>
  )

  return (
    <li>
      {isExternal(entry) ? (
        <a className="writing-row" href={entry.href} target="_blank" rel="noopener noreferrer">
          {body}
        </a>
      ) : (
        <Link className="writing-row" to={entry.href}>
          {body}
        </Link>
      )}
    </li>
  )
}
