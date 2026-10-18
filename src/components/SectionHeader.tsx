import { Link } from 'react-router-dom'

interface SectionHeaderProps {
  id: string
  title: string
  more?: { to: string; label: string }
}

export default function SectionHeader({ id, title, more }: SectionHeaderProps) {
  return (
    <div className="section-head">
      <h2 className="chrome section-label" id={id}>
        {title}
      </h2>
      {more && (
        <Link className="chrome section-more" to={more.to}>
          {more.label} &rarr;
        </Link>
      )}
    </div>
  )
}
