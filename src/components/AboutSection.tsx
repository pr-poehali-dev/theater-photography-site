
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-theater-dark">Обо мне</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Я — Валерия, театральный фотограф из Санкт-Петербурга. Говорят, что я хорошо объясняю, что и зачем нужно делать. Если вы никогда не заказывали съёмку портфолио или профессиональную съёмку своего спектакля, пишите смело — я закидаю вас вопросами так активно, что вы от них устанете, и вместе мы сделаем всё идеально! 
              </p>
              <p>
                Также я работаю администратором в центре добрососедства театров «Дом» — уютном театральном пространстве на Мончегорской, где проводятся бесплатные спектакли и мастер-классы. 2,5 года я была билетёром в именитом «БКЗ Октябрьский» и на своих рабочих сменах видела десятки известнейших артистов и коллективов нашей страны.
              </p>
              <p>
                Я закончила государственный институт культуры, заочное отделение кафедры кино- и фотоискусства — за спиной 5 лет в умопомрачительно-красивом историческом здании и опыт учёбы, которым я могу поделиться.
              </p>
              <p>
                В целом, я человек, у которого слово «культура» осталось написать разве что на лбу, и я люблю относиться к этому с иронией.
              </p>
            </div>
            <Button 
              className="mt-6 bg-theater-accent hover:bg-theater-accent/90"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Связаться со мной
            </Button>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1607998803461-4e9aef3be418?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Портрет Валерии" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-theater-dark/70 to-transparent"></div>
            </div>
            <div className="absolute -bottom-8 -left-8 p-6 bg-white shadow-lg rounded-lg max-w-[250px]">
              <p className="font-playfair text-lg font-medium text-theater-dark">
                "Я запечатлеваю моменты, которые длятся несколько секунд, но остаются в вечности"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
