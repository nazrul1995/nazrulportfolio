import React from 'react';

const Header = () => {
    return (
        <header className="border-b border-border-light text-slate-700 dark:text-slate-light">
            <div className="container mx-auto px-8">
                <nav className="flex items-center justify-between">
                    <div className="flex items-center">
                        <a className="py-4 pr-8 text-slate-800 dark:text-white" href="#">Nazrul Islam</a>
                        <div className="hidden md:flex h-full">
                            <a className="border-x border-border-light py-4 px-8 text-white bg-slate-700/[.15] dark:bg-transparent border-t-2 border-t-primary"
                                href="#">_home</a>
                            <a className="border-r border-border-light py-4 px-8 hover:text-white transition-colors duration-200"
                                href="#">_about-me</a>
                            <a className="border-r border-border-light py-4 px-8 hover:text-white transition-colors duration-200"
                                href="#">_projects</a>
                        </div>
                    </div>
                    <div className="hidden md:flex">
                        <a className="border-l border-border-light py-4 px-8 hover:text-white transition-colors duration-200"
                            href="#">_contact-me</a>
                    </div>
                    <div className="md:hidden">
                        <button className="p-4">
                            <span className="material-icons-outlined">menu</span>
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
