import type { ReactNode } from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import { getSiteUrl } from '../config/site'
import { getGalleryArchiveEntries } from '../data/projects'

const archiveEntries = getGalleryArchiveEntries()

const stillEntries = archiveEntries.filter((entry) => entry.kind === 'image')
const animationEntries = archiveEntries.filter((entry) => entry.kind === 'animation')
const videoEntries = archiveEntries.filter((entry) => entry.kind === 'video')

export default function GalleryViewAll() {
  const leadStill = stillEntries[0]
  const secondaryStills = stillEntries.slice(1, 3)
  const remainingStills = stillEntries.slice(3)
  const leadAnimation = animationEntries[0]
  const animationSupport = animationEntries.slice(1)

  return (
    <div className="page-shell min-h-screen px-6 pb-20 pt-24 lg:px-24">
      <PageMeta
        title="Vision VFX | Gallery View All"
        description="Browse the full Vision VFX archive across still frames, animated studies, and linked reels."
        url={getSiteUrl('/gallery/view-all')}
      />

      <div className="mx-auto max-w-6xl">
        <section className="rounded-[2.15rem] border border-white/10 bg-[linear-gradient(145deg,rgba(21,15,16,0.98),rgba(31,22,19,0.96))] px-6 py-8 lg:px-10 lg:py-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_19rem] lg:items-end">
            <div className="space-y-5">
              <p className="eyebrow">Gallery / View all</p>
              <h1 className="max-w-[9ch] font-grotesk text-[clamp(2.8rem,5vw,4.8rem)] leading-[0.94] tracking-[-0.05em] text-white">
                Full archive, properly staged.
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-white/72 lg:text-lg">
                This page now treats each medium differently: stills as pinned presentation boards, animation as a motion lab, and videos as a stage instead of another long list.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link to="/gallery" className="secondary-link">
                  Back to gallery
                </Link>
                <Link to="/portfolio" className="primary-link">
                  Open portfolio
                </Link>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              <StatCard value={String(stillEntries.length).padStart(2, '0')} label="still frames" />
              <StatCard value={String(animationEntries.length).padStart(2, '0')} label="motion loops" />
              <StatCard value={String(videoEntries.length).padStart(2, '0')} label="linked reels" />
            </div>
          </div>
        </section>

        <ArchiveSection
          eyebrow="Still Frames"
          title="Pinned boards"
          description="Calmer image sizing, cleaner alignment, and story sheets that keep their own proportions without being blown up."
        >
          <div className="space-y-6">
            <div className="grid items-start gap-6 xl:grid-cols-[minmax(0,1.04fr)_minmax(0,0.96fr)]">
              <div className="mx-auto w-full max-w-[40rem] xl:mx-0">
                {leadStill ? <StillCard entry={leadStill} index={0} featured /> : null}
              </div>

              <div className="grid auto-rows-min justify-items-center gap-5 sm:grid-cols-2 xl:grid-cols-1 xl:justify-items-end">
                {secondaryStills.map((entry, index) => (
                  <StillCard key={entry.id} entry={entry} index={index + 1} compact />
                ))}
              </div>
            </div>

            <div className="grid items-start justify-items-center gap-5 lg:grid-cols-2">
              {remainingStills.map((entry, index) => (
                <StillCard key={entry.id} entry={entry} index={index + 3} storyboard={isStoryboard(entry)} />
              ))}
            </div>
          </div>
        </ArchiveSection>

        <ArchiveSection
          eyebrow="Motion Studies"
          title="Motion lab"
          description="The animation work is promoted like test footage in a motion room, with one lead study and supporting exercises around it."
        >
          <div className="grid items-start gap-6 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            {leadAnimation ? (
              <motion.a
                href={leadAnimation.open}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true, amount: 0.14 }}
                transition={{ duration: 0.45 }}
                className="group max-w-[44rem] overflow-hidden rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(23,25,37,0.96),rgba(13,14,22,0.98))] p-4 shadow-[0_24px_64px_rgba(0,0,0,0.24)]"
              >
                <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.88fr)] lg:items-end">
                  <ArtworkFrame frameClass="p-2" frameTone="dark">
                    <img
                      src={leadAnimation.preview}
                      alt={leadAnimation.title}
                      className="h-auto w-full object-contain transition duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </ArtworkFrame>

                  <div className="space-y-3 p-1">
                    <p className="text-[0.58rem] uppercase tracking-[0.26em] text-white/42">{leadAnimation.collection}</p>
                    <h3 className="font-grotesk text-[clamp(1.6rem,2.7vw,2.4rem)] leading-[0.98] text-white">
                      {leadAnimation.title}
                    </h3>
                    <p className="max-w-md text-sm leading-relaxed text-white/62 sm:text-base">
                      Timing, spacing, and motion clarity presented as a lead study instead of a squeezed thumbnail.
                    </p>
                  </div>
                </div>
              </motion.a>
            ) : null}

            <div className="grid auto-rows-min gap-4 sm:grid-cols-2 xl:grid-cols-1">
              {animationSupport.map((entry, index) => (
                <motion.a
                  key={entry.id}
                  href={entry.open}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.36, delay: index * 0.04 }}
                  className="group mx-auto w-full max-w-[23rem] overflow-hidden rounded-[1.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(29,30,43,0.96),rgba(15,15,22,0.98))] p-3 shadow-[0_18px_48px_rgba(0,0,0,0.22)] xl:max-w-none"
                >
                  <ArtworkFrame frameClass="p-2" frameTone="dark">
                    <img
                      src={entry.preview}
                      alt={entry.title}
                      className="h-auto w-full object-contain transition duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </ArtworkFrame>
                  <div className="space-y-2 px-1 pb-1 pt-4">
                    <p className="text-[0.58rem] uppercase tracking-[0.22em] text-white/44">{entry.collection}</p>
                    <p className="text-lg font-grotesk leading-tight text-white">{entry.title}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </ArchiveSection>

        <ArchiveSection
          eyebrow="Linked Reels"
          title="Stage reels"
          description="One focused reel, neighboring wings, and cleaner stage controls without the oversized elements."
        >
          <VideoStage entries={videoEntries} />
        </ArchiveSection>
      </div>
    </div>
  )
}

