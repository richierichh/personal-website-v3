import { useNavigate } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { useState } from 'react';

const projects = [
  {
    title: 'Product Case Study: Workday',
    description: "A case study on how to improve Workday's job application platform and process giving users a better experience",
    link: '/project-workday',
    tags: ['UX Design', 'Product Research', 'User Research'],
    image: '/workday logo.png',
  },
  {
    title: 'Signature Pro',
    description: 'Create a unique personalized signature and securely sign PDF documents in seconds',
    link: 'https://classy-sign-forge.vercel.app/auth',
    tags: ['React', 'SupaBase'],
    image: '/Signature Picture.png',
  },
  {
    title: 'Pantry Tracker',
    description: 'Pantry tracker that lets users manage food inventory and automatically generates recipes based on available ingredients',
    link: '',
    github: 'https://github.com/richierichh/pantry-tracker',
    tags: ['React', 'FireBase', 'OpenAI API'],
    image: '/pantry tracker.png',
    video: '/Pantry Tracker Demo.mp4',
  },
  {
    title: 'AlanAI Ecommerce Web App',
    description: 'Simple Ecommerce app integrated with AlanAI that allows user to add, remove and checkout items using their voice',
    link: '',
    github: 'https://github.com/richierichh/AlanAI-Ecommerce-App',
    tags: ['React', 'AlanAI API'],
    image: '/AlanAI Picture.png',
    video: '/AlanAI Demo.mp4',
  },
];

const Projects = () => {
  const navigate = useNavigate();
  const [showVideo, setShowVideo] = useState(false);
  const [videoSrc, setVideoSrc] = useState('');

  const handleProjectClick = (project) => () => {
    if (project.video) {
      setVideoSrc(project.video);
      setShowVideo(true);
    } else if (project.link?.startsWith('/')) {
      navigate(project.link);
    } else if (project.link) {
      window.open(project.link, '_blank');
    }
  };

  return (
    <section id="projects" className="py-32 section-padding bg-gray-50 dark:bg-[#141414] dark:text-white">
      <div className="max-content-width">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-20 leading-tight">Projects</h2>

          <div className="grid md:grid-cols-2 gap-16">
            {projects.map((project, idx) => (
              <div key={idx} className="p-8 border rounded-lg bg-white dark:bg-gray-50 shadow-sm">
                <h3 className="text-2xl font-semibold mb-4 dark:text-muted-foreground">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>

                {project.tags && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {project.image && (
                  <div className="mb-4 flex justify-center">
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="rounded-lg max-h-48 w-auto border"
                      loading="lazy"
                    />
                  </div>
                )}

                <div className="flex items-center gap-4">
                  <button
                    onClick={handleProjectClick(project)}
                    className="text-blue-600 hover:underline"
                    aria-label={`View ${project.title}`}
                  >
                    View Project
                  </button>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
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

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="relative bg-white dark:bg-[#222] rounded-2xl shadow-lg p-4 max-w-full w-[90vw] md:w-[700px]">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 dark:hover:text-white text-2xl font-bold rounded-full bg-gray-200 dark:bg-gray-700 w-8 h-8 flex items-center justify-center"
              aria-label="Close video"
            >
              &times;
            </button>
            <video
              src={videoSrc}
              controls
              autoPlay
              className="rounded-xl w-full h-auto mt-2"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
