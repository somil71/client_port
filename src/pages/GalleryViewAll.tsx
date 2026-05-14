import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import { getSiteUrl } from '../config/site'
import { getGalleryArchiveEntries } from '../data/projects'

const archiveEntries = getGalleryArchiveEntries()

const stillEntries = archiveEntries.filter((entry) => entry.kind === 'image')
const animationEntries = archiveEntries.filter((entry) => entry.kind === 'animation')
const videoEntries = archiveEntries.filter((entry) => entry.kind === 'video')

const salonSizes = [
  'w-[18rem] sm:w-[20rem]',
  'w-[14rem] sm:w-[16rem]',
  'w-[16rem] sm:w-[18rem]',
  'w-[13rem] sm:w-[15rem]',
  'w-[19rem] sm:w-[21rem]',
  'w-[15rem] sm:w-[17rem]',
] as const

const salonRotations = ['rotate-[-3deg]', 'rotate-[2deg]', 'rotate-[4deg]', 'rotate-[-2deg]', 'rotate-[1deg]', 'rotate-[-4deg]'] as const

const motionWidths = [
  'w-[22rem] sm:w-[24rem]',
  'w-[16rem] sm:w-[18rem]',
  'w-[18rem] sm:w-[20rem]',
  'w-[15rem] sm:w-[17rem]',
  'w-[20rem] sm:w-[22rem]',
  'w-[17rem] sm:w-[19rem]',
  'w-[21rem] sm:w-[23rem]',
] as const

