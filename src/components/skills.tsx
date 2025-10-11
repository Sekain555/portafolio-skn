import {
  BrainCircuit,
  Cog,
  Leaf,
  Server,
  Monitor,
  Database,
  GitBranch,
  Cloud,
  Code,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  PythonIcon,
  FastApiIcon,
  FlaskIcon,
  MySqlIcon,
  FirebaseIcon,
  AngularIcon,
  IonicIcon,
  VueIcon,
  VuetifyIcon,
  ArduinoIcon,
  TailwindIcon,
  JwtIcon,
  CaddyIcon,
  NextjsIcon,
  FigmaIcon,
  GitIcon,
} from "./icons";

const skillsData = {
  main: {
    title: "Habilidades principales",
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    description: "Tecnologías que domino y uso activamente en proyectos reales.",
    categories: [
      {
        title: "Backend",
        icon: <Server className="h-5 w-5 mr-2" />,
        skills: [
          { name: "Python", icon: <PythonIcon className="h-5 w-5" /> },
          { name: "FastAPI", icon: <FastApiIcon className="h-5 w-5" /> },
          { name: "Flask", icon: <FlaskIcon className="h-5 w-5" /> },
          { name: "MySQL/MariaDB", icon: <MySqlIcon className="h-5 w-5" /> },
          { name: "Firebase", icon: <FirebaseIcon className="h-5 w-5" /> },
        ],
      },
      {
        title: "Frontend",
        icon: <Monitor className="h-5 w-5 mr-2" />,
        skills: [
          { name: "Angular", icon: <AngularIcon className="h-5 w-5" /> },
          { name: "Ionic", icon: <IonicIcon className="h-5 w-5" /> },
          { name: "Vue 3", icon: <VueIcon className="h-5 w-5" /> },
          { name: "Vuetify", icon: <VuetifyIcon className="h-5 w-5" /> },
        ],
      },
      {
        title: "Infraestructura",
        icon: <Cloud className="h-5 w-5 mr-2" />,
        skills: [
          { name: "Git / GitHub", icon: <GitIcon className="h-5 w-5" /> },
          { name: "Windows Server", icon: <Server className="h-5 w-5" /> },
          { name: "Firebase Hosting", icon: <FirebaseIcon className="h-5 w-5" /> },
        ],
      },
    ],
  },
  complementary: {
    title: "Herramientas complementarias",
    icon: <Cog className="h-8 w-8 text-primary" />,
    description: "Tecnologías que manejo a nivel intermedio o uso como soporte.",
    skills: [
      { name: "Caddy", icon: <CaddyIcon className="h-5 w-5" /> },
      { name: "JWT Auth", icon: <JwtIcon className="h-5 w-5" /> },
      { name: "SquareLine Studio", icon: <Code className="h-5 w-5" /> },
      { name: "Arduino IDE", icon: <ArduinoIcon className="h-5 w-5" /> },
      { name: "Tailwind CSS", icon: <TailwindIcon className="h-5 w-5" /> },
      { name: "Markdown", icon: <Code className="h-5 w-5" /> },
    ],
  },
  learning: {
    title: "Exploración y aprendizaje",
    icon: <Leaf className="h-8 w-8 text-primary" />,
    description: "Tecnologías que estoy integrando o explorando actualmente.",
    skills: [
      { name: "Next.js", icon: <NextjsIcon className="h-5 w-5" /> },
      { name: "Firebase Studio", icon: <FirebaseIcon className="h-5 w-5" /> },
      { name: "Figma", icon: <FigmaIcon className="h-5 w-5" /> },
      { name: "Integraciones IoT", icon: <GitBranch className="h-5 w-5" /> },
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
      className="py-24 sm:py-32 bg-secondary/50"
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
                  <CardTitle className="text-2xl">
                    {skillsData.complementary.title}
                  </CardTitle>
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
                  <CardTitle className="text-2xl">
                    {skillsData.learning.title}
                  </CardTitle>
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
