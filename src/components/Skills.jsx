import React from 'react';

const Skills = () => {
    return (
        <section className="flex-grow container mx-auto px-6 py-16 flex items-center justify-center">
            <div className="w-full max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col space-y-4">
                        <h1 className="text-5xl font-bold text-slate-800 dark:text-slate-100 mb-2">My Skills</h1>
                        <p className="text-lg">
                            <span className="text-accent-light dark:text-accent-dark">&gt;</span> Technologies I work with
                        </p>
                        <div className="text-sm text-slate-500 dark:text-slate-400 pt-8 space-y-2">
                            <p>// Grouped by category for clarity</p>
                            <p>// Always learning and expanding my toolkit</p>
                        </div>
                    </div>
                    <div className="border border-border-light dark:border-border-dark rounded-lg p-6 bg-white/5 dark:bg-black/10 backdrop-blur-sm">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                            <div>
                                <h3 className="font-bold text-primary mb-3">Languages</h3>
                                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                                    <li>JavaScript (ES6+)</li>
                                    <li>TypeScript</li>
                                    <li>HTML5</li>
                                    <li>CSS3 / SCSS</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold text-primary mb-3">Frameworks</h3>
                                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                                    <li>React</li>
                                    <li>Next.js</li>
                                    <li>Vue.js</li>
                                    <li>Tailwind CSS</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold text-primary mb-3">Tools &amp; Platforms</h3>
                                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                                    <li>Git &amp; GitHub</li>
                                    <li>Figma</li>
                                    <li>Webpack</li>
                                    <li>Vercel</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold text-primary mb-3">Backend &amp; DB</h3>
                                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                                    <li>Node.js</li>
                                    <li>Express</li>
                                    <li>PostgreSQL</li>
                                    <li>MongoDB</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
