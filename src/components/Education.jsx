import React, { useEffect, useRef, useState } from 'react';
import resumeFile from '../asstes/Nazrul-Islam-Resume.pdf';

const TIMELINE = [
  {
    title: 'Post Graduate — Political Science',
    institution: 'University of Chittagong',
    period: 'Graduation: (2020-2021)',
    details:
      'Post Graduate (MA) in Political Science. Coursework included political theory, comparative politics, research methods and public policy analysis.',
    highlight: true,
  },
  {
    title: 'Graduate — Political Science',
    institution: 'University of Chittagong',
    period: 'Graduation: (2016-2020)',
    details:
      'Graduate (B.S.S) in Political Science. Coursework included political theory, comparative politics, research methods and public policy analysis.',
    highlight: true,
  },
];

const Education = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="education" ref={ref} className="container mx-auto px-6 py-16">
      <div
        className={`max-w-5xl mx-auto transition-all duration-700 ease-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="mb-8 flex items-start justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-white">Education</h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Academic qualifications and related highlights.
            </p>
          </div>
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="hidden md:block absolute left-6 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700" />

          <div className="space-y-8">
            {TIMELINE.map((item, idx) => (
              <article
                key={item.title + idx}
                className={`relative md:pl-16 pl-0 transition-transform duration-700 ease-out ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* timeline marker */}
                  <div className="md:shrink-0 md:mr-0 mr-3">
                    <div className="relative">
                      <span
                        className={`flex items-center justify-center w-10 h-10 rounded-full ${
                          item.highlight ? 'bg-primary text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-800'
                        } shadow`}
                        aria-hidden="true"
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M12 2v6l4 2" stroke="currentColor" />
                        </svg>
                      </span>

                      {/* connector for md+ */}
                      <span className="hidden md:block absolute left-1/2 -translate-x-1/2 top-10 h-full w-px bg-slate-200 dark:bg-slate-700" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold text-slate-800 dark:text-white">{item.title}</h3>
                        <div className="text-sm text-slate-500 dark:text-slate-400">{item.institution}</div>
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">{item.period}</div>
                    </div>

                    <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{item.details}</p>

                
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Mobile CTA area */}
        <div className="mt-8 flex sm:hidden gap-3">
          <a
            href={resumeFile}
            download
            target="_blank"
            rel="noreferrer"
            className="flex-1 text-center inline-flex items-center justify-center gap-2 bg-primary text-white px-4 py-2 rounded-md shadow hover:brightness-95 transition"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex-1 text-center inline-flex items-center justify-center gap-2 border border-border-light px-4 py-2 rounded-md"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default Education;