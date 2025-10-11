import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Quote } from "lucide-react";

export function AboutSection() {
  return (
    <section id="sobre-mi" className="py-24 sm:py-32 bg-muted/50 dark:bg-muted/10">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About Me
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>My Story</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground flex-grow">
              <p>
                From a young age, I've been fascinated by how things work, which led me to the world of technology. My journey started with simple electronics and has evolved into a deep passion for software development, where I can build impactful solutions from scratch.
              </p>
            </CardContent>
          </Card>
          <Card className="flex flex-col">
             <CardHeader>
              <CardTitle>Professional Background</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground flex-grow">
              <p>
                With a solid foundation in both front-end and back-end technologies, I specialize in creating robust web applications, mobile apps, and IoT systems. I thrive on solving complex problems and continuously learning to stay at the forefront of technology.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="max-w-4xl mx-auto mt-8">
            <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6">
                    <blockquote className="flex items-start gap-4">
                        <Quote className="w-8 h-8 flex-shrink-0" />
                        <div className="flex flex-col">
                            <p className="text-lg italic">"Technology is best when it brings people together."</p>
                            <cite className="text-sm mt-2 opacity-80 not-italic">- Matt Mullenweg, Social-Media Entrepreneur</cite>
                        </div>
                    </blockquote>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
