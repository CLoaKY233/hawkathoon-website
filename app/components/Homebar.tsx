"use client";

import { ArrowLeft, Menu, X } from 'lucide-react';
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export const Navigation: React.FC = () => {
    const ref = useRef<HTMLElement>(null);
    const [isIntersecting, setIntersecting] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        if (!ref.current) return;
        const observer = new IntersectionObserver(([entry]) =>
            setIntersecting(entry.isIntersecting)
        );

        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navLinks = [

        { href: "/about", label: "About" },
        // { href: "/why-us", label: "Why us" },
        { href: "/research", label: "Research/Blogs" },
        { href: "/gallery", label: "Gallery" },
        { href: "/team", label: "Team" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <header ref={ref}>
            <div
                className={`fixed inset-x-0 top-0 z-5 backdrop-blur-0 duration-200 border-b ${
                    isIntersecting
                        ? "bg-zinc-900/0 border-transparent"
                        : "bg-zinc-900/500 border-zinc-800"
                }`}
            >
                <div className="container flex items-center justify-between p-6 mx-auto ">
                    <div className="w-6 h-6"/>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex justify-between gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="duration-200 text-zinc-400 hover:text-zinc-100"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-zinc-300 hover:text-zinc-100"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <nav className="md:hidden backdrop-blur-2xl border-t border-zinc-800 rounded-md">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="block py-2 px-6 duration-200 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                )}
            </div>
        </header>
    );
};

