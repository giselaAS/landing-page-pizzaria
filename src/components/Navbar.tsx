"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Menu, Phone, X } from "lucide-react";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
         ? "bg-white shadow-md"
         : "bg-transparent"
    }`}>
        <div className="container mx-auto px-4 py-5">
            <div className="flex items-center justify-between">
                <a href="#" className="flex items-center gap-2">
                    <span className={`font-bold text-xl transition-colors duration-300 ${
                        isScrolled ? "text-gray-900" : "text-white"
                    }`}>
                        Pizzaria
                    </span>
                </a>
                <div className="hidden md:flex items-center gap-8">
                    <a href="#" className={`font-semibold hover:text-orange-600 transition-colors ${
                        isScrolled ? "text-gray-900" : "text-white"
                    }`}>
                        Início
                    </a>
                    <a href="#menu" className={`font-semibold hover:text-orange-600 transition-colors ${
                        isScrolled ? "text-gray-900" : "text-white"
                    }`}>
                        Cardápio
                    </a>
                    <a href="#about" className={`font-semibold hover:text-orange-600 transition-colors ${
                        isScrolled ? "text-gray-900" : "text-white"
                    }`}>
                        Sobre
                    </a>
                    <a href="#contact" className={`font-semibold hover:text-orange-600 transition-colors ${
                        isScrolled ? "text-gray-900" : "text-white"
                    }`}>
                        Contato
                    </a>
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <Button
                        variant="ghost"
                        size="icon"
                        className={`${isScrolled ? "text-gray-900" : "text-white hover:bg-white/20"}`}
                    >
                        <Phone className="w-5 h-5" />
                    </Button>
                </div>

                <Button
                    variant="ghost"
                    size="icon"
                    className={`md:hidden ${isScrolled ? "text-gray-900" : "text-white"}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </Button>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-xl">
                    <div className="flex flex-col gap-4 px-4">
                        <a href="#" className="font-semibold hover:text-orange-600 transition-colors">
                            Início
                        </a>
                        <a href="#menu" className="font-semibold hover:text-orange-600 transition-colors">
                            Cardápio
                        </a>
                        <a href="#about" className="font-semibold hover:text-orange-600 transition-colors">
                            Sobre
                        </a>
                        <a href="#contact" className="font-semibold hover:text-orange-600 transition-colors">
                            Contato
                        </a>
                    </div>   
                </div>
            )}
        </div>
    </nav>
  );
}