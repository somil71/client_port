import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, type ChangeEvent, type FormEvent } from 'react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import PageMeta from '../components/PageMeta'
import { db } from '../config/firebase'

const quickNotes = [
  { label: 'Best for', value: 'Portfolio submissions, creative showcases, freelance inquiries, and project presentation help.' },
  { label: 'Response style', value: 'Structured, project-focused, and easy to review for both academic and client work.' },
  { label: 'Availability', value: 'Remote collaboration and digital submission support.' },
]

const contactBlocks = [
  { label: 'Phone', value: '+91 XXXXX XXXXX', href: 'tel:+910000000000' },
  { label: 'Email', value: 'hello@yourportfolio.com', href: 'mailto:hello@yourportfolio.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/your-profile', href: 'https://www.linkedin.com/' },
  { label: 'Instagram', value: 'instagram.com/your-handle', href: 'https://www.instagram.com/' },
]

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
        title="Somil Portfolio | Contact"
        description="Contact page with phone, email, social links, and a working contact form."
      />

      <motion.div style={{ y: gridY }} className="contact-grid-overlay" />

      <div className="max-w-6xl mx-auto relative z-10">
        <section className="grid xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] gap-10 items-start mb-16">
          <div className="space-y-6 min-w-0">
            <span className="interface-kicker">Contact / Interface mode</span>
            <h1 className="interface-title">
              Less poster.
              <span className="block accent-text">More signal flow.</span>
            </h1>
            <p className="text-[#c7b8a7] text-lg leading-relaxed max-w-xl">
              This page shifts again into a cleaner systems aesthetic: grid overlays, connection lines,
              panel logic, and scroll movement that feels like navigating an interface rather than a promo page.
            </p>
          </div>

          <div className="interface-panel p-6 lg:p-7 min-w-0">
            <p className="interface-kicker mb-5">Quick notes</p>
            <div className="grid gap-4">
              {quickNotes.map((note, idx) => (
                <motion.div
                  key={note.label}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.45, delay: idx * 0.06 }}
                  className="interface-cell"
                >
                  <p className="text-xs uppercase tracking-[0.28em] text-white/40 mb-2">{note.label}</p>
                  <p className="text-[#f4efe7]/82 leading-relaxed">{note.value}</p>
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
                  <option value="graphic-design">Graphic Design</option>
                  <option value="animation">2D Animation / Motion Graphics</option>
                  <option value="editing">Video Editing / Filmmaking</option>
                  <option value="vfx">VFX / Compositing</option>
                  <option value="portfolio">Portfolio review</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="interface-label">Budget</label>
                <select name="budget" value={formData.budget} onChange={handleChange} className="contact-input">
                  <option value="">Select a budget range</option>
                  <option value="academic">Academic / student project</option>
                  <option value="starter">Starter freelance scope</option>
                  <option value="standard">Standard project scope</option>
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
                  placeholder="Tell me which category of work you are asking about and what kind of project support you need."
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
            {contactBlocks.map((item, idx) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: idx * 0.08 }}
                className="interface-panel interface-link block p-6"
              >
                <p className="text-xs uppercase tracking-[0.28em] text-white/40 mb-3">{item.label}</p>
                <h3 className="text-2xl font-grotesk mb-1 text-[#f4efe7]">{item.value}</h3>
                <p className="text-[#c7b8a7] leading-relaxed">Direct signal path.</p>
              </motion.a>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
