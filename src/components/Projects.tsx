import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Calendar, ExternalLink, Github, Tag } from 'lucide-react';

// Import project images
import aiChatImg from '@/assets/project-ai-chat.jpg';
import ecommerceImg from '@/assets/project-ecommerce.jpg';
import taskManagerImg from '@/assets/project-task-manager.jpg';
import weatherImg from '@/assets/project-weather.jpg';
import aijobs from '@/assets/aijobs.jpg';
import docs from '@/assets/docs.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'AI-Powered Job Recommendation & Resume Analyzer',
      description: 'A full-stack application that leverages AI to recommend jobs and analyze resumes. Features include user authentication, resume parsing, and job matching algorithms.',
      image: aijobs,
      technologies: ['React18', 'TypeScript', 'Supabase', 'PostgreSQL ', 'Framer Motion','shadcn/ui + Radix UI'],
      githubUrl: 'https://github.com/chimalasaikiran/AI_JOBS_PORTAL',
      liveUrl: 'https://ai-jobs-portal.vercel.app/',
      date: '2025',
      featured: true
    },
    {
  id: 2,
  title: 'Document Summary Assistant',
  description:
    'AI-powered web app that summarizes PDFs and images using Google Gemini. Supports drag-and-drop upload, adjustable summary length, responsive UI, and one-click copy of markdown summaries.',
  image:docs, // update this import/variable name as needed
  technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Google Gemini API'],
  githubUrl: 'https://github.com/your-username/document-summary-assistant', // replace with your actual repo
  liveUrl: 'https://document-summary-assistant-dusky.vercel.app/',
  date: '2025',
  featured: true
},

    {
      id: 3,
      title: 'AI Chatbot Assistant',
      description: 'Intelligent chatbot powered by natural language processing. Supports context-aware conversations, file uploads, and integration with popular messaging platforms.',
      image: aiChatImg,
      technologies: ['Python', 'Flask', 'OpenAI API', 'React', 'WebSocket'],
      githubUrl: 'https://github.com/alexjohnson/ai-chatbot',
      liveUrl: 'https://aichatbot-demo.vercel.app',
      date: '2023',
      featured: false
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'Beautiful weather application with location-based forecasts, interactive maps, and weather alerts. Features responsive design and offline capability.',
      image: weatherImg,
      technologies: ['React', 'TypeScript', 'Weather API', 'Chart.js', 'PWA'],
      githubUrl: 'https://github.com/alexjohnson/weather-dashboard',
      liveUrl: 'https://weather-dashboard-demo.vercel.app',
      date: '2023',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-32 bg-surface/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Featured <span className="gradient-text-rainbow">Projects</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
              A showcase of my best work, demonstrating proficiency in full-stack development, 
              AI integration, and modern web technologies.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="space-y-16 mb-20">
            {featuredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Project Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                    <Card className="relative overflow-hidden border-border/50 card-hover">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    </Card>
                  </div>
                </div>

                {/* Project Details */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="outline" className="border-primary/50 text-primary">
                        <Calendar className="w-3 h-3 mr-1" />
                        {project.date}
                      </Badge>
                      <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                        Featured
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 gradient-text">{project.title}</h3>
                    <p className="text-text-secondary leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-foreground">Technologies</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="border-border hover:border-primary/50">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4 pt-2">
                    <Button asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects Grid */}
          {otherProjects.length > 0 && (
            <>
              <div className="text-center mb-12">
                <h3 className="text-2xl font-semibold mb-4">Other Notable Projects</h3>
                <p className="text-text-secondary">Additional projects showcasing various skills and technologies.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {otherProjects.map((project) => (
                  <Card key={project.id} className="bg-gradient-card border-border/50 card-hover group">
                    <CardHeader className="p-0">
                      <div className="aspect-video overflow-hidden rounded-t-lg">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-xl font-semibold">{project.title}</h4>
                          <Badge variant="outline" className="text-xs">
                            {project.date}
                          </Badge>
                        </div>
                        <p className="text-text-secondary text-sm leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>

                      <div className="flex gap-3 pt-2">
                        <Button size="sm" variant="outline" className="flex-1" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-3 h-3 mr-1" />
                            Demo
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-3 h-3 mr-1" />
                            Code
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-text-secondary mb-6">
              Interested in seeing more of my work or discussing a potential collaboration?
            </p>
            <Button 
              size="lg"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;