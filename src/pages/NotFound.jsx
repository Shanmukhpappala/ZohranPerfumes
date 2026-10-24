import { Link } from 'react-router-dom'

function NotFound() {
  return <main className="page-shell"><p className="page-eyebrow">404</p><h1 className="page-title">This scent has wandered off.</h1><Link to="/" className="mt-6 inline-flex text-sm font-semibold uppercase tracking-[0.14em] text-[#8a4f24] transition hover:text-[#4a1022]">Return home</Link></main>
}

export default NotFound
