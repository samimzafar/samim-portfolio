import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "React Native Engineer",
    company: "DPL",
    location: "Islamabad, Pakistan",
    period: "Jul 2023 - Present",
    description: [
      "Contributing to design and development of mobile and web applications with React Native",
      "Building scalable solutions with complex features using Redux architecture",
      "Working within cross-functional Agile teams with sprint planning and daily standups",
      "Delivering high-performing applications focused on user experience"
    ]
  },
  {
    role: "MERN Stack Developer",
    company: "NOVA TECHNOLOGY.PK",
    location: "Islamabad, Pakistan",
    period: "Dec 2021 - Jun 2023",
    description: [
      "Developed VidiVet App using JavaScript, React, React Native, and Node.js",
      "Implemented features with Sequelize ORM, Firebase, and Redux",
      "Built robust applications ensuring high performance and reliability",
      "Collaborated with team using Git for version control"
    ]
  }
];

const Experience = () => {
  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            Experience
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            My professional journey in software development
          </p>
        </div>

        <div className="space-y-6 md:space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="relative bg-card border border-border rounded-xl p-6 sm:p-8 hover:border-primary/50 transition-all hover:shadow-card group"
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 sm:left-8 top-full w-0.5 h-8 bg-gradient-to-b from-primary/50 to-transparent" />
              )}

              <div className="flex flex-col md:flex-row md:items-start gap-5 md:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:shadow-glow transition-all">
                    <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 md:mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold mb-1 text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-base sm:text-lg text-primary">
                        {exp.company}
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {exp.location}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                      <Calendar className="h-4 w-4" />
                      <span className="text-xs sm:text-sm">{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-accent mt-1.5">▹</span>
                        <span className="text-sm sm:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
