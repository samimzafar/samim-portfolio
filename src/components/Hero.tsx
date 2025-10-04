import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Hero background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/10" />
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="mb-6 inline-block">
          <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
            Available for opportunities
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          Samim Zafar
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-primary">
          MERN Stack & React Native Engineer
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          4+ years of experience building commercial and scalable systems with JavaScript stack. 
          Specialized in creating beautiful UIs with robust functionality for web and mobile platforms.
        </p>

        {/* Social Links */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button 
            variant="default" 
            size="lg"
            className="group bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all"
            asChild
          >
            <a href="https://github.com/samimzafar" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              GitHub
              <ExternalLink className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="group border-primary/50 hover:border-primary hover:bg-primary/10"
            asChild
          >
            <a href="https://www.linkedin.com/in/samim-zafar-b99a41214/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
              <ExternalLink className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="group border-accent/50 hover:border-accent hover:bg-accent/10"
            asChild
          >
            <a href="mailto:camim.xafar500@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              Email Me
            </a>
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full mx-auto flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
