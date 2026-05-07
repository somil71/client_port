import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { useMemo, useState } from 'react'
import PageMeta from '../components/PageMeta'

type ReelItem = {
  id: number
  title: string
  duration: string
  description: string
  chapter: string
  embedUrl: string
  thumbnail: string
}

const reelData: ReelItem[] = [
  {
    id: 1,
    title: 'Placeholder Creative Showreel',
    duration: '02:40',
    description: 'Placeholder reel data for motion graphics, editing beats, title treatment, and cinematic transitions.',
    chapter: 'Opening burst',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0',
    thumbnail: '',
  },
  {
    id: 2,
    title: 'Placeholder Editing and Filmmaking Reel',
    duration: '01:55',
    description: 'Placeholder reel data for scene assembly, continuity, pacing, and mood-led editorial structure.',
    chapter: 'Narrative rhythm',
    embedUrl: 'https://player.vimeo.com/video/76979871',
    thumbnail: '',
  },
  {
    id: 3,
    title: 'Placeholder Graphics and Animation Reel',
    duration: '01:32',
    description: 'Placeholder reel data for typography motion, 2D animation studies, and visual system transitions.',
    chapter: 'Graphic surge',
    embedUrl: 'https://www.youtube.com/embed/ysz5S6PUM-U?rel=0',
    thumbnail: '',
  },
  {
    id: 4,
    title: 'Placeholder VFX and Compositing Reel',
    duration: '02:05',
    description: 'Placeholder reel data for clean-up passes, glow work, atmospheric overlays, and compositing tests.',
    chapter: 'Atmosphere pass',
    embedUrl: 'https://player.vimeo.com/video/22439234',
    thumbnail: '',
  },
]

function getEmbedLabel(embedUrl: string) {
  if (embedUrl.includes('youtube.com') || embedUrl.includes('youtu.be')) {
    return 'YouTube embed'
  }

  if (embedUrl.includes('vimeo.com')) {
    return 'Vimeo embed'
  }

  return 'Embedded reel'
}

export default function Showreel() {
  const [activeVideo, setActiveVideo] = useState(0)
  const { scrollYProgress } = useScroll()
  const frameScale = useTransform(scrollYProgress, [0, 0.35], [0.92, 1])
  const frameY = useTransform(scrollYProgress, [0, 0.35], [50, 0])
  const glowOpacity = useTransform(scrollYProgress, [0, 0.25, 0.5], [0.2, 0.55, 0.28])

  const activeReel = reelData[activeVideo]
  const providerLabel = useMemo(() => getEmbedLabel(activeReel.embedUrl), [activeReel.embedUrl])

  return (
    <div className="page-shell page-showreel min-h-screen pt-24 px-6 lg:px-24">
      <PageMeta
        title="Somil Portfolio | Showreel"
        description="Showreel page with placeholder YouTube and Vimeo embeds for motion graphics, editing, filmmaking, animation, and VFX highlights."
        url="https://client-port.example.com/showreel"
      />

      <motion.div style={{ opacity: glowOpacity }} className="cinema-glow" />

      <div className="max-w-6xl mx-auto relative z-10">
        <section className="min-h-[70vh] flex items-center mb-16">
          <div className="grid xl:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] gap-10 items-center w-full">
            <div className="space-y-5 min-w-0">
              <span className="cinema-kicker">Showreel / Embedded player</span>
              <h1 className="cinema-title">
                A focused reel page
                <span className="block accent-soft">with real placeholder playback.</span>
              </h1>
              <p className="text-white/72 text-lg leading-relaxed max-w-2xl">
                The page keeps its dark cinematic treatment, but now the selected reel is rendered in an actual iframe player so the layout behaves like a real showreel showcase instead of a presentation-only mockup.
              </p>
            </div>

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
                    <p className="text-xs uppercase tracking-[0.28em] text-white/42">{activeReel.chapter}</p>
                    <h2 className="text-2xl lg:text-3xl font-grotesk">{activeReel.title}</h2>
                    <p className="text-sm text-white/60">{providerLabel} / placeholder content</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        <section className="grid xl:grid-cols-[minmax(18rem,0.45fr)_minmax(0,0.55fr)] gap-8 items-start mb-20">
          <div className="xl:sticky xl:top-28 cinema-panel p-6 min-w-0">
            <p className="cinema-kicker mb-4">Active reel</p>
            <h2 className="text-3xl font-grotesk mb-3">{activeReel.title}</h2>
            <p className="text-white/72 leading-relaxed mb-6">{activeReel.description}</p>
            <div className="flex flex-wrap items-center gap-3 text-white/55 text-sm uppercase tracking-[0.22em]">
              <span>{activeReel.duration}</span>
              <span className="h-1 w-1 rounded-full bg-white/35" />
              <span>{activeReel.chapter}</span>
              <span className="h-1 w-1 rounded-full bg-white/35" />
              <span>{providerLabel}</span>
            </div>
          </div>

          <div className="space-y-4 min-w-0">
            {reelData.map((video, idx) => (
              <motion.button
                key={video.id}
                onClick={() => setActiveVideo(idx)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`cinema-chapter ${activeVideo === idx ? 'cinema-chapter-active' : ''}`}
              >
                <div className="grid md:grid-cols-[12rem_minmax(0,1fr)_auto] gap-5 items-center min-w-0">
                  {video.thumbnail ? (
                    <img
                      src={video.thumbnail}
                      alt={`${video.title} thumbnail`}
                      className="cinema-thumb h-28 w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="cinema-thumb cinema-thumb-placeholder">
                      <span>{video.chapter}</span>
                    </div>
                  )}

                  <div className="space-y-2 text-left min-w-0">
                    <p className="text-xs uppercase tracking-[0.28em] text-white/42">{video.chapter}</p>
                    <h3 className="text-2xl font-grotesk break-words">{video.title}</h3>
                    <p className="text-white/65 max-w-xl leading-relaxed">{video.description}</p>
                  </div>

                  <div className="cinema-time">{video.duration}</div>
                </div>
              </motion.button>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
