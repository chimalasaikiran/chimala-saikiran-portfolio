import { Button } from '@/components/ui/button';
import { ArrowUp, Github, Heart, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/chimalasaikiran', label: 'GitHub' }, // TODO: Add your link
    { icon: Linkedin, href: 'https://www.linkedin.com/in/chimala-saikiran/', label: 'LinkedIn' }, // TODO: Add your link
    { icon: Mail, href: 'mailto:chimalasaikiran2@gmail.com', label: 'Email' } // TODO: Add your email
  ];

  return (
    <footer className="bg-surface/50 border-t border-border/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center space-y-8">
            {/* Logo/Name */}
            <div className="text-center">
              <h3 className="text-2xl font-bold gradient-text mb-2">Saikiran Chimala</h3>
              <p className="text-text-secondary">Software Developer | Full-Stack Engineer</p>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.querySelector(`#${item.toLowerCase()}`);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-text-secondary hover:text-primary transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </nav>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="icon"
                  className="rounded-full border-border hover:border-primary hover:bg-primary/10"
                  asChild
                >
                  <a 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center text-sm text-text-secondary">
              <p className="flex items-center justify-center gap-2">
                © {currentYear} Saikiran Chimala. Made with 
                <Heart className="h-4 w-4 text-red-500" fill="currentColor" /> 
                and React
              </p>
              <p className="mt-1">All rights reserved.</p>
            </div>
          </div>

          {/* Back to Top Button */}
          <div className="flex justify-center mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="rounded-full border-border hover:border-primary hover:bg-primary/10"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;