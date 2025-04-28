
import { Camera, Users, Film, Tag } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Портретная съёмка актёров",
    description: "Создам выразительные портреты для вашего портфолио, которые подчеркнут вашу индивидуальность и актёрский диапазон.",
    icon: <Users className="h-8 w-8 text-theater-accent" />
  },
  {
    title: "Фотосъёмка спектаклей",
    description: "Запечатлею ключевые моменты и атмосферу вашего спектакля. Фотографии, передающие эмоции и динамику представления.",
    icon: <Film className="h-8 w-8 text-theater-accent" />
  },
  {
    title: "Репортажная съёмка",
    description: "Профессиональная фотосъёмка театральных мероприятий, премьер, фестивалей и закулисной жизни.",
    icon: <Camera className="h-8 w-8 text-theater-accent" />
  },
  {
    title: "Афиши и промо-материалы",
    description: "Создание ярких и запоминающихся визуальных материалов для продвижения ваших спектаклей и мероприятий.",
    icon: <Tag className="h-8 w-8 text-theater-accent" />
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 bg-theater-light/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-theater-dark">
            Мои услуги
          </h2>
          <p className="text-muted-foreground">
            Профессиональная фотосъёмка для театров, актёров и театральных проектов. От портретов до репортажей — я создам для вас уникальные кадры.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-theater-accent/10 hover:border-theater-accent/30 transition duration-300">
              <CardHeader>
                <div className="mb-2">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-playfair text-theater-dark">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
            Если вы никогда не заказывали фотосъёмку для своего портфолио или спектакля — не беспокойтесь! 
            Я проведу вас через весь процесс и отвечу на все вопросы.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center text-theater-accent hover:underline font-medium"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Узнать больше о моих услугах →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
