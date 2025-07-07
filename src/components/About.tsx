
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-32 section-padding">
      <div className="max-content-width">
        <div className="animate-fade-in">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-12 leading-tight">
              About Me
            </h2>
            
            <div className="space-y-8 text-lg md:text-xl leading-relaxed text-muted-foreground">
              <p>
              Hi! I&apos;m Richard, a recent Computer Science graduate from Wilfrid Laurier University with a passion for building impactful products that improve people&apos;s lives. I’m actively seeking for full-time opportunities in product management or software engineering.
              </p>
              <p> 
              Previously, I’ve worked as a Product Manager at Cita Marketplace, where I helped define user needs and drive the product roadmap. I have also worked as a Software Engineer at Dayforce, where I contributed to migrating a legacy test automation framework to a modern framework called SpecFlow. 
              </p>
              <p>
                I am a dedicated and adaptable individual with a passion for building products that are both meaningful and user-friendly. I am always looking for new challenges and opportunities to grow. Lets connect! 
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3 mt-12">
            {[
              'Python', 'Java', 'JavaScript', 'React', 'C#', 'SQL', 'Node.js', 
              'Selenium', 'Figma', 'Jira', 'Confluence', 'Asana', 'User Roadmapping','Agile Scrum'
            ].map((tech) => (
              <span key={tech} className="px-4 py-2 border border-gray-300 text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
