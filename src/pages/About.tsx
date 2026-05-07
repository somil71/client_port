import { motion, useScroll, useTransform } from 'framer-motion'
import PageMeta from '../components/PageMeta'

const personalDetails = [
  ['Name', 'Somil'],
  ['Role', 'Creative Designer and Motion-Focused Portfolio Builder'],
  ['Location', 'Remote / India'],
  ['Languages', 'English, Hindi'],
]

const education = [
  {
    title: 'Creative and digital media studies',
    meta: 'Academic and self-directed learning track',
    copy: 'Focused on visual communication, motion storytelling, digital production, and presentation design for portfolio-driven work.',
  },
]

const skills = {
  technical: ['React', 'TypeScript', 'Responsive Web Design', 'Firebase', 'Video Editing Workflows', 'Presentation Layout'],
  creative: ['Graphic Design', 'Sketching and Painting', '2D Animation', 'Motion Graphics', 'Digital Filmmaking', 'VFX'],
}

const experience = [
  {
    title: 'Freelance creative projects',
    period: 'Recent work',
    points: 'Portfolio design, visual branding explorations, motion-led presentations, and client-facing creative assets.',
  },
  {
    title: 'Academic and self-initiated projects',
    period: 'Ongoing',
    points: 'Short-form films, edits, storyboard practice, motion studies, and showcase pieces built for coursework and portfolio development.',
  },
  {
    title: 'Frontend portfolio implementation',
    period: 'Project-based',
    points: 'Converted creative direction into a responsive React website with routing, animations, SEO basics, and a working contact workflow.',
  },
]

const achievements = [
  'Built a multi-page responsive portfolio aligned to academic submission requirements.',
  'Combined creative presentation with real implementation using React and Firebase.',
  'Created a portfolio structure that supports design, motion, editing, filmmaking, and VFX in one place.',
]

export default function About() {
  const { scrollYProgress } = useScroll()
  const badgeRotate = useTransform(scrollYProgress, [0, 1], [-4, 4])
  const railScale = useTransform(scrollYProgress, [0, 1], [0.08, 1])

  return (
    <div className="page-shell page-about min-h-screen pt-24 px-6 lg:px-24">
      <PageMeta
        title="Somil Portfolio | About Me"
        description="CV-style about page with personal details, education, skills, experience, and achievements."
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <section className="grid xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] gap-10 lg:gap-14 items-start mb-16">
          <div className="xl:sticky xl:top-32 space-y-6 min-w-0">
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
              A resume page
              <span className="block text-[#ff6f3c]">with punch, not polish alone.</span>
            </motion.h1>
            <p className="text-[#2d241d]/78 text-lg leading-relaxed max-w-xl">
              This page shifts away from glass and into neo-brutalism: heavy outlines,
              loud blocks, offset shadows, and a CV flow that feels more like a printed board than a soft dashboard.
            </p>

            <div className="neo-brutal-panel p-5 space-y-4">
              <p className="text-xs uppercase tracking-[0.28em] text-[#2d241d]/60">Personal details</p>
              {personalDetails.map(([label, value]) => (
                <div key={label} className="flex flex-col border-t border-black/15 pt-3 first:border-t-0 first:pt-0">
                  <span className="text-xs uppercase tracking-[0.22em] text-[#2d241d]/55">{label}</span>
                  <span className="text-lg font-semibold text-[#18120d]">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative pb-8 min-w-0">
            <motion.div
              style={{ scaleY: railScale }}
              className="absolute left-4 top-0 hidden h-full w-[6px] origin-top rounded-full bg-[#ff6f3c] xl:block"
            />

            <div className="space-y-8 xl:pl-14">
              <StoryBlock
                index="01"
                title="Education"
                subtitle="Learning through projects, design studies, and digital production."
              >
                <div className="space-y-5">
                  {education.map((item) => (
                    <article key={item.title} className="neo-brutal-panel p-6">
                      <h3 className="text-2xl font-grotesk mb-2 text-[#18120d]">{item.title}</h3>
                      <p className="text-sm uppercase tracking-[0.2em] text-[#2d241d]/55 mb-4">{item.meta}</p>
                      <p className="text-[#2d241d]/78 leading-relaxed">{item.copy}</p>
                    </article>
                  ))}
                </div>
              </StoryBlock>

              <StoryBlock
                index="02"
                title="Skills"
                subtitle="Technical and creative capabilities in separate but equally loud blocks."
              >
                <div className="grid md:grid-cols-2 gap-6 min-w-0">
                  <div className="neo-brutal-panel p-6">
                    <h3 className="text-2xl font-grotesk mb-5 text-[#18120d]">Technical skills</h3>
                    <div className="flex flex-wrap gap-3">
                      {skills.technical.map((item) => (
                        <span key={item} className="neo-chip">{item}</span>
                      ))}
                    </div>
                  </div>

                  <div className="neo-brutal-panel bg-[#ffcf5a] p-6">
                    <h3 className="text-2xl font-grotesk mb-5 text-[#18120d]">Creative skills</h3>
                    <div className="flex flex-wrap gap-3">
                      {skills.creative.map((item) => (
                        <span key={item} className="neo-chip neo-chip-dark">{item}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </StoryBlock>

              <StoryBlock
                index="03"
                title="Experience"
                subtitle="Built as stacked story cards so the page reads like milestones instead of list items."
              >
                <div className="grid md:grid-cols-2 2xl:grid-cols-3 gap-5 min-w-0">
                  {experience.map((item, idx) => (
                    <motion.article
                      key={item.title}
                      initial={{ opacity: 0, y: 28, rotate: idx % 2 === 0 ? -1.6 : 1.4 }}
                      whileInView={{ opacity: 1, y: 0, rotate: idx % 2 === 0 ? -1.6 : 1.4 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.55, delay: idx * 0.08 }}
                      className="neo-brutal-panel min-h-[17rem] p-6"
                    >
                      <p className="text-xs uppercase tracking-[0.28em] text-[#2d241d]/55 mb-5">{item.period}</p>
                      <h3 className="text-2xl font-grotesk mb-3 text-[#18120d]">{item.title}</h3>
                      <p className="text-[#2d241d]/78 leading-relaxed">{item.points}</p>
                    </motion.article>
                  ))}
                </div>
              </StoryBlock>

              <StoryBlock
                index="04"
                title="Achievements"
                subtitle="A final board of highlights to close the CV page with impact."
              >
                <div className="neo-brutal-panel bg-[#18120d] p-8 text-[#fff8ef]">
                  <div className="grid gap-4">
                    {achievements.map((item) => (
                      <div key={item} className="flex gap-3 leading-relaxed">
                        <span className="mt-2 h-3 w-3 rounded-sm bg-[#ffcf5a]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
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
  children: React.ReactNode
}

function StoryBlock({ index, title, subtitle, children }: StoryBlockProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      className="space-y-5"
    >
      <div className="flex items-start gap-4">
        <div className="neo-index">{index}</div>
        <div className="space-y-2">
          <h2 className="text-4xl lg:text-5xl font-grotesk text-[#18120d]">{title}</h2>
          <p className="text-[#2d241d]/72 max-w-2xl leading-relaxed">{subtitle}</p>
        </div>
      </div>
      {children}
    </motion.section>
  )
}
