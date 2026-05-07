import { motion, useScroll, useTransform } from 'framer-motion'
import { useState } from 'react'
import PageMeta from '../components/PageMeta'

const showreels = [
  {
    id: 1,
    title: 'Main Creative Showreel',
    duration: '02:40',
    description: 'A quick cross-section of motion graphics, edit pacing, title work, and VFX-driven shots.',
    chapter: 'Opening burst',
  },
  {
    id: 2,
    title: 'Editing and Filmmaking Reel',
    duration: '01:55',
    description: 'Scene assembly, transitions, shot continuity, and mood-led sequencing from short-form projects.',
    chapter: 'Narrative rhythm',
  },
  {
    id: 3,
    title: 'Graphics and Animation Reel',
    duration: '01:32',
    description: 'Poster transitions, typography studies, animated cards, and 2D motion treatments.',
    chapter: 'Graphic surge',
  },
  {
    id: 4,
    title: 'VFX and Compositing Reel',
    duration: '02:05',
    description: 'Cleanup, glow work, atmosphere overlays, and stylized compositing tests.',
    chapter: 'Atmosphere pass',
  },
]

export default function Showreel() {
  const [activeVideo, setActiveVideo] = useState(0)
  const { scrollYProgress } = useScroll()
  const frameScale = useTransform(scrollYProgress, [0, 0.35], [0.92, 1])
  const frameY = useTransform(scrollYProgress, [0, 0.35], [50, 0])
  const glowOpacity = useTransform(scrollYProgress, [0, 0.25, 0.5], [0.2, 0.55, 0.28])

  return (
    <div className="page-shell page-showreel min-h-screen pt-24 px-6 lg:px-24">
      <PageMeta
        title="Somil Portfolio | Showreel"
        description="Showreel page for motion graphics, editing, filmmaking, animation, and VFX highlights."
      />

      <motion.div style={{ opacity: glowOpacity }} className="cinema-glow" />

      <div className="max-w-6xl mx-auto relative z-10">
        <section className="min-h-[70vh] flex items-center mb-16">
          <div className="grid xl:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] gap-10 items-center w-full">
            <div className="space-y-5 min-w-0">
              <span className="cinema-kicker">Showreel / Scroll narrative</span>
              <h1 className="cinema-title">
                A page that behaves
                <span className="block accent-soft">more like a trailer.</span>
              </h1>
              <p className="text-white/72 text-lg leading-relaxed max-w-2xl">
                This section leans into cinematic pacing: a sticky screen, reel chapters,
                and a vertical narrative so scrolling feels closer to moving through shots than reading stacked panels.
              </p>
            </div>

            <motion.div
              style={{ scale: frameScale, y: frameY }}
              className="cinema-screen"
            >
              <div className="cinema-bars cinema-bars-top" />
              <div className="cinema-bars cinema-bars-bottom" />
              <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,_rgba(255,155,113,0.35),_transparent_24%),linear-gradient(145deg,_rgba(34,24,22,1),_rgba(10,9,10,1))] flex items-center justify-center">
                <div className="text-center px-8">
                  <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-white/12 bg-white/5">
                    <span className="text-sm uppercase tracking-[0.35em] text-white/72">Play</span>
                  </div>
                  <p className="text-sm uppercase tracking-[0.28em] text-white/45 mb-3">{showreels[activeVideo].chapter}</p>
                  <h2 className="text-3xl lg:text-4xl font-grotesk">{showreels[activeVideo].title}</h2>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="grid xl:grid-cols-[minmax(18rem,0.45fr)_minmax(0,0.55fr)] gap-8 items-start mb-20">
          <div className="xl:sticky xl:top-28 cinema-panel p-6 min-w-0">
            <p className="cinema-kicker mb-4">Active reel</p>
            <h2 className="text-3xl font-grotesk mb-3">{showreels[activeVideo].title}</h2>
            <p className="text-white/72 leading-relaxed mb-6">{showreels[activeVideo].description}</p>
            <div className="flex items-center gap-3 text-white/55 text-sm uppercase tracking-[0.22em]">
              <span>{showreels[activeVideo].duration}</span>
              <span className="h-1 w-1 rounded-full bg-white/35" />
              <span>{showreels[activeVideo].chapter}</span>
            </div>
          </div>

          <div className="space-y-4 min-w-0">
            {showreels.map((video, idx) => (
              <motion.button
                key={video.id}
                onClick={() => setActiveVideo(idx)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`cinema-chapter ${activeVideo === idx ? 'cinema-chapter-active' : ''}`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-5 justify-between min-w-0">
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
