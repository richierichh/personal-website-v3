
import React from 'react';
import Header from '@/components/Header';
import Introduction from '@/components/Introduction';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Resume from '@/components/Resume';
import Projects from '@/components/Projects';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#141414]">
      <Header />
      <main>
        <Introduction />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Resume />
      </main>
      
      <footer className="py-16 section-padding border-t border-gray-200 dark:border-gray-800">
        <div className="max-content-width">
          <ul className="flex justify-center items-center space-x-4 mb-4">
            <li>
              <a href="https://www.linkedin.com/in/richard-pierre-liao/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="hover:fill-[#6F8695]" size={30} />
              </a>
            </li>
            <li>
              <a href="https://github.com/richierichh" target="_blank" rel="noopener noreferrer">
                <FaGithub className="hover:fill-[#6F8695]" size={30} />
              </a>
            </li>
            <li>
              <a href="mailto:liaorichard221@gmail.com">
                <HiOutlineMail className="hover:fill-[#6F8695]" size={30} />
              </a>
            </li>
          </ul>
          <div className="text-center text-muted-foreground">
            <p className="mb-4">© 2025 Richard Liao. All rights reserved.</p>
            <p className="text-sm">Built with React, TypeScript, and Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
