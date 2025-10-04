import { Mail, Github, Linkedin, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="py-20 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg">
            Let's discuss your next project or opportunity
          </p>
        </div>

        <div className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all hover:shadow-card">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a 
                    href="mailto:camim.xafar500@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    camim.xafar500@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <a 
                    href="tel:+923068099788"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +92 306 8099788
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-muted-foreground">
                    Islamabad, Pakistan
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-4">
              <h3 className="text-xl font-semibold mb-2">Connect with me</h3>
              
              <Button 
                variant="outline" 
                className="w-full justify-start gap-3 border-primary/50 hover:border-primary hover:bg-primary/10"
                asChild
              >
                <a href="https://github.com/samimzafar" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span>GitHub - @samimzafar</span>
                </a>
              </Button>

              <Button 
                variant="outline" 
                className="w-full justify-start gap-3 border-accent/50 hover:border-accent hover:bg-accent/10"
                asChild
              >
                <a href="https://www.linkedin.com/in/samim-zafar-b99a41214/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn Profile</span>
                </a>
              </Button>

              <div className="mt-4 p-4 bg-secondary/30 rounded-lg border border-border">
                <p className="text-sm text-muted-foreground">
                  <span className="text-accent font-medium">Available for:</span>
                  <br />
                  Full-time opportunities, freelance projects, and consulting
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
