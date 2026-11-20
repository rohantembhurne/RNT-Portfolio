
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Truck,
  Target,
  Cpu,
  Github,
  Mail,
  Linkedin,
  Menu,
  X,
  Layers3,
  BarChart3,
  Workflow
} from 'lucide-react'
import { useState } from 'react'

const skills = [
  {
    icon: BriefcaseBusiness,
    title: 'Operations & Strategy',
    desc: 'Business operations, process improvement and strategic planning.'
  },
  {
    icon: Truck,
    title: 'Supply Chain & Logistics',
    desc: 'Inventory, procurement, warehouse and logistics management.'
  },
  {
    icon: Target,
    title: 'Go-To-Market (GTM)',
    desc: 'Market research, sales strategy and business growth.'
  },
  {
    icon: Cpu,
    title: 'Digital Transformation',
    desc: 'Business technology, AI tools and process automation.'
  }
]

const projects = [
  {
    number: '01',
    title: 'RNT BusinessPilot AI',
    category: 'Business Operations',
    desc: 'A planned business intelligence project connecting operations, supply chain, GTM and digital transformation.',
    status: 'In Development',
    icon: Workflow
  },
  {
    number: '02',
    title: 'Supply Chain Analytics',
    category: 'Inventory & Logistics',
    desc: 'A planned analytics project focused on inventory visibility, stock monitoring and operational decisions.',
    status: 'Planned',
    icon: BarChart3
  },
  {
    number: '03',
    title: 'Digital Business Systems',
    category: 'Digital Transformation',
    desc: 'Exploring practical digital tools and automation to improve business processes.',
    status: 'Planned',
    icon: Layers3
  }
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="min-h-screen overflow-hidden bg-[#020617] text-slate-100">

      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#020617]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#home" className="text-2xl font-extrabold tracking-widest text-cyan-400">
            RNT<span className="text-white">.</span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#home" className="hover:text-cyan-400">Home</a>
            <a href="#about" className="hover:text-cyan-400">About</a>
            <a href="#skills" className="hover:text-cyan-400">Expertise</a>
            <a href="#projects" className="hover:text-cyan-400">Projects</a>
            <a href="#contact" className="hover:text-cyan-400">Contact</a>
          </div>

          <a href="#contact" className="hidden rounded-full border border-cyan-400/50 px-5 py-2 text-sm text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950 md:block">
            Let's Connect <ArrowUpRight size={16} className="ml-1 inline" />
          </a>

          <button
            className="text-white md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="flex flex-col gap-5 border-t border-white/10 bg-slate-950 px-6 py-6 md:hidden">
            {['Home', 'About', 'Expertise', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="home" className="relative flex min-h-screen items-center px-6 pt-28">
        <div className="absolute right-[-150px] top-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-2 text-xs font-semibold tracking-wider text-cyan-300">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              FRESHER · BUSINESS OPERATIONS
            </div>

            <p className="mb-4 text-lg text-slate-400">Hello, I'm</p>

            <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-7xl">
              Rohan <span className="text-cyan-400">Tembhurne</span>
            </h1>

            <h2 className="mt-6 max-w-xl text-2xl font-semibold leading-relaxed text-slate-300 sm:text-3xl">
              Building Smarter <span className="text-cyan-400">Business Operations.</span>
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-slate-400">
              Interested in connecting business strategy, supply chain,
              market growth and digital technology to solve real business challenges.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#projects" className="rounded-full bg-cyan-400 px-7 py-4 font-bold text-slate-950 transition hover:bg-cyan-300">
                Explore My Work <ArrowUpRight className="ml-2 inline" size={18} />
              </a>

              <a href="#contact" className="rounded-full border border-white/20 px-7 py-4 font-semibold transition hover:border-cyan-400 hover:text-cyan-300">
                Contact Me
              </a>

              <a
                href="/Rohan-Tembhurne-Resume.pdf"
                download
                className="rounded-full border border-cyan-400 px-7 py-4 font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
              >
                Download Resume <ArrowUpRight className="ml-2 inline" size={18} />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-0 rounded-3xl bg-cyan-400/10 blur-3xl" />

            <div className="relative rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl backdrop-blur">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-sm font-semibold tracking-widest text-cyan-300">RNT / PROFILE</span>
                <span className="text-xs text-slate-500">2026</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  ['01', 'Strategy'],
                  ['02', 'Supply Chain'],
                  ['03', 'GTM'],
                  ['04', 'Digital']
                ].map(([number, label]) => (
                  <div key={number} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <p className="mb-3 text-2xl font-bold text-cyan-400">{number}</p>
                    <p className="text-sm text-slate-300">{label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-cyan-400/10 p-5">
                <p className="text-sm text-slate-400">My focus</p>
                <p className="mt-2 font-semibold text-cyan-200">
                  Connecting four business disciplines into one system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-white/10 px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
            About Me
          </p>

          <h2 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Business thinking meets <span className="text-cyan-400">digital execution.</span>
          </h2>

          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <p className="leading-8 text-slate-400">
              I am a fresher building my knowledge across business operations,
              supply chain and digital business systems. My goal is to understand
              how businesses work and how better processes and technology can
              create measurable improvements.
            </p>

            <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-7">
              <p className="text-sm text-slate-500">CAREER DIRECTION</p>
              <p className="mt-3 text-xl font-bold text-white">
                Operations & Business Transformation
              </p>
              <p className="mt-3 leading-7 text-slate-400">
                Learning, building practical projects and preparing for opportunities
                where business and technology come together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section id="skills" className="border-t border-white/10 bg-slate-950/50 px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
            My Expertise
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Four Pillars. <span className="text-cyan-400">One Vision.</span>
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-slate-400">
            My learning and career focus brings together four connected business disciplines.
          </p>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill) => {
              const Icon = skill.icon

              return (
                <div key={skill.title} className="group rounded-2xl border border-white/10 bg-slate-900/50 p-7 transition hover:-translate-y-2 hover:border-cyan-400/50">
                  <Icon className="mb-7 text-cyan-400" size={34} />
                  <h3 className="text-lg font-bold">{skill.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-400">{skill.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-t border-white/10 px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
            Selected Work
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Projects & <span className="text-cyan-400">Experiments.</span>
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-slate-400">
            Business-focused projects and practical experiments. Planned work is clearly labelled.
          </p>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => {
              const Icon = project.icon

              return (
                <div key={project.number} className="rounded-2xl border border-white/10 bg-slate-900/50 p-8 transition hover:border-cyan-400/50">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-cyan-400">
                      {project.number} / 03
                    </span>
                    <Icon className="text-slate-500" size={25} />
                  </div>

                  <p className="mt-8 text-xs font-bold uppercase tracking-widest text-slate-500">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold">{project.title}</h3>

                  <p className="mt-4 min-h-24 leading-7 text-slate-400">
                    {project.desc}
                  </p>

                  <span className="mt-7 inline-block rounded-full border border-cyan-400/30 px-4 py-2 text-xs text-cyan-300">
                    {project.status}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-white/10 bg-slate-950/50 px-6 py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
            Get In Touch
          </p>

          <h2 className="text-4xl font-bold sm:text-6xl">
            Let's build something <span className="text-cyan-400">better.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-400">
            Open to fresher opportunities, learning, collaboration and business projects.
          </p>

          <a href="mailto:tembhurnerohan4@gmail.com" className="mt-10 inline-flex items-center gap-3 rounded-full bg-cyan-400 px-8 py-4 font-bold text-slate-950 transition hover:bg-cyan-300">
            <Mail size={18} /> Email Me <ArrowUpRight size={18} />
          </a>

          <div className="mt-10 flex justify-center gap-6 text-slate-400">
            <a
              href="https://github.com/rohantembhurne"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-cyan-400"
              aria-label="GitHub Profile"
            >
              <Github />
            </a>

            <a
              href="https://www.linkedin.com/in/rohan-tembhurne-6a5730426/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-cyan-400"
              aria-label="LinkedIn Profile"
            >
              <Linkedin />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
          <p>© 2026 RNT Portfolio. Built with purpose.</p>
          <p>Operations · Supply Chain · GTM · Digital Transformation</p>
        </div>
      </footer>

    </main>
  )
}

export default App
