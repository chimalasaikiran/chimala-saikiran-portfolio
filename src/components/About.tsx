import { Card, CardContent } from '@/components/ui/card';
import { Code, GraduationCap, Heart, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'B.Tech in Computer Science',
      detail: 'Specializing in software engineering and artificial intelligence.'
    },
    {
      icon: Code,
      title: 'Experience',
      description: 'Full-Stack Development',
      detail: 'Building modern applications with React, Node.js, and cloud technologies.'
    },
    {
      icon: Target,
      title: 'Goal',
      description: 'Software Engineer',
      detail: 'Seeking to contribute to innovative teams and build impactful technology.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'AI & Machine Learning',
      detail: 'Fascinated by the potential of AI to solve real-world problems.'
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-32 bg-surface/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              About <span className="gradient-text-secondary">Me</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
              I am a results-oriented software developer driven by a passion for creating elegant and efficient digital solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Bio Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-4">My Journey</h3>
              <div className="prose prose-lg text-text-secondary space-y-4">
                <p className="leading-relaxed">
                  Hello! I'm Saikiran, a software developer with a deep fascination for the intersection of web development and artificial intelligence. My journey into tech was fueled by a desire to build things that are not only functional but also intelligent and intuitive.
                </p>
                <p className="leading-relaxed">
                  I have a strong foundation in core computer science principles and hands-on experience with modern frameworks like 
                  <span className="text-primary font-medium"> React</span> and 
                  <span className="text-accent font-medium"> Node.js</span>. My expertise extends to languages such as 
                  <span className="text-accent-secondary font-medium"> Python</span> and 
                  <span className="text-primary font-medium"> JavaScript</span>, allowing me to work across the full stack.
                </p>
                <p className="leading-relaxed">
                  I thrive on solving complex problems and am always eager to learn new technologies. Whether it's architecting a scalable backend or designing a responsive user interface, I approach every challenge with dedication and a commitment to quality.
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <Card 
                  key={index} 
                  className="card-hover bg-gradient-card border-border/50 group"
                >
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-3 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <p className="text-sm text-primary font-medium">{item.description}</p>
                    <p className="text-xs text-text-secondary leading-relaxed">{item.detail}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;