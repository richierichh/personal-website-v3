import { useNavigate } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Workday Product Case Study',
    description: 'In progress: Improvements to Workday',
    link: '/project-workday', // internal route
  },
  {
    title: 'Signature Pro',
    description: 'Create your own signature and sign documents with ease',
    link: 'https://signaturepro.richieliao.com', // replace with your actual link
  },
  {
    title: 'Pantry Tracker',
    description: 'Track food inventory and generate recipes based on pantry items.',
    link: 'https://pantry.richieliao.com', // replace with your actual link
    github: 'https://github.com/yourusername/pantry-tracker', // replace with actual GitHub link
  },
  {
    title: 'Ecommerce Web App',
    description: 'Ecommerce app with shopping cart and AlanAI voice assistant.',
    link: 'https://ecommerce.richieliao.com', // replace with your actual link
    github: 'https://github.com/yourusername/ecommerce-app', // replace with actual GitHub link
  },
];

const Projects = () => {
  const navigate = useNavigate();

  const handleProjectClick = (projectLink) => {
    if (projectLink.startsWith('/')) {
      navigate(projectLink); // internal route
    } else {
      window.open(projectLink, '_blank'); // external link
    }
  };
  

  return (
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
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleProjectClick(project.link)}
                    className="text-blue-600 hover:underline"
                  >
                    View Project
                  </button>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
