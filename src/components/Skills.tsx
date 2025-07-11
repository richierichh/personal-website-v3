

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
        "Excel", "Pandas", "NumPy"
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
          <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-4 leading-tight">
            Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white dark:bg-[#18181b] rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 p-8 flex flex-col gap-6">
                <h3 className="text-xl font-semibold mb-2 text-muted-foreground">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 bg-gray-100 dark:bg-[#232326] text-gray-800 dark:text-gray-200 rounded-full text-base font-medium border border-gray-200 dark:border-gray-700 shadow-sm hover:bg-gray-200 dark:hover:bg-[#2a2a2e] transition-colors"
                    >
                      {skill}
                    </span>
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
