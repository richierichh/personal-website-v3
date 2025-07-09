
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
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-10 leading-none whitespace-nowrap">
    Hello 👋, my name is <span className="font-normal">
      <Typewriter
        words={["Richard Liao"]}
        typeSpeed={80}
        deleteSpeed={50}
        cursor
        cursorStyle="|"
        loop={1}
      />
   <div className="flex justify-center pt-28">
    <img
      src="/profile.jpg"
      alt="Richard Liao"
      className="rounded-full h-32 w-32 sm:h-24 sm:w-24 md:h-24 md:w-24 lg:h-40 lg:w-40 xl:h-56 xl:w-56 2xl:h-72 2xl:w-72 object-cover object-center scale-150 -translate-y-4"
    />
  </div>
    </span>
  </h1>

          
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
