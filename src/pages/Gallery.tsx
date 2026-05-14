import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import { getSiteUrl } from '../config/site'
import { portfolioAssets } from '../data/projects'
import { seoContent } from '../data/siteContent'

const illustratorPlacements = [
  'md:absolute md:left-[4%] md:top-[7%] md:w-[23%] md:rotate-[-4deg]',
  'md:absolute md:left-[32%] md:top-[1%] md:w-[31%] md:rotate-[2deg]',
  'md:absolute md:right-[5%] md:top-[11%] md:w-[21%] md:rotate-[4deg]',
  'md:absolute md:left-[11%] md:bottom-[8%] md:w-[24%] md:rotate-[3deg]',
  'md:absolute md:left-[41%] md:bottom-[2%] md:w-[22%] md:rotate-[-3deg]',
  'md:absolute md:right-[8%] md:bottom-[11%] md:w-[20%] md:rotate-[5deg]',
] as const

const motionAssets = [
  portfolioAssets.animationStudies.walkCycle,
  portfolioAssets.animationStudies.pendulum,
  portfolioAssets.animationStudies.characterTracing,
  portfolioAssets.animationStudies.eyeBlink,
  portfolioAssets.animationStudies.car,
  portfolioAssets.animationStudies.clockPendulum,
  portfolioAssets.animationStudies.backgroundTracing,
]

const motionColumns = [
  [motionAssets[0], motionAssets[4]],
  [motionAssets[1], motionAssets[5]],
  [motionAssets[2], motionAssets[3], motionAssets[6]],
] as const

