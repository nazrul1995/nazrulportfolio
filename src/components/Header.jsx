import React, { useEffect, useRef, useState } from 'react';

const NAV = [
  { href: '#home', label: '_home' },
  { href: '#about', label: '_about-me' },
  { href: '#projects', label: '_projects' },
  { href: '#contact', label: '_contact-me' },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');
  const observerRef = useRef(null);

  // Lock body scroll when menu is open and handle Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  // IntersectionObserver to update active section
  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.href.replace('#', ''))).filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive('#' + visible.target.id);
      },
      {
        root: null,
        rootMargin: '0px 0px -40% 0px',
        threshold: [0.25, 0.5, 0.75],
      }
    );

    sections.forEach((s) => observer.observe(s));
    observerRef.current = observer;

    return () => observer.disconnect();
  }, []);

  // Smooth scroll helper
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id) || document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActive(href);
    } else {
      window.location.hash = href;
    }
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-transparent border-b border-border-light text-slate-700 dark:text-slate-light">
      <div className="container mx-auto px-4 sm:px-8">
        <nav className="flex items-center justify-between py-3">
          <div className="flex items-center">
            <a
              className="text-lg font-medium py-2 pr-6 text-slate-800 dark:text-white"
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
            >
              Nazrul Islam
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-stretch h-full">
              <ul className="flex items-center gap-0 h-full">
                {NAV.slice(0, 3).map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`py-3 px-6 transition-colors duration-200 ${
                        active === item.href
                          ? 'text-white bg-slate-700/[.15] border-t-2 border-t-primary'
                          : 'hover:text-white'
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Desktop right link */}
          <div className="hidden md:flex">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className={`py-3 px-6 transition-colors duration-200 ${
                active === '#contact' ? 'text-white bg-slate-700/[.15] border-t-2 border-t-primary' : 'hover:text-white'
              }`}
            >
              {_formatLabel('_contact-me')}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen((s) => !s)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
              {!open ? (
                <svg className="w-6 h-6 text-slate-700 dark:text-slate-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-slate-700 dark:text-slate-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile overlay menu */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-0 bg-slate-900/60 backdrop-blur-sm transform transition-all duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!open}
      >
        <div
          className={`absolute top-0 right-0 w-full max-w-sm h-full bg-white dark:bg-slate-800 shadow-lg transform transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6 h-full flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <a
                className="text-lg font-medium text-slate-800 dark:text-white"
                href="#home"
                onClick={(e) => handleNavClick(e, '#home')}
              >
                Nazrul Islam
              </a>
              <button onClick={() => setOpen(false)} className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                <span className="sr-only">Close menu</span>
                <svg className="w-6 h-6 text-slate-700 dark:text-slate-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="flex-1">
              <ul className="flex flex-col gap-4">
                {NAV.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`block py-3 px-4 rounded text-slate-800 dark:text-white transition ${
                        active === item.href ? 'bg-slate-100 dark:bg-slate-700 font-semibold' : 'hover:bg-slate-50 dark:hover:bg-slate-700/50'
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-6">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="block w-full text-center py-2 rounded bg-primary text-white"
              >
                {_formatLabel('_contact-me')}
              </a>
            </div>
          </div>
        </div>

        {/* click outside to close */}
        <button
          aria-hidden="true"
          onClick={() => setOpen(false)}
          className="w-full h-full bg-transparent"
          tabIndex={-1}
        />
      </div>
    </header>
  );
};

// in-file helper (keeps labels consistent)
function _formatLabel(s) {
  return s;
}

export default Header;