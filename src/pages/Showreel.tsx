import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { useMemo, useState } from 'react'
import PageMeta from '../components/PageMeta'
import { getSiteUrl } from '../config/site'
import { getPortfolioMediaEntries } from '../data/projects'
import { seoContent } from '../data/siteContent'

type ReelFilter = string

export default function Showreel() {
  const reelEntries = useMemo(() => getPortfolioMediaEntries(), [])
  const reelFilters = useMemo<ReelFilter[]>(
    () => ['All', ...Array.from(new Set(reelEntries.map((entry) => entry.category)))],
    [reelEntries],
  )
  const [activeFilter, setActiveFilter] = useState<ReelFilter>('All')
  const [activeVideoId, setActiveVideoId] = useState(reelEntries[0]?.id ?? '')
  const { scrollYProgress } = useScroll()
  const frameScale = useTransform(scrollYProgress, [0, 0.35], [0.92, 1])
  const frameY = useTransform(scrollYProgress, [0, 0.35], [50, 0])
  const glowOpacity = useTransform(scrollYProgress, [0, 0.25, 0.5], [0.2, 0.55, 0.28])

  const filteredEntries = useMemo(
    () => (activeFilter === 'All' ? reelEntries : reelEntries.filter((entry) => entry.category === activeFilter)),
    [activeFilter, reelEntries],
  )

  const activeReel = filteredEntries.find((entry) => entry.id === activeVideoId) ?? filteredEntries[0] ?? reelEntries[0]

  return (
    <div className="page-shell page-showreel min-h-screen pt-24 px-6 lg:px-24">
      <PageMeta
        title={seoContent.showreelTitle}
        description={seoContent.showreelDescription}
        url={getSiteUrl('/showreel')}
      />

      <motion.div style={{ opacity: glowOpacity }} className="cinema-glow" />

      <div className="max-w-6xl mx-auto relative z-10">
        <section className="min-h-[70vh] flex items-center mb-16">
          <div className="grid xl:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] gap-10 items-center w-full">
            <div className="space-y-5 min-w-0">
              <span className="cinema-kicker">Showreel / Curated playback</span>
              <h1 className="cinema-title">
                Latest portfolio clips,
                <span className="block accent-soft">sequenced for cinematic review.</span>
              </h1>
              <p className="text-white/72 text-lg leading-relaxed max-w-2xl">
                Browse teaser edits, short-film chapters, and VFX-driven work without opening a crowded media wall.
                The showreel is built from live project links so the strongest pieces stay easy to review.
              </p>
            </div>

            {activeReel && (
              <motion.div style={{ scale: frameScale, y: frameY }} className="cinema-screen">
                <div className="cinema-bars cinema-bars-top" />
                <div className="cinema-bars cinema-bars-bottom" />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeReel.id}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.55, ease: 'easeInOut' }}
                    className="cinema-embed-shell"
                  >
                    <iframe
                      src={activeReel.embedUrl}
                      title={activeReel.title}
                      className="cinema-embed"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                    <div className="cinema-screen-meta">
                      <p className="text-xs uppercase tracking-[0.28em] text-white/42">{activeReel.category}</p>
                      <h2 className="text-2xl lg:text-3xl font-grotesk">{activeReel.title}</h2>
                      <p className="text-sm text-white/60">{activeReel.chapter} / YouTube embed</p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            )}
          </div>
        </section>

        <section className="grid xl:grid-cols-[minmax(18rem,0.42fr)_minmax(0,0.58fr)] gap-8 items-start mb-20">
          <div className="xl:sticky xl:top-28 cinema-panel p-6 min-w-0">
            <p className="cinema-kicker mb-4">Active reel</p>
            {activeReel ? (
              <>
                <h2 className="text-3xl font-grotesk mb-3">{activeReel.title}</h2>
                <p className="text-white/72 leading-relaxed mb-6">
                  {activeReel.description}
                </p>
                <div className="flex flex-wrap items-center gap-3 text-white/55 text-sm uppercase tracking-[0.22em] mb-6">
                  <span>{activeReel.category}</span>
                  <span className="h-1 w-1 rounded-full bg-white/35" />
                  <span>{activeReel.chapter}</span>
                  <span className="h-1 w-1 rounded-full bg-white/35" />
                  <span>{filteredEntries.length} in view</span>
                </div>
                <a
                  href={activeReel.url}
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-link justify-center w-full"
                >
                  Open on YouTube
                </a>
              </>
            ) : (
              <p className="text-white/72 leading-relaxed">
                No reels are available for the selected filter yet.
              </p>
            )}
          </div>

          <div className="space-y-5 min-w-0">
            <div className="cinema-filter-row">
              {reelFilters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => {
                    setActiveFilter(filter)
                    const nextEntries = filter === 'All'
                      ? reelEntries
                      : reelEntries.filter((entry) => entry.category === filter)
                    setActiveVideoId(nextEntries[0]?.id ?? '')
                  }}
                  className={`cinema-filter-pill ${activeFilter === filter ? 'cinema-filter-pill-active' : ''}`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="space-y-4 min-w-0">
              {filteredEntries.map((video, idx) => (
                <motion.button
                  key={video.id}
                  type="button"
                  onClick={() => setActiveVideoId(video.id)}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className={`cinema-chapter ${activeReel?.id === video.id ? 'cinema-chapter-active' : ''}`}
                >
                  <div className="grid md:grid-cols-[10rem_minmax(0,1fr)] gap-5 items-center min-w-0">
                    {video.thumbnail ? (
                      <img
                        src={video.thumbnail}
                        alt={`${video.title} thumbnail`}
                        className="cinema-thumb h-24 w-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="cinema-thumb cinema-thumb-placeholder">
                        <span>{video.category}</span>
                      </div>
                    )}

                    <div className="space-y-2 text-left min-w-0">
                      <p className="text-xs uppercase tracking-[0.28em] text-white/42">{video.category}</p>
                      <h3 className="text-2xl font-grotesk break-words">{video.title}</h3>
                      <p className="text-white/65 max-w-xl leading-relaxed">{video.description}</p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
