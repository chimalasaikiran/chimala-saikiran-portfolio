import { Brain, Cloud, Code, Database } from 'lucide-react';
import { useEffect, useState } from 'react';

const Skills = () => {
  const [animateProgress, setAnimateProgress] = useState(false);

  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      skills: [
        { name: 'HTML/CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'React.js', level: 80 },
        { name: 'TypeScript', level: 75 },
        { name: 'Tailwind CSS', level: 85 }
      ]
    },
    {
      icon: Database,
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'Express.js', level: 70 },
        { name: 'Python', level: 80 },
        { name: 'MongoDB', level: 70 },
        { name: 'PostgreSQL', level: 65 }
      ]
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      skills: [
        { name: 'Python', level: 80 },
        { name: 'TensorFlow', level: 60 },
        { name: 'Scikit-learn', level: 65 },
        { name: 'Data Analysis', level: 70 },
        { name: 'Deep Learning', level: 55 }
      ]
    },
    {
      icon: Cloud,
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git/GitHub', level: 85 },
        { name: 'VS Code', level: 90 },
        { name: 'Docker', level: 60 },
        { name: 'AWS', level: 50 },
        { name: 'Firebase', level: 70 }
      ]
    }
  ];

  const programmingLanguages = [
    { name: 'JavaScript', level: 85, color: 'bg-yellow-500' },
    { name: 'Python', level: 80, color: 'bg-blue-500' },
    { name: 'Java', level: 70, color: 'bg-orange-500' },
    { name: 'C++', level: 65, color: 'bg-blue-600' },
    { name: 'TypeScript', level: 75, color: 'bg-blue-400' },
    { name: 'SQL', level: 70, color: 'bg-green-500' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateProgress(true);
        }
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              My <span className="gradient-text-tertiary">Skills</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
              A comprehensive overview of my technical expertise across various domains of software development.
            </p>
          </div>

          {/* Programming Languages Overview */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-center mb-8">Programming Languages</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {programmingLanguages.map((lang, index) => (
                <div key={index} className="bg-gradient-card rounded-xl p-6 border border-border/50 card-hover">
                  <div className="text-center space-y-3">
                    <h4 className="font-semibold text-foreground">{lang.name}</h4>
                    <div className="relative">
                      <div className="progress-bar">
                        <div 
                          className={`progress-fill ${lang.color.replace('bg-', 'bg-gradient-to-r from-')} to-${lang.color.split('-')[1]}-400`}
                          style={{ 
                            width: animateProgress ? `${lang.level}%` : '0%',
                            background: `hsl(var(--primary))`
                          }}
                        ></div>
                      </div>
                      <span className="text-sm text-text-secondary mt-2 block">{lang.level}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skill Categories */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex} 
                className="bg-gradient-card rounded-2xl p-8 border border-border/50 card-hover"
              >
                <div className="flex items-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mr-4">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-foreground font-medium">{skill.name}</span>
                        <span className="text-text-secondary text-sm">{skill.level}%</span>
                      </div>
                      <div className="progress-bar">
                        <div 
                          className="progress-fill"
                          style={{ 
                            width: animateProgress ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 5 + skillIndex) * 100}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold mb-6">Other Competencies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Responsive Design', 'RESTful APIs', 'Version Control', 'Agile Methodologies',
                'Problem Solving', 'Team Collaboration', 'UI/UX Design', 'Testing & Debugging'
              ].map((skill, index) => (
                <span 
                  key={index}
                  className={`px-4 py-2 bg-surface border border-border rounded-full text-sm text-text-secondary hover:text-foreground hover:border-primary/50 transition-all duration-200 ${
                    index % 4 === 0 ? 'hover:shadow-glow' :
                    index % 4 === 1 ? 'hover:shadow-glow-secondary hover:border-accent' :
                    index % 4 === 2 ? 'hover:shadow-glow-tertiary hover:border-accent-tertiary' :
                    'hover:border-accent-secondary'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;