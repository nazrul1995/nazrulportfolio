import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const TECH = ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind'];

const About = () => {
  const rootRef = useRef(null);
  const linesRef = useRef([]);
  const badgesRef = useRef([]);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger in the main lines
      gsap.from(linesRef.current, {
        y: 18,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power3.out',
      });

      // Badges entrance and gentle float
      gsap.from(badgesRef.current, {
        y: 12,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'back.out(1.1)',
        delay: 0.3,
      });
      badgesRef.current.forEach((el, i) => {
        gsap.to(el, {
          y: i % 2 === 0 ? -6 : 6,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          duration: 3 + i * 0.25,
          delay: 1,
        });
      });

      // Right-side cards pop
      gsap.from(cardsRef.current, {
        scale: 0.96,
        opacity: 0,
        duration: 0.7,
        stagger: 0.09,
        ease: 'power2.out',
        delay: 0.4,
      });
      cardsRef.current.forEach((el, i) => {
        gsap.to(el, {
          y: i % 2 === 0 ? -4 : 4,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          duration: 4 + i * 0.3,
          delay: 1.2,
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={rootRef} className="flex-grow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: heading, description, code-card */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-white">_about-me</h2>
              <div className="w-24 h-px bg-primary" />
            </div>

            <div>
              <p ref={(el) => (linesRef.current[0] = el)} className="text-lg text-slate-700 dark:text-slate-300 mb-3">
                Hi — I’m Nazrul. I build responsive, accessible web apps using the MERN stack.
              </p>
              <p ref={(el) => (linesRef.current[1] = el)} className="text-base text-slate-600 dark:text-slate-300 mb-4">
                I turn designs into production-ready interfaces and design APIs for scale. I focus on performance, accessibility and developer ergonomics.
              </p>
            </div>

            <div
              className="bg-slate-900/5 dark:bg-slate-800/30 border border-slate-200/10 dark:border-slate-700/40 rounded-lg p-5 font-mono text-sm text-slate-600 dark:text-slate-300"
              aria-hidden="false"
            >
              <div className="flex items-center gap-3 pb-3 mb-3 border-b border-slate-200/10">
                <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
                <span className="ml-auto text-xs text-slate-400">Personal-Info.js</span>
              </div>

              <pre className="text-xs sm:text-sm leading-relaxed">
                <code>
                  <div ref={(el) => (linesRef.current[2] = el)}>{`const aboutMe = {`}</div>
                  <div ref={(el) => (linesRef.current[3] = el)} className="pl-4">{`name: 'Nazrul Islam',`}</div>
                  <div ref={(el) => (linesRef.current[4] = el)} className="pl-4">{`title: 'MERN Stack Developer',`}</div>
                  <div ref={(el) => (linesRef.current[5] = el)} className="pl-4">{`bio: 'I build responsive web apps and APIs.'`}</div>
                  <div ref={(el) => (linesRef.current[6] = el)}>{`};`}</div>
                </code>
              </pre>
            </div>

            <div className="flex flex-wrap gap-3" aria-hidden="true">
              {TECH.map((t, i) => (
                <span
                  key={t}
                  ref={(el) => (badgesRef.current[i] = el)}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 shadow-sm"
                >
                  <svg className="w-3 h-3 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right: summary cards (no image) */}
          <div className="flex flex-col items-center lg:items-end gap-6">
            <div
              ref={(el) => (cardsRef.current[0] = el)}
              className="w-full max-w-sm bg-white dark:bg-slate-800 border border-slate-200/10 dark:border-slate-700/40 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">What I build</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                Modern single-page apps with React, server-side APIs with Express and Node, and document data models in MongoDB.
              </p>
              <div className="flex gap-2">
                <a href="#projects" className="inline-block px-3 py-2 bg-primary text-white rounded-md text-sm">See Projects</a>
                <a href="#contact" className="inline-block px-3 py-2 border border-slate-300 rounded-md text-sm">Contact</a>
              </div>
            </div>

            <div
              ref={(el) => (cardsRef.current[1] = el)}
              className="w-full max-w-sm bg-slate-100/60 dark:bg-slate-800/40 border border-slate-200/10 dark:border-slate-700/40 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">Fun facts</h3>
              <ul className="text-sm text-slate-700 dark:text-slate-200 space-y-2">
                <li>&gt; I love pixel-perfect UIs and clean architecture.</li>
                <li>&gt; I enjoy hiking and experimenting with coffee.</li>
                <li>&gt; I favor accessibility and performance-first approaches.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;