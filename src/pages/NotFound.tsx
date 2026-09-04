import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

export default function NotFound() {
  return (
    <div className="page">
      <Seo
        title="Not found"
        description="That page could not be found."
        path="/404"
        type="website"
      />
      <h1 className="page-title">404</h1>
      <p className="about-intro">That page could not be found.</p>
      <p style={{ marginTop: '1.5rem' }}>
        <Link to="/" className="link">
          Browse posts
        </Link>
      </p>
    </div>
  )
}
