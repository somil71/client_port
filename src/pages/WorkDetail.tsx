import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import { getCategoryLabel, previewMedia, projects } from '../data/projects'

export default function WorkDetail() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return (
      <div className="page-shell page-work min-h-screen pt-24 px-6 lg:px-24">
        <PageMeta
          title="Somil Portfolio | Project Not Found"
          description="Placeholder portfolio detail page for a missing project."
          url="https://client-port.example.com/work/not-found"
          ogType="article"
        />

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.section
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-[2rem] p-8 lg:p-10"
          >
            <p className="eyebrow mb-4">Project detail</p>
            <h1 className="section-title mb-4">Project not found</h1>
            <p className="muted-copy mb-8 max-w-2xl">
              This placeholder detail route could not match a project slug. Head back to the portfolio archive and open one of the listed case-study links.
            </p>
            <Link to="/portfolio" className="primary-link">
              Back to portfolio
            </Link>
          </motion.section>
        </div>
      </div>
    )
  }

  const categoryLabel = getCategoryLabel(project.category)

  return (
    <div className="page-shell page-work min-h-screen pt-24 px-6 lg:px-24">
      <PageMeta
        title={`Somil Portfolio | ${project.title}`}
        description={`${project.title} project detail page with placeholder hero, process summary, tools used, and category context.`}
        url={`https://client-port.example.com/work/${project.slug}`}
        ogType="article"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.section
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="mb-8"
        >
          <Link to="/portfolio" className="story-badge">
            Back to portfolio
          </Link>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.05 }}
          className="glass-card rounded-[2rem] p-6 lg:p-8 mb-10"
        >
          <div className="grid xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] gap-8 items-start">
            <div className="space-y-5 min-w-0">
              <div className="rounded-[1.7rem] overflow-hidden border border-white/10">
                <img
                  src={previewMedia(project.title, project.mediaType, project.palette)}
                  alt={`${project.title} hero placeholder`}
                  className="w-full min-h-[18rem] lg:min-h-[28rem] object-cover"
                />
              </div>
              <p className="muted-copy text-sm leading-relaxed">
                Placeholder hero image: replace this generated frame with the final project hero visual, poster, render, or motion still.
              </p>
            </div>

            <div className="space-y-6 min-w-0">
              <div className="space-y-4">
                <p className="eyebrow">{categoryLabel}</p>
                <h1 className="section-title">{project.title}</h1>
                <p className="muted-copy leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="grid gap-4">
                <div className="glass-panel rounded-[1.5rem] p-5">
                  <p className="eyebrow mb-3">Category</p>
                  <p className="text-xl font-grotesk">{categoryLabel}</p>
                </div>

                <div className="glass-panel rounded-[1.5rem] p-5">
                  <p className="eyebrow mb-3">Description</p>
                  <p className="muted-copy leading-relaxed">
                    {project.detail} This is clearly labeled placeholder content for the expanded case-study narrative until final project materials are added.
                  </p>
                </div>

                <div className="glass-panel rounded-[1.5rem] p-5">
                  <p className="eyebrow mb-3">Tools used</p>
                  <div className="flex flex-wrap gap-3">
                    {project.tools.map((tool) => (
                      <span key={tool} className="pill text-sm muted-copy">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
