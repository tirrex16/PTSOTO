import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ContactModal from './ContactModal';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const location = useLocation();

    // Close menu & scroll to top on route change
    useEffect(() => {
        setIsOpen(false);
        window.scrollTo({ top: 0 });
    }, [location.pathname]);

    // Lock scroll WITHOUT causing layout shift
    useEffect(() => {
        if (isOpen) {
            // Save current scroll position & lock
            const scrollY = window.scrollY;
            document.documentElement.style.setProperty('--scroll-y', `${scrollY}px`);
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = '100%';
        } else {
            // Restore scroll position
            const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            if (scrollY) window.scrollTo(0, parseInt(scrollY));
        }
    }, [isOpen]);

    const toggleMenu = useCallback(() => setIsOpen(prev => !prev), []);
    const closeMenu = useCallback(() => setIsOpen(false), []);

    const handleContactClick = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        closeMenu();
        setIsContactModalOpen(true);
    }, [closeMenu]);

    const navLinks = [
        { name: 'About', path: '/about' },
        { name: 'Mission', path: '/mission' },
        { name: 'Services', path: '/services' },
        { name: 'Products', path: '/products' },
    ];

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-[100] transition-colors duration-300 py-4 sm:py-5 ${
                isOpen ? 'bg-white' : 'bg-white/30 backdrop-blur-md'
            }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center">

                    {/* Logo */}
                    <Link
                        to="/"
                        onClick={closeMenu}
                        className="flex items-center gap-2.5 sm:gap-3 min-w-0 md:-ml-10"
                    >
                        <img
                            src="/fix 1.png"
                            alt="SOTO Logo"
                            className="h-8 sm:h-9 md:h-10 w-auto object-contain flex-shrink-0"
                        />
                        <span
                            className="text-sm sm:text-base md:text-3xl font-bold tracking-tight text-[#2A335D] leading-tight truncate"
                            style={{ fontFamily: "'Taskor', sans-serif" }}
                        >
                            SOTO
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8 lg:space-x-10 flex-shrink-0">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm font-medium transition-colors whitespace-nowrap ${
                                    location.pathname === link.path
                                        ? 'text-[#2A335D] font-bold'
                                        : 'text-gray-500 hover:text-[#2A335D]'
                                }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button
                            onClick={handleContactClick}
                            className="px-5 py-2.5 bg-[#2A335D] text-white text-sm font-medium rounded-full hover:bg-[#1f2647] transition-all shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap"
                        >
                            Contact
                        </button>
                    </div>

                    {/* Hamburger Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden flex-shrink-0 w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
                        aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
                        aria-expanded={isOpen}
                    >
                        <span className={`block w-6 h-0.5 bg-[#2A335D] transition-all duration-200 origin-center ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`block w-4 h-0.5 bg-[#2A335D] transition-all duration-200 ${isOpen ? 'opacity-0 scale-x-0' : ''}`} />
                        <span className={`block w-6 h-0.5 bg-[#2A335D] transition-all duration-200 origin-center ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu — rendered outside nav to avoid layout interference */}
            {/* Backdrop */}
            <div
                onClick={closeMenu}
                className={`fixed inset-0 bg-black/20 z-[98] md:hidden transition-opacity duration-200 ${
                    isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
                aria-hidden="true"
            />

            {/* Slide-down Panel */}
            <div
                className={`fixed top-0 left-0 right-0 bg-white z-[99] md:hidden shadow-2xl transition-transform duration-300 ease-out ${
                    isOpen ? 'translate-y-0' : '-translate-y-full'
                }`}
            >
                <div className="px-4 pt-20 pb-10 flex flex-col items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={closeMenu}
                            className={`text-2xl font-medium transition-colors ${
                                location.pathname === link.path
                                    ? 'text-[#2A335D] font-bold'
                                    : 'text-gray-600 hover:text-[#2A335D]'
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button
                        onClick={handleContactClick}
                        className="mt-2 px-10 py-3.5 bg-[#2A335D] text-white text-lg font-medium rounded-full hover:bg-[#1f2647] transition-all"
                    >
                        Contact Us
                    </button>
                </div>
            </div>

            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />
        </>
    );
};

export default Navbar;
