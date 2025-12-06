import React from 'react';

const Contact = () => {
    return (
        <section className="flex-grow container mx-auto p-4 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                <div className="flex flex-col space-y-8">
                    <h1 className="text-3xl md:text-5xl font-bold">Contact Me</h1>
                    <p className="text-slate-500 dark:text-slate-400">I'm interested in freelance opportunities. However, if you have other requests or questions, don't hesitate to use the form.</p>
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-2" htmlFor="name">_name:</label>
                            <input className="w-full bg-slate-100 dark:bg-[#011627] border border-border-light rounded focus:ring-primary focus:border-primary text-slate-700 dark:text-slate-300 px-3 py-2 outline-none focus:ring-1 transition-shadow" id="name" name="name" type="text" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-2" htmlFor="email">_email:</label>
                            <input className="w-full bg-slate-100 dark:bg-[#011627] border border-border-light rounded focus:ring-primary focus:border-primary text-slate-700 dark:text-slate-300 px-3 py-2 outline-none focus:ring-1 transition-shadow" id="email" name="email" type="email" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-2" htmlFor="subject">_subject:</label>
                            <input className="w-full bg-slate-100 dark:bg-[#011627] border border-border-light rounded focus:ring-primary focus:border-primary text-slate-700 dark:text-slate-300 px-3 py-2 outline-none focus:ring-1 transition-shadow" id="subject" name="subject" type="text" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-2" htmlFor="message">_message:</label>
                            <textarea className="w-full bg-slate-100 dark:bg-[#011627] border border-border-light rounded focus:ring-primary focus:border-primary text-slate-700 dark:text-slate-300 px-3 py-2 outline-none focus:ring-1 transition-shadow" id="message" name="message" rows="4"></textarea>
                        </div>
                        <div>
                            <button className="px-4 py-2 bg-slate-200 dark:bg-[#1E2D3D] text-slate-700 dark:text-white rounded font-medium hover:bg-primary hover:text-black transition-colors duration-300" type="submit">submit-message</button>
                        </div>
                    </form>
                </div>
                <div className="hidden md:flex flex-col space-y-4 text-slate-500 dark:text-slate-400">
                    <h2 className="text-lg text-slate-700 dark:text-slate-300">// alternative contact info</h2>
                    <div className="flex items-center space-x-3">
                        <span className="material-icons-outlined text-xl">mail</span>
                        <span>michael.weaver@email.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <span className="material-icons-outlined text-xl">call</span>
                        <span>(555) 123-4567</span>
                    </div>
                    <h2 className="text-lg text-slate-700 dark:text-slate-300 pt-8">// code snippet</h2>
                    <div className="bg-slate-100 dark:bg-[#011221] border border-border-light rounded-lg p-4 text-sm font-mono overflow-auto">
                        <pre><code className="language-javascript">
                            <span className="text-purple-400">const</span> <span className="text-blue-400">button</span> <span className="text-purple-400">=</span> <span className="text-blue-400">document</span>.<span className="text-green-400">querySelector</span>(<span className="text-red-light">'#sendBtn'</span>);{"\n"}
                            <span className="text-purple-400">const</span> <span className="text-blue-400">message</span> <span className="text-purple-400">=</span> {"{"}{"\n"}
                            <span className="text-blue-400">name</span>: <span className="text-red-light">"your_name"</span>,{"\n"}
                            <span className="text-blue-400">email</span>: <span className="text-red-light">"your_email@example.com"</span>,{"\n"}
                            <span className="text-blue-400">message</span>: <span className="text-red-light">"Hey! Just wanted to connect."</span>,{"\n"}
                            <span className="text-blue-400">date</span>: <span className="text-red-light">"Thu 21 Apr"</span>{"\n"}
                            {"}"}{"\n"}
                            <span className="text-blue-400">button</span>.<span className="text-green-400">addEventListener</span>(<span className="text-red-light">'click'</span>, () <span className="text-purple-400">=&gt;</span> {"{"}{"\n"}
                            <span className="text-blue-400">form</span>.<span className="text-green-400">send</span>(<span className="text-blue-400">message</span>);{"\n"}
                            {"}"});
                        </code></pre>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
