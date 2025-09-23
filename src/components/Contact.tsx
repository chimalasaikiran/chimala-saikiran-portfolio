import ResumePdf from '@/assets/SaikiranChimala_Resume.pdf'; // Import the resume
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser'; // 1. Import EmailJS
import { Download, Github, Linkedin, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'chimalasaikiran2@gmail.com', // TODO: Add your email
      href: 'mailto:chimalasaikiran2@gmail.com' // TODO: Add your email
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8522912379', // TODO: Add your phone number
      href: 'tel:+918522912379' // TODO: Add your phone number
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Vadodara, Gujarat', // TODO: Add your location
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      username: 'https://github.com/chimalasaikiran', // TODO: Add your GitHub username
      href: 'https://github.com/chimalasaikiran' // TODO: Add your GitHub link
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      username: 'Saikiran Chimala',
      href: 'https://www.linkedin.com/in/chimala-saikiran/' // TODO: Add your LinkedIn link
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // 2. Replace the handleSubmit function
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = 'service_4sxcntj';   // ✅ Paste your Service ID here
    const templateId = 'template_51uu9aa'; // ✅ Paste your Template ID here
    const publicKey = 'kTAKoseKZs-3wI95c';   // ✅ Paste your Public Key here

    emailjs.send(serviceId, templateId, formData, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch((err) => {
        console.log('FAILED...', err);
        toast({
          title: "Failed to send message",
          description: "Please try again or contact me directly via email.",
          variant: "destructive"
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious team.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <MessageCircle className="w-6 h-6 text-primary mr-3" />
                  Let's Connect
                </h3>
                <p className="text-text-secondary leading-relaxed mb-8">
                  Have a question or a project in mind? Feel free to reach out. I'm always happy to connect and discuss how I can help.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <Card key={index} className="bg-surface border-border/50">
                    <CardContent className="p-4">
                      <a 
                        href={item.href}
                        className="flex items-center space-x-4 text-text-secondary hover:text-foreground transition-colors"
                      >
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <item.icon className="w-5 h-5 text-primary" />
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-text-secondary">{item.label}</p>
                          <p className="font-medium text-foreground/90">{item.value}</p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-medium mb-4">Follow Me</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <Card key={index} className="bg-surface border-border/50">
                      <CardContent className="p-4">
                        <a 
                          href={social.href} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center space-x-3 text-text-secondary hover:text-foreground transition-colors"
                        >
                          <social.icon className="w-5 h-5 text-primary" />
                          <div className="min-w-0">
                            <p className="text-xs text-text-secondary">{social.label}</p>
                            <p className="text-sm font-medium truncate text-foreground/90">{social.username}</p>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Resume Download */}
              <Card className="bg-gradient-card border-border/50">
                <CardContent className="p-6 text-center">
                  <h4 className="text-lg font-medium mb-3">Interested in my background?</h4>
                  <p className="text-text-secondary text-sm mb-4">
                    Download my resume to learn more about my experience and qualifications.
                  </p>
                  <a href={ResumePdf} download="SaikiranChimala_Resume.pdf">
                    <Button 
                      variant="outline" 
                      className="w-full border-primary/50 hover:bg-primary/10 hover:border-primary"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Resume (PDF)
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold flex items-center">
                  <Send className="w-6 h-6 text-primary mr-3" />
                  Send Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="bg-surface border-transparent focus:border-primary focus:ring-0 text-black"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="bg-surface border-transparent focus:border-primary focus:ring-0 text-black"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What would you like to discuss?"
                      required
                      className="bg-surface border-transparent focus:border-primary focus:ring-0 text-black"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, opportunity, or just say hello..."
                      rows={6}
                      required
                      className="bg-surface border-transparent focus:border-primary resize-none focus:ring-0 text-black"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;