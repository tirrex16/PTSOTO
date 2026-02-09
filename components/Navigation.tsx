import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Mission', href: '#mission' },
        { name: 'Products', href: '#products' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled
                    ? 'bg-white/80 backdrop-blur-md py-4 border-b border-gray-200 shadow-sm'
                    : 'bg-transparent py-6 border-b border-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="z-[110]">
                    <span className="text-2xl font-bold tracking-tight text-[#2A335D]">
                        SOTO
                    </span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-10">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-500 hover:text-[#2A335D] transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="px-6 py-2.5 bg-[#2A335D] text-white text-sm font-medium rounded-full hover:bg-[#1f2647] transition-all shadow-md hover:shadow-lg"
                    >
                        Contact
                    </a>
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
                className={`fixed inset-0 bg-white z-[100] transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex flex-col justify-center items-center h-full space-y-8 px-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-2xl font-medium text-[#2A335D]"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setIsOpen(false)}
                        className="px-8 py-3 bg-[#2A335D] text-white text-lg rounded-full"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
