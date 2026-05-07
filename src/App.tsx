import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'

const Home = lazy(() => import('./pages/Home'))
const Work = lazy(() => import('./pages/Work'))
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
            <Route path="/about" element={<About />} />
            <Route path="/showreel" element={<Showreel />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
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
