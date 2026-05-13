import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import { getSiteUrl } from '../config/site'
import { getCategoryLabel, getYouTubeThumbnail, previewMedia, projects } from '../data/projects'
import { seoContent, siteIdentity } from '../data/siteContent'

export default function WorkDetail() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return (
      <div className="page-shell page-work min-h-screen px-6 pt-24 lg:px-24">
        <PageMeta
          title={seoContent.notFoundTitle}
          description="Portfolio detail route for a project that could not be found."
          url={getSiteUrl('/work/not-found')}
          ogType="article"
        />

        <div className="relative z-10 mx-auto max-w-5xl">
          <motion.section
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-[2rem] p-8 lg:p-10"
          >
            <p className="eyebrow mb-4">Project detail</p>
            <h1 className="section-title mb-4">Project not found</h1>
            <p className="muted-copy mb-8 max-w-2xl">
              This detail route could not match a project slug. Head back to the portfolio archive and open one of the listed case-study links.
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
  const mediaLinks = project.mediaLinks ?? []
  const heroMedia = project.heroImage ?? previewMedia(project.title, project.mediaType, project.palette)
  const stats = [
    { label: 'Category', value: categoryLabel },
    { label: 'Media type', value: project.mediaType },
    { label: 'Year', value: project.year },
    { label: 'Assets', value: `${mediaLinks.length || 1}` },
  ]

  return (
    <div className="page-shell page-work min-h-screen px-6 pt-24 lg:px-24">
      <PageMeta
        title={`${siteIdentity.brandName} | ${project.title}`}
        description={`${project.title} project detail page with summary, tools used, media links, and category context.`}
        url={getSiteUrl(`/work/${project.slug}`)}
        ogType="article"
      />

      <div className="pointer-events-none fixed inset-0 z-0 opacity-80">
        <div
          className="absolute left-[12%] top-[16%] h-64 w-64 rounded-full blur-[90px]"
          style={{ backgroundColor: `${project.palette}22` }}
        />
        <div
          className="absolute bottom-[12%] right-[10%] h-72 w-72 rounded-full blur-[120px]"
          style={{ backgroundColor: `${project.palette}18` }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl pb-20">
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex flex-wrap items-center justify-between gap-4"
        >
          <Link to="/portfolio" className="story-badge">
            Back to portfolio
          </Link>
          <div className="story-metadata">
            <span>{categoryLabel}</span>
            <span className="story-meta-dot" />
            <span>{project.year}</span>
            <span className="story-meta-dot" />
            <span>{project.mediaType}</span>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, delay: 0.04 }}
          className="storyboard-frame mb-10 overflow-hidden"
        >
          <div className="grid xl:grid-cols-[minmax(0,1.04fr)_minmax(22rem,0.96fr)] gap-0">
            <div className="relative min-w-0 border-b border-black/10 xl:border-b-0 xl:border-r">
              <div
                className="absolute inset-0 opacity-70"
                style={{
                  background: `radial-gradient(circle at 18% 20%, ${project.palette}22, transparent 28%), linear-gradient(160deg, rgba(255,255,255,0.4), rgba(255,249,241,0.92))`,
                }}
              />

              <div className="relative space-y-6 p-6 lg:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="story-kicker">Featured case study</span>
                  <span className="story-swatch" style={{ backgroundColor: project.palette }} />
                </div>

                <div className="space-y-4">
                  <p className="eyebrow">{categoryLabel}</p>
                  <h1 className="storyboard-title max-w-4xl">{project.title}</h1>
                  <p className="max-w-3xl text-[1.05rem] leading-relaxed text-[#3f3329]/82">
                    {project.summary}
                  </p>
                </div>

                <div className="overflow-hidden rounded-[1.8rem] border border-black/10 bg-[#fffaf3] shadow-[0_28px_70px_rgba(59,39,20,0.08)]">
                  <img
                    src={heroMedia}
                    alt={`${project.title} hero preview`}
                    className="min-h-[22rem] w-full object-cover lg:min-h-[30rem]"
                  />
                </div>

                <div className="rounded-[1.45rem] border border-black/10 bg-white/70 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#3f3329]/56 mb-3">Case-study frame</p>
                  <p className="text-[#3f3329]/80 leading-relaxed">
                    {project.heroImage
                      ? 'A selected key visual anchors this project so the page feels like a deliberate poster frame rather than a placeholder.'
                      : 'A stylized preview frame is used here to keep the case-study presentation expressive even when a final still or poster is not available yet.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[linear-gradient(180deg,rgba(255,251,245,0.94),rgba(249,241,228,0.98))] p-6 lg:p-8">
              <div className="space-y-5">
                <div className="storyboard-lead">
                  <div className="storyboard-lead-meta">
                    <span>{project.year}</span>
                    <span>{project.mediaType}</span>
                  </div>
                  <h2 className="storyboard-lead-title">{project.detail}</h2>
                  <p className="storyboard-lead-copy">{project.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {stats.map((stat) => (
                    <div key={stat.label} className="story-stat">
                      <p className="story-stat-value">{stat.value}</p>
                      <p className="story-stat-label">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 rounded-[1.5rem] border border-black/10 bg-white/75 p-5">
                  <p className="story-kicker">Toolset</p>
                  <div className="flex flex-wrap gap-3">
                    {project.tools.map((tool) => (
                      <span key={tool} className="neo-chip">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 rounded-[1.5rem] border border-black/10 bg-[#171717] p-5 text-[#fff8ef]">
                  <p className="story-kicker text-white/72">Project note</p>
                  <p className="leading-relaxed text-white/78">
                    This page is treated like a creative board: concept, tone, tools, and output are grouped together so each project reads with more identity and less filler.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <section className="mb-10 grid gap-6 xl:grid-cols-[minmax(0,1.08fr)_minmax(20rem,0.92fr)]">
          <motion.article
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="section-frame rounded-[1.8rem] p-6 lg:p-8"
          >
            <p className="story-kicker mb-4">Project narrative</p>
            <h2 className="text-3xl font-grotesk text-[#15110d] mb-4">Why this piece matters</h2>
            <p className="text-[#3f3329]/82 leading-relaxed text-lg">
              {project.description}
            </p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="section-frame rounded-[1.8rem] p-6 lg:p-8"
          >
            <p className="story-kicker mb-4">Creative focus</p>
            <h2 className="text-3xl font-grotesk text-[#15110d] mb-4">What drives the result</h2>
            <p className="text-[#3f3329]/82 leading-relaxed">
              {project.detail}
            </p>
            <div className="mt-6 h-px bg-black/10" />
            <p className="mt-6 text-sm uppercase tracking-[0.22em] text-[#3f3329]/56">
              {project.summary}
            </p>
          </motion.article>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-[2rem] p-6 lg:p-8"
        >
          <div className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow mb-3">Output archive</p>
              <h2 className="section-title">Published media and review-ready outputs.</h2>
            </div>
            <p className="muted-copy max-w-2xl leading-relaxed">
              {mediaLinks.length > 0
                ? 'Supporting clips are presented as selected outputs so the page stays focused, cinematic, and easy to review.'
                : 'This project is currently represented as a visual case-study page. When external clips, renders, or slides are added, they can live here without changing the overall structure.'}
            </p>
          </div>

          {mediaLinks.length > 0 ? (
            <div className="grid gap-4 lg:grid-cols-2">
              {mediaLinks.map((mediaLink, index) => {
                const thumbnail = mediaLink.thumbnail ?? getYouTubeThumbnail(mediaLink.url)

                return (
                  <a
                    key={mediaLink.url}
                    href={mediaLink.url}
                    target="_blank"
                    rel="noreferrer"
                    className="work-detail-link-card"
                  >
                    <div className="relative">
                      {thumbnail ? (
                        <img
                          src={thumbnail}
                          alt={`${mediaLink.title} thumbnail`}
                          className="work-detail-link-thumb"
                          loading="lazy"
                        />
                      ) : (
                        <div className="work-detail-link-thumb work-detail-link-thumb-placeholder">
                          {mediaLink.label}
                        </div>
                      )}
                      <div className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-[0.62rem] uppercase tracking-[0.18em] text-white/85">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>

                    <div className="min-w-0">
                      <p className="mb-2 text-xs uppercase tracking-[0.24em] text-white/60">
                        {mediaLink.label}
                      </p>
                      <h3 className="text-lg font-grotesk leading-tight break-words">{mediaLink.title}</h3>
                    </div>
                  </a>
                )
              })}
            </div>
          ) : (
            <div className="grid gap-4 lg:grid-cols-3">
              <div className="glass-panel rounded-[1.5rem] p-5">
                <p className="story-kicker mb-3">Mood</p>
                <p className="text-xl font-grotesk text-white">Atmosphere-first presentation</p>
              </div>
              <div className="glass-panel rounded-[1.5rem] p-5">
                <p className="story-kicker mb-3">Format</p>
                <p className="text-xl font-grotesk text-white">Visual concept / static showcase</p>
              </div>
              <div className="glass-panel rounded-[1.5rem] p-5">
                <p className="story-kicker mb-3">Next step</p>
                <p className="text-xl font-grotesk text-white">Can expand into renders, slides, or reels</p>
              </div>
            </div>
          )}
        </motion.section>
      </div>
    </div>
  )
}
