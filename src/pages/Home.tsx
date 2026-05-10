import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import { getSiteUrl } from '../config/site'
import { homepageContent, seoContent, siteIdentity } from '../data/siteContent'

export default function Home() {
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 0.25], [0, -80])
  const heroGlowY = useTransform(scrollYProgress, [0, 0.25], [0, 120])
  const stripX = useTransform(scrollYProgress, [0.1, 0.55], ['0%', '-12%'])

  return (
    <div className="page-shell w-full min-h-screen pt-24 px-6 lg:px-24">
      <PageMeta
        title={seoContent.homeTitle}
        description={seoContent.homeDescription}
        url={getSiteUrl('/')}
      />

      <div className="floating-orb drift top-20 right-[8%] w-52 h-52 bg-primary/10" />
      <div className="floating-orb drift bottom-32 left-[6%] w-72 h-72 bg-secondary/10" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.section
          style={{ y: heroY }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="grid xl:grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.9fr)] gap-10 xl:gap-14 items-center mb-24 lg:mb-32"
        >
          <div className="space-y-8 min-w-0">
            <span className="eyebrow">{homepageContent.eyebrow}</span>
            <div className="space-y-6">
              <h1 className="display-hero max-w-4xl">
                {siteIdentity.heroHeadline}
                <span className="block accent-text">{siteIdentity.heroSupportingHeadline}</span>
              </h1>
              <p className="muted-copy text-lg lg:text-xl max-w-2xl leading-relaxed">
                {siteIdentity.heroIntro}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/portfolio" className="primary-link">
                {homepageContent.primaryCta}
              </Link>
              <Link to="/contact" className="secondary-link">
                {homepageContent.secondaryCta}
              </Link>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              {homepageContent.specialties.map((item) => (
                <span key={item} className="pill text-sm muted-copy">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <motion.div
            style={{ y: heroGlowY }}
            className="section-frame editorial-card rounded-[2rem] p-6 lg:p-8 overflow-hidden w-full xl:max-w-[32rem] xl:ml-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
            <div className="relative min-h-[31rem] sm:min-h-[34rem] rounded-[1.5rem] overflow-hidden border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(255,155,113,0.22),_transparent_38%),linear-gradient(180deg,_rgba(38,25,22,0.85),_rgba(13,10,10,0.95))]">
              <motion.div
                animate={{
                  borderRadius: ['42% 58% 54% 46% / 44% 41% 59% 56%', '61% 39% 49% 51% / 53% 57% 43% 47%', '45% 55% 35% 65% / 43% 40% 60% 57%'],
                  x: [0, 24, -10, 0],
                  y: [0, -16, 12, 0],
                  scale: [1, 1.08, 0.97, 1],
                }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute left-[12%] top-[14%] h-44 w-44 morph-blob morph-blob-primary"
              />
              <motion.div
                animate={{
                  borderRadius: ['56% 44% 63% 37% / 49% 62% 38% 51%', '40% 60% 43% 57% / 64% 44% 56% 36%', '61% 39% 54% 46% / 41% 59% 41% 59%'],
                  x: [0, -18, 8, 0],
                  y: [0, 14, -12, 0],
                  scale: [1, 0.94, 1.04, 1],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
                className="absolute right-[10%] top-[28%] h-36 w-36 morph-blob morph-blob-secondary"
              />
              <div className="absolute inset-x-6 top-5 flex items-start justify-between gap-3">
                <div className="pill text-xs max-w-[13rem] sm:max-w-none">{siteIdentity.professionalTitle}</div>
                <div className="morph-status">
                  <span className="morph-dot" />
                  Creating live
                </div>
              </div>
              <div className="absolute left-6 right-6 top-[42%] z-10">
                <div className="glass-panel rounded-[1.2rem] p-4">
                  <p className="text-[0.68rem] uppercase tracking-[0.3em] text-white/45 mb-2">Core disciplines</p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <div className="morph-track">
                      <motion.div
                        animate={{ x: ['0%', '130%', '0%'] }}
                        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                        className="morph-node"
                      />
                    </div>
                    <p className="text-sm muted-copy">design to motion to edit to VFX</p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-6 lg:p-8">
                <p className="text-sm uppercase tracking-[0.3em] text-white/50 mb-3">Creative profile</p>
                <p className="text-2xl lg:text-3xl font-grotesk max-w-sm leading-tight">
                  Storytelling,
                  <span className="block accent-soft">motion craft, and cinematic atmosphere.</span>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        <section className="mb-24 lg:mb-32">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
            <div className="space-y-3 min-w-0">
              <span className="eyebrow">Quick summary</span>
              <h2 className="section-title">Built around imagination, motion, and visual impact.</h2>
            </div>
            <p className="muted-copy max-w-md hidden md:block">
              A multidisciplinary portfolio spanning cinematic compositing, motion graphics,
              trailer editing, and brand identity work with a single storytelling mindset.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {homepageContent.highlights.map((item, idx) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="glass-card rounded-[1.75rem] p-6 bloom-shadow"
              >
                <p className="text-xs uppercase tracking-[0.28em] text-white/45 mb-4">
                  0{idx + 1}
                </p>
                <h3 className="text-2xl font-grotesk mb-3">{item.title}</h3>
                <p className="muted-copy leading-relaxed">{item.copy}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mb-24 lg:mb-32">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
            <div className="space-y-3 min-w-0">
              <span className="eyebrow">Featured work</span>
              <h2 className="section-title">Selected work that shows range without losing identity.</h2>
            </div>
            <p className="muted-copy max-w-md hidden md:block">
              From teaser edits and short-film atmosphere to comic storytelling and client branding,
              the portfolio is curated to show both craft and artistic direction.
            </p>
          </div>

          <motion.div style={{ x: stripX }} className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {homepageContent.featuredProjects.map((project, idx) => (
              <ParallaxCard key={project.title} index={idx} {...project} />
            ))}
          </motion.div>
        </section>

        <section className="grid xl:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-8 lg:gap-12 items-start mb-24 lg:mb-32">
          <div className="space-y-4 min-w-0">
            <span className="eyebrow">Strengths</span>
            <h2 className="section-title">A portfolio built to feel cinematic, bold, and technically grounded.</h2>
            <p className="muted-copy leading-relaxed">
              The work combines fantasy-driven storytelling with practical client delivery, allowing the site
              to speak to recruiters, collaborators, and academic reviewers at the same time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 min-w-0">
            {homepageContent.strengths.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55, delay: idx * 0.08 }}
                className="section-frame rounded-[1.6rem] p-6"
              >
                <p className="text-4xl lg:text-5xl font-grotesk accent-text mb-3">{stat.number}</p>
                <p className="muted-copy leading-relaxed text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="section-frame rounded-[2rem] p-8 lg:p-12 mb-20"
        >
          <div className="grid xl:grid-cols-[minmax(0,1fr)_auto] gap-8 items-center">
            <div className="space-y-4 min-w-0">
              <span className="eyebrow">Next step</span>
              <h2 className="section-title">Explore the full portfolio or start a creative conversation.</h2>
              <p className="muted-copy max-w-2xl leading-relaxed">
                {homepageContent.closing}
              </p>
            </div>
            <Link to="/contact" className="primary-link justify-center">
              Contact Vision VFX
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

type ParallaxCardProps = {
  title: string
  format: string
  summary: string
  index: number
}

function ParallaxCard({ title, format, summary, index }: ParallaxCardProps) {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0.1, 0.8], [index * 14, index % 2 === 0 ? -40 : -18])
  const rotate = useTransform(scrollYProgress, [0.1, 0.8], [0, index % 2 === 0 ? -2 : 2])

  return (
    <motion.article
      style={{ y, rotate }}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      className="glass-card editorial-card rounded-[1.75rem] p-5 lg:p-6 min-h-[24rem] flex flex-col justify-between bloom-shadow"
    >
      <div className="space-y-5">
        <div className="aspect-[4/3] rounded-[1.4rem] border border-white/10 bg-[radial-gradient(circle_at_20%_20%,_rgba(255,155,113,0.2),_transparent_28%),linear-gradient(160deg,_rgba(255,255,255,0.03),_rgba(255,255,255,0.01))] relative overflow-hidden">
          <motion.div
            animate={{
              borderRadius: ['58% 42% 39% 61% / 44% 46% 54% 56%', '39% 61% 59% 41% / 56% 33% 67% 44%', '58% 42% 39% 61% / 44% 46% 54% 56%'],
              x: [0, 22, 0],
              y: [0, 10, 0],
            }}
            transition={{ duration: 7 + index, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-4 top-4 h-20 w-20 bg-primary/20 blur-[2px]"
          />
          <motion.div
            animate={{
              borderRadius: ['49% 51% 65% 35% / 45% 59% 41% 55%', '64% 36% 45% 55% / 37% 45% 55% 63%', '49% 51% 65% 35% / 45% 59% 41% 55%'],
              x: [0, -18, 0],
              y: [0, -12, 0],
            }}
            transition={{ duration: 6.2 + index, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
            className="absolute bottom-4 right-5 h-16 w-24 bg-secondary/15 blur-[2px]"
          />
        </div>
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.28em] text-white/45">{format}</p>
          <h3 className="text-2xl font-grotesk leading-tight">{title}</h3>
        </div>
      </div>
      <p className="muted-copy leading-relaxed">{summary}</p>
    </motion.article>
  )
}
