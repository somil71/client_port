import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { useMemo, useState } from 'react'
import PageMeta from '../components/PageMeta'
import { getSiteUrl } from '../config/site'
import { getPortfolioMediaEntries } from '../data/projects'
import { seoContent } from '../data/siteContent'

type ReelFilter = string

const reelAccents: Record<string, { primary: string; secondary: string; glow: string }> = {
  VFX: { primary: 'rgba(255, 155, 113, 0.30)', secondary: 'rgba(125, 195, 255, 0.22)', glow: 'rgba(255, 214, 143, 0.18)' },
  'Video Editing': { primary: 'rgba(255, 155, 113, 0.28)', secondary: 'rgba(255, 199, 120, 0.2)', glow: 'rgba(255, 129, 92, 0.18)' },
  'Motion Graphics': { primary: 'rgba(255, 143, 171, 0.26)', secondary: 'rgba(167, 201, 255, 0.22)', glow: 'rgba(255, 214, 143, 0.14)' },
  'Digital Filmmaking': { primary: 'rgba(129, 157, 191, 0.26)', secondary: 'rgba(255, 155, 113, 0.18)', glow: 'rgba(255, 244, 212, 0.12)' },
  All: { primary: 'rgba(255, 155, 113, 0.26)', secondary: 'rgba(125, 195, 255, 0.2)', glow: 'rgba(255, 214, 143, 0.14)' },
}

