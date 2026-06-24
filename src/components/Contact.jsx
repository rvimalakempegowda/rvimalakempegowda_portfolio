import { useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi'
import { HiArrowLongRight, HiCheckCircle } from 'react-icons/hi2'
import { personal } from '../data/portfolio'
import { SectionLabel } from './About'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Contact() {
  const heading  = useScrollReveal(0)
  const linksRef = useScrollReveal(100)
  const formRef  = useScrollReveal(150)

  const [fields, setFields]   = useState({ name: '', email: '', message: '' })
  const [status, setStatus]   = useState('idle') // idle | sending | sent | error

  function handleChange(e) {
    setFields(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/xjgqgekk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(fields),
      })
      if (res.ok) {
        setStatus('sent')
        setFields({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Contact</SectionLabel>
        <h2 ref={heading} className="reveal text-3xl md:text-4xl font-bold text-navy mb-4">Let's Talk</h2>
        <p className="text-gray-500 text-base max-w-lg mb-12 leading-relaxed">
          Open to new roles, collaborations, and conversations about data engineering.
          I typically respond within a day.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact info */}
          <div ref={linksRef} className="reveal bg-gray-50 rounded-xl p-8 border border-gray-100 space-y-6">
            {[
              { Icon: HiOutlineMail,           label: 'Email',    value: personal.email,                    href: `mailto:${personal.email}` },
              { Icon: FaLinkedin,              label: 'LinkedIn', value: 'revanth-gowda-vimala-kempegowda', href: personal.linkedin },
              { Icon: FaGithub,               label: 'GitHub',   value: 'rvimalakempegowda',               href: personal.github },
              { Icon: HiOutlineLocationMarker, label: 'Location', value: personal.location,                 href: null },
            ].map(({ Icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue/8 flex items-center justify-center text-blue shrink-0">
                  <Icon size={16} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">{label}</p>
                  {href ? (
                    <a href={href}
                       target={href.startsWith('http') ? '_blank' : undefined}
                       rel="noopener noreferrer"
                       className="text-sm text-navy hover:text-blue transition-colors truncate block font-medium">
                      {value}
                    </a>
                  ) : (
                    <span className="text-sm text-navy font-medium">{value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Contact form */}
          <div ref={formRef} className="reveal bg-gray-50 rounded-xl p-8 border border-gray-100">
            {status === 'sent' ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-8">
                <HiCheckCircle className="text-green-500 text-5xl" />
                <h3 className="text-xl font-bold text-navy">Message sent!</h3>
                <p className="text-gray-500 text-sm">Thanks for reaching out. I'll get back to you within a day.</p>
                <button onClick={() => setStatus('idle')}
                        className="text-sm text-blue font-semibold hover:underline mt-2">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Name</label>
                  <input
                    type="text" name="name" required
                    value={fields.name} onChange={handleChange}
                    placeholder="Your name"
                    className="w-full text-sm text-navy bg-white border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-blue transition-colors placeholder:text-gray-300"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Email</label>
                  <input
                    type="email" name="email" required
                    value={fields.email} onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full text-sm text-navy bg-white border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-blue transition-colors placeholder:text-gray-300"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Message</label>
                  <textarea
                    name="message" required rows={4}
                    value={fields.message} onChange={handleChange}
                    placeholder="What's on your mind?"
                    className="w-full text-sm text-navy bg-white border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-blue transition-colors placeholder:text-gray-300 resize-none"
                  />
                </div>
                {status === 'error' && (
                  <p className="text-xs text-red-500">Something went wrong. Try emailing directly at {personal.email}</p>
                )}
                <button
                  type="submit" disabled={status === 'sending'}
                  className="group w-full flex items-center justify-between bg-blue text-white font-semibold text-sm px-6 py-3.5 rounded-lg hover:bg-blue-dark transition-colors disabled:opacity-60">
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                  <HiArrowLongRight className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-gray-400">© {new Date().getFullYear()} Revanth Gowda Vimala Kempegowda</span>
          <div className="flex items-center gap-5 text-gray-400">
            <a href={personal.github}   target="_blank" rel="noopener noreferrer" className="hover:text-navy transition-colors" aria-label="GitHub"><FaGithub /></a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue transition-colors" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href={`mailto:${personal.email}`} className="hover:text-blue transition-colors" aria-label="Email"><HiOutlineMail /></a>
          </div>
        </div>
      </div>
    </section>
  )
}
