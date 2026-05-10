import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import PageMeta from './components/PageMeta'
import { getSiteUrl } from './config/site'
import { seoContent, siteIdentity } from './data/siteContent'

const Home = lazy(() => import('./pages/Home'))
const Work = lazy(() => import('./pages/Work'))
const WorkDetail = lazy(() => import('./pages/WorkDetail'))
const About = lazy(() => import('./pages/About'))
const Showreel = lazy(() => import('./pages/Showreel'))
const Contact = lazy(() => import('./pages/Contact'))

export default function App() {
  return (
    <Router>
      <div className="page-shell min-h-screen text-on-surface dark">
        <div className="grain-overlay" />
        <Navigation />
        <Suspense fallback={<RouteSkeleton />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Work />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:slug" element={<WorkDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/showreel" element={<Showreel />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  )
}

function RouteSkeleton() {
  return (
    <div className="px-6 lg:px-24 pt-24">
      <div className="max-w-6xl mx-auto">
        <div className="section-frame rounded-[2rem] p-8 lg:p-12 animate-pulse">
          <div className="h-4 w-32 bg-white/10 rounded-full mb-6" />
          <div className="h-14 w-full max-w-3xl bg-white/10 rounded-2xl mb-4" />
          <div className="h-5 w-full max-w-2xl bg-white/10 rounded-full mb-3" />
          <div className="h-5 w-full max-w-xl bg-white/10 rounded-full" />
        </div>
      </div>
    </div>
  )
}

function NotFoundPage() {
  return (
    <div className="px-6 lg:px-24 pt-24 pb-16">
      <PageMeta
        title={seoContent.notFoundTitle}
        description="The page you requested could not be found."
        url={getSiteUrl('/404')}
      />

      <div className="max-w-5xl mx-auto">
        <div className="section-frame rounded-[2rem] p-8 lg:p-12">
          <p className="eyebrow mb-4">404</p>
          <h1 className="section-title mb-4">Page not found</h1>
          <p className="muted-copy max-w-2xl mb-8">
            This route does not exist in the {siteIdentity.brandName} portfolio. You can head back to the homepage
            or continue into the portfolio archive.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/" className="primary-link">
              Go home
            </Link>
            <Link to="/portfolio" className="secondary-link">
              Open portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
