import { Download } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="py-32 section-padding bg-gray-50 dark:bg-[#141414] dark:text-white">
      <div className="max-content-width">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-20 leading-tight">
            Resume
          </h2>
          
          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <div>
              <h3 className="text-xl font-medium mb-8 text-muted-foreground">Education</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-lg font-medium">Honours Bachelor of Science in Computer Science</div>
                  <div className="text-muted-foreground">Wilfrid Laurier University</div>
                  <div className="text-sm text-muted-foreground mt-1">September 2020 - June 2025</div>
                  <div className="text-lg font-medium">Masters of Science in Computer Science</div>
                  <div className="text-muted-foreground">Georgia Institute of Technology</div>
                  <div className="text-sm text-muted-foreground mt-1">Expected May 2027</div>
                </div>
                
              </div>
            </div>
            
            {/*
            <div>
              <h3 className="text-xl font-medium mb-8 text-muted-foreground">Certifications</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-lg font-medium">AWS Certified Developer</div>
                  <div className="text-muted-foreground">Amazon Web Services</div>
                  <div className="text-sm text-muted-foreground mt-1">2022</div>
                </div>
                <div>
                  <div className="text-lg font-medium">React Developer Certification</div>
                  <div className="text-muted-foreground">Meta</div>
                  <div className="text-sm text-muted-foreground mt-1">2021</div>
                </div>
              </div>
            </div>
            */}
          </div>
          
          <div>
            <a
              href="/Richard Liao PM Resume.pdf"
              download
              className="inline-flex items-center px-8 py-4 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors duration-200"
            >
              <Download size={16} className="mr-2" />
              Download Full Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
