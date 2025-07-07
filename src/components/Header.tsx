
import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
    }`}>
      <nav className="section-padding py-6">
        <div className="max-content-width flex items-center justify-between">
          <div className="text-lg font-medium tracking-tight">
            Richard Liao
          </div>
          
          <div className="hidden md:flex items-center space-x-12">
            {[
              { id: 'introduction', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'experience', label: 'Experience' },
              { id: 'projects', label: 'Projects' },
              { id: 'skills', label: 'Skills' },
              { id: 'resume', label: 'Resume' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-lg text-muted-foreground hover:text-foreground dark:text-white dark:hover:text-gray-300 transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => setDarkMode((d) => !d)}
              className="ml-8 p-2 rounded-full border border-transparent hover:border-gray-300 dark:hover:border-gray-700 transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <div className="md:hidden">
            <button className="p-2">
              <div className="w-5 h-5 flex flex-col justify-center items-center">
                <span className="block w-4 h-0.5 bg-foreground mb-1"></span>
                <span className="block w-4 h-0.5 bg-foreground mb-1"></span>
                <span className="block w-4 h-0.5 bg-foreground"></span>
              </div>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
