
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages & Frameworks",
      skills: [
        "Python", "JavaScript", "React", "Java", "C#", "ASP.NET", "SQL", "Node.js", "Selenium", "Spacy"
      ]
    },
    {
      title: "Cloud, Tools & Infrastructure",
      skills: [
        "Postman", "Oracle", "Git", "Docker"
      ]
    },
    {
      title: "Data Analysis",
      skills: [
        "Excel", "Pandas", "NumPy", "ETL"
      ]
    },
    {
      title: "Product Management",
      skills: [
        "User Research", "User Roadmapping", "Agile Scrum", "Jira", "Confluence", "Asana", "Figma"
      ]
    }
  ];

  return (
    <section id="skills" className="py-32 section-padding">
      <div className="max-content-width">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-20 leading-tight">
            Skills
          </h2>
          
          <div className="grid md:grid-cols-2 gap-16 lg:gap-20">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-xl font-medium mb-8 text-muted-foreground">{category.title}</h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="text-lg">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
