
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:py-32 bg-gradient-to-b from-theater-dark to-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 z-0">
        <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/files/05d6891d-6160-45bb-b4f8-0cfe7a3d0c40.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-theater-dark/60"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6 leading-tight">
            Театральная фотография с душой и характером
          </h1>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Привет! Меня зовут Валерия, и я — фотограф театров и актёров из Санкт-Петербурга. 
            Я запечатлею магию вашего спектакля и создам портфолио, которое выделит вас среди других.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-theater-accent hover:bg-theater-accent/90 text-white"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Заказать съёмку
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Смотреть портфолио
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
