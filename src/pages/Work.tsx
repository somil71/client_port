import { motion, useScroll, useTransform } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'

type CategoryId =
  | 'all'
  | 'graphic-design'
  | 'sketching-painting'
  | '2d-animation'
  | 'video-editing'
  | 'motion-graphics'
  | 'digital-filmmaking'
  | 'vfx'
  | 'freelance-academic'

type PortfolioItem = {
  id: number
  title: string
  category: Exclude<CategoryId, 'all'>
  year: string
  mediaType: 'image' | 'video' | 'link'
  summary: string
  detail: string
  palette: string
}

const categories: { id: CategoryId; label: string }[] = [
  { id: 'all', label: 'All Work' },
  { id: 'graphic-design', label: 'Graphic Design' },
  { id: 'sketching-painting', label: 'Sketching & Painting' },
  { id: '2d-animation', label: '2D Animation' },
  { id: 'video-editing', label: 'Video Editing' },
  { id: 'motion-graphics', label: 'Motion Graphics' },
  { id: 'digital-filmmaking', label: 'Digital Filmmaking' },
  { id: 'vfx', label: 'VFX' },
  { id: 'freelance-academic', label: 'Freelance / Academic' },
]

const categoryCopy: Record<CategoryId, { eyebrow: string; blurb: string }> = {
  all: {
    eyebrow: 'Full archive',
    blurb: 'A cross-discipline editorial selection built to show range, pacing, and presentation quality in one scroll.',
  },
  'graphic-design': {
    eyebrow: 'Graphic design',
    blurb: 'Identity boards, poster systems, and layout-driven work shaped around typography, hierarchy, and visual recall.',
  },
  'sketching-painting': {
    eyebrow: 'Sketching and painting',
    blurb: 'Figure studies, tonal exercises, and frame-making practice presented like curated sketchbook spreads.',
  },
  '2d-animation': {
    eyebrow: '2D animation',
    blurb: 'Frame rhythm, title motion, and drawn movement built around timing, transitions, and expressive silhouettes.',
  },
  'video-editing': {
    eyebrow: 'Video editing',
    blurb: 'Short-form edits, recap cuts, and sequence shaping driven by beat control, clarity, and pacing.',
  },
  'motion-graphics': {
    eyebrow: 'Motion graphics',
    blurb: 'Promotional motion systems, typography-led transitions, and animated information built for reel energy.',
  },
  'digital-filmmaking': {
    eyebrow: 'Digital filmmaking',
    blurb: 'Narrative assembly, shot planning, and scene breakdowns that present filmmaking as structured visual storytelling.',
  },
  vfx: {
    eyebrow: 'VFX',
    blurb: 'Composite studies, atmosphere passes, and cleanup work presented as process-aware visual outcomes.',
  },
  'freelance-academic': {
    eyebrow: 'Freelance and academic',
    blurb: 'Client-facing delivery and coursework presentation brought together in a cleaner, submission-ready archive.',
  },
}

const projects: PortfolioItem[] = [
  {
    id: 1,
    title: 'Brand Poster System',
    category: 'graphic-design',
    year: '2025',
    mediaType: 'image',
    summary: 'A print-ready visual identity set with hero typography, structured grids, and promotional posters.',
    detail: 'Presented as still-image layout boards and color variants.',
    palette: '#e25436',
  },
  {
    id: 2,
    title: 'Sketchbook Figure Study',
    category: 'sketching-painting',
    year: '2025',
    mediaType: 'image',
    summary: 'Observational sketching series focused on gesture, line confidence, and tonal variation.',
    detail: 'Displayed as curated still frames from the sketchbook set.',
    palette: '#9e6b46',
  },
  {
    id: 3,
    title: 'Frame-by-Frame Title Loop',
    category: '2d-animation',
    year: '2024',
    mediaType: 'video',
    summary: 'A short looping animation using hand-drawn timing, transitions, and text motion.',
    detail: 'Presented as a motion clip highlight with storyboard-ready key poses.',
    palette: '#ffc145',
  },
  {
    id: 4,
    title: 'Campus Event Edit',
    category: 'video-editing',
    year: '2025',
    mediaType: 'video',
    summary: 'Fast-paced recap edit shaped around beat cuts, transitions, and social-friendly pacing.',
    detail: 'Includes preview frames and short-form edit references.',
    palette: '#74b9ff',
  },
  {
    id: 5,
    title: 'Promo Motion Package',
    category: 'motion-graphics',
    year: '2025',
    mediaType: 'video',
    summary: 'Lower-thirds, title cards, and animated bumpers created for campaign-style storytelling.',
    detail: 'Presented with preview stills and reel references.',
    palette: '#ff8fab',
  },
  {
    id: 6,
    title: 'Short Film Scene Assembly',
    category: 'digital-filmmaking',
    year: '2024',
    mediaType: 'link',
    summary: 'Shot planning, edit structure, framing decisions, and mood-led sequencing for a narrative scene.',
    detail: 'Documented as a mini case study with process breakdown.',
    palette: '#7f5af0',
  },
  {
    id: 7,
    title: 'Composite and Cleanup Study',
    category: 'vfx',
    year: '2025',
    mediaType: 'video',
    summary: 'Compositing practice covering clean plates, glow work, and atmospheric scene enhancement.',
    detail: 'Shown with before/after presentation blocks.',
    palette: '#5dd39e',
  },
  {
    id: 8,
    title: 'Client and Coursework Showcase',
    category: 'freelance-academic',
    year: '2025',
    mediaType: 'link',
    summary: 'A mix of freelance deliverables and academic submissions organized into one clean portfolio track.',
    detail: 'Presented through category links and summary cards.',
    palette: '#f28482',
  },
]

