import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "EMOH",
    description: "Comprehensive expense management platform allowing users to connect accounts, track income, expenses, and budgets in multiple currencies via Plaid or manually.",
    tech: ["Nest.js", "Prisma", "Plaid", "OpenAI", "AWS S3", "Nodemailer", "Swagger"],
    highlights: [
      "Integrated AWS S3 for secure file storage",
      "Implemented Passport-based authentication with OAuth2",
      "Real-time notifications via Nodemailer",
      "OpenAI integration for smart insights"
    ],
    github: "https://github.com/samimzafar"
  },
  {
    title: "Urido",
    description: "Full-stack taxi booking platform for the UK market, enabling seamless ride booking with real-time location tracking and route optimization.",
    tech: ["Next.js", "Nest.js", "TypeScript", "Sequelize", "TanStack Query", "Google Maps API"],
    highlights: [
      "Google Maps API integration for real-time tracking",
      "Admin dashboard for ride management",
      "Operational analytics with Ant Design",
      "Efficient data fetching with TanStack Query"
    ],
    github: "https://github.com/samimzafar"
  },
  {
    title: "Let's Outsource",
    description: "Official Let's Outsource website with modern, responsive UI and seamless user experience. Built for scalability and SEO optimization.",
    tech: ["Next.js", "Framer Motion", "Nodemailer", "Chakra UI"],
    highlights: [
      "Server-side rendering (SSR) for performance",
      "Static generation (SSG) for SEO",
      "Integrated onboarding system",
      "Smooth animations with Framer Motion"
    ],
    github: "https://github.com/samimzafar",
    demo: "https://letsoutsource.com"
  },
  {
    title: "CleverHome",
    description: "Scalable backend platform managing user data, authentication, and business logic with integrated payment processing and push notifications.",
    tech: ["Express", "Prisma", "PostgreSQL", "Firebase Admin", "Stripe", "AWS S3"],
    highlights: [
      "Stripe payment integration",
      "Firebase push notifications",
      "API rate limiting with Zod validation",
      "Comprehensive Swagger documentation"
    ],
    github: "https://github.com/samimzafar"
  },
  {
    title: "UpTrade Web App",
    description: "Platform facilitating animal buying and sales between farmers and agents with single/bulk upload capabilities and admin portal.",
    tech: ["React", "Redux", "Axios", "Local Storage"],
    highlights: [
      "Single and bulk animal upload modules",
      "Offline-first approach with local storage",
      "Admin portal with filters and pagination",
      "Responsive design for web and mobile"
    ],
    github: "https://github.com/samimzafar"
  },
  {
    title: "Miracle Morning Routine",
    description: "App following the SAVERS Rule (Silence, Affirmation, Visualization, Exercise, Reading, Scribing) for structured morning routines.",
    tech: ["React Native", "Redux", "Audio Integration"],
    highlights: [
      "Dynamic scheduling system for challenges",
      "Progress tracking and reminders",
      "Motivational audio recordings",
      "Agile development with monthly releases"
    ],
    github: "https://github.com/samimzafar"
  },
  {
    title: "Pause Breathe Reflect",
    description: "Meditation app with 50+ mood-based topics, guided meditation with author's audio scripts, and AI chatbot for personalized recommendations.",
    tech: ["React Native", "Chatbot AI", "Audio Playback"],
    highlights: [
      "50+ mood-based meditation topics",
      "Interactive AI chatbot",
      "Author's audio scripts integration",
      "Multiple production releases"
    ],
    github: "https://github.com/samimzafar"
  },
  {
    title: "VidiVet App",
    description: "Doctor-animal consultation app developed during COVID-19 for remote veterinary consultations between vets and pet owners.",
    tech: ["React", "React Native", "Node.js", "Sequelize", "Firebase"],
    highlights: [
      "Remote consultation platform",
      "Custom hooks and functional components",
      "API integration for seamless communication",
      "Responsive user interface"
    ],
  }
];

const Projects = () => {
  return (
    <section className="py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            A selection of projects I've worked on
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-card group"
            >
              <div className="p-5 sm:p-6 space-y-3.5 sm:space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-1.5 sm:gap-2">
                    {project.github && (
                      <Button 
                        variant="ghost" 
                        size="icon"
                        className="hover:bg-primary/10 hover:text-primary"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button 
                        variant="ghost" 
                        size="icon"
                        className="hover:bg-accent/10 hover:text-accent"
                        asChild
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground text-sm sm:text-base">
                  {project.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-xs sm:text-sm font-medium text-foreground">Key Highlights:</h4>
                  <ul className="space-y-1.5">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                        <span className="text-accent mt-0.5">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-[10px] sm:text-xs bg-secondary/30 border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
