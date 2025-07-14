
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Machine Learning Researcher",
      company: "Wilfrid Laurier University",
      location: "Waterloo, ON",
      period: "January 2025 - April 2025",
      website: "https://www.wlu.ca/",
      description: "",
      responsibilities: [
        "Built geospatial ML models to identify optimal EV charging station sites, reducing infrastructure costs by 22% and boosting grid accessibility by 35%"
      ]
    },
    {
      title: "Product Manager Intern",
      company: "Cita Marketplace",
      location: "Remote",
      period: "September 2024 - December 2024",
      website: "https://www.citamarketplace.com/",
      description: "",
      responsibilities: [
        "Led feature prioritization and sprint planning, improving product delivery by 20% and optimizing checkout UX to increase conversions by 15%"
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "Dayforce",
      location: "Toronto, ON",
      period: "January 2024 - August 2024",
      website: "https://www.dayforce.com/",
      description: "",
      responsibilities: [
        "Resolved backend bugs impacting 3.5M+ users, built automation tests to increase coverage by 15%, and led QA efforts to reduce user issues by 90%"
      ]
    },
    {
      title: "Business Analyst Intern",
      company: "CIBC Capital Markets",
      location: "Toronto, ON",
      period: "September 2023 - December 2023",
      website: "https://cibccm.com/",
      description: "",
      responsibilities: [
        "Developed an NLP chatbot using Python and SpaCy for SQL automation, cutting manual work weekly, and optimized data workflows across 10,000+ bond securities"
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "Civiconnect",
      location: "Remote",
      period: "January 2023 - April 2023",
      website: "https://www.civiconnect.ca/",
      description: "",
      responsibilities: [
        "Led development of two responsive websites using React and Strapi CMS, improving business user engagement by 50%"
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "Ministry of Public and Business Service Delivery",
      location: "Toronto, ON",
      period: "January 2023 - April 2023",
      website: "https://www.ontario.ca/page/ministry-public-and-business-service-delivery-and-procurement",
      description: "",
      responsibilities: [
        "Engineered high-speed ETL pipelines to process 1M+ records across 7 databases, reducing refresh time by 93% and improving data quality"
      ]
    },
    {
      title: "Analyst Intern",
      company: "Markel",
      location: "Toronto, ON",
      period: "May 2022 - September 2022",
      website: "https://www.markel.ca/",
      description: "",
      responsibilities: [
        "Managed 450+ financial accounts and templates, streamlining underwriting operations and accelerating workload efficiency by 20%"
      ]
    }
  ];

  return (
    <section id="experience" className="py-32 section-padding bg-gray-50 dark:bg-[#141414] dark:text-white">
      <div className="max-content-width">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-20 leading-tight">
            Experience
          </h2>
          
          <div className="space-y-20">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group opacity-0 translate-y-8 transition-all duration-700 ease-out will-change-transform"
                style={{ transitionDelay: `${index * 100}ms` }}
                onAnimationEnd={e => e.currentTarget.classList.remove('opacity-0', 'translate-y-8')}
                onMouseEnter={e => e.currentTarget.classList.remove('opacity-0', 'translate-y-8')}
                ref={el => {
                  if (el) {
                    const observer = new IntersectionObserver(
                      ([entry]) => {
                        if (entry.isIntersecting) {
                          el.classList.remove('opacity-0', 'translate-y-8');
                          observer.disconnect();
                        }
                      },
                      { threshold: 0.1 }
                    );
                    observer.observe(el);
                  }
                }}
              >
                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                  <div className="md:col-span-1">
                    <div className="text-sm text-muted-foreground mb-2">{exp.period}</div>
                    <div className="text-sm text-muted-foreground">{exp.location}</div>
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-2xl md:text-3xl font-light mb-2">{exp.title}</h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {exp.company}
                      </a>
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-8">{exp.description}</p>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="text-muted-foreground flex items-start dark:text-white">
                          <span className="w-2 h-2 bg-black rounded-full mt-2 mr-4 flex-shrink-0 dark:bg-white"></span>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
