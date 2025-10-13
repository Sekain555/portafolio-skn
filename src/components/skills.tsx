import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  FaBrain,
  FaCog,
  FaLeaf,
  FaServer,
  FaDesktop,
  FaDatabase,
  FaGitAlt,
  FaCloud,
  FaCode,
  FaPython,
  FaFlask,
  FaVuejs,
  FaAngular,
  FaFigma,
  FaReact,
  FaKey,
  FaCss3Alt
} from "react-icons/fa";
import { SiFastapi, SiMysql, SiFirebase, SiIonic, SiVuetify, SiArduino, SiNextdotjs } from "react-icons/si";
import { TbSquareLetterS } from "react-icons/tb";

const skillsData = {
  main: {
    title: "Habilidades principales",
    icon: <FaBrain className="h-8 w-8 text-primary" />,
    description: "Tecnologías que domino y uso activamente en proyectos reales.",
    categories: [
      {
        title: "Backend",
        icon: <FaServer className="h-5 w-5 mr-2" />,
        skills: [
          { name: "Python", icon: <FaPython className="h-5 w-5" /> },
          { name: "FastAPI", icon: <SiFastapi className="h-5 w-5" /> },
          { name: "MySQL/MariaDB", icon: <SiMysql className="h-5 w-5" /> },
          { name: "Firebase", icon: <SiFirebase className="h-5 w-5" /> },
        ],
      },
      {
        title: "Frontend",
        icon: <FaDesktop className="h-5 w-5 mr-2" />,
        skills: [
          { name: "Angular", icon: <FaAngular className="h-5 w-5" /> },
          { name: "Ionic", icon: <SiIonic className="h-5 w-5" /> },
          
        ],
      },
      {
        title: "Infraestructura",
        icon: <FaCloud className="h-5 w-5 mr-2" />,
        skills: [
          { name: "Git / GitHub", icon: <FaGitAlt className="h-5 w-5" /> },
          { name: "Firebase Hosting", icon: <SiFirebase className="h-5 w-5" /> },
        ],
      },
      {
        title: "Embebido/Firmware",
        icon: <FaCloud className="h-5 w-5 mr-2" />,
        skills: [
          { name: "Arduino", icon: <SiArduino className="h-5 w-5" /> },
          { name: "SquareLine Studio", icon: <TbSquareLetterS className="h-5 w-5" />,}
        ]
      },
    ],
  },
  complementary: {
    title: "Herramientas complementarias",
    icon: <FaCog className="h-8 w-8 text-primary" />,
    description: "Tecnologías que manejo a nivel intermedio o uso como soporte.",
    skills: [
      { name: "JWT Auth", icon: <FaKey className="h-5 w-5" /> },
    ],
  },
  learning: {
    title: "Exploración y aprendizaje",
    icon: <FaLeaf className="h-8 w-8 text-primary" />,
    description: "Tecnologías que estoy integrando o explorando actualmente.",
    skills: [
      { name: "Next.js", icon: <SiNextdotjs className="h-5 w-5" /> },
      { name: "Firebase Studio", icon: <SiFirebase className="h-5 w-5" /> },
      { name: "Tailwind CSS", icon: <FaCss3Alt className="h-5 w-5" /> },
      { name: "Markdown", icon: <FaCode className="h-5 w-5" /> },
      { name: "Windows Server", icon: <FaServer className="h-5 w-5" /> },
      { name: "Caddy", icon: <FaServer className="h-5 w-5" /> },
      { name: "Vue 3", icon: <FaVuejs className="h-5 w-5" /> },
      { name: "Vuetify", icon: <SiVuetify className="h-5 w-5" /> },
    ],
  },
};

const SkillCategory = ({
  title,
  skills,
  icon,
}: {
  title: string;
  skills: { name: string; icon: JSX.Element }[];
  icon: JSX.Element;
}) => (
  <div>
    <h4 className="text-lg font-semibold mb-3 flex items-center">
      {icon}
      {title}
    </h4>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <Badge
          key={skill.name}
          variant="secondary"
          className="flex items-center gap-2 py-1 px-3"
        >
          {skill.icon}
          <span>{skill.name}</span>
        </Badge>
      ))}
    </div>
  </div>
);

export function Skills() {
  return (
    <section
      id="habilidades"
      aria-labelledby="habilidades-title"
      className="py-24 sm:py-32 bg-secondary/50 scroll-mt-20"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2
            id="habilidades-title"
            className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl"
          >
            Mi Caja de Herramientas
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Desde el backend hasta la nube, estas son las tecnologías que uso para
            dar vida a las ideas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          {/* Main Skills Card */}
          <Card className="shadow-lg">
            <CardHeader className="flex flex-row items-start gap-4">
              {skillsData.main.icon}
              <div>
                <CardTitle className="text-2xl">
                  {skillsData.main.title}
                </CardTitle>
                <p className="text-muted-foreground mt-1">
                  {skillsData.main.description}
                </p>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {skillsData.main.categories.map((category) => (
                <SkillCategory key={category.title} {...category} />
              ))}
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Complementary Skills Card */}
            <Card className="shadow-lg">
              <CardHeader className="flex flex-row items-start gap-4">
                {skillsData.complementary.icon}
                <div>
                  <h4 className="text-2xl font-semibold leading-none tracking-tight">
                    {skillsData.complementary.title}
                  </h4>
                   <p className="text-muted-foreground mt-1">
                    {skillsData.complementary.description}
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                 <div className="flex flex-wrap gap-2">
                    {skillsData.complementary.skills.map((skill) => (
                      <Badge
                        key={skill.name}
                        variant="secondary"
                        className="flex items-center gap-2 py-1 px-3"
                      >
                        {skill.icon}
                        <span>{skill.name}</span>
                      </Badge>
                    ))}
                  </div>
              </CardContent>
            </Card>

            {/* Learning Skills Card */}
            <Card className="shadow-lg">
              <CardHeader className="flex flex-row items-start gap-4">
                {skillsData.learning.icon}
                <div>
                  <h4 className="text-2xl font-semibold leading-none tracking-tight">
                    {skillsData.learning.title}
                  </h4>
                   <p className="text-muted-foreground mt-1">
                    {skillsData.learning.description}
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                 <div className="flex flex-wrap gap-2">
                    {skillsData.learning.skills.map((skill) => (
                      <Badge
                        key={skill.name}
                        variant="secondary"
                        className="flex items-center gap-2 py-1 px-3"
                      >
                        {skill.icon}
                        <span>{skill.name}</span>
                      </Badge>
                    ))}
                  </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