const previewMedia = (title: string, mediaType: PortfolioItem['mediaType'], palette: string) => {
  const badge = mediaType === 'video' ? 'VIDEO' : mediaType === 'link' ? 'CASE STUDY' : 'IMAGE'
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="560" viewBox="0 0 800 560">
      <rect width="800" height="560" fill="#f7f0e4"/>
      <rect x="40" y="40" width="720" height="480" rx="34" fill="#ffffff"/>
      <rect x="68" y="68" width="664" height="424" rx="24" fill="${palette}" opacity="0.13"/>
      <line x1="68" y1="190" x2="732" y2="190" stroke="#171717" stroke-width="3" opacity="0.2"/>
      <text x="84" y="126" fill="#111111" font-size="22" font-family="Arial, sans-serif" letter-spacing="4">${badge}</text>
      <text x="84" y="270" fill="#111111" font-size="54" font-family="Arial, sans-serif">${title}</text>
      <text x="84" y="318" fill="#424242" font-size="22" font-family="Arial, sans-serif">storyboard frame / editorial presentation</text>
    </svg>
  `

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}

export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all')
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -80])
  const labelX = useTransform(scrollYProgress, [0, 1], ['0%', '-18%'])

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter((project) => project.category === selectedCategory)

  const activeLabel = categories.find((item) => item.id === selectedCategory)?.label ?? 'All Work'
  const activeCopy = categoryCopy[selectedCategory]
  const heroProject = filteredProjects[0] ?? projects[0]

  return (
    <div className="page-shell page-work min-h-screen pt-24 px-6 lg:px-24">
      <PageMeta
        title="Somil Portfolio | Portfolio"
        description="Portfolio page covering graphic design, sketching, 2D animation, video editing, motion graphics, filmmaking, VFX, and academic work."
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.section style={{ y: heroY }} className="mb-14 lg:mb-20">
          <div className="storyboard-frame p-6 lg:p-8">
            <div className="grid xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-8 xl:gap-10 items-stretch">
              <div className="space-y-5 min-w-0 flex flex-col justify-between">
                <div className="space-y-5">
                  <span className="storyboard-kicker">Portfolio / Editorial System</span>
                  <h1 className="storyboard-title">
                    This page works like a
                    <span className="block accent-text">curated visual archive.</span>
                  </h1>
                  <p className="text-[#3f3329]/75 text-lg leading-relaxed max-w-2xl">
                    Instead of dropping every category into one repeated card system, this page treats the portfolio like an edited wall:
                    one active chapter, one lead piece, and a cleaner reading rhythm for the rest of the work.
                  </p>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="story-stat">
                    <span className="story-stat-value">{filteredProjects.length.toString().padStart(2, '0')}</span>
                    <span className="story-stat-label">Projects in view</span>
                  </div>
                  <div className="story-stat">
                    <span className="story-stat-value">{activeLabel}</span>
                    <span className="story-stat-label">Current chapter</span>
                  </div>
                  <div className="story-stat">
                    <span className="story-stat-value">{heroProject.mediaType}</span>
                    <span className="story-stat-label">Lead format</span>
                  </div>
                </div>
              </div>

              <div className="storyboard-panel min-w-0 flex flex-col justify-between">
                <motion.div style={{ x: labelX }} className="storyboard-marquee">
                  Graphic Design / Animation / Editing / Filmmaking / VFX / Freelance / Academic / Presentation
                </motion.div>
                <div className="storyboard-lead">
                  <div className="storyboard-lead-meta">
                    <span>{activeCopy.eyebrow}</span>
                    <span>{heroProject.year}</span>
                  </div>
                  <h2 className="storyboard-lead-title">{heroProject.title}</h2>
                  <p className="storyboard-lead-copy">{heroProject.summary}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <section className="grid xl:grid-cols-[minmax(18rem,0.35fr)_minmax(0,0.65fr)] gap-8 items-start mb-20">
          <div className="xl:sticky xl:top-28 space-y-5 min-w-0">
            <div className="storyboard-frame p-5 lg:p-6">
              <div className="space-y-6">
                <div>
                  <p className="storyboard-kicker mb-4">Chapter filters</p>
                  <div className="flex flex-wrap gap-3">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`story-filter ${selectedCategory === category.id ? 'story-filter-active' : ''}`}
                      >
                        {category.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="story-sidebar-divider" />

                <div className="space-y-3">
                  <p className="storyboard-kicker">{activeCopy.eyebrow}</p>
                  <h2 className="text-3xl font-grotesk text-[#15110d] break-words">{activeLabel}</h2>
                  <p className="text-[#3f3329]/75 leading-relaxed">{activeCopy.blurb}</p>
                </div>

                <div className="story-sidebar-grid">
                  <div className="story-sidebar-stat">
                    <span className="story-sidebar-stat-value">{filteredProjects.length.toString().padStart(2, '0')}</span>
                    <span className="story-sidebar-stat-label">Visible projects</span>
                  </div>
                  <div className="story-sidebar-stat">
                    <span className="story-sidebar-stat-value">{heroProject.year}</span>
                    <span className="story-sidebar-stat-label">Lead year</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="storyboard-kicker">In this chapter</p>
                  <div className="space-y-2">
                    {filteredProjects.slice(0, 4).map((project, index) => (
                      <div key={project.id} className="story-sidebar-item">
                        <span className="story-sidebar-item-index">{String(index + 1).padStart(2, '0')}</span>
                        <div className="min-w-0">
                          <p className="story-sidebar-item-title">{project.title}</p>
                          <p className="story-sidebar-item-meta">{project.mediaType} / {project.year}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="story-note-panel">
                  <p className="storyboard-kicker !text-[#f8f1e5]/60 mb-3">Viewing note</p>
                  <p className="leading-relaxed text-[#f8f1e5]/78">
                    Start with the lead frame, then move downward through the selected category.
                    The presentation is ordered to feel curated, not dumped into a grid.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8 min-w-0">
            {filteredProjects.map((project, idx) => {
              const reverse = idx % 2 === 1

              return (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ duration: 0.6, delay: idx * 0.04 }}
                  className="storyboard-frame overflow-hidden"
                >
                  <div className={`grid xl:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] gap-0 ${reverse ? 'xl:[&>*:first-child]:order-2 xl:[&>*:last-child]:order-1' : ''}`}>
                    <div className="border-b border-[#171717]/12 xl:border-b-0 xl:border-r border-[#171717]/12">
                      <img
                        src={previewMedia(project.title, project.mediaType, project.palette)}
                        alt={`${project.title} preview`}
                        className="w-full h-full min-h-[18rem] xl:min-h-[24rem] object-cover"
                        loading="lazy"
                      />
                    </div>

                    <div className="p-6 lg:p-7 flex flex-col justify-between gap-5 min-w-0">
                      <div className="space-y-4 min-w-0">
                        <div className="flex items-start justify-between gap-4 min-w-0">
                          <div className="min-w-0">
                            <p className="storyboard-kicker mb-3">
                              {categories.find((item) => item.id === project.category)?.label}
                            </p>
                            <h2 className="text-3xl lg:text-4xl font-grotesk text-[#15110d] break-words">{project.title}</h2>
                          </div>
                          <div
                            className="story-swatch shrink-0"
                            style={{ backgroundColor: project.palette }}
                          />
                        </div>

                        <p className="text-[#3f3329]/78 leading-relaxed">{project.summary}</p>

                        <div className="story-metadata">
                          <span>{project.year}</span>
                          <span className="story-meta-dot" />
                          <span>{project.mediaType}</span>
                          <span className="story-meta-dot" />
                          <span>Curated portfolio frame</span>
                        </div>
                      </div>

                      <div className="space-y-4 min-w-0">
                        <p className="text-[#3f3329]/70 leading-relaxed max-w-xl">{project.detail}</p>
                        <div className="flex flex-wrap gap-3">
                          <span className="story-badge">{project.mediaType}</span>
                          <span className="story-badge">{project.year}</span>
                          <Link to="/contact" className="story-cta">
                            Request full project
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              )
            })}

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="storyboard-frame p-6 lg:p-8"
            >
              <div className="grid lg:grid-cols-[minmax(0,1fr)_auto] gap-6 items-center">
                <div className="space-y-3 min-w-0">
                  <p className="storyboard-kicker">Next step</p>
                  <h2 className="text-3xl lg:text-4xl font-grotesk text-[#15110d]">Want the full reel, boards, or process breakdown?</h2>
                  <p className="text-[#3f3329]/75 leading-relaxed max-w-2xl">
                    This page is intentionally selective. Use the contact page if you want full project files,
                    motion previews, or expanded case-study material from any category.
                  </p>
                </div>
                <Link to="/contact" className="story-cta">
                  Open contact page
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
