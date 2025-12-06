import React from 'react';

const Footer = () => {
    return (
        <footer className="border-t border-border-light text-slate-700 dark:text-slate-light">
            <div className="container mx-auto px-8">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <span className="py-4 pr-6">find me in:</span>
                        <a aria-label="X profile"
                            className="border-l border-border-light p-4 icon-social hover:bg-border-light/50 transition-colors duration-200"
                            href="#">
                            <svg fill="none" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298l13.312 17.404z">
                                </path>
                            </svg>
                        </a>
                        <a aria-label="LinkedIn profile"
                            className="border-x border-border-light p-4 icon-social hover:bg-border-light/50 transition-colors duration-200"
                            href="#">
                            <svg fill="none" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M20.447 20.452H17.13V14.97c0-1.301-.027-2.977-1.815-2.977-1.815 0-2.093 1.418-2.093 2.884v5.575H9.907V9.018h3.208v1.472h.045c.447-.848 1.54-1.736 3.168-1.736 3.388 0 4.013 2.23 4.013 5.129v6.57zM5.623 7.54C4.383 7.54 3.39 6.55 3.39 5.31S4.383 3.08 5.623 3.08c1.24 0 2.234 1.002 2.234 2.23s-.994 2.23-2.234 2.23zM7.232 20.452H4.013V9.018h3.22V20.452z">
                                </path>
                            </svg>
                        </a>
                    </div>
                    <a className="hidden md:flex items-center gap-2 border-l border-border-light pl-6 py-4 hover:text-white transition-colors duration-200"
                        href="#">
                        @michealw
                        <svg fill="currentColor" height="20" viewBox="0 0 24 24" width="20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-4-9.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5v-5z">
                            </path>
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
