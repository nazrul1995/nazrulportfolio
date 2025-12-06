import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
    const componentRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".hero-text > *", {
                y: 30,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out"
            });

            gsap.from(".snake-board", {
                scale: 0.9,
                opacity: 0,
                duration: 1.2,
                delay: 0.5,
                ease: "elastic.out(1, 0.75)"
            });
        }, componentRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={componentRef} className="flex-grow flex items-center justify-center container mx-auto px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
                <div className="space-y-8 hero-text">
                    <div>
                        <p className="text-lg">Hi all. I am</p>
                        <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 dark:text-white my-2">Micheal Weaver</h1>
                        <p className="text-2xl text-blue-light">&gt; Front-end developer</p>
                    </div>
                    <div className="text-sm md:text-base">
                        <p className="text-slate-500 dark:text-slate-light">// complete the game to continue</p>
                        <p className="text-slate-500 dark:text-slate-light">// find my profile on Github:</p>
                        <p className="mt-2">
                            <span className="text-blue-light">const</span>
                            <span className="text-green-light"> githubLink</span>
                            <span> = </span>
                            <a class="text-red-light underline hover:no-underline" href="https://github.com/example/url" target="_blank">"https://github.com/example/url"</a>
                        </p>
                    </div>
                </div>
                <div className="flex justify-center items-center snake-board">
                    <div className="bg-gradient-to-br from-green-light/10 to-blue-light/10 border border-border-light rounded-lg p-1 max-w-md w-full relative">
                        {/* Decorative Bolts */}
                        <div className="absolute -top-2 -left-2 w-4 h-4 rounded-full bg-border-light border-4 border-background-dark"></div>
                        <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-border-light border-4 border-background-dark"></div>
                        <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-border-light border-4 border-background-dark"></div>
                        <div className="absolute -bottom-2 -right-2 w-4 h-4 rounded-full bg-border-light border-4 border-background-dark"></div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
                            <div className="bg-[#011423] rounded-lg flex items-center justify-center p-8 aspect-square relative overflow-hidden shadow-inner">
                                <div className="absolute inset-0 bg-grid-pattern opacity-10" style={{ '--grid-color': '#1E2D3D', '--grid-size': '20px', backgroundSize: 'var(--grid-size) var(--grid-size)' }}></div>
                                <div className="relative w-full h-full flex items-center justify-center">
                                    <div className="relative w-16 h-24">
                                        <div className="absolute top-0 right-4 w-2 h-2 bg-green-light rounded-full shadow-[0_0_8px_rgba(67,217,173,0.7)]"></div>
                                        <div className="absolute top-2 right-4 w-2 h-14 bg-green-light opacity-80"></div>
                                        <div className="absolute bottom-6 right-4 w-10 h-2 bg-green-light opacity-60"></div>
                                    </div>
                                </div>
                                <button className="absolute bottom-4 bg-primary text-background-dark font-medium py-2 px-4 rounded hover:bg-opacity-90 transition-colors z-10">start-game</button>
                            </div>
                            <div className="flex flex-col justify-between">
                                <div>
                                    <p className="text-xs text-slate-500 dark:text-slate-light mb-2">// use keyboard</p>
                                    <p className="text-xs text-slate-500 dark:text-slate-light mb-4">// arrows to play</p>
                                    <div className="grid grid-cols-3 gap-2 w-32 mx-auto">
                                        <div className="col-start-2 flex justify-center">
                                            <button className="bg-[#011423] w-8 h-8 flex items-center justify-center rounded border border-border-light hover:bg-border-light transition-colors"><span className="material-icons-outlined text-sm">keyboard_arrow_up</span></button>
                                        </div>
                                        <button className="bg-[#011423] w-8 h-8 flex items-center justify-center rounded border border-border-light hover:bg-border-light transition-colors"><span className="material-icons-outlined text-sm">keyboard_arrow_left</span></button>
                                        <button className="bg-[#011423] w-8 h-8 flex items-center justify-center rounded border border-border-light hover:bg-border-light transition-colors"><span className="material-icons-outlined text-sm">keyboard_arrow_down</span></button>
                                        <button className="bg-[#011423] w-8 h-8 flex items-center justify-center rounded border border-border-light hover:bg-border-light transition-colors"><span className="material-icons-outlined text-sm">keyboard_arrow_right</span></button>
                                    </div>
                                    <div className="mt-8">
                                        <p className="text-xs text-slate-500 dark:text-slate-light mb-3">// food left</p>
                                        <div className="grid grid-cols-5 gap-3">
                                            {[...Array(10)].map((_, i) => (
                                                <div key={i} className={`w-4 h-4 rounded-full ${i < 4 ? 'bg-green-light shadow-[0_0_8px_rgba(67,217,173,0.7)]' : 'bg-green-light/20'}`}></div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <button className="self-end bg-slate-700 dark:bg-border-light text-slate-200 dark:text-white py-2 px-4 rounded hover:bg-slate-600 dark:hover:bg-slate-light/30 transition-colors">skip</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
