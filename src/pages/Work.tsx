import {
  AnimatePresence,
  motion,
  useInView,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
  type Variants,
} from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import {
  categories,
  categoryCopy,
  getCategoryLabel,
  previewMedia,
  projects,
  type CategoryId,
  type PortfolioItem,
} from '../data/projects'
import { getSiteUrl } from '../config/site'
import { seoContent } from '../data/siteContent'

type FilterValue = CategoryId

const filters: FilterValue[] = categories.map((category) => category.id)
const breaks = [
  'Every project starts with a question.',
  'Design is the answer before the brief.',
  'Some stories take longer to tell.',
]
const introTitle = 'SELECTED WORK'
const revealEase = [0.16, 1, 0.3, 1] as const

const groupVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  exit: { opacity: 0, transition: { duration: 0.25, ease: 'easeInOut' } },
}

export default function Work() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>('all')
  const [isCompactViewport, setIsCompactViewport] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 1024 : false,
  )
  const reducedMotion = useReducedMotion() ?? false
  const introRef = useRef<HTMLDivElement | null>(null)
  const cardsSectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const updateViewport = () => setIsCompactViewport(window.innerWidth < 1024)

    updateViewport()
    window.addEventListener('resize', updateViewport)

    return () => window.removeEventListener('resize', updateViewport)
  }, [])

  const { scrollYProgress } = useScroll({
    target: introRef,
    offset: ['start start', 'end end'],
  })

  const cardsInView = useInView(cardsSectionRef, {
    amount: 0.05,
    margin: '-10% 0px -75% 0px',
  })

  const heroOpacity = useTransform(scrollYProgress, [0, 0.42, 0.72], [1, 1, 0.18])
  const heroScale = useTransform(scrollYProgress, [0, 0.72], [1, reducedMotion ? 1 : 1.015])
  const heroBlur = useTransform(scrollYProgress, [0, 0.72], [0, reducedMotion ? 0 : 4])
  const heroFilter = useMotionTemplate`blur(${heroBlur}px)`

  const introCardOpacity = useTransform(scrollYProgress, [0.42, 0.72], [0, 1])
  const introCardScale = useTransform(scrollYProgress, [0.42, 0.72], [reducedMotion ? 1 : 0.992, 1])
  const introCardY = useTransform(scrollYProgress, [0.42, 0.72], [reducedMotion ? 0 : 14, 0])
  const introGlowScale = useTransform(scrollYProgress, [0, 0.72], [1, reducedMotion ? 1 : 1.04])
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.22], [1, 0])
  const indicatorY = useTransform(scrollYProgress, [0, 0.22], [0, 10])

  const filteredProjects = useMemo(
    () => (activeFilter === 'all' ? projects : projects.filter((project) => project.category === activeFilter)),
    [activeFilter],
  )

  const blocks = useMemo(() => {
    const content: Array<
      | { type: 'project'; project: PortfolioItem; index: number }
      | { type: 'break'; id: string; text: string }
    > = []

    filteredProjects.forEach((project, index) => {
      content.push({ type: 'project', project, index })
      if ((index + 1) % 3 === 0 && breaks[Math.floor(index / 3)]) {
        content.push({ type: 'break', id: `break-${project.id}`, text: breaks[Math.floor(index / 3)] })
      }
    })

    return content
  }, [filteredProjects])

  const leadProject = filteredProjects[0] ?? projects[0]
  const activeCategoryCopy = categoryCopy[activeFilter]
  const playheadEnabled = !isCompactViewport

  return (
    <div className="page-shell page-work page-work-playhead min-h-screen text-on-surface">
      <PageMeta
        title={seoContent.portfolioTitle}
        description={seoContent.portfolioDescription}
        url={getSiteUrl('/portfolio')}
      />

      <div className="work-playhead-backdrop">
        <motion.div style={{ scale: introGlowScale }} className="work-playhead-glow work-playhead-glow-primary" />
        <motion.div
          animate={reducedMotion ? undefined : { y: [0, -18, 0], x: [0, 12, 0] }}
          transition={{ duration: 12, ease: 'easeInOut', repeat: Infinity }}
          className="work-playhead-glow work-playhead-glow-secondary"
        />
      </div>

      <div ref={introRef} className={playheadEnabled ? 'work-intro-scroll-shell' : 'relative'}>
        <section className={`${playheadEnabled ? 'work-intro-sticky' : 'relative'} px-6 pt-24 lg:px-24`}>
          <div className={`mx-auto grid max-w-6xl ${playheadEnabled ? 'h-[calc(100vh-6rem)] content-center' : 'py-4 lg:py-8'}`}>
            <div className="relative z-10 w-full space-y-6">
              <motion.div
                style={playheadEnabled ? { opacity: heroOpacity, scale: heroScale, filter: heroFilter } : undefined}
                className="space-y-6"
              >
                <motion.span
                  initial={{ opacity: 0, y: reducedMotion ? 0 : 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="eyebrow"
                >
                  Selected Work
                </motion.span>

                <DisintegratingTitle text={introTitle} progress={scrollYProgress} reducedMotion={reducedMotion} />

                <p className="max-w-2xl text-lg leading-relaxed text-white/68">
                  A curated archive of animation, VFX, editing, design, and storytelling work organized to show range without losing one artistic identity.
                </p>

                {playheadEnabled ? (
                  <motion.div style={{ opacity: indicatorOpacity, y: indicatorY }} className="pt-2">
                    <div className="work-playhead-indicator">
                      <span>Scroll to start the sequence</span>
                      <span className="work-playhead-indicator-arrow">v</span>
                    </div>
                  </motion.div>
                ) : null}
              </motion.div>

              <motion.div
                style={playheadEnabled ? { opacity: introCardOpacity, scale: introCardScale, y: introCardY } : undefined}
                className={`work-intro-card-shell ${playheadEnabled ? '' : 'work-intro-card-shell-compact'}`}
              >
                <div className="w-full max-w-5xl">
                  <ProjectCard project={leadProject} index={0} introMode />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      <section ref={cardsSectionRef} className="relative z-20 px-6 pb-20 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: reducedMotion ? 0 : -40 }}
            animate={cardsInView || isCompactViewport ? { opacity: 1, y: 0 } : { opacity: 0, y: reducedMotion ? 0 : -40 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="work-filter-sticky lg:sticky z-30 mb-10"
          >
            <div className="glass-panel work-playhead-filter-bar">
              <div className="work-playhead-filter-row">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    className={`work-playhead-filter-pill ${activeFilter === filter ? 'work-playhead-filter-pill-active' : ''}`}
                  >
                    {getCategoryLabel(filter)}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="mb-12 grid gap-4 lg:grid-cols-[auto_minmax(0,1fr)] lg:items-end">
            <p className="eyebrow">{activeCategoryCopy.eyebrow} / {getCategoryLabel(activeFilter)}</p>
            <p className="max-w-3xl text-sm leading-relaxed text-white/72 lg:text-base">
              {activeCategoryCopy.blurb}
            </p>
          </div>

          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeFilter}
              layout
              variants={groupVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-1 gap-6 xl:grid-cols-12 xl:gap-8"
            >
              {blocks.map((block) =>
                block.type === 'break'
                  ? <NarrativeBreak key={block.id} text={block.text} />
                  : <ProjectCard key={block.project.id} project={block.project} index={block.index} />
              )}
            </motion.div>
          </AnimatePresence>

          <ClosingSection reducedMotion={reducedMotion} />
        </div>
      </section>
    </div>
  )
}

function DisintegratingTitle({
  text,
  progress,
  reducedMotion,
}: {
  text: string
  progress: MotionValue<number>
  reducedMotion: boolean
}) {
  const letters = text.split('')
  const center = (letters.length - 1) / 2

  return (
    <h1 className="display-hero work-playhead-title">
      {letters.map((letter, index) => (
        <DisintegratingLetter
          key={`${letter}-${index}`}
          letter={letter}
          index={index}
          center={center}
          progress={progress}
          reducedMotion={reducedMotion}
        />
      ))}
    </h1>
  )
}

function DisintegratingLetter({
  letter,
  index,
  center,
  progress,
  reducedMotion,
}: {
  letter: string
  index: number
  center: number
  progress: MotionValue<number>
  reducedMotion: boolean
}) {
  const distance = Math.abs(index - center)
  const intensity = center === 0 ? 0 : distance / center
  const direction = index < center ? -1 : 1
  const spread = reducedMotion ? 0 : direction * (12 + intensity * 46)
  const lift = reducedMotion ? 0 : -intensity * 8
  const scale = reducedMotion ? 1 : 1 + intensity * 0.12
  const blurAmount = reducedMotion ? 0 : 1 + intensity * 5

  const x = useTransform(progress, [0, 0.38, 0.78], [0, 0, spread])
  const y = useTransform(progress, [0, 0.38, 0.78], [0, 0, lift])
  const opacity = useTransform(progress, [0, 0.42, 0.78], [1, 1, 0])
  const letterScale = useTransform(progress, [0, 0.38, 0.78], [1, 1, scale])
  const blur = useTransform(progress, [0, 0.38, 0.78], [0, 0, blurAmount])
  const filter = useMotionTemplate`blur(${blur}px)`

  if (letter === ' ') {
    return <span className="inline-block w-[0.32em]" aria-hidden="true" />
  }

  return (
    <motion.span style={{ x, y, opacity, scale: letterScale, filter }} className="inline-block">
      {letter}
    </motion.span>
  )
}

function NarrativeBreak({ text }: { text: string }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })
  const words = text.split(' ')

  return (
    <div ref={ref} className="xl:col-span-12">
      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
        className="work-playhead-break"
      >
        {words.map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
            }}
            className="mr-[0.28em] inline-block"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </div>
  )
}

