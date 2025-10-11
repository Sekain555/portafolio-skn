import { Card, CardContent } from "@/components/ui/card";
import { Github } from "lucide-react";
import { PythonIcon } from "@/components/icons/python";
import { FastApiIcon } from "@/components/icons/fastapi";
import { FlaskIcon } from "@/components/icons/flask";
import { AngularIcon } from "@/components/icons/angular";
import { IonicIcon } from "@/components/icons/ionic";
import { VueIcon } from "@/components/icons/vue";
import { FirebaseIcon } from "@/components/icons/firebase";
import { ArduinoIcon } from "@/components/icons/arduino";
import { MySqlIcon } from "@/components/icons/mysql";

const skills = [
  { name: "Python", icon: PythonIcon },
  { name: "FastAPI", icon: FastApiIcon },
  { name: "Flask", icon: FlaskIcon },
  { name: "Angular", icon: AngularIcon },
  { name: "Ionic", icon: IonicIcon },
  { name: "Vue.js", icon: VueIcon },
  { name: "Firebase", icon: FirebaseIcon },
  { name: "Arduino", icon: ArduinoIcon },
  { name: "MySQL", icon: MySqlIcon },
  { name: "GitHub", icon: Github },
];

export function SkillsSection() {
  return (
    <section id="habilidades" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My Tech Stack
        </h2>
        <Card>
          <CardContent className="p-6 md:p-10">
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              {skills.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center gap-2 text-center group">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-muted group-hover:bg-primary/10 transition-colors">
                    <skill.icon className="w-9 h-9 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">{skill.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
