import React from 'react';

const About = () => {
    return (
        <section className="flex-grow">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
                        <div className="flex items-center space-x-4">
                            <h1 className="text-4xl sm:text-5xl font-bold text-slate-100 dark:text-slate-100">_about-me</h1>
                            <div className="w-24 h-px bg-primary"></div>
                        </div>
                        <div className="bg-slate-800/20 dark:bg-slate-800/20 border border-slate-700/50 dark:border-slate-700/50 rounded-lg p-6 text-sm text-slate-400 dark:text-slate-400 leading-relaxed font-mono">
                            <div className="flex items-center pb-4 mb-4 border-b border-slate-700/50 dark:border-slate-700/50">
                                <span className="h-3 w-3 rounded-full bg-red-500 mr-2"></span>
                                <span className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></span>
                                <span className="h-3 w-3 rounded-full bg-green-500"></span>
                            </div>
                            <p><span className="text-gray-500">// Personal-Info.js</span></p>
                            <br />
                            <p><span className="text-purple-400">const</span> <span className="text-green-400">aboutMe</span> <span className="text-purple-400">=</span> {'{'}</p>
                            <p className="ml-4"><span className="text-blue-400">name</span>: <span className="text-red-400">'Nazrul Islam'</span>,</p>
                            <p className="ml-4"><span className="text-blue-400">title</span>: <span className="text-red-400">'Front-end Developer'</span>,</p>
                            <p className="ml-4"><span className="text-blue-400">bio</span>: <span className="text-red-400">'I build beautiful and responsive web applications. My journey started with a fascination for how things work, which naturally led me to the endless puzzle of code. I thrive on turning complex problems into simple, elegant solutions.'</span>,</p>
                            <p className="ml-4"><span className="text-blue-400">passions</span>: [<span className="text-red-400">'pixel-perfect design'</span>, <span className="text-red-400">'clean code'</span>, <span className="text-red-400">'user experience'</span>]</p>
                            <p>{'};'}</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center lg:items-end">
                        <img alt="Professional photo of Michael Weaver" className="w-full max-w-sm rounded-lg border-2 border-slate-700/50 dark:border-slate-700/50 shadow-lg mb-8" src="https://i.ibb.co.com/jPfYxsGQ/Nazrul-Islam.png" />
                        <div className="w-full max-w-sm bg-slate-800/20 dark:bg-slate-800/20 border border-slate-700/50 dark:border-slate-700/50 rounded-lg p-4 text-sm font-mono">
                            <p className="text-gray-500">// Fun fact</p>
                            <p className="text-slate-300 dark:text-slate-300">&gt; When I'm not coding, you can find me exploring new hiking trails or trying to brew the perfect cup of coffee. It's all about finding the right algorithm!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
