import profilePhoto from '@/assets/profile-photo.jpg';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 pt-20 pb-10">
      {/* Animated Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-glow from-accent/20 to-transparent rounded-full blur-3xl opacity-20 animate-floating"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent-secondary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-accent-tertiary/15 rounded-full blur-2xl animate-bounce"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8 sm:space-y-10 fade-in">
          {/* Profile Image */}
          <div className="relative inline-block">
            <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-glow animate-pulse-glow">
              <img 
                src={profilePhoto} 
                alt="Headshot of Saikiran Chimala" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-8 h-8 bg-success rounded-full border-4 border-background animate-pulse"></div>
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Hi, I'm <span className="gradient-text">Saikiran Chimala</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              <span className="block sm:inline"><span className="text-primary font-semibold">Software Developer</span> |</span>
              <span className="block sm:inline"> <span className="text-accent font-semibold">Full-Stack Engineer</span> |</span>
              <span className="block sm:inline"> <span className="text-accent-secondary font-semibold">AI Enthusiast</span></span>
            </p>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed pt-2">
              I build dynamic and intelligent web applications, blending full-stack expertise with a passion for artificial intelligence to create seamless user experiences.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="rounded-full font-semibold shadow-glow"
              onClick={scrollToAbout}
            >
              Explore My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            
            <div className="flex gap-3">
              <a href="https://github.com/chimalasaikiran" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="rounded-full border-border-hover hover:border-accent hover:bg-accent/10 hover:shadow-glow-secondary">
                  <Github className="h-5 w-5 hover:text-accent transition-colors" />
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/chimala-saikiran/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="rounded-full border-border-hover hover:border-accent-secondary hover:bg-accent-secondary/10">
                  <Linkedin className="h-5 w-5 hover:text-accent-secondary transition-colors" />
                </Button>
              </a>
              <a href="mailto:chimalasaikiran2@gmail.com">
                <Button variant="outline" size="icon" className="rounded-full border-border-hover hover:border-accent-tertiary hover:bg-accent-tertiary/10">
                  <Mail className="h-5 w-5 hover:text-accent-tertiary transition-colors" />
                </Button>
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block">
            <div className="animate-bounce">
              <ArrowDown className="h-6 w-6 text-text-secondary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;