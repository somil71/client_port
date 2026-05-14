import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import { getSiteUrl } from '../config/site'
import { portfolioAssets } from '../data/projects'
import { homepageContent, seoContent, siteIdentity } from '../data/siteContent'

export default function Home() {
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 0.25], [0, -80])
  const heroGlowY = useTransform(scrollYProgress, [0, 0.25], [0, 120])
  const stripX = useTransform(scrollYProgress, [0.1, 0.55], ['0%', '0%'])

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
          className="relative overflow-hidden rounded-[2.2rem] grid xl:grid-cols-[minmax(0,0.86fr)_minmax(24rem,1.14fr)] gap-10 xl:gap-14 items-center mb-24 lg:mb-32 min-h-[calc(100vh-10rem)] px-4 py-6 lg:px-6"
        >
          <img
            src={portfolioAssets.mattePainting.preview}
            alt="Matte painting atmospheric backdrop"
            className="absolute inset-0 h-full w-full object-cover opacity-[0.14]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,11,10,0.96),rgba(18,11,10,0.82)_42%,rgba(18,11,10,0.78)),radial-gradient(circle_at_72%_22%,rgba(255,214,173,0.16),transparent_26%)]" />

          <div className="relative z-10 space-y-6 min-w-0">
            <span className="eyebrow">{homepageContent.eyebrow}</span>
            <div className="space-y-5">
              <h1 className="display-hero max-w-[10ch] text-[clamp(3.1rem,7vw,6.2rem)] leading-[0.92]">
                Where imagination meets
                <span className="block accent-text">animation and VFX.</span>
              </h1>
              <p className="muted-copy text-base lg:text-lg max-w-xl leading-relaxed">
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

            <div className="flex flex-wrap gap-3 pt-2 max-w-xl">
              {homepageContent.specialties.map((item) => (
                <span key={item} className="pill text-sm muted-copy">
                  {item}
                </span>
              ))}
            </div>

            <div className="section-frame max-w-xl rounded-[1.6rem] p-3 sm:p-4">
              <div className="grid gap-4 sm:grid-cols-[7.2rem_minmax(0,1fr)] sm:items-center">
                <div className="overflow-hidden rounded-[1.1rem] border border-white/10 bg-black/20">
                  <img
                    src={portfolioAssets.animationStudies.walkCycle.preview}
                    alt="Walk cycle animation study"
                    className="h-28 w-full object-cover sm:h-24"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/58">Animation skills loop</p>
                  <p className="text-base font-grotesk leading-tight text-white">Walk cycle study from the Adobe Animate archive.</p>
                  <p className="muted-copy text-sm leading-relaxed">
                    One of the motion-principles exercises now featured inside the 2D animation case study.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            style={{ y: heroGlowY }}
            className="relative z-10 section-frame editorial-card rounded-[2rem] p-4 lg:p-5 overflow-hidden w-full xl:max-w-[38rem] xl:ml-auto xl:mt-20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
            <div className="relative min-h-[30rem] sm:min-h-[32rem] rounded-[1.5rem] overflow-hidden border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(255,155,113,0.22),_transparent_38%),linear-gradient(180deg,_rgba(38,25,22,0.85),_rgba(13,10,10,0.95))]">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,10,0.18),rgba(8,8,10,0.4)_38%,rgba(8,8,10,0.84)_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(255,155,113,0.14),transparent_18%),radial-gradient(circle_at_74%_24%,rgba(130,197,255,0.1),transparent_16%),radial-gradient(circle_at_78%_72%,rgba(240,198,116,0.08),transparent_14%)]" />
              <motion.div
                animate={{
                  x: [0, 16, -8, 0],
                  y: [0, -14, 8, 0],
                  scale: [1, 1.04, 0.98, 1],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute left-[14%] top-[20%] h-44 w-44 rounded-full bg-[radial-gradient(circle_at_36%_36%,rgba(255,223,206,0.92),rgba(255,155,113,0.76)_46%,rgba(255,155,113,0.08)_78%)] blur-[16px]"
              />
              <motion.div
                animate={{
                  x: [0, -14, 10, 0],
                  y: [0, 10, -8, 0],
                  scale: [1, 0.96, 1.03, 1],
                }}
                transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                className="absolute right-[16%] top-[38%] h-36 w-36 rounded-full bg-[radial-gradient(circle_at_38%_38%,rgba(255,244,212,0.82),rgba(240,198,116,0.68)_44%,rgba(240,198,116,0.05)_76%)] blur-[16px]"
              />
              <motion.div
                animate={{
                  x: [0, 8, -6, 0],
                  y: [0, -8, 6, 0],
                  scale: [1, 1.02, 0.99, 1],
                }}
                transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                className="absolute left-[56%] top-[18%] h-20 w-20 rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(166,220,255,0.78),rgba(115,170,224,0.48)_46%,rgba(115,170,224,0.04)_78%)] blur-[12px]"
              />
              <div className="absolute inset-x-6 top-6 flex items-start justify-between gap-3">
                <div className="pill text-xs max-w-[15rem] sm:max-w-none">{siteIdentity.professionalTitle}</div>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
                <div className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,8,10,0.82),rgba(8,8,10,0.92))] p-5 backdrop-blur-md shadow-[0_24px_60px_rgba(0,0,0,0.34)]">
                  <p className="text-[0.68rem] uppercase tracking-[0.3em] text-white/58 mb-3">
                    Vision VFX
                  </p>
                  <p className="text-[1.85rem] lg:text-[2.2rem] font-grotesk max-w-md leading-[1.02] text-white">
                    Storytelling, motion craft,
                    <span className="block accent-soft">and cinematic atmosphere.</span>
                  </p>
                </div>
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
                <p className="text-xs uppercase tracking-[0.28em] text-white/60 mb-4">
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

          <div className="overflow-visible py-3">
            <motion.div style={{ x: stripX }} className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
              {homepageContent.featuredProjects.map((project, idx) => (
                <ParallaxCard key={project.title} index={idx} {...project} />
              ))}
            </motion.div>
          </div>
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
  const y = useTransform(scrollYProgress, [0.1, 0.8], [index * 8, index % 2 === 0 ? -20 : -10])
  const rotate = useTransform(scrollYProgress, [0.1, 0.8], [0, index % 2 === 0 ? -0.8 : 0.8])

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
          <p className="text-xs uppercase tracking-[0.28em] text-white/60">{format}</p>
          <h3 className="text-2xl font-grotesk leading-tight">{title}</h3>
        </div>
      </div>
      <p className="muted-copy leading-relaxed">{summary}</p>
    </motion.article>
  )
}