function ArchiveSection({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string
  title: string
  description: string
  children: ReactNode
}) {
  return (
    <section className="mt-14 space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="eyebrow mb-3">{eyebrow}</p>
          <h2 className="section-title">{title}</h2>
        </div>
        <p className="max-w-xl text-sm leading-relaxed text-white/66 lg:text-base">{description}</p>
      </div>

      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(150deg,rgba(35,24,21,0.95),rgba(16,12,14,0.96))] p-5 lg:p-7">
        {children}
      </div>
    </section>
  )
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[1.35rem] border border-white/10 bg-black/18 p-5">
      <p className="text-4xl font-grotesk text-white">{value}</p>
      <p className="mt-2 text-sm uppercase tracking-[0.22em] text-white/56">{label}</p>
    </div>
  )
}

function ArtworkFrame({
  children,
  frameClass = '',
  frameTone = 'dark',
}: {
  children: ReactNode
  frameClass?: string
  frameTone?: 'dark' | 'light'
}) {
  return (
    <div
      className={`overflow-hidden rounded-[1.08rem] border border-white/8 ${
        frameTone === 'light' ? 'bg-[#ece2d5]' : 'bg-[#120f12]'
      } ${frameClass}`}
    >
      {children}
    </div>
  )
}

function StillCard({
  entry,
  index,
  featured = false,
  compact = false,
  storyboard = false,
}: {
  entry: {
    id: string
    title: string
    collection: string
    preview: string
    open: string
  }
  index: number
  featured?: boolean
  compact?: boolean
  storyboard?: boolean
}) {
  return (
    <motion.a
      href={entry.open}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.42, delay: index * 0.04 }}
      className={`group mx-auto w-full overflow-hidden rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(31,23,20,0.96),rgba(15,12,14,0.96))] p-3 shadow-[0_20px_54px_rgba(0,0,0,0.2)] ${
        featured ? 'max-w-[40rem] lg:p-4' : compact ? 'max-w-[19rem]' : storyboard ? 'max-w-[30rem]' : 'max-w-[26rem]'
      }`}
    >
      <ArtworkFrame frameClass={storyboard ? 'p-3' : compact ? 'p-2' : 'p-2.5'} frameTone={storyboard ? 'light' : 'dark'}>
        <img
          src={entry.preview}
          alt={entry.title}
          className="h-auto w-full object-contain transition duration-500 group-hover:scale-[1.015]"
          loading="lazy"
        />
      </ArtworkFrame>
      <div className="space-y-2 px-1 pb-1 pt-4">
        <p className="text-[0.58rem] uppercase tracking-[0.22em] text-white/46">{entry.collection}</p>
        <p className={`${featured ? 'text-[clamp(1.3rem,2vw,1.85rem)]' : 'text-lg'} font-grotesk leading-tight text-white`}>
          {entry.title}
        </p>
      </div>
    </motion.a>
  )
}

