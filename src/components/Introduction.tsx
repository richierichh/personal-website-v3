import { ArrowDown } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';

const Introduction = () => {
  const scrollToNext = () => {
    const element = document.getElementById('about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="introduction" className="min-h-screen flex items-center justify-center section-padding pt-32">
      <div className="max-content-width text-center flex flex-col items-center">
        <div className="animate-fade-in w-full flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6 leading-none">
            Hello 👋, my name is{' '}
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

          {/* Profile Image */}
          <div className="flex justify-center pt-4 pb-8 w-full">
            <img
              src="/profile.jpg"
              alt="Richard Liao"
              className="rounded-full h-40 w-40 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-56 lg:w-56 xl:h-72 xl:w-72 2xl:h-80 2xl:w-80 object-cover object-center"
            />
          </div>

          <div className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed mb-10 max-w-4xl mx-auto">
            Product Manager
            <p>Software Engineer</p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <a
              href="mailto:liaorichard221@gmail.com"
              className="px-8 py-4 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors duration-200 text-center"
            >
              Contact Me
            </a>

            <a
              href="https://www.linkedin.com/in/richard-pierre-liao/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-gray-300 text-sm font-medium hover:border-gray-400 transition-colors duration-200 text-center"
            >
              LinkedIn
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
