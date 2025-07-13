
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
        "Processing geospatial and socioeconomic data to evaluate site suitability for new EV charging stations using Python, Pandas, NumPy and feature-based learning",
        "Developed a cost optimization model that reduced projected infrastructure costs by 22% while increasing grid accessibility coverage by 35% across 3 high-traffic regions in the York Region"
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
        "Led end-to-end feature prioritization and backlog management, accelerating product delivery cycles by 20%",
        "Leveraged in-depth user behavior analysis and data-driven insights to streamline checkout flows, increasing successful conversions by 15% and reducing customer support inquiries by 10%",
        "Wrote detailed user stories and acceptance criteria while leading sprint planning and backlog grooming sessions, accelerating delivery timelines ensuring alignment with product vision"
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
        "Diagnosed and resolved critical backend bugs, minimizing downtime for 5000+ companies and enhancing performance for 3.5 million+ daily users",
        "Developed 10+ test automation scripts by migrating from the legacy FitNesse framework to SpecFlow using C# and Selenium increasing test coverage by 15%",
        "Validated REST APIs for backend services using Postman, debugged and fixed data inconsistencies that led to a 25% reduction in failed requests and improved overall reliability",
        "Directed QA processes across manual and automated testing using React, C#.NET, and SQL achieving a 90% reduction in user-reported issues"
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
        "Developed an NLP AI chatbot using Python, SpaCy and SQL to interpret financial prompts and execute correlated SQL queries for fixed income bonds improving data retrieval efficiency",
        "Automated trade report generation from Oracle database to Excel reducing processing time by 4+ hours weekly",
        "Led user research within a cross-functional team to refine product strategy & roadmap, and optimized an ML model that accurately extracted currencies and time frames for SQL querying",
        "Organized and managed large-scale trading data (10,000+ securities) using SQL and created VLOOKUPs in Excel optimizing data accessibility for analysts",
        "Utilized Confluence to document the NLP AI Chatbot’s architecture, entity extraction flow and SQL query generation logic enabling seamless knowledge transfer across engineering and product teams"
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
        "Led a team of developers and designers to design, build, and deploy two responsive websites for businesses using JavaScript, React, and Figma improving user engagement by 50%",
        "Integrated Strapi with a Node.js backend as a content management system and deployed it on AWS ensuring stakeholders are able to easily update content"
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
        "Architected and deployed nightly ETL jobs in C# and ASP.NET that loaded 1 million+ records across 7 Oracle databases cutting refresh time from 6 hours to 25 minutes (93% faster)",
        "Consolidated 12 GB of financial transactions into a new Oracle schema embedding validation rules that eliminated 30% of null or duplicate rows"
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
        "Verified and renewed hundreds of accounts ensuring financials, premiums, and broker information were accurate using Microsoft Access and Excel","Prepared 250+ financial rater templates in Microsoft Excel based on past financial history and risk projections", "Issued 100+ new accounts in Websure for new businesses to assist for underwriter quotation","Created 100+ decline accounts in Websure for different niche product and high-risk businesses", "Overall improved the efficiency of workload in the underwriting process and made it faster by 20%"
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
