import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, type ChangeEvent, type FormEvent } from 'react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import PageMeta from '../components/PageMeta'
import { db } from '../config/firebase'
import { getSiteUrl } from '../config/site'
import { contactContent, seoContent } from '../data/siteContent'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { scrollYProgress } = useScroll()
  const gridY = useTransform(scrollYProgress, [0, 1], [0, -80])

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    if (!db) {
      setError('The contact form is not configured yet. Please use the direct email or social links for now.')
      setLoading(false)
      return
    }

    try {
      await addDoc(collection(db, 'contact_messages'), {
        ...formData,
        timestamp: serverTimestamp(),
        status: 'new',
      })

      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        budget: '',
        message: '',
      })

      setTimeout(() => setSubmitted(false), 5000)
    } catch (submissionError) {
      console.error('Error submitting form:', submissionError)
      setError('The contact form could not submit right now. You can still use the phone, email, or social links shown here.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="page-shell page-contact min-h-screen pt-24 px-6 lg:px-24">
      <PageMeta
        title={seoContent.contactTitle}
        description={seoContent.contactDescription}
        url={getSiteUrl('/contact')}
      />

      <motion.div style={{ y: gridY }} className="contact-grid-overlay" />

      <div className="max-w-6xl mx-auto relative z-10">
        <section className="grid xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] gap-10 items-start mb-16">
          <div className="space-y-6 min-w-0">
            <span className="interface-kicker">Contact / Interface mode</span>
            <h1 className="interface-title">
              {contactContent.title}
              <span className="block accent-text">Open for cinematic and design-driven collaborations.</span>
            </h1>
            <p className="text-[#e2d5c8] text-lg leading-relaxed max-w-xl">
              {contactContent.intro}
            </p>
          </div>

          <div className="interface-panel p-6 lg:p-7 min-w-0">
            <p className="interface-kicker mb-5">Quick notes</p>
            <div className="grid gap-4">
              {contactContent.quickNotes.map((note, idx) => (
                <motion.div
                  key={note.label}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.45, delay: idx * 0.06 }}
                  className="interface-cell"
                >
                  <p className="text-xs uppercase tracking-[0.28em] text-white/58 mb-2">{note.label}</p>
                  <p className="text-[#f4efe7]/88 leading-relaxed">{note.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid xl:grid-cols-[minmax(0,1.08fr)_minmax(18rem,0.92fr)] gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="interface-panel p-6 lg:p-8 min-w-0"
          >
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 rounded-[1.25rem] border border-[rgba(255,155,113,0.28)] bg-[rgba(255,155,113,0.1)] p-4"
              >
                <p className="font-inter accent-soft">Your message was submitted successfully.</p>
              </motion.div>
            )}

            {error && (
              <div className="mb-6 rounded-[1.25rem] border border-red-400/30 bg-red-400/10 p-4 text-red-200">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="interface-label">Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required className="contact-input" />
              </div>
              <div>
                <label className="interface-label">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="contact-input" />
              </div>
              <div>
                <label className="interface-label">Phone</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="contact-input" />
              </div>
              <div>
                <label className="interface-label">Project type</label>
                <select name="projectType" value={formData.projectType} onChange={handleChange} required className="contact-input">
                  <option value="">Choose a direction</option>
                  <option value="vfx">VFX / Compositing</option>
                  <option value="animation">2D Animation / Motion Design</option>
                  <option value="editing">Video Editing / Post-Production</option>
                  <option value="branding">Brand Identity Design</option>
                  <option value="storyboarding">Storyboarding / Concept Layouts</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="interface-label">Budget</label>
                <select name="budget" value={formData.budget} onChange={handleChange} className="contact-input">
                  <option value="">Select a budget range</option>
                  <option value="academic">Academic / student project</option>
                  <option value="starter">Starter freelance scope</option>
                  <option value="standard">Standard production scope</option>
                  <option value="extended">Extended collaboration</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="interface-label">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={7}
                  className="contact-input resize-none"
                  placeholder="Tell me about your idea, the kind of visual work you need, and any references or timelines you already have in mind."
                />
              </div>
              <div className="sm:col-span-2 pt-2">
                <button type="submit" disabled={loading} className="interface-button disabled:opacity-50 disabled:cursor-not-allowed">
                  {loading ? 'Sending...' : 'Send message'}
                </button>
              </div>
            </form>
          </motion.div>

          <div className="space-y-5 min-w-0">
            {contactContent.contactBlocks.map((item, idx) => {
              const CardTag = item.href ? motion.a : motion.div

              return (
                <CardTag
                  key={item.label}
                  {...(item.href
                    ? {
                        href: item.href,
                        target: item.href.startsWith('http') ? '_blank' : undefined,
                        rel: item.href.startsWith('http') ? 'noreferrer' : undefined,
                      }
                    : {})}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: idx * 0.08 }}
                  className="interface-panel interface-link block p-6"
                >
                  <p className="text-xs uppercase tracking-[0.28em] text-white/58 mb-3">{item.label}</p>
                  <h3 className="text-2xl font-grotesk mb-1 text-[#f4efe7] break-words">{item.value}</h3>
                  <p className="text-[#e2d5c8] leading-relaxed">Direct signal path.</p>
                </CardTag>
              )
            })}
          </div>
        </section>
      </div>
    </div>
  )
}
