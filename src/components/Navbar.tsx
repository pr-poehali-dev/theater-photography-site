
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background/80 backdrop-blur-sm fixed w-full z-10 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="font-playfair text-2xl font-bold text-primary">Валерия</span>
            <span className="ml-2 text-sm text-muted-foreground">театральный фотограф</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#home" className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium">
              Главная
            </a>
            <a href="#about" className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium">
              Обо мне
            </a>
            <a href="#services" className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium">
              Услуги
            </a>
            <a href="#portfolio" className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium">
              Портфолио
            </a>
            <a href="#blog" className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium">
              Блог
            </a>
            <a href="#contact" className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium">
              Контакты
            </a>
            <Button variant="default" size="sm">
              Заказать съёмку
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-primary hover:bg-accent"
            >
              <span className="sr-only">{isOpen ? 'Закрыть меню' : 'Открыть меню'}</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b animate-fade-in">
            <a href="#home" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary">
              Главная
            </a>
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary">
              Обо мне
            </a>
            <a href="#services" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary">
              Услуги
            </a>
            <a href="#portfolio" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary">
              Портфолио
            </a>
            <a href="#blog" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary">
              Блог
            </a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary">
              Контакты
            </a>
            <Button variant="default" className="w-full mt-2">
              Заказать съёмку
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