export default function Gallery() {
  return (
    <div className="page-shell min-h-screen px-6 pb-20 pt-24 lg:px-24">
      <PageMeta
        title={seoContent.galleryTitle}
        description={seoContent.galleryDescription}
        url={getSiteUrl('/gallery')}
      />

      <div className="mx-auto max-w-6xl">
        <section className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-[linear-gradient(140deg,rgba(29,17,14,0.95),rgba(13,11,14,0.96))] px-6 py-8 lg:px-10 lg:py-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_24%,rgba(255,155,113,0.14),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(130,197,255,0.12),transparent_24%),radial-gradient(circle_at_60%_78%,rgba(255,214,143,0.1),transparent_24%)]" />
          <div className="relative z-10 grid gap-10 xl:grid-cols-[minmax(0,0.92fr)_minmax(24rem,1.08fr)] xl:items-center">
            <div className="min-w-0 space-y-5 xl:pr-4">
              <span className="eyebrow">Gallery / Curated visual atlas</span>
              <h1 className="max-w-[7ch] font-grotesk text-[clamp(2.8rem,5vw,4.9rem)] leading-[0.9] tracking-[-0.05em] text-balance">
                Frames, motion,
                <span className="block accent-soft">and atmosphere</span>
                in one room.
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-white/72 lg:text-lg">
                This page gathers the image and GIF archive into composed boards instead of a flat feed. Each cluster is staged like a room:
                matte painting as atmosphere, Illustrator work as a salon wall, storyboards as a desk spread, and animation studies as moving satellites.
              </p>

              <div className="grid gap-4 sm:grid-cols-3">
                <StatCard value="16" label="visual assets placed" />
                <StatCard value="04" label="distinct gallery zones" />
                <StatCard value="01" label="curated visual world" />
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link to="/gallery/view-all" className="primary-link">
                  View all
                </Link>
                <Link to="/portfolio" className="secondary-link">
                  Open case studies
                </Link>
              </div>
            </div>

            <div className="relative min-h-[24rem] lg:min-h-[30rem]">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65 }}
                className="absolute left-[2%] top-[10%] w-[46%] overflow-hidden rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(31,24,22,0.96),rgba(14,11,13,0.96))] p-3 shadow-[0_28px_80px_rgba(0,0,0,0.28)]"
              >
                <img
                  src={portfolioAssets.storyboards[0].preview}
                  alt={portfolioAssets.storyboards[0].title}
                  className="h-[16rem] w-full rounded-[1.2rem] object-cover"
                />
                <p className="px-2 pb-1 pt-4 text-[0.68rem] uppercase tracking-[0.26em] text-white/58">Storyboard sheet</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.08 }}
                className="absolute right-[0%] top-[0%] w-[56%] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(31,24,22,0.96),rgba(14,11,13,0.96))] p-3 shadow-[0_28px_80px_rgba(0,0,0,0.32)]"
              >
                <img
                  src={portfolioAssets.mattePainting.preview}
                  alt="Matte painting preview"
                  className="h-[18rem] w-full rounded-[1.35rem] object-cover"
                />
                <div className="px-2 pb-1 pt-4">
                  <p className="text-[0.68rem] uppercase tracking-[0.26em] text-white/58">Atmosphere anchor</p>
                  <p className="mt-2 text-lg font-grotesk text-white">Matte painting and cinematic world-building.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.16 }}
                className="absolute bottom-[2%] left-[20%] w-[52%] overflow-hidden rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(31,24,22,0.96),rgba(14,11,13,0.96))] p-3 shadow-[0_28px_80px_rgba(0,0,0,0.3)]"
              >
                <img
                  src={portfolioAssets.animationStudies.walkCycle.preview}
                  alt={portfolioAssets.animationStudies.walkCycle.title}
                  className="h-[12rem] w-full rounded-[1.15rem] object-cover"
                />
                <div className="flex items-center justify-between gap-3 px-2 pb-1 pt-4">
                  <div>
                    <p className="text-[0.68rem] uppercase tracking-[0.26em] text-white/58">Motion loop</p>
                    <p className="mt-2 text-base font-grotesk text-white">Walk cycle study</p>
                  </div>
                  <div className="rounded-full border border-white/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.22em] text-white/56">
                    Animate
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.24 }}
                className="absolute bottom-[12%] right-[4%] rounded-[1.4rem] border border-white/10 bg-black/45 px-5 py-4 backdrop-blur-md"
              >
                <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/58">Gallery mode</p>
                <p className="mt-2 max-w-[12rem] text-sm leading-relaxed text-white/74">
                  Built as a composed montage, not a simple asset dump.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="mt-10 space-y-6">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow mb-3">Atmosphere chamber</p>
              <h2 className="section-title">Matte painting as the opening environment.</h2>
            </div>
            <a
              href={portfolioAssets.mattePainting.open}
              target="_blank"
              rel="noreferrer"
              className="secondary-link"
            >
              Open matte painting
            </a>
          </div>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-[#0f0b0c] p-4 lg:p-6"
          >
            <div className="grid gap-6 xl:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] xl:items-center">
              <div className="relative z-10 max-w-md space-y-4 rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(34,24,18,0.92),rgba(15,12,14,0.94))] p-6">
                <p className="text-[0.7rem] uppercase tracking-[0.28em] text-white/58">Hero frame</p>
                <p className="text-2xl font-grotesk leading-tight text-white">
                  Used as the atmospheric anchor so the rest of the gallery feels like it exists inside one cinematic world.
                </p>
                <p className="text-sm leading-relaxed text-white/68">
                  Framed smaller here so the painting reads like a crafted environment plate, not a stretched background.
                </p>
              </div>

              <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#171312] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.28)]">
                <img
                  src={portfolioAssets.mattePainting.preview}
                  alt="Matte painting"
                  className="h-[17rem] w-full rounded-[1.35rem] object-contain bg-[#151112] lg:h-[24rem] xl:h-[26rem]"
                />
              </div>
            </div>
          </motion.article>
        </section>

        <section className="mt-16 space-y-6">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow mb-3">Illustrator salon</p>
              <h2 className="section-title">A wall of brand and design studies arranged like pinned prints.</h2>
            </div>
            <Link to="/work/brand-identity-suite" className="secondary-link">
              Open brand identity suite
            </Link>
          </div>

          <div className="relative rounded-[2.2rem] border border-white/10 bg-[linear-gradient(160deg,rgba(37,25,22,0.94),rgba(17,15,18,0.96))] p-5 lg:p-8">
            <div className="mb-8 flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
              <div className="max-w-2xl rounded-[1.5rem] border border-white/10 bg-black/25 p-5">
                <p className="text-sm leading-relaxed text-white/72">
                  The offset composition stays intentionally loose, but the print sizes now step more cleanly around one lead piece so the wall feels curated instead of accidental.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3 xl:w-[22rem]">
                <StatCard value="06" label="illustrator works" />
                <StatCard value="01" label="lead poster" />
                <StatCard value="05" label="support frames" />
              </div>
            </div>

            <div className="grid gap-5 md:relative md:min-h-[54rem] md:block">
              {portfolioAssets.illustratorGallery.map((asset, index) => {
                const isLead = index === 1
                const imageClass = isLead
                  ? 'h-[20rem] w-full rounded-[1.2rem] object-cover lg:h-[24rem]'
                  : index === 4
                    ? 'h-[11rem] w-full rounded-[1.1rem] object-cover lg:h-[13rem]'
                    : 'h-[15rem] w-full rounded-[1.15rem] object-cover lg:h-[18rem]'

                return (
                  <FrameLink
                    key={asset.open}
                    href={asset.open}
                    title={asset.title}
                    className={illustratorPlacements[index]}
                    delay={index * 0.06}
                    rotateClass=""
                  >
                    <img
                      src={asset.preview}
                      alt={asset.title}
                      className={imageClass}
                      loading="lazy"
                    />
                    {isLead ? (
                      <div className="p-4">
                        <p className="text-[0.68rem] uppercase tracking-[0.26em] text-white/56">Lead poster</p>
                        <p className="mt-2 text-lg font-grotesk text-white">Central print with the strongest visual pull.</p>
                      </div>
                    ) : null}
                  </FrameLink>
                )
              })}
            </div>
          </div>
        </section>

        <section className="mt-16 space-y-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-4xl">
              <p className="eyebrow mb-3">Storyboard desk</p>
              <h2 className="section-title">Two pre-production sheets presented like open planning documents.</h2>
            </div>
            <Link to="/work/she-never-left-the-classroom-part-1" className="secondary-link self-start whitespace-nowrap">
              Open filmmaking detail
            </Link>
          </div>

          <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(28,21,18,0.96),rgba(16,13,12,0.98))] p-5 lg:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_18%,rgba(255,155,113,0.1),transparent_28%),radial-gradient(circle_at_78%_80%,rgba(255,214,143,0.08),transparent_24%)]" />
            <div className="relative z-10 grid gap-6 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:items-center">
              <div className="space-y-5">
                <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-6 lg:p-7">
                  <p className="text-base leading-relaxed text-white/78 lg:text-lg">
                    These two pages are handled like working sheets on a desk instead of gallery thumbnails, so the pre-production side feels tangible and process-led.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-[1.4rem] border border-white/10 bg-black/15 p-4">
                    <p className="text-3xl font-grotesk text-white">02</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.22em] text-white/56">storyboard sheets</p>
                  </div>
                  <div className="rounded-[1.4rem] border border-white/10 bg-black/15 p-4">
                    <p className="text-3xl font-grotesk text-white">01</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.22em] text-white/56">process cluster</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
                {portfolioAssets.storyboards.map((asset, index) => (
                  <motion.a
                    key={asset.open}
                    href={asset.open}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, y: 20, rotate: index === 0 ? -3 : 3 }}
                    whileInView={{ opacity: 1, y: 0, rotate: index === 0 ? -3 : 3 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.55, delay: index * 0.08 }}
                    className="block rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,248,240,0.96),rgba(236,225,212,0.94))] p-3 shadow-[0_28px_70px_rgba(0,0,0,0.24)]"
                  >
                    <img
                      src={asset.preview}
                      alt={asset.title}
                      className="h-[22rem] w-full rounded-[1.2rem] object-cover lg:h-[26rem]"
                      loading="lazy"
                    />
                    <p className="px-2 pb-1 pt-4 text-base font-medium tracking-[0.08em] text-[#2f241d]">
                      {asset.title}
                    </p>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 space-y-6">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow mb-3">Motion constellation</p>
              <h2 className="section-title">Animation studies orbiting one central motion brief.</h2>
            </div>
            <Link to="/work/2d-animation-principles-study" className="secondary-link">
              Open animation study
            </Link>
          </div>

          <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-[linear-gradient(155deg,rgba(13,12,15,0.98),rgba(30,20,16,0.95))] p-5 lg:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,155,113,0.08),transparent_16%),radial-gradient(circle_at_50%_50%,rgba(125,195,255,0.06),transparent_34%)]" />
            <div className="relative z-10 grid gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(18rem,22rem)_minmax(0,1fr)] xl:items-center">
              <div className="grid gap-5">
                {motionColumns[0].map((asset, index) => (
                  <FrameLink
                    key={asset.open}
                    href={asset.open}
                    title={asset.title}
                    className=""
                    delay={index * 0.06}
                    rotateClass=""
                  >
                    <img
                      src={asset.preview}
                      alt={asset.title}
                      className="h-[12rem] w-full rounded-[1rem] object-cover"
                      loading="lazy"
                    />
                    <div className="p-4">
                      <p className="text-[0.68rem] uppercase tracking-[0.26em] text-white/56">Animate study</p>
                      <p className="mt-2 text-lg font-grotesk leading-tight text-white">{asset.title}</p>
                    </div>
                  </FrameLink>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="z-10 rounded-[2rem] border border-white/10 bg-black/30 p-6 text-center"
              >
                <p className="mb-3 text-[0.72rem] uppercase tracking-[0.3em] text-white/58">Animation atlas</p>
                <h3 className="text-3xl font-grotesk text-white">Timing, tracing, rhythm, and motion clarity.</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/68">
                  The GIF studies are staged as satellites around one core discipline rather than stacked like a feed.
                </p>
              </motion.div>

              <div className="grid gap-5">
                {motionColumns[1].map((asset, index) => (
                  <FrameLink
                    key={asset.open}
                    href={asset.open}
                    title={asset.title}
                    className=""
                    delay={0.12 + index * 0.06}
                    rotateClass=""
                  >
                    <img
                      src={asset.preview}
                      alt={asset.title}
                      className="h-[12rem] w-full rounded-[1rem] object-cover"
                      loading="lazy"
                    />
                    <div className="p-4">
                      <p className="text-[0.68rem] uppercase tracking-[0.26em] text-white/56">Animate study</p>
                      <p className="mt-2 text-lg font-grotesk leading-tight text-white">{asset.title}</p>
                    </div>
                  </FrameLink>
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {motionColumns[2].map((asset, index) => (
                <FrameLink
                  key={asset.open}
                  href={asset.open}
                  title={asset.title}
                  className=""
                  delay={0.24 + index * 0.06}
                  rotateClass=""
                >
                  <img
                    src={asset.preview}
                    alt={asset.title}
                    className="h-[12rem] w-full rounded-[1rem] object-cover"
                    loading="lazy"
                  />
                  <div className="p-4">
                    <p className="text-[0.68rem] uppercase tracking-[0.26em] text-white/56">Animate study</p>
                    <p className="mt-2 text-lg font-grotesk leading-tight text-white">{asset.title}</p>
                  </div>
                </FrameLink>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="section-frame rounded-[2rem] p-8 lg:p-10">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
              <div className="space-y-4">
                <p className="eyebrow">Continue exploring</p>
                <h2 className="section-title">Use the gallery as the visual room, and the work pages as the full case studies.</h2>
                <p className="muted-copy max-w-2xl leading-relaxed">
                  The gallery is built for atmosphere and browsing. The project pages still hold the full context, tools, and related outputs.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link to="/portfolio" className="primary-link">
                  Open portfolio
                </Link>
                <Link to="/contact" className="secondary-link">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[1.4rem] border border-white/10 bg-black/18 p-5">
      <p className="text-4xl font-grotesk text-white">{value}</p>
      <p className="mt-2 text-sm uppercase tracking-[0.22em] text-white/56">{label}</p>
    </div>
  )
}

function FrameLink({
  href,
  title,
  className,
  delay,
  rotateClass,
  children,
}: {
  href: string
  title: string
  className: string
  delay: number
  rotateClass: string
  children: ReactNode
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay }}
      className={`block overflow-hidden rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(30,23,20,0.96),rgba(15,12,14,0.96))] p-3 shadow-[0_24px_70px_rgba(0,0,0,0.22)] ${className} ${rotateClass}`}
      aria-label={title}
    >
      {children}
    </motion.a>
  )
}
