import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

const Projects = () => {
    const [activeTab, setActiveTab] = useState('all');
    const containerRef = useRef(null);

    // Simple fade animation when tab changes
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".project-card",
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: "power2.out" }
            );
        }, containerRef);
        return () => ctx.revert();
    }, [activeTab]);

    const projects = [
        {
            id: 1,
            title: "Project Chariot",
            description: "A comprehensive dashboard for managing e-commerce logistics and tracking.",
            tags: ["React", "TailwindCSS"],
            icon: "terminal",
            type: "react",
            colors: ["bg-blue-400", "bg-purple-400"]
        },
        {
            id: 2,
            title: "Portfolio V1",
            description: "My first portfolio website, exploring creative designs and animations.",
            tags: ["Vue", "GSAP"],
            icon: "monitoring",
            type: "vue",
            colors: ["bg-green-400", "bg-yellow-400"]
        },
        {
            id: 3,
            title: "Photo Gallery App",
            description: "A responsive image gallery with lazy loading and filtering capabilities.",
            tags: ["Angular", "Firebase"],
            icon: "camera",
            type: "angular",
            colors: ["bg-red-500", "bg-indigo-400"]
        }
    ];

    const filteredProjects = activeTab === 'all'
        ? projects
        : projects.filter(project => project.type === activeTab);

    return (
        <section className="flex-grow container mx-auto px-6 py-16">
            <div className="flex items-center mb-12">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white mr-4"><span className="text-primary">/</span>projects</h1>
                <p className="text-gray-600 dark:text-gray-400 mt-1">// Things I've built so far</p>
            </div>

            <div ref={containerRef}>
                <div className="flex border-b border-gray-300/20 dark:border-gray-100/10 mb-8 overflow-x-auto">
                    {['all', 'react', 'vue', 'angular'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 border-b-2 hover:text-white transition-colors capitalize ${activeTab === tab ? 'text-white border-primary' : 'text-gray-400 border-transparent'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="project-card border border-gray-300/20 dark:border-gray-100/10 rounded-lg bg-gray-50/5 dark:bg-gray-500/5 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="material-icons-outlined text-primary text-3xl">{project.icon}</span>
                                    <div className="flex space-x-2">
                                        <a className="text-gray-400 hover:text-primary transition-colors" href="#"><span className="material-icons-outlined">link</span></a>
                                        <a className="text-gray-400 hover:text-primary transition-colors" href="#">
                                            <svg className="feather feather-github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{project.description}</p>
                                <div className="flex items-center text-xs text-gray-500 dark:text-gray-500">
                                    {project.tags.map((tag, i) => (
                                        <React.Fragment key={tag}>
                                            <span className={`inline-block w-2 h-2 rounded-full ${project.colors[i % project.colors.length]} ${i > 0 ? 'ml-4' : ''} mr-2`}></span>
                                            <span>{tag}</span>
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
