import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import PageMeta from '../components/PageMeta'
import { getSiteUrl } from '../config/site'
import { aboutContent, seoContent } from '../data/siteContent'
import profilePortrait from '../img/WhatsApp Image 2026-05-12 at 5.53.45 PM.jpeg'

export default function About() {
  const reducedMotion = useReducedMotion() ?? false
  const { scrollYProgress } = useScroll()
  const badgeRotate = useTransform(scrollYProgress, [0, 1], [-4, 4])
  const railScale = useTransform(scrollYProgress, [0, 1], [0.08, 1])
  const boardY = useTransform(scrollYProgress, [0, 0.5], [0, reducedMotion ? 0 : -26])
  const boardTilt = useTransform(scrollYProgress, [0, 1], [0, reducedMotion ? 0 : -2.5])
  const stripX = useTransform(scrollYProgress, [0.06, 0.55], ['0%', reducedMotion ? '0%' : '-8%'])

  return (
    <div className="page-shell page-about min-h-screen pt-24 px-6 lg:px-24">
      <PageMeta
        title={seoContent.aboutTitle}
        description={seoContent.aboutDescription}
        url={getSiteUrl('/about')}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div style={{ x: stripX }} className="about-process-strip">
          Research / Framing / Systems / Motion / Presentation / Review / Iteration / Delivery / Research / Framing / Systems / Motion / Presentation
        </motion.div>

        <section className="grid xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] gap-10 lg:gap-14 items-start mb-20">
          <motion.div style={{ y: boardY, rotate: boardTilt }} className="space-y-6 min-w-0">
            <motion.div
              style={{ rotate: badgeRotate }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              className="neo-brutal-card max-w-max px-4 py-2"
            >
              About Me / CV
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="neo-display max-w-3xl"
            >
              {aboutContent.introTitle}
              <span className="block text-[#ff6f3c]">{aboutContent.introAccent}</span>
            </motion.h1>
            <p className="text-[#2d241d]/88 text-lg leading-relaxed max-w-xl">
              {aboutContent.introCopy}
            </p>

            <motion.div
              initial={{ opacity: 0, y: reducedMotion ? 0 : 26, rotate: reducedMotion ? 0 : -1.8 }}
              whileInView={{ opacity: 1, y: 0, rotate: reducedMotion ? 0 : -1.8 }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              className="neo-brutal-panel about-note-board p-5 space-y-4"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-[#2d241d]/72">Personal details</p>
              {aboutContent.personalDetails.map(([label, value]) => (
                <div key={label} className="flex flex-col border-t border-black/15 pt-3 first:border-t-0 first:pt-0">
                  <span className="text-xs uppercase tracking-[0.22em] text-[#2d241d]/68">{label}</span>
                  <span className="text-lg font-semibold text-[#18120d]">{value}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <div className="space-y-6 min-w-0">
            <motion.figure
              initial={{ opacity: 0, y: reducedMotion ? 0 : 22, rotate: reducedMotion ? 0 : 1.2 }}
              whileInView={{ opacity: 1, y: 0, rotate: reducedMotion ? 0 : 1.2 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="neo-brutal-panel neo-brutal-panel-dark about-panel-focus overflow-hidden p-4"
            >
              <div className="overflow-hidden rounded-[1.4rem] border border-white/10">
                <img
                  src={profilePortrait}
                  alt="Sanya Jha portrait"
                  className="h-[26rem] w-full object-cover object-top"
                />
              </div>
              <figcaption className="pt-4">
                <p className="text-xs uppercase tracking-[0.28em] text-[#fff8ef]/70">Creative profile</p>
                <p className="mt-2 text-[#fff8ef]/86">A portrait-led frame that keeps the personal side of the portfolio connected to the same cinematic mood.</p>
              </figcaption>
            </motion.figure>

            <motion.div
              initial={{ opacity: 0, y: reducedMotion ? 0 : 24, rotate: reducedMotion ? 0 : 1.2 }}
              whileInView={{ opacity: 1, y: 0, rotate: reducedMotion ? 0 : 1.2 }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="neo-brutal-panel neo-brutal-panel-dark about-panel-focus about-focus-board p-6 text-[#fff8ef]"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-[#fff8ef]/72 mb-4">Quick focus</p>
              <div className="grid sm:grid-cols-3 gap-4">
                {aboutContent.quickFocus.map((item, index) => (
                  <div key={item} className="space-y-2">
                    <p className="text-4xl font-grotesk text-[#ffcf5a]">{`0${index + 1}`}</p>
                    <p className="leading-relaxed text-[#fff8ef] font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="neo-brutal-panel about-panel-focus p-6"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-[#2d241d]/68 mb-4">Reading mode</p>
              <p className="text-[#2d241d]/88 leading-relaxed">
                {aboutContent.readingMode}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="relative pb-8 min-w-0">
          <div className="relative max-w-4xl xl:ml-auto">
            <motion.div
              style={{ scaleY: railScale }}
              className="absolute left-4 top-0 hidden h-full w-[6px] origin-top rounded-full bg-[#ff6f3c] xl:block"
            />

            <div className="space-y-8 xl:pl-14">
              <StoryBlock
                index="01"
                title="Education"
                subtitle="Learning through projects, design studies, and digital production."
                accent="orange"
              >
                <div className="space-y-5">
                  {aboutContent.education.map((item) => (
                    <motion.article
                      key={item.title}
                      initial={{ opacity: 0, x: reducedMotion ? 0 : 24 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, amount: 0.35 }}
                      transition={{ duration: 0.55, ease: 'easeOut' }}
                    className="neo-brutal-panel about-panel-focus p-6"
                  >
                    <h3 className="text-2xl font-grotesk mb-2 text-[#18120d]">{item.title}</h3>
                      <p className="text-sm uppercase tracking-[0.2em] text-[#2d241d]/68 mb-4">{item.meta}</p>
                      <p className="text-[#2d241d]/88 leading-relaxed">{item.copy}</p>
                    </motion.article>
                  ))}
                </div>
              </StoryBlock>

              <StoryBlock
                index="02"
                title="Skills"
                subtitle="Technical and creative capabilities in separate but equally loud blocks."
                accent="yellow"
              >
                <div className="grid md:grid-cols-2 gap-6 min-w-0">
                  <motion.div
                    initial={{ opacity: 0, x: reducedMotion ? 0 : -28 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.35 }}
                    transition={{ duration: 0.55, ease: 'easeOut' }}
                    className="neo-brutal-panel about-panel-focus p-6"
                  >
                    <h3 className="text-2xl font-grotesk mb-5 text-[#18120d]">Technical skills</h3>
                    <div className="flex flex-wrap gap-3">
                      {aboutContent.technicalSkills.map((item) => (
                        <span key={item} className="neo-chip">{item}</span>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: reducedMotion ? 0 : 28 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.35 }}
                    transition={{ duration: 0.55, ease: 'easeOut', delay: 0.08 }}
                    className="neo-brutal-panel neo-brutal-panel-accent about-panel-focus p-6"
                  >
                    <h3 className="text-2xl font-grotesk mb-5 text-[#18120d]">Creative skills</h3>
                    <div className="flex flex-wrap gap-3">
                      {aboutContent.creativeSkills.map((item) => (
                        <span key={item} className="neo-chip neo-chip-dark">{item}</span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </StoryBlock>

              <StoryBlock
                index="03"
                title="Experience"
                subtitle="Built as stacked story cards so the page reads like milestones instead of list items."
                accent="dark"
              >
                <div className="grid md:grid-cols-2 2xl:grid-cols-3 gap-5 min-w-0">
                  {aboutContent.experience.map((item, idx) => (
                    <motion.article
                      key={item.title}
                      initial={{ opacity: 0, y: 28, rotate: idx % 2 === 0 ? -1.6 : 1.4 }}
                      whileInView={{ opacity: 1, y: 0, rotate: idx % 2 === 0 ? -1.6 : 1.4 }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ duration: 0.55, delay: idx * 0.08 }}
                      className="neo-brutal-panel about-panel-focus min-h-[17rem] p-6"
                    >
                      <p className="text-xs uppercase tracking-[0.28em] text-[#2d241d]/68 mb-5">{item.period}</p>
                      <h3 className="text-2xl font-grotesk mb-3 text-[#18120d]">{item.title}</h3>
                      <p className="text-[#2d241d]/88 leading-relaxed">{item.points}</p>
                    </motion.article>
                  ))}
                </div>
              </StoryBlock>

              <StoryBlock
                index="04"
                title="Achievements"
                subtitle="A final board of highlights to close the CV page with impact."
                accent="light"
              >
                <motion.div
                  initial={{ opacity: 0, y: reducedMotion ? 0 : 24, scale: reducedMotion ? 1 : 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="neo-brutal-panel neo-brutal-panel-dark p-8 text-[#fff8ef]"
                >
                  <div className="grid gap-4">
                    {aboutContent.achievements.map((item) => (
                      <div key={item} className="flex gap-3 leading-relaxed">
                        <span className="mt-2 h-3 w-3 rounded-sm bg-[#ffcf5a]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </StoryBlock>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

type StoryBlockProps = {
  index: string
  title: string
  subtitle: string
  accent: 'orange' | 'yellow' | 'dark' | 'light'
  children: React.ReactNode
}

function StoryBlock({ index, title, subtitle, accent, children }: StoryBlockProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      className={`space-y-5 about-story-block about-story-block-${accent}`}
    >
      <div className="flex items-start gap-4">
        <div className="neo-index">{index}</div>
        <div className="space-y-2">
          <h2 className="text-4xl lg:text-5xl font-grotesk text-[#18120d]">{title}</h2>
          <p className="text-[#2d241d]/84 max-w-2xl leading-relaxed">{subtitle}</p>
        </div>
      </div>
      {children}
    </motion.section>
  )
}
