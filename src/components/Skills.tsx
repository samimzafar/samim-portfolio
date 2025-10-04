import { Badge } from "@/components/ui/badge";

const skills = {
  "Frontend": [
    "React", "React Native", "Next.js", "TypeScript", "JavaScript",
    "Tailwind CSS", "Ant Design", "Chakra UI", "Framer Motion"
  ],
  "Backend": [
    "Node.js", "Nest.js", "Express.js", "Prisma", "Sequelize",
    "PostgreSQL", "MongoDB"
  ],
  "Tools & Services": [
    "Redux", "TanStack Query", "Git", "AWS S3", "Firebase",
    "Stripe", "Plaid", "Google Maps API", "OpenAI", "Swagger"
  ],
  "Other": [
    "REST APIs", "OAuth2", "JWT", "Passport.js", "Agile/Scrum",
    "Mobile Deployment", "TestFlight", "Google Play Console"
  ]
};

const Skills = () => {
  return (
    <section className="py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Technologies I work with to build exceptional products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div 
              key={category}
              className="bg-card border border-border rounded-xl p-5 sm:p-6 hover:border-primary/50 transition-all hover:shadow-card"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-primary">
                {category}
              </h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {items.map((skill) => (
                  <Badge 
                    key={skill}
                    variant="secondary"
                    className="px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm bg-secondary/50 hover:bg-primary/20 hover:text-primary hover:border-primary/50 transition-all cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
