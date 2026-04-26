import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const ALL_TAG = 'all';

const PROJECTS = [
  {
    id: 'halalkaj',
    title: 'Freelance Marketplace — HalalKaj',
    description: 'A full-featured freelance marketplace (client + server) with job posting, bidding and messaging.',
    long:
      'Freelance marketplace built as a MERN app. Client handles authentication, job listings, bidding, and payments UI. Server provides REST APIs for users, jobs, bids and messaging.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Firebase Auth'],
    demo: 'https://halalkaj.web.app/',
    repoClient: 'https://github.com/nazrul1995/halalkaj-client',
    repoServer: 'https://github.com/nazrul1995/halalkaj-server',
    category: 'react',
    // Place an image at public/projects/halalkaj.png (or change path)
    image: 'https://i.ibb.co.com/60RCXzb9/halalkaj.jpg',
  },
  {
    id: 'kids-shop-firebase',
    title: 'Kids E‑commerce Shop (Firebase)',
    description: 'A kids products e‑commerce web app (client) with cart, checkout and admin functionality.',
    long:
      'E‑commerce client deployed on Firebase. Features product listing, cart, checkout flow, and admin dashboard. Uses client-side auth and Firebase for data storage.',
    tech: ['React', 'Firebase', 'Tailwind'],
    demo: 'https://kids-shop-121d0.web.app/',
    repoClient: 'https://github.com/nazrul1995/kids-shop',
    repoServer: null,
    category: 'react',
    image: 'https://i.ibb.co.com/93sxK6pp/kids-react.jpg',
  },
  {
    id: 'kids-shop-next',
    title: 'Kids E‑commerce — Next.js',
    description: 'Next.js version of the kids shop (SSR/SSG + modern routing), deployed to Vercel.',
    long:
      'Next.js implementation focusing on better SEO and server-rendered pages. Uses modern Next routing and optimizations; client code in same repo as above (see link).',
    tech: ['Next.js', 'React', 'Vercel'],
    demo: 'https://nazrul1995-kids-shop-next-client.vercel.app/',
    repoClient: 'https://github.com/nazrul1995/kids-shop',
    repoServer: null,
    category: 'next',
    image: 'https://i.ibb.co.com/93sxK6pp/kids-react.jpg',
  },
];

const CATEGORIES = [ALL_TAG, 'react', 'next', 'other'];

const IconLink = ({ href, children, label }) => (
  <a
    href={href || '#'}
    target={href ? '_blank' : undefined}
    rel={href ? 'noopener noreferrer' : undefined}
    className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-white/90 dark:bg-slate-800/60 text-slate-800 dark:text-slate-200 border border-slate-200/30 hover:shadow-md transition"
    aria-label={label}
  >
    {children}
  </a>
);