function ProjectCard({
  project,
  index,
  introMode = false,
}: {
  project: PortfolioItem
  index: number
  introMode?: boolean
}) {
  const reducedMotion = useReducedMotion() ?? false
  const isFeatured = introMode
  const cardSpan = 'xl:col-span-6'
  const cardLabel = getCategoryLabel(project.category)
  const tags = project.tools.slice(0, 3)
  const previewImage = project.heroImage ?? previewMedia(project.title, project.mediaType, project.palette)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: reducedMotion ? 0 : 80, rotate: reducedMotion ? 0 : 2.5 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.75, ease: revealEase, delay: introMode ? 0 : index * 0.08 }}
      viewport={{ once: true, margin: '-80px' }}
      className={introMode ? 'xl:col-span-12' : cardSpan}
    >
      <article className={`glass-card work-playhead-card ${isFeatured ? 'work-playhead-card-featured' : ''} ${introMode ? 'work-playhead-card-intro' : ''}`}>
        <div className={`grid gap-6 ${isFeatured ? 'lg:grid-cols-[minmax(0,1.08fr)_minmax(20rem,0.92fr)]' : 'lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.9fr)]'}`}>
          <div className="work-playhead-image">
            <img
              src={previewImage}
              alt={`${project.title} preview`}
              className="h-full w-full object-cover"
            />
            <div className="work-playhead-image-noise" />
            <div className="work-playhead-image-meta">
              <span>{project.mediaType}</span>
              <span>{project.year}</span>
            </div>
          </div>

          <div className="flex min-w-0 flex-col justify-between gap-6">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <span className="work-playhead-category">{cardLabel}</span>
                {tags.map((tag) => (
                  <span key={tag} className="work-playhead-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className={`font-grotesk leading-[0.94] text-white ${isFeatured ? 'text-4xl lg:text-5xl' : 'text-3xl lg:text-4xl'}`}>
                {project.title}
              </h2>
              <p className="max-w-2xl leading-relaxed text-white/68">{project.summary}</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link to={`/work/${project.slug}`} className="secondary-link">
                Open detail
              </Link>
              <span className="work-playhead-year">{project.year}</span>
            </div>
          </div>
        </div>
      </article>
    </motion.div>
  )
}

function ClosingSection({ reducedMotion }: { reducedMotion: boolean }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, amount: 0.45 })
  const text = "That's the work. Let's talk about yours."
  const words = text.split(' ')
  const buttonDelay = words.length * 0.06 + 0.3

  return (
    <section ref={ref} className="py-[18vh]">
      <div className="section-frame rounded-[2rem] px-6 py-14 text-center lg:px-10 lg:py-20">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
          className="mx-auto max-w-4xl work-playhead-closing"
        >
          {words.map((word, index) => (
            <motion.span
              key={`${word}-${index}`}
              variants={{
                hidden: { opacity: 0, y: reducedMotion ? 0 : 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
              }}
              className="mr-[0.28em] inline-block"
            >
              {word}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: reducedMotion ? 0 : 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: reducedMotion ? 0 : 24 }}
          transition={{ duration: 0.55, delay: buttonDelay, ease: 'easeOut' }}
          className="mt-10"
        >
          <Link to="/contact" className="primary-link work-playhead-cta justify-center">
            Start a project
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