export default function GalleryViewAll() {
  return (
    <div className="page-shell min-h-screen px-6 pb-20 pt-24 lg:px-24">
      <PageMeta
        title="Vision VFX | Gallery View All"
        description="Browse the full Vision VFX archive across still frames, animated studies, and linked reels."
        url={getSiteUrl('/gallery/view-all')}
      />

      <div className="mx-auto max-w-6xl">
        <section className="relative overflow-hidden rounded-[2.1rem] border border-white/10 bg-[linear-gradient(145deg,rgba(21,15,16,0.98),rgba(31,22,19,0.96))] px-6 py-8 lg:px-10 lg:py-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(255,171,125,0.1),transparent_24%),radial-gradient(circle_at_82%_18%,rgba(120,186,255,0.08),transparent_22%),radial-gradient(circle_at_50%_78%,rgba(255,214,143,0.06),transparent_22%)]" />

          <div className="relative z-10 grid gap-8 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] xl:items-end">
            <div className="space-y-5">
              <p className="eyebrow">Gallery / View all</p>
              <h1 className="max-w-[8ch] font-grotesk text-[clamp(2.8rem,5vw,4.8rem)] leading-[0.92] tracking-[-0.05em] text-white">
                Full archive, different rooms.
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-white/72 lg:text-lg">
                Instead of one repeated layout, each part of the archive gets its own viewing mode: pinned stills, motion strips, and a screening timeline.
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

            <div className="grid gap-4 sm:grid-cols-3">
              <StatCard value={String(archiveEntries.length).padStart(2, '0')} label="total works" />
              <StatCard value={String(animationEntries.length).padStart(2, '0')} label="motion studies" />
              <StatCard value={String(videoEntries.length).padStart(2, '0')} label="linked reels" />
            </div>
          </div>
        </section>

        <section className="mt-14 space-y-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow mb-3">Still Frames</p>
              <h2 className="section-title">Salon wall</h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-white/66 lg:text-base">
              Images are handled like pinned works in a studio wall, with varied sizes and slight offsets so the section feels collected rather than auto-generated.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(150deg,rgba(42,27,22,0.95),rgba(18,13,14,0.96))] p-5 lg:p-7">
            <div className="flex flex-wrap items-start justify-center gap-5">
              {stillEntries.map((entry, index) => (
                <motion.a
                  key={entry.id}
                  href={entry.open}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -8, rotate: 0 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ duration: 0.42, delay: index * 0.04 }}
                  className={`group ${salonSizes[index % salonSizes.length]} ${salonRotations[index % salonRotations.length]} overflow-hidden rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(32,23,20,0.96),rgba(15,12,14,0.96))] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.24)]`}
                >
                  <img
                    src={entry.preview}
                    alt={entry.title}
                    className={`w-full rounded-[1.08rem] object-cover transition duration-500 group-hover:scale-[1.03] ${
                      index % 3 === 0 ? 'h-[14rem] sm:h-[16rem]' : index % 3 === 1 ? 'h-[11rem] sm:h-[13rem]' : 'h-[12rem] sm:h-[14rem]'
                    }`}
                    loading="lazy"
                  />
                  <div className="space-y-2 px-1 pb-1 pt-4">
                    <p className="text-[0.58rem] uppercase tracking-[0.22em] text-white/46">{entry.collection}</p>
                    <p className="text-lg font-grotesk leading-tight text-white">{entry.title}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-14 space-y-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow mb-3">Motion Studies</p>
              <h2 className="section-title">Motion strip</h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-white/66 lg:text-base">
              Animation work reads better as a belt of moving fragments than a tiled archive, so this section behaves like a long studio strip of tests and loops.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(150deg,rgba(24,26,35,0.95),rgba(15,13,18,0.96))] p-5 lg:p-7">
            <div className="flex gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {animationEntries.map((entry, index) => (
                <motion.a
                  key={entry.id}
                  href={entry.open}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ y: -6 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  className={`group shrink-0 ${motionWidths[index % motionWidths.length]} overflow-hidden rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(28,30,42,0.96),rgba(15,14,20,0.96))] p-3 shadow-[0_20px_54px_rgba(0,0,0,0.22)]`}
                >
                  <img
                    src={entry.preview}
                    alt={entry.title}
                    className={`w-full rounded-[1.08rem] object-cover transition duration-500 group-hover:scale-[1.03] ${
                      index % 2 === 0 ? 'h-[13rem]' : 'h-[10rem]'
                    }`}
                    loading="lazy"
                  />
                  <div className="space-y-2 px-1 pb-1 pt-4">
                    <p className="text-[0.58rem] uppercase tracking-[0.22em] text-white/46">{entry.collection}</p>
                    <p className="text-lg font-grotesk leading-tight text-white">{entry.title}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-14 space-y-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow mb-3">Linked Reels</p>
              <h2 className="section-title">Screening timeline</h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-white/66 lg:text-base">
              Video-led work is arranged as a screening sequence, so the page reads like a viewing program rather than a resource list.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(150deg,rgba(30,23,20,0.95),rgba(15,12,14,0.96))] p-5 lg:p-7">
            <div className="absolute bottom-7 left-[2.35rem] top-7 hidden w-px bg-white/10 md:block" />
            <div className="space-y-5">
              {videoEntries.map((entry, index) => (
                <motion.a
                  key={entry.id}
                  href={entry.open}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  className={`group relative block rounded-[1.55rem] border border-white/10 bg-[linear-gradient(180deg,rgba(28,20,18,0.96),rgba(14,11,13,0.96))] p-3 shadow-[0_18px_48px_rgba(0,0,0,0.18)] md:max-w-[86%] ${
                    index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
                  }`}
                >
                  <div className="absolute left-[-1.7rem] top-1/2 hidden h-3 w-3 -translate-y-1/2 rounded-full border border-white/20 bg-[#f2d7c6] md:block" />
                  <div className="grid gap-4 sm:grid-cols-[11rem_minmax(0,1fr)] sm:items-center">
                    <img
                      src={entry.preview}
                      alt={entry.title}
                      className="h-[9rem] w-full rounded-[1rem] object-cover transition duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    <div className="space-y-2 min-w-0">
                      <p className="text-[0.58rem] uppercase tracking-[0.22em] text-white/46">{entry.collection}</p>
                      <p className="text-2xl font-grotesk leading-tight text-white">{entry.title}</p>
                      <p className="text-sm leading-relaxed text-white/60">{entry.description}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
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
