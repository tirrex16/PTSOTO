import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import ContactModal from './ContactModal';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
        setIsOpen(false);
    }, [location]);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const navLinks = [
        { name: 'About', path: '/about' },
        { name: 'Mission', path: '/mission' },
        { name: 'Products', path: '/products' },
    ];

    const handleContactClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsOpen(false); // Close mobile menu if open
        setIsContactModalOpen(true);
    };

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 
                ${scrolled || location.pathname !== '/'
                        ? 'py-4 border-b border-gray-200 shadow-sm'
                        : 'py-6 border-b border-transparent'
                    } 
                ${(scrolled || location.pathname !== '/')
                        ? (isOpen ? 'bg-white' : 'bg-white/80 backdrop-blur-md')
                        : 'bg-transparent'
                    }`}
            >
                <div className="relative z-[110] max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="z-[110]" onClick={() => setIsOpen(false)}>
                        <span className="text-2xl font-bold tracking-tight text-[#2A335D]">
                            SOTO
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm font-medium transition-colors ${location.pathname === link.path ? 'text-[#2A335D] font-bold' : 'text-gray-500 hover:text-[#2A335D]'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button
                            onClick={handleContactClick}
                            className="px-6 py-2.5 bg-[#2A335D] text-white text-sm font-medium rounded-full hover:bg-[#1f2647] transition-all shadow-md hover:shadow-lg cursor-pointer"
                        >
                            Contact
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden z-[110] p-2 focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        <div className="w-6 flex flex-col items-end space-y-1.5">
                            <span className={`block h-0.5 transition-all duration-300 ${isOpen ? 'w-6 rotate-45 translate-y-2 bg-[#2A335D]' : 'w-6 bg-[#2A335D]'}`} />
                            <span className={`block h-0.5 transition-all duration-300 ${isOpen ? 'w-0 opacity-0' : 'w-4 bg-[#2A335D]'}`} />
                            <span className={`block h-0.5 transition-all duration-300 ${isOpen ? 'w-6 -rotate-45 -translate-y-2 bg-[#2A335D]' : 'w-6 bg-[#2A335D]'}`} />
                        </div>
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <div
                    className={`fixed inset-0 bg-white z-[100] md:hidden ${isOpen ? 'block' : 'hidden'}`}
                >
                    <div className="flex flex-col justify-center items-center h-full space-y-8 px-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-2xl font-medium ${location.pathname === link.path ? 'text-[#2A335D]' : 'text-gray-600'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button
                            onClick={handleContactClick}
                            className="px-8 py-3 bg-[#2A335D] text-white text-lg rounded-full"
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
            </nav>

            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />
        </>
    );
};

export default Navbar;
