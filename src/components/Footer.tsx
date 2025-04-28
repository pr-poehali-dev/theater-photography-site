
import { Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-theater-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">Валерия</h3>
            <p className="text-sm text-gray-300 mb-4">
              Театральный фотограф из Санкт-Петербурга. Создаю фотографии, которые передают атмосферу и эмоции спектаклей.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-theater-accent transition">
                <Instagram size={20} />
              </a>
              <a href="mailto:valeria@phototheater.ru" className="text-white hover:text-theater-accent transition">
                <Mail size={20} />
              </a>
              <a href="tel:+79991234567" className="text-white hover:text-theater-accent transition">
                <Phone size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">Услуги</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-theater-accent transition">Портретная съёмка актёров</a></li>
              <li><a href="#services" className="hover:text-theater-accent transition">Фотосъёмка спектаклей</a></li>
              <li><a href="#services" className="hover:text-theater-accent transition">Репортажная съёмка</a></li>
              <li><a href="#services" className="hover:text-theater-accent transition">Афиши и промо-материалы</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">Контакты</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="mr-2">📍</span>
                Санкт-Петербург
              </li>
              <li className="flex items-center">
                <span className="mr-2">📧</span>
                valeria@phototheater.ru
              </li>
              <li className="flex items-center">
                <span className="mr-2">📱</span>
                +7 (999) 123-45-67
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>© {currentYear} Валерия — Театральный фотограф. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