function isStoryboard(entry: { collection: string; title: string }) {
  return entry.collection === 'Storyboard desk' || entry.title.toLowerCase().includes('storyboard')
}

function VideoStage({
  entries,
}: {
  entries: Array<{
    id: string
    title: string
    collection: string
    description: string
    preview: string
    open: string
  }>
}) {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (entries.length === 0) {
    return null
  }

  const currentEntry = entries[currentIndex]
  const total = entries.length
  const visibleOffsets = [-2, -1, 0, 1, 2]

  function goToIndex(index: number) {
    setCurrentIndex((index + total) % total)
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-5 lg:grid-cols-[auto_1fr_auto] lg:items-start">
        <div className="space-y-2">
          <p className="text-[0.58rem] uppercase tracking-[0.28em] text-white/42">Screening stage</p>
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#c6a77a]">
              {String(currentIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </p>
            <h3 className="mt-2 max-w-xl font-grotesk text-2xl leading-tight text-white sm:text-3xl">{currentEntry.title}</h3>
          </div>
        </div>

        <div className="max-w-2xl space-y-2 lg:pt-7">
          <p className="text-[0.58rem] uppercase tracking-[0.24em] text-white/42">{currentEntry.collection}</p>
          <p className="text-sm leading-relaxed text-white/62 sm:text-base">{currentEntry.description}</p>
        </div>

        <a
          href={currentEntry.open}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-[#ff9a72] px-6 py-3 text-sm font-semibold text-[#1a120f] transition hover:bg-[#ffab86] justify-self-start self-start lg:mt-7"
        >
          Watch reel
        </a>
      </div>

      <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,10,15,0.98),rgba(20,14,17,0.98))] px-4 pb-8 pt-8 sm:px-6 sm:pb-10 lg:px-8">
        <div className="pointer-events-none absolute inset-x-[15%] top-0 h-44 bg-[radial-gradient(circle_at_50%_0%,rgba(212,168,67,0.18),transparent_70%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:repeating-linear-gradient(0deg,transparent,transparent_3px,rgba(255,255,255,0.03)_3px,rgba(255,255,255,0.03)_6px)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 opacity-30">
          <div className="absolute inset-x-0 bottom-0 h-px bg-white/12" />
          <div className="absolute inset-x-[6%] bottom-10 h-px bg-white/10" />
          <div className="absolute inset-x-[14%] bottom-20 h-px bg-white/10" />
          <div className="absolute inset-x-[22%] bottom-29 h-px bg-white/10" />
          <div className="absolute inset-x-[30%] bottom-37 h-px bg-white/10" />
          <div className="absolute inset-x-[38%] bottom-44 h-px bg-white/10" />
          <div className="absolute bottom-0 left-1/2 h-48 w-px -translate-x-1/2 bg-white/10" />
          <div className="absolute bottom-0 left-[28%] h-48 w-px rotate-[20deg] origin-bottom bg-white/10" />
          <div className="absolute bottom-0 left-[38%] h-48 w-px rotate-[11deg] origin-bottom bg-white/10" />
          <div className="absolute bottom-0 right-[28%] h-48 w-px -rotate-[20deg] origin-bottom bg-white/10" />
          <div className="absolute bottom-0 right-[38%] h-48 w-px -rotate-[11deg] origin-bottom bg-white/10" />
        </div>

        <div className="pointer-events-none absolute left-5 top-1/2 hidden -translate-y-1/2 md:block">
          <div className="[writing-mode:vertical-rl] rotate-180 text-[0.58rem] uppercase tracking-[0.28em] text-white/34">
            YouTube reels
          </div>
        </div>

        <div className="relative h-[24rem] perspective-[1500px] sm:h-[27rem] lg:h-[29rem]">
          {visibleOffsets.map((offset) => {
            const entryIndex = (currentIndex + offset + total) % total
            const entry = entries[entryIndex]
            const isFocused = offset === 0
            const x = offset * 12.5
            const scale = isFocused ? 1 : Math.abs(offset) === 1 ? 0.8 : 0.64
            const rotateY = offset * -14
            const translateZ = isFocused ? 56 : Math.abs(offset) === 1 ? -20 : -88
            const opacity = isFocused ? 1 : Math.abs(offset) === 1 ? 0.7 : 0.2

            return (
              <motion.button
                key={`${entry.id}-${offset}`}
                type="button"
                onClick={() => goToIndex(entryIndex)}
                className="absolute left-1/2 top-1/2 block w-[14rem] -translate-x-1/2 -translate-y-1/2 text-left outline-none sm:w-[17rem] lg:w-[20rem]"
                initial={false}
                animate={{
                  x: `${x}rem`,
                  scale,
                  rotateY,
                  z: translateZ,
                  opacity,
                }}
                transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
                style={{
                  transformStyle: 'preserve-3d',
                  zIndex: 10 - Math.abs(offset),
                  pointerEvents: opacity < 0.3 ? 'none' : 'auto',
                }}
              >
                <div
                  className={`overflow-hidden rounded-[1.7rem] border p-3 shadow-[0_28px_80px_rgba(0,0,0,0.42)] transition-colors ${
                    isFocused
                      ? 'border-[#d4a843]/35 bg-[linear-gradient(180deg,rgba(29,25,22,0.98),rgba(12,12,18,0.98))]'
                      : 'border-white/10 bg-[linear-gradient(180deg,rgba(27,29,40,0.96),rgba(14,12,18,0.98))]'
                  }`}
                >
                  <div className="relative overflow-hidden rounded-[1.2rem] border border-cyan-200/10 bg-[#101017]">
                    <img src={entry.preview} alt={entry.title} className="aspect-video w-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(0,0,0,0.78)_100%)]" />
                    <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/35 bg-black/45 backdrop-blur-sm">
                      <span className="ml-1 block h-0 w-0 border-b-[7px] border-l-[12px] border-t-[7px] border-b-transparent border-l-cyan-300 border-t-transparent" />
                    </div>
                    {isFocused ? (
                      <div className="absolute right-4 top-4 rounded-full border border-[#d4a843]/35 bg-black/40 px-3 py-1 text-[0.58rem] uppercase tracking-[0.22em] text-[#e4c389]">
                        In focus
                      </div>
                    ) : null}
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <p className="text-[0.55rem] uppercase tracking-[0.26em] text-white/45">{entry.collection}</p>
                      <p className="mt-2 font-grotesk text-sm leading-tight text-white sm:text-base">{entry.title}</p>
                    </div>
                  </div>
                </div>
              </motion.button>
            )
          })}
        </div>

        <div className="mt-4 flex items-center justify-between gap-4">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => goToIndex(currentIndex - 1)}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/72 transition hover:border-[#c6a77a]/40 hover:text-white"
              aria-label="Previous video"
            >
              Prev
            </button>
            <button
              type="button"
              onClick={() => goToIndex(currentIndex + 1)}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/72 transition hover:border-[#c6a77a]/40 hover:text-white"
              aria-label="Next video"
            >
              Next
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-end gap-2">
            {entries.map((entry, index) => (
              <button
                key={entry.id}
                type="button"
                onClick={() => goToIndex(index)}
                className={`h-2 rounded-full transition ${
                  index === currentIndex ? 'w-10 bg-[#d4a843]' : 'w-2 bg-white/18 hover:bg-white/35'
                }`}
                aria-label={`Open video ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