export default function Showreel() {
  const reelEntries = useMemo(() => getPortfolioMediaEntries(), [])
  const reelFilters = useMemo<ReelFilter[]>(
    () => ['All', ...Array.from(new Set(reelEntries.map((entry) => entry.category)))],
    [reelEntries],
  )
  const [activeFilter, setActiveFilter] = useState<ReelFilter>('All')
  const [activeVideoId, setActiveVideoId] = useState(reelEntries[0]?.id ?? '')
  const { scrollYProgress } = useScroll()
  const glowOpacity = useTransform(scrollYProgress, [0, 0.25, 0.5], [0.24, 0.58, 0.3])
  const heroY = useTransform(scrollYProgress, [0, 0.22], [0, -36])
  const consoleY = useTransform(scrollYProgress, [0, 0.35], [26, 0])

  const filteredEntries = useMemo(
    () => (activeFilter === 'All' ? reelEntries : reelEntries.filter((entry) => entry.category === activeFilter)),
    [activeFilter, reelEntries],
  )

  const activeReel = filteredEntries.find((entry) => entry.id === activeVideoId) ?? filteredEntries[0] ?? reelEntries[0]
  const activeIndex = filteredEntries.findIndex((entry) => entry.id === activeReel?.id)
  const accent = reelAccents[activeReel?.category ?? 'All'] ?? reelAccents.All

  const networkNodes = useMemo(
    () =>
      reelFilters
        .filter((filter) => filter !== 'All')
        .map((filter) => ({
          label: filter,
          count: reelEntries.filter((entry) => entry.category === filter).length,
          active: filter === activeFilter || (activeFilter === 'All' && activeReel?.category === filter),
        })),
    [activeFilter, activeReel?.category, reelEntries, reelFilters],
  )

  const stageStats = [
    { label: 'Linked clips', value: String(reelEntries.length).padStart(2, '0') },
    { label: 'Filtered view', value: String(filteredEntries.length).padStart(2, '0') },
    { label: 'Active signal', value: activeReel ? String(activeIndex + 1).padStart(2, '0') : '00' },
  ]

  return (
    <div className="page-shell page-showreel min-h-screen pt-24 px-6 lg:px-24">
      <PageMeta
        title={seoContent.showreelTitle}
        description={seoContent.showreelDescription}
        url={getSiteUrl('/showreel')}
      />

      <motion.div style={{ opacity: glowOpacity }} className="cinema-glow" />
      <div className="cinema-grid-overlay" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.section style={{ y: heroY }} className="mb-16 xl:mb-20">
          <div className="grid xl:grid-cols-[minmax(0,0.86fr)_minmax(22rem,1.14fr)] gap-8 xl:gap-10 items-stretch">
            <div className="space-y-6 min-w-0">
              <span className="cinema-kicker">Showreel / Interconnected reality</span>
              <h1 className="cinema-title">
                Cinematic fragments,
                <span className="block accent-soft">stitched into one signal map.</span>
              </h1>
              <p className="text-white/76 text-lg leading-relaxed max-w-2xl">
                This page is designed like a connected playback system: teaser edits, VFX studies, and motion clips
                are arranged as linked realities instead of a flat media wall. Each chapter feeds the next.
              </p>

              <div className="grid sm:grid-cols-3 gap-4">
                {stageStats.map((stat) => (
                  <div key={stat.label} className="cinema-stat-card">
                    <p className="cinema-stat-value">{stat.value}</p>
                    <p className="cinema-stat-label">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {activeReel ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="cinema-network-panel"
              >
                <div className="cinema-network-backdrop">
                  <div className="cinema-network-shade" />
                  <div
                    className="cinema-network-aurora"
                    style={{
                      background: `
                        radial-gradient(circle at 20% 24%, ${accent.primary}, transparent 18%),
                        radial-gradient(circle at 76% 22%, ${accent.secondary}, transparent 20%),
                        radial-gradient(circle at 70% 72%, ${accent.glow}, transparent 18%)
                      `,
                    }}
                  />
                  <motion.div
                    animate={{ x: [0, 18, -10, 0], y: [0, -16, 10, 0], scale: [1, 1.05, 0.98, 1] }}
                    transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
                    className="cinema-network-orb cinema-network-orb-primary"
                    style={{
                      background: `radial-gradient(circle at 36% 36%, rgba(255,255,255,0.92), ${accent.primary.replace(/0\.\d+\)/, '0.78)')} 44%, rgba(255,255,255,0.02) 76%)`,
                    }}
                  />
                  <motion.div
                    animate={{ x: [0, -14, 8, 0], y: [0, 12, -8, 0], scale: [1, 0.97, 1.03, 1] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 0.35 }}
                    className="cinema-network-orb cinema-network-orb-secondary"
                    style={{
                      background: `radial-gradient(circle at 38% 38%, rgba(255,255,255,0.82), ${accent.secondary.replace(/0\.\d+\)/, '0.66)')} 42%, rgba(255,255,255,0.02) 76%)`,
                    }}
                  />
                  <motion.div
                    animate={{ x: [0, 8, -6, 0], y: [0, -8, 6, 0], scale: [1, 1.02, 0.99, 1] }}
                    transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
                    className="cinema-network-orb cinema-network-orb-tertiary"
                    style={{
                      background: `radial-gradient(circle at 38% 38%, rgba(255,255,255,0.78), ${accent.glow.replace(/0\.\d+\)/, '0.58)')} 40%, rgba(255,255,255,0.02) 74%)`,
                    }}
                  />
                  <div className="cinema-network-rings" />
                </div>

                <div className="cinema-network-content">
                  <div className="cinema-network-header">
                    <span className="cinema-chip">Current portal</span>
                    <span className="cinema-chip">{activeReel.category}</span>
                  </div>

                  <div className="cinema-network-copy">
                    <p className="text-xs uppercase tracking-[0.28em] text-white/62">Now playing</p>
                    <h2 className="text-3xl lg:text-4xl font-grotesk leading-tight">{activeReel.title}</h2>
                    <p className="text-white/72 max-w-xl leading-relaxed">{activeReel.chapter}</p>
                  </div>

                  <div className="cinema-node-grid">
                    {networkNodes.map((node, index) => (
                      <button
                        key={node.label}
                        type="button"
                        onClick={() => {
                          setActiveFilter(node.label)
                          const nextEntries = reelEntries.filter((entry) => entry.category === node.label)
                          setActiveVideoId(nextEntries[0]?.id ?? '')
                        }}
                        className={`cinema-node-card ${node.active ? 'cinema-node-card-active' : ''}`}
                        style={{ transitionDelay: `${index * 40}ms` }}
                      >
                        <span className="cinema-node-label">{node.label}</span>
                        <span className="cinema-node-count">{String(node.count).padStart(2, '0')}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : null}
          </div>
        </motion.section>

        <section className="grid xl:grid-cols-[minmax(0,0.96fr)_minmax(20rem,0.74fr)] gap-8 items-start mb-20">
          <motion.div
            style={{ y: consoleY }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            className="cinema-console xl:sticky xl:top-28"
          >
            <div className="cinema-console-head">
              <div>
                <p className="cinema-kicker">Playback chamber</p>
                <h2 className="text-3xl lg:text-4xl font-grotesk mt-3">A stitched cinematic feed.</h2>
              </div>
              <div className="cinema-console-badge">
                <span className="cinema-console-dot" />
                Live sequence
              </div>
            </div>

            {activeReel ? (
              <>
                <motion.div layout className="cinema-screen-shell">
                  <div className="cinema-screen">
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
                          <p className="text-xs uppercase tracking-[0.28em] text-white/60">{activeReel.category}</p>
                          <h3 className="text-2xl lg:text-3xl font-grotesk">{activeReel.title}</h3>
                          <p className="text-sm text-white/72">{activeReel.description}</p>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </motion.div>

                <div className="cinema-console-grid">
                  <div className="cinema-panel p-5">
                    <p className="cinema-kicker mb-3">Signal metadata</p>
                    <div className="space-y-3 text-white/72">
                      <div className="cinema-meta-row">
                        <span>Category</span>
                        <span>{activeReel.category}</span>
                      </div>
                      <div className="cinema-meta-row">
                        <span>Chapter</span>
                        <span>{activeReel.chapter}</span>
                      </div>
                      <div className="cinema-meta-row">
                        <span>In current stream</span>
                        <span>{filteredEntries.length}</span>
                      </div>
                    </div>
                  </div>

                  <div className="cinema-panel p-5">
                    <p className="cinema-kicker mb-3">Open portal</p>
                    <p className="text-white/70 leading-relaxed mb-4">
                      Switch to the native YouTube page when you want full playback controls, comments, or sharing.
                    </p>
                    <a
                      href={activeReel.url}
                      target="_blank"
                      rel="noreferrer"
                      className="secondary-link justify-center w-full"
                    >
                      Open on YouTube
                    </a>
                  </div>
                </div>
              </>
            ) : (
              <div className="cinema-panel p-6">
                <p className="text-white/72 leading-relaxed">No reels are available for the selected filter yet.</p>
              </div>
            )}
          </motion.div>

          <div className="space-y-5 min-w-0">
            <div className="cinema-panel p-5">
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
            </div>

            <div className="cinema-timeline">
              {filteredEntries.map((video, idx) => (
                <motion.button
                  key={video.id}
                  type="button"
                  onClick={() => setActiveVideoId(video.id)}
                  initial={{ opacity: 0, x: 22 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className={`cinema-chapter cinema-chapter-linked ${activeReel?.id === video.id ? 'cinema-chapter-active' : ''}`}
                >
                  <div className="cinema-chapter-node">{String(idx + 1).padStart(2, '0')}</div>

                  <div className="grid gap-4 sm:grid-cols-[8rem_minmax(0,1fr)] items-center min-w-0">
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
                      <p className="text-xs uppercase tracking-[0.28em] text-white/60">{video.category}</p>
                      <h3 className="text-2xl font-grotesk break-words leading-tight">{video.title}</h3>
                      <p className="text-white/68 max-w-xl leading-relaxed">{video.description}</p>
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
