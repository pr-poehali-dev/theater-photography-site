
import { Button } from "./ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-theater-light">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Обо мне</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Меня зовут Валерия, я театральный фотограф из Санкт-Петербурга. Говорят, что я хорошо объясняю, что и зачем нужно делать. Если вы никогда не заказывали съёмку портфолио или профессиональную съёмку спектакля, не стесняйтесь обращаться — я помогу вам на каждом этапе.
              </p>
              <p>
                Я закончила государственный институт культуры, заочное отделение кафедры кино- и фотоискусства — за плечами 5 лет учебы в умопомрачительно-красивом историческом здании и опыт, которым я с радостью делюсь.
              </p>
              <p>
                Также я работаю администратором в центре добрососедства театров «Дом» — уютном театральном пространстве на Мончегорской, где проводятся бесплатные спектакли и мастер-классы. А ещё 2,5 года я была билетёром в «БКЗ Октябрьский», где видела десятки известнейших артистов и коллективов.
              </p>
              <p>
                В целом, я человек, у которого слово «культура» осталось написать разве что на лбу, и я люблю относиться к этому с иронией.
              </p>
            </div>
            <div className="mt-8">
              <Button 
                className="bg-theater-accent hover:bg-theater-accent/90"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Связаться со мной
              </Button>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="aspect-ratio-portrait rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80"
                alt="Валерия - театральный фотограф"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-theater-accent rounded-full flex items-center justify-center p-4 shadow-lg">
              <p className="text-white text-center font-medium">5+ лет опыта в фотографии</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
