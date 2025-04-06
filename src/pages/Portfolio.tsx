
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Moon, Sun, Globe, ChevronUp, GitHub, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { t, i18n } = useTranslation();
  const { toast } = useToast();
  
  // Change language
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    toast({
      title: t('languageChanged'),
      description: t('languageChangedDesc'),
    });
  };
  
  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };
  
  // Scroll to top button visibility
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-background text-foreground transition-colors duration-300">
        {/* Header section */}
        <header className="sticky top-0 z-50 backdrop-blur-sm border-b border-border bg-background/95">
          <div className="container mx-auto p-4 flex justify-between items-center">
            <div className="text-2xl font-heading font-bold text-primary">
              <span className="text-teal">Portfolio</span>
              <span className="text-coral">Pro</span>
            </div>
            
            <nav className="hidden md:flex space-x-6">
              <a href="#about" className="hover:text-primary transition-colors">{t('about')}</a>
              <a href="#skills" className="hover:text-primary transition-colors">{t('skills')}</a>
              <a href="#projects" className="hover:text-primary transition-colors">{t('projects')}</a>
              <a href="#contact" className="hover:text-primary transition-colors">{t('contact')}</a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
                      {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{darkMode ? t('lightMode') : t('darkMode')}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="relative">
                      <Button variant="ghost" size="icon">
                        <Globe className="h-5 w-5" />
                      </Button>
                      <div className="absolute right-0 mt-2 bg-card border border-border rounded-md shadow-lg w-32 hidden group-hover:block">
                        <button onClick={() => changeLanguage('en')} className="block w-full text-left px-4 py-2 hover:bg-muted">English</button>
                        <button onClick={() => changeLanguage('bn')} className="block w-full text-left px-4 py-2 hover:bg-muted">বাংলা</button>
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{t('changeLanguage')}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </header>
        
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-teal to-teal-dark text-white">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">{t('heroTitle')}</h1>
              <p className="text-xl md:text-2xl opacity-90 mb-8">{t('heroSubtitle')}</p>
              <div className="flex space-x-4">
                <Button size="lg" className="bg-white text-teal hover:bg-white/90">
                  {t('viewProjects')}
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                  {t('contactMe')}
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-white/20 animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-white/10 animate-pulse"></div>
          </div>
        </section>
        
        {/* About Section */}
        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">{t('aboutMe')}</h2>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="animate-slide-in">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                    alt="Developer" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="animate-fade-in">
                <h3 className="text-2xl font-heading font-bold mb-4">{t('fullStackDeveloper')}</h3>
                <p className="text-lg mb-6">{t('aboutDesc')}</p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="bg-primary/10 text-primary p-2 rounded-full mr-3">✓</span>
                    {t('experience')}
                  </li>
                  <li className="flex items-center">
                    <span className="bg-primary/10 text-primary p-2 rounded-full mr-3">✓</span>
                    {t('clientSatisfaction')}
                  </li>
                  <li className="flex items-center">
                    <span className="bg-primary/10 text-primary p-2 rounded-full mr-3">✓</span>
                    {t('qualityWork')}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Skills Section */}
        <section id="skills" className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">{t('mySkills')}</h2>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { name: 'HTML5', level: 90 },
                { name: 'CSS3', level: 85 },
                { name: 'JavaScript', level: 80 },
                { name: 'React', level: 75 },
                { name: 'Node.js', level: 70 },
                { name: 'MongoDB', level: 65 },
                { name: 'Bootstrap', level: 90 },
                { name: 'Tailwind CSS', level: 85 },
              ].map((skill, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow product-card-hover">
                  <CardContent className="p-6">
                    <h3 className="font-heading font-medium text-lg mb-2">{skill.name}</h3>
                    <div className="w-full bg-muted rounded-full h-2.5">
                      <div 
                        className="bg-primary h-2.5 rounded-full animate-slide-in" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <p className="text-right mt-1 text-sm">{skill.level}%</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">{t('myProjects')}</h2>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'E-commerce Platform',
                  category: 'Web Development',
                  image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
                },
                {
                  title: 'Mobile Banking App',
                  category: 'App Development',
                  image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
                },
                {
                  title: 'Portfolio Website',
                  category: 'UI/UX Design',
                  image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
                },
                {
                  title: 'Blog Platform',
                  category: 'Web Development',
                  image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
                },
                {
                  title: 'Social Media Dashboard',
                  category: 'UI/UX Design',
                  image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
                },
                {
                  title: 'Fitness Tracker',
                  category: 'App Development',
                  image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
                },
              ].map((project, index) => (
                <Card 
                  key={index}
                  className="overflow-hidden group cursor-pointer product-card-hover"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button variant="secondary" size="sm">
                        {t('viewDetails')}
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-sm text-primary font-medium mb-1">{project.category}</p>
                    <h3 className="font-heading text-lg font-medium">{project.title}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">{t('contactMe')}</h2>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <Card className="overflow-hidden">
                  <CardContent className="p-6">
                    <h3 className="font-heading font-bold text-xl mb-6">{t('getInTouch')}</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Mail className="w-5 h-5 mt-1 mr-3 text-primary" />
                        <div>
                          <p className="font-medium">{t('email')}</p>
                          <p className="text-muted-foreground">contact@portfoliopro.com</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Phone className="w-5 h-5 mt-1 mr-3 text-primary" />
                        <div>
                          <p className="font-medium">{t('phone')}</p>
                          <p className="text-muted-foreground">+880 123 456 7890</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <GitHub className="w-5 h-5 mt-1 mr-3 text-primary" />
                        <div>
                          <p className="font-medium">GitHub</p>
                          <p className="text-muted-foreground">github.com/portfoliopro</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Linkedin className="w-5 h-5 mt-1 mr-3 text-primary" />
                        <div>
                          <p className="font-medium">LinkedIn</p>
                          <p className="text-muted-foreground">linkedin.com/in/portfoliopro</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-8">
                      <h4 className="font-medium mb-4">{t('followMe')}</h4>
                      <div className="flex space-x-4">
                        <Button variant="outline" size="icon" className="rounded-full">
                          <GitHub className="h-5 w-5" />
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full">
                          <Linkedin className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-heading font-bold text-xl mb-6">{t('sendMessage')}</h3>
                    <form className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-1">
                          <label htmlFor="name" className="block text-sm font-medium mb-1">
                            {t('name')}
                          </label>
                          <Input id="name" className="w-full" />
                        </div>
                        <div className="col-span-1">
                          <label htmlFor="email" className="block text-sm font-medium mb-1">
                            {t('email')}
                          </label>
                          <Input id="email" type="email" className="w-full" />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-1">
                          {t('subject')}
                        </label>
                        <Input id="subject" className="w-full" />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-1">
                          {t('message')}
                        </label>
                        <textarea
                          id="message"
                          rows={5}
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                        ></textarea>
                      </div>
                      <Button className="w-full" size="lg">
                        {t('sendMessage')}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* Footer Section */}
        <footer className="bg-teal text-white py-8">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p>&copy; {new Date().getFullYear()} {t('footerCopyright')}</p>
              <p className="mt-2 text-sm opacity-75">{t('footerRights')}</p>
            </div>
          </div>
        </footer>
        
        {/* Scroll to top button */}
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-2 rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 transition-all animate-slide-in"
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-6 w-6" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
