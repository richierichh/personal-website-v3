
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';

const Introduction = () => {
  const scrollToNext = () => {
    const element = document.getElementById('about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="introduction" className="min-h-screen flex items-center justify-center section-padding pt-32">
      <div className="max-content-width text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-14 leading-none">
            Hello 👋, my name is {' '}
            <span className="font-normal">
              <Typewriter
                words={["Richard Liao"]}
                typeSpeed={80}
                deleteSpeed={50}
                cursor
                cursorStyle="|"
                loop={1}
              />
            </span>
          </h1>
          
          <div className="flex justify-center mb-12">
            <img
              src="/profile.jpg"
              alt="Richard Liao"
              className="rounded-full h-32 w-32 sm:h-24 sm:w-24 md:h-24 md:w-24 lg:h-32 lg:w-32 xl:h-40 xl:w-40 object-cover object-center scale-150 -translate-y-4"
            />
          </div>
          
          <div className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed mb-10 max-w-4xl mx-auto">
            Software Engineer 
            <p>
              Product Manager
            </p>
          </div>
          
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <a
              href="mailto:liaorichard221@gmail.com"
              className="px-8 py-4 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors duration-200 text-center"
            >
              Contact Me
            </a>
            <a
              href="/Richard Liao PM Resume.pdf"
              download
              className="px-8 py-4 border border-gray-300 text-sm font-medium hover:border-gray-400 transition-colors duration-200 text-center"
            >
              Download Resume
            </a>
          </div>
        </div>
        
        <button 
          onClick={scrollToNext}
          className="animate-bounce hover:animate-none transition-all duration-300 hover:text-black"
        >
          <ArrowDown size={20} />
        </button>
      </div>
    </section>
  );
};

export default Introduction;
