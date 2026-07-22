import { motion } from 'framer-motion'
import { Menu,  Trophy } from 'lucide-react'
import { useState } from 'react'
import { ActionButton } from '../components/ActionButton'
import { GlassCard } from '../components/GlassCard'
import { SectionTitle } from '../components/SectionTitle'
import { contactLinks, heroHighlights, navLinks, projects, skills } from '../data/content'

export function PortfolioPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(167,139,250,0.2),transparent_25%),#020617] text-slate-100">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="text-lg font-semibold tracking-[0.25em] text-cyan-300">
            SHUBHAM
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              link === 'Resume' ? (
                <a key={link} href={`${import.meta.env.BASE_URL}docs/resume.pdf`} download className="text-sm text-cyan-200 transition hover:text-white">
                  {link}
                </a>
              ) : (
                <a key={link} href={`#${link.toLowerCase()}`} className="text-sm text-slate-300 transition hover:text-white">
                  {link}
                </a>
              )
            ))}
          </nav>
          <button className="rounded-full border border-white/10 bg-white/10 p-2 md:hidden" onClick={() => setMobileMenuOpen((prev) => !prev)}>
            <Menu size={18} />
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="border-t border-white/10 bg-slate-950/95 px-4 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                link === 'Resume' ? (
                  <a key={link} href={`${import.meta.env.BASE_URL}docs/resume.pdf`} download className="text-sm text-cyan-200" onClick={() => setMobileMenuOpen(false)}>
                    {link}
                  </a>
                ) : (
                  <a key={link} href={`#${link.toLowerCase()}`} className="text-sm text-slate-300" onClick={() => setMobileMenuOpen(false)}>
                    {link}
                  </a>
                )
              ))}
            </div>
          </div>
        )}
      </header>

      <main id="home" className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <section className="grid items-start gap-6">
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="space-y-4">

            <div className="flex items-center gap-4">
              <img src={`${import.meta.env.BASE_URL}profile-picture.jpeg`} alt="Shubham Francis" className="h-28 w-28 rounded-full object-contain bg-white"/>
              <div>
                <h1 className="text-2xl font-semibold leading-tight text-white sm:text-3xl">
                  Shubham Francis
                </h1>
                <p className="text-sm font-medium text-cyan-300">BCA · Backend · Python</p>
              </div>
            </div>

            <p className="max-w-xl text-sm text-slate-300">Building backend services and APIs with Python and Flask. Focused on practical projects and clear, simple interfaces.</p>

            <div className="flex flex-wrap gap-3">
              <ActionButton href="#projects">Explore Projects</ActionButton>
              <ActionButton href="#contact" variant="secondary">Connect</ActionButton>
            </div>

            <div className="flex flex-wrap gap-2">
              {heroHighlights.map((item) => (
                <span key={item} className="rounded-full border border-white/8 bg-white/5 px-3 py-1 text-xs text-slate-200">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="about" className="grid gap-4">
          <div className="max-w-3xl space-y-3">
            <SectionTitle eyebrow="About" title="Focused on practical backend work" description="Studying BCA at MIET. Building Python/Flask services and APIs with attention to simplicity and reliability." />
            <div className="flex gap-4 text-sm text-slate-300">
              <div className="space-y-1">
                <p>Clean code</p>
                <p>API design</p>
              </div>
              <div className="space-y-1">
                <p>Practical projects</p>
                <p>Backend fundamentals</p>
              </div>
            </div>
            <p className="text-xs text-slate-400">Expected graduation: 2027</p>
          </div>
        </section>

        <section id="skills" className="space-y-6">
          <SectionTitle eyebrow="Skills" title="Technical strengths" description="I am building strong fundamentals in backend development and Python-based solutions." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => {
              const Icon = skill.icon
              const levelClass = skill.level === 'Core' ? 'bg-cyan-500/20 text-cyan-200' : 'bg-violet-500/20 text-violet-200'
              return (
                <GlassCard key={skill.name} className="flex items-center justify-between gap-4 p-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 text-cyan-200">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="text-md font-semibold text-white">{skill.name}</h3>
                      <div className={`mt-1 inline-block rounded-full px-2 py-0.5 text-xs ${levelClass}`}>{skill.level}</div>
                    </div>
                  </div>
                </GlassCard>
              )
            })}
          </div>
        </section>

        <section id="projects" className="space-y-6">
          <SectionTitle eyebrow="Projects" title="Selected projects" description="A few focused, practical projects." />
          <div className="mx-auto max-w-4xl flex flex-col gap-4">
            {projects.map((project, idx) => (
              <GlassCard key={project.title + idx} className="flex flex-col gap-3 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-cyan-300 font-semibold">{idx + 1}.</div>
                    <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  </div>
                  <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 p-2 text-cyan-200">
                    <Trophy size={16} />
                  </div>
                </div>
                {project.scopeHeading && (
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold text-cyan-200">{project.scopeHeading}</h4>
                    <p className="text-sm leading-6 text-slate-300">{project.scopeDescription}</p>
                  </div>
                )}

                {project.description && <p className="text-sm leading-6 text-slate-300">{project.description}</p>}

                <div className="flex flex-wrap gap-2">
                  {project.tags?.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">{tag}</span>
                  ))}
                </div>
                <div>
                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-sm text-cyan-200 underline">See Project</a>
                  ) : (
                    <span className="text-sm text-slate-400">Upcoming</span>
                  )}
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        <section id="certificates" className="space-y-4">
          <SectionTitle eyebrow="Certificates" title="Computer Architecture" description="" />
          <GlassCard>
            <p className="text-sm text-slate-300">
              Earned the <span className="font-semibold text-white">NPTEL Computer Architecture</span> certification, covering CPU design, memory systems, pipelining, and performance optimization. Enhanced my understanding of how hardware and software interact to improve program execution.
            </p>
            <div className="mt-3">
              <a href="/docs/certificates/computer-architecture.pdf" target="_blank" rel="noreferrer" className="text-sm text-cyan-200 underline">View Certificate</a>
            </div>
          </GlassCard>
        </section>

        <section id="contact" className="space-y-6">
          <SectionTitle eyebrow="Contact" title="Let’s build something exceptional" description="I’m open to collaborations, product roles, and ambitious ideas." />
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-5">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Get in touch</p>
                <p className="mt-3 text-lg text-slate-200">I am currently looking for opportunities to learn, contribute, and grow as a developer. Feel free to reach out for internships, projects, or networking.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                  <ActionButton href="#home" variant="secondary">Back to Top</ActionButton>
                </div>
            </div>
            <div className="grid gap-3">
              {contactLinks.map((item) => {
                const Icon = item.icon
                return (
                  <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/30 px-4 py-3 text-slate-200 transition hover:border-cyan-400/30 hover:bg-white/10">
                    <div className="rounded-full bg-cyan-500/10 p-2 text-cyan-200"><Icon size={16} /></div>
                    <span>{item.label}</span>
                  </a>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-4 py-6 text-center text-sm text-slate-400 sm:px-6 lg:px-8">
        © 2026 Shubham Francis. Built with React, Vite, Tailwind, and Framer Motion.
      </footer>
    </div>
  )
}
