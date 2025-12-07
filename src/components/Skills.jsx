import React, { useEffect, useRef, useState } from 'react';

const CATEGORIES = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 80 },
      { name: 'HTML5 / CSS3', level: 95 },
      { name: 'Tailwind CSS', level: 88 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 86 },
      { name: 'Express', level: 82 },
      { name: 'MongoDB', level: 76 },
      { name: 'PostgreSQL', level: 70 },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git & GitHub', level: 92 },
      { name: 'Figma', level: 70 },
      { name: 'Webpack', level: 65 },
      { name: 'Vercel', level: 80 },
    ],
  },
];

const SkillRow = ({ name, level, animate }) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{name}</span>
        <span className="text-xs text-slate-500 dark:text-slate-400 tabular-nums">{level}%</span>
      </div>
      <div
        className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden"
        role="progressbar"
        aria-valuenow={level}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label={`${name} proficiency ${level} percent`}
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-green-light to-blue-light transition-all duration-1200 ease-out"
          style={{
            width: animate ? `${level}%` : '0%',
            transitionProperty: 'width, opacity, transform',
            transitionDuration: '1000ms',
          }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    // IntersectionObserver to trigger animation when section enters viewport
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
            // once animated, we can unobserve to save work
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className="flex-grow container mx-auto px-6 py-16">
      <div className="w-full max-w-6xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-extrabold text-slate-800 dark:text-white">My Skills</h2>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Organized by category — proficiency shown as an approximate percentage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.title}
              className="p-5 rounded-xl border border-border-light dark:border-border-dark bg-white/50 dark:bg-slate-900/40 shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">{cat.title}</h3>
                <div className="text-xs text-slate-500 dark:text-slate-400">{cat.skills.length} items</div>
              </div>

              <div className="space-y-4">
                {cat.skills.map((s) => (
                  <SkillRow key={s.name} name={s.name} level={s.level} animate={animate} />
                ))}
              </div>

              <div className="mt-5 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <span className="inline-block w-2 h-2 rounded-full bg-green-light" />
                <span>Proficiency indicator (animated on view)</span>
              </div>
            </div>
          ))}
        </div>

        {/* Optional breakdown / radar preview for larger screens */}
        <div className="mt-10 hidden lg:flex items-center justify-between gap-6">
          <div className="flex-1 p-6 rounded-xl border border-border-light dark:border-border-dark bg-white/50 dark:bg-slate-900/40 shadow-sm">
            <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-3">Top front-end</h4>
            <div className="flex gap-2 flex-wrap">
              {CATEGORIES[0].skills.slice(0, 4).map((s) => (
                <span key={s.name} className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm">
                  {s.name}
                </span>
              ))}
            </div>
          </div>

          <div className="w-64 p-6 rounded-xl border border-border-light dark:border-border-dark bg-white/50 dark:bg-slate-900/40 shadow-sm">
            <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-3">Quick stats</h4>
            <div className="text-xs text-slate-600 dark:text-slate-300 space-y-2">
              <div className="flex justify-between"><span>Projects</span><span>5+</span></div>
              <div className="flex justify-between"><span>Years coding</span><span>2+</span></div>
              <div className="flex justify-between"><span>Primary stack</span><span>MERN</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;