
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Сообщение отправлено!",
      description: "Я свяжусь с вами в ближайшее время.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 bg-theater-light/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-8 text-theater-dark">Связаться со мной</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-theater-dark">Давайте обсудим ваш проект</h3>
              <p className="mb-6 text-muted-foreground">
                Если вы — актёр или режиссёр, и вам нужна съёмка, пишите мне — обо всём договоримся, всё организую, все будут довольны!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="mr-3 text-theater-accent">📍</span>
                  <span>Санкт-Петербург</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3 text-theater-accent">📧</span>
                  <span>valeria@phototheater.ru</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3 text-theater-accent">📱</span>
                  <span>+7 (999) 123-45-67</span>
                </div>
              </div>
            </div>
            
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input 
                    placeholder="Ваше имя" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-theater-accent/30 focus:border-theater-accent"
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-theater-accent/30 focus:border-theater-accent"
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Ваше сообщение..." 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="border-theater-accent/30 focus:border-theater-accent min-h-[150px]"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-theater-accent hover:bg-theater-accent/90"
                >
                  Отправить сообщение
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
