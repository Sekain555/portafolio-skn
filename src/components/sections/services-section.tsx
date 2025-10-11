import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Smartphone,
  ServerCog,
  CodeXml,
  UsersRound,
  Wrench,
  Lightbulb,
} from "lucide-react";

const services = [
  {
    title: "Web/Mobile Development",
    icon: Smartphone,
    description: "Creating responsive and performant web and mobile applications.",
  },
  {
    title: "IoT Solutions",
    icon: ServerCog,
    description: "Developing connected devices and systems for the Internet of Things.",
  },
  {
    title: "API Development",
    icon: CodeXml,
    description: "Building robust and scalable APIs for seamless service integration.",
  },
  {
    title: "Tech Consulting",
    icon: Lightbulb,
    description: "Providing expert advice to help you choose the right technology and architecture.",
  },
  {
    title: "Ongoing Support",
    icon: Wrench,
    description: "Offering maintenance and support to keep your applications running smoothly.",
  },
   {
    title: "Team Collaboration",
    icon: UsersRound,
    description: "Working with your team to deliver high-quality software projects.",
  },
];

export function ServicesSection() {
  return (
    <section id="servicios" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Services I Offer
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                  <service.icon className="w-8 h-8" />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
