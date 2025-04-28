
import { Camera, Theater, FileImage, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const services = [
  {
    title: "Портретная съёмка актёров",
    description: "Профессиональные портреты для вашего портфолио. Помогу с позированием и расскажу, как выгоднее себя подать.",
    icon: <Camera className="h-12 w-12 text-theater-accent" />,
  },
  {
    title: "Фотосъёмка спектаклей",
    description: "Запечатлю ключевые моменты вашего спектакля, сохраняя эмоции и атмосферу представления.",
    icon: <Theater className="h-12 w-12 text-theater-accent" />,
  },
  {
    title: "Афиши и промо-материалы",
    description: "Создам яркие и привлекательные визуальные материалы для продвижения вашего спектакля.",
    icon: <FileImage className="h-12 w-12 text-theater-accent" />,
  },
  {
    title: "Творческие мастер-классы",
    description: "Поделюсь опытом театральной фотографии в формате мастер-классов для начинающих фотографов и актёров.",
    icon: <Users className="h-12 w-12 text-theater-accent" />,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Мои услуги</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Я предлагаю полный спектр услуг театральной фотографии — от индивидуальных портретов до полноценной съёмки спектаклей. 
            Если вы никогда не заказывали профессиональную съёмку, не беспокойтесь — я проведу вас через весь процесс.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-xl transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4">
                {service.icon}
                <div>
                  <CardTitle className="font-playfair">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-700">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-theater-light rounded-lg">
          <p className="text-center text-gray-700">
            <span className="font-semibold">Если вы — актёр или режиссёр, и вам нужна съёмка</span>, пишите мне — 
            обо всём договоримся, всё организую, все будут довольны! Я помогу с подготовкой к съёмке и отвечу на все ваши вопросы.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
