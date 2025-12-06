import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import resumeFile from '../asstes/Nazrul-Islam-Resume.pdf';

const TECHS = ['MongoDB', 'Express', 'React', 'Node.js'];

const Hero = () => {
  const rootRef = useRef(null);
  const textEls = useRef([]);
  const badgeEls = useRef([]);
  const imageEl = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Build clean node arrays (ignore falsy entries)
      const tEls = (textEls.current || []).filter(Boolean);
      const bEls = (badgeEls.current || []).filter(Boolean);
      const img = imageEl.current || null;

      const tl = gsap.timeline();

      if (tEls.length) {
        // fromTo ensures a reliable end state
        tl.fromTo(
          tEls,
          { y: 28, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
            onComplete: () => gsap.set(tEls, { clearProps: 'transform,opacity' }),
          }
        );
      }

      if (img) {
        tl.from(
          img,
          {
            scale: 0.94,
            opacity: 0,
            duration: 0.9,
            ease: 'elastic.out(1, 0.6)',
          },
          tEls.length ? 0.12 : 0
        ).then(() => {
          // remove inline styles that may hide the element
          gsap.set(img, { clearProps: 'transform,opacity' });
        });
      }

      if (bEls.length) {
        gsap.from(bEls, {
          y: 12,
          opacity: 0,
          duration: 0.6,
          stagger: 0.09,
          ease: 'back.out(1.05)',
          delay: 0.4,
          onComplete: () => gsap.set(bEls, { clearProps: 'transform,opacity' }),
        });

        bEls.forEach((el, i) => {
          gsap.to(el, {
            y: i % 2 === 0 ? -6 : 6,
            repeat: -1,
            yoyo: true,
            duration: 3 + i * 0.15,
            ease: 'sine.inOut',
            delay: 1.2,
          });
        });
      }
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const smoothTo = (selector) => {
    const el = document.querySelector(selector);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section ref={rootRef} id="home" className="flex-grow container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Photo / visual column */}
        <div className="flex justify-center md:justify-start">
          <div
            ref={imageEl}
            className="w-44 sm:w-56 md:w-64 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-border-light bg-white"
            aria-hidden="false"
          >
            {/* Add your professional photo to public/profile.jpg or change this path */}
            <img src="/profile.jpg" alt="Nazrul Islam — profile" className="w-full h-full object-cover block" />
          </div>
        </div>

        {/* Text column - ensure on top (z-10) so links are clickable & visible */}
        <div className="hero-text relative z-10 space-y-6">
          <p ref={(el) => (textEls.current[0] = el)} className="text-sm text-slate-500 dark:text-slate-400">
            Hello, I'm
          </p>

          <h1 ref={(el) => (textEls.current[1] = el)} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Nazrul Islam
          </h1>

          <p ref={(el) => (textEls.current[2] = el)} className="text-lg sm:text-xl text-slate-700 dark:text-slate-200">
            MERN Stack Developer — building fast, responsive and accessible web applications.
          </p>

          <p ref={(el) => (textEls.current[3] = el)} className="text-sm text-slate-500 dark:text-slate-400 max-w-xl">
            I design and implement full-stack solutions using React, Node.js, Express and MongoDB.
            Focused on UX, performance and scalable APIs.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => smoothTo('#projects')}
              ref={(el) => (textEls.current[4] = el)}
              className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md shadow hover:brightness-95 transition"
            >
              View Projects
            </button>

            {/* Resume: imported so bundler serves it reliably */}
            <a
              ref={(el) => (textEls.current[5] = el)}
              href={resumeFile}
              download
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md shadow hover:brightness-95 transition"
              aria-label="Download resume"
              data-test="resume-button"
            >
              Download Resume
            </a>
          </div>

          {/* Social + tech badges */}
          <div className="flex flex-wrap items-center gap-4 mt-2">
            {/* Social links with subtle bg so they show on any background */}
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/nazrul1995"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md text-slate-900 dark:text-slate-100 bg-white/90 dark:bg-slate-800/60 border border-slate-200/40 dark:border-slate-700/40 hover:shadow-md transition"
                aria-label="GitHub"
                data-test="social-github"
                ref={(el) => (textEls.current[6] = el)}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.9.57.1.78-.25.78-.55 0-.28-.01-1.02-.02-2-3.2.69-3.88-1.54-3.88-1.54-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.74 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.53-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.48.11-3.08 0 0 .96-.31 3.14 1.18a10.9 10.9 0 012.86-.39c.97.01 1.95.13 2.86.39 2.18-1.49 3.14-1.18 3.14-1.18.62 1.6.23 2.79.11 3.08.73.81 1.18 1.83 1.18 3.09 0 4.43-2.7 5.4-5.27 5.69.41.35.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.13 0 .3.21.66.79.55A11.52 11.52 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/nazrulpabel/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md text-slate-900 dark:text-slate-100 bg-white/90 dark:bg-slate-800/60 border border-slate-200/40 dark:border-slate-700/40 hover:shadow-md transition"
                aria-label="LinkedIn"
                data-test="social-linkedin"
                ref={(el) => (textEls.current[7] = el)}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4v13h-4V8zm7 0h3.8v1.8h.1c.5-.9 1.8-1.8 3.7-1.8 4 0 4.8 2.6 4.8 6v7h-4V15.5c0-1.9 0-4.4-2.7-4.4-2.7 0-3.1 2.1-3.1 4.3V21H7V8z" />
                </svg>
              </a>
            </div>

            {/* MERN badges */}
            <div className="flex flex-wrap gap-2">
              {TECHS.map((t, i) => (
                <span
                  key={t}
                  ref={(el) => (badgeEls.current[i] = el)}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm shadow-sm"
                >
                  <svg className="w-3 h-3 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;