const Projects = () => {
  const [filter, setFilter] = useState(ALL_TAG);
  const [visibleList, setVisibleList] = useState(PROJECTS);
  const [selected, setSelected] = useState(null);
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const tlRef = useRef(null);

  useEffect(() => {
    const next = filter === ALL_TAG ? PROJECTS : PROJECTS.filter((p) => p.category === filter);
    setVisibleList(next);
  }, [filter]);

  useEffect(() => {
    if (tlRef.current) {
      tlRef.current.kill();
      tlRef.current = null;
    }
    const cards = (cardRefs.current || []).filter(Boolean);
    const ctx = gsap.context(() => {
      tlRef.current = gsap.timeline();
      if (cards.length) {
        tlRef.current.fromTo(
          cards,
          { y: 18, opacity: 0, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: 'power3.out',
          }
        );
      }
    }, containerRef);

    return () => {
      if (tlRef.current) tlRef.current.kill();
      ctx.revert();
    };
  }, [visibleList]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setSelected(null);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <section id="projects" className="flex-grow container mx-auto px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-800 dark:text-white flex items-center gap-3">
              <span className="text-primary">/</span>projects
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">// Selected projects & live demos</p>
          </div>

          <div className="flex items-center gap-3 overflow-x-auto">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-3 py-1 rounded-md text-sm transition whitespace-nowrap ${
                  filter === c
                    ? 'bg-primary text-white shadow'
                    : 'bg-transparent text-slate-600 dark:text-slate-300 border border-transparent hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
                aria-pressed={filter === c}
              >
                {c === ALL_TAG ? 'All' : c}
              </button>
            ))}
          </div>
        </header>

        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleList.map((p, idx) => (
            <article
              key={p.id}
              ref={(el) => (cardRefs.current[idx] = el)}
              className="project-card relative rounded-xl overflow-hidden border border-border-light dark:border-border-dark bg-white/40 dark:bg-slate-900/40 shadow-sm hover:shadow-lg transition"
            >
              {/* image header */}
              <div className="h-36 relative">
                {p.image ? (
                  <>
                    <img src={p.image} alt={`${p.title} screenshot`} className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/35" />
                    <div className="absolute inset-0 flex items-end p-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                      </div>
                      <div className="ml-3 flex-shrink-0 flex gap-2">
                        <IconLink href={p.demo} label="Live demo">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M14 3h7v7" stroke="currentColor" />
                            <path d="M10 14L21 3" stroke="currentColor" />
                            <path d="M21 21H3V3" stroke="currentColor" />
                          </svg>
                        </IconLink>

                        <IconLink href={p.repoClient} label="Client repository">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.9.57.1.78-.25.78-.55 0-.28-.01-1.02-.02-2-3.2.69-3.88-1.54-3.88-1.54-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.74 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.53-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.48.11-3.08 0 0 .96-.31 3.14 1.18a10.9 10.9 0 012.86-.39c.97.01 1.95.13 2.86.39 2.18-1.49 3.14-1.18 3.14-1.18.62 1.6.23 2.79.11 3.08.73.81 1.18 1.83 1.18 3.09 0 4.43-2.7 5.4-5.27 5.69.41.35.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.13 0 .3.21.66.79.55A11.52 11.52 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"></path>
                          </svg>
                        </IconLink>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="h-36 flex items-end p-4 bg-slate-300 dark:bg-slate-700">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-800 dark:text-white">{p.title}</h3>
                      <p className="text-xs text-slate-700 dark:text-slate-200 mt-1">{p.description}</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3 flex-wrap">
                    {p.tech.map((t) => (
                      <span key={t} className="text-xs px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelected(p)}
                      className="text-sm text-primary underline hover:no-underline"
                      aria-haspopup="dialog"
                    >
                      Details
                    </button>
                  </div>
              </div>
            </article> 
          ))}
          
        </div>
      </div>

      {/* Modal: project details */}
      {selected && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
          onClick={() => setSelected(null)}
        >
          <div onClick={(e) => e.stopPropagation()} className="w-full max-w-3xl rounded-xl bg-white dark:bg-slate-900 shadow-xl overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-border-light dark:border-border-dark">
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white">{selected.title}</h3>
              <button onClick={() => setSelected(null)} className="p-2 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition" aria-label="Close dialog">
                ✕
              </button>
            </div>

            <div className="p-6 space-y-4">
              {selected.image && (
                <div className="h-56 rounded-md overflow-hidden">
                  <img src={selected.image} alt={`${selected.title} large screenshot`} className="w-full h-full object-cover" />
                </div>
              )}

              <p className="text-slate-700 dark:text-slate-300">{selected.long}</p>

              <div className="flex flex-wrap gap-2">
                {selected.tech.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a href={selected.demo || '#'} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md">
                  View Live
                </a>

                <a href={selected.repoClient || '#'} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-border-light px-4 py-2 rounded-md">
                  Client Repo
                </a>

                {selected.repoServer && (
                  <a href={selected.repoServer} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-border-light px-4 py-2 rounded-md">
                    Server Repo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;