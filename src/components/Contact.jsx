import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import resumeFile from '../asstes/Nazrul-Islam-Resume.pdf';

export default function Contact() {
  const rootRef = useRef(null);
  const formRef = useRef(null);
  const cardRef = useRef(null);

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ sending: false, success: null, error: null });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from([formRef.current, cardRef.current], {
        y: 20,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Email is invalid';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleChange = (e) => {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ sending: false, success: null, error: null });

    const eobj = validate();
    if (Object.keys(eobj).length) {
      setErrors(eobj);
      return;
    }

    // Simulated send: replace with API call if you have one
    try {
      setStatus({ sending: true, success: null, error: null });
      await new Promise((res) => setTimeout(res, 900)); // fake delay

      // For now open mail client fallback (optional)
      // const mailto = `mailto:your.email@example.com?subject=${encodeURIComponent(form.subject || 'Contact')} &body=${encodeURIComponent(`${form.name}\n\n${form.message}\n\n${form.email}`)}`;
      // window.location.href = mailto;

      setStatus({ sending: false, success: 'Message sent — thank you!', error: null });
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus({ sending: false, success: null, error: 'Failed to send — try again later.' });
    }
  };

  return (
    <section id="contact" ref={rootRef} className="container mx-auto px-6 py-16">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left: Form */}
        <div ref={formRef} className="bg-white dark:bg-slate-900/40 border border-border-light dark:border-border-dark rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-extrabold text-slate-800 dark:text-white mb-2">Contact Me</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
            Interested in working together or have a question? Send a message — I usually reply within 24–48 hours.
          </p>

          <form onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-xs text-slate-500 dark:text-slate-400 mb-1 block">_name</span>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 rounded-md border ${
                    errors.name ? 'border-red-400' : 'border-border-light'
                  } bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-primary`}
                  aria-invalid={!!errors.name}
                />
                {errors.name && <div className="text-xs text-red-400 mt-1">{errors.name}</div>}
              </label>

              <label className="block">
                <span className="text-xs text-slate-500 dark:text-slate-400 mb-1 block">_email</span>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 rounded-md border ${
                    errors.email ? 'border-red-400' : 'border-border-light'
                  } bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-primary`}
                  aria-invalid={!!errors.email}
                />
                {errors.email && <div className="text-xs text-red-400 mt-1">{errors.email}</div>}
              </label>
            </div>

            <label className="block mt-4">
              <span className="text-xs text-slate-500 dark:text-slate-400 mb-1 block">_subject</span>
              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-md border border-border-light bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </label>

            <label className="block mt-4">
              <span className="text-xs text-slate-500 dark:text-slate-400 mb-1 block">_message</span>
              <textarea
                name="message"
                rows="6"
                value={form.message}
                onChange={handleChange}
                className={`w-full px-3 py-2 rounded-md border ${
                  errors.message ? 'border-red-400' : 'border-border-light'
                } bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-primary`}
                aria-invalid={!!errors.message}
              />
              {errors.message && <div className="text-xs text-red-400 mt-1">{errors.message}</div>}
            </label>

            <div className="mt-4 flex items-center gap-3">
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md shadow hover:brightness-95 transition disabled:opacity-60"
                disabled={status.sending}
              >
                {status.sending ? (
                  <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25"></circle>
                    <path d="M22 12a10 10 0 00-10-10" stroke="currentColor" strokeWidth="3" className="opacity-75"></path>
                  </svg>
                ) : null}
                <span>{status.sending ? 'Sending...' : 'Send Message'}</span>
              </button>

              <a
                href={resumeFile}
                download
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-border-light px-4 py-2 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800 transition text-sm"
                aria-label="Download resume"
              >
                Resume
              </a>

              {status.success && <div className="text-sm text-green-600 dark:text-green-400">{status.success}</div>}
              {status.error && <div className="text-sm text-red-500 dark:text-red-400">{status.error}</div>}
            </div>
          </form>
        </div>

        {/* Right: Contact Card + Socials */}
        <aside ref={cardRef} className="space-y-6">
          <div className="bg-white dark:bg-slate-900/40 border border-border-light dark:border-border-dark rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Alternative contact</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Prefer email or social? Use any of the links below.</p>

            <div className="mt-4 space-y-3 text-slate-700 dark:text-slate-200">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none"><path d="M4 4h16v16H4z" stroke="currentColor" strokeWidth="1.5"/></svg>
                <a className="text-sm hover:underline" href="mailto:your.email@example.com">independentnazrul@gmail.com</a>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none"><path d="M3 6h18" stroke="currentColor" strokeWidth="1.5"/></svg>
                <span className="text-sm">+88 01540170227</span>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Social</h4>
              <div className="flex items-center gap-3">
                <a href="https://github.com/nazrul1995" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md bg-white/90 dark:bg-slate-800/60 border border-slate-200/30 hover:shadow-md">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.9.57.1.78-.25.78-.55 0-.28-.01-1.02-.02-2-3.2.69-3.88-1.54-3.88-1.54-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.74 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.53-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.48.11-3.08 0 0 .96-.31 3.14 1.18a10.9 10.9 0 012.86-.39c.97.01 1.95.13 2.86.39 2.18-1.49 3.14-1.18 3.14-1.18.62 1.6.23 2.79.11 3.08.73.81 1.18 1.83 1.18 3.09 0 4.43-2.7 5.4-5.27 5.69.41.35.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.13 0 .3.21.66.79.55A11.52 11.52 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>
                </a>

                <a href="https://www.linkedin.com/in/nazrulpabel/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md bg-white/90 dark:bg-slate-800/60 border border-slate-200/30 hover:shadow-md">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4v13h-4V8zm7 0h3.8v1.8h.1c.5-.9 1.8-1.8 3.7-1.8 4 0 4.8 2.6 4.8 6v7h-4V15.5c0-1.9 0-4.4-2.7-4.4-2.7 0-3.1 2.1-3.1 4.3V21H7V8z"/></svg>
                </a>

                <a href="https://twitter.com/your_profile" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md bg-white/90 dark:bg-slate-800/60 border border-slate-200/30 hover:shadow-md">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 001.88-2.36 8.54 8.54 0 01-2.7 1.03 4.24 4.24 0 00-7.22 3.87A12.03 12.03 0 013 5.1a4.23 4.23 0 001.31 5.65 4.2 4.2 0 01-1.92-.53v.05a4.25 4.25 0 003.4 4.17 4.26 4.26 0 01-1.91.07 4.26 4.26 0 003.98 2.96A8.51 8.51 0 012 19.54a12 12 0 006.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.01-.54A8.36 8.36 0 0022.46 6z"/></svg>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900/40 border border-border-light dark:border-border-dark rounded-lg p-4 text-sm text-slate-700 dark:text-slate-300 font-mono">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-500 dark:text-slate-400">// quick snippet</div>
                <div className="mt-2 whitespace-pre-wrap">
                  <code className="text-xs">
{`const contact = {
  email: "independentnazrul@gmail.com",
  message: "Let's build something great!"
};`}
                  </code>
                </div>
              </div>

              <div>
                <button
                  onClick={() => {
                    navigator.clipboard?.writeText('your.email@example.com');
                    // small visual feedback
                    gsap.to(cardRef.current, { y: -4, duration: 0.08, yoyo: true, repeat: 1 });
                  }}
                  className="px-3 py-1 rounded-md bg-primary text-white"
                >
                  Copy Email
                </button>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}