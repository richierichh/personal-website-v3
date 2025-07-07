import React from 'react';

const projects = [
  {
    title: 'Workday Product Case Study',
    description: 'In progress:Improvements to Workday',
    link: 'https://yourprojectlink.com',
  },
  {
    title: 'Signature Pro',
    description: 'Another project description.',
    link: 'https://yourprojectlink.com',
  },
  {
    title: 'Pantry Tracker',
    description: 'A pantry tracker app that allows users to track their food inventory and generate recipes based on items.',
    link: 'https://yourprojectlink.com',
  },
  {
    title: 'Ecommerce Web App',
    description: 'Simple ecommerce web app with a shopping cart and checkout process integrated with an AlanAI voice assistant',
    link: 'https://yourprojectlink.com',
  },
];

const Projects = () => (
  <section id="projects" className="py-32 section-padding bg-gray-50 dark:bg-[#141414] dark:text-white">
    <div className="max-content-width">
      <div className="animate-fade-in">
        <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-20 leading-tight">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-16">
          {projects.map((project, idx) => (
            <div key={idx} className="p-8 border rounded-lg bg-white dark:bg-gray-50 shadow-sm">
              <h3 className="text-2xl font-semibold mb-4 dark:text-muted-foreground">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
