
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Примеры работ - в реальном проекте это должны быть реальные фотографии
const portfolioItems = {
  theater: [
    {
      id: 1,
      title: "«Человек в футляре»",
      category: "Драматический театр",
      imageUrl: "https://cdn.poehali.dev/files/05d6891d-6160-45bb-b4f8-0cfe7a3d0c40.jpg",
      description: "Спектакль по произведению А.П. Чехова, Малый театр"
    },
    {
      id: 2,
      title: "«Вишнёвый сад»",
      category: "Классическая постановка",
      imageUrl: "https://images.unsplash.com/photo-1602218664339-af9d2a12ead5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Современная интерпретация классической пьесы"
    },
    {
      id: 3,
      title: "«Гамлет»",
      category: "Современная драма",
      imageUrl: "https://images.unsplash.com/photo-1598387181032-a3103a2db5b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Авангардная постановка классической трагедии Шекспира"
    }
  ],
  portraits: [
    {
      id: 4,
      title: "Портфолио Анны М.",
      category: "Актёрский портрет",
      imageUrl: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Фотосессия для театральной актрисы"
    },
    {
      id: 5,
      title: "Образ для спектакля",
      category: "Характерный портрет",
      imageUrl: "https://images.unsplash.com/photo-1605038593290-d3fd980ad607?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Портрет актёра в образе для рекламы спектакля"
    },
    {
      id: 6,
      title: "Театральные маски",
      category: "Концептуальный портрет",
      imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Серия портретов для молодёжного театра"
    }
  ],
  backstage: [
    {
      id: 7,
      title: "За кулисами премьеры",
      category: "Репортаж",
      imageUrl: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Закулисная жизнь театра во время премьеры"
    },
    {
      id: 8,
      title: "Подготовка к спектаклю",
      category: "Документальная съёмка",
      imageUrl: "https://images.unsplash.com/photo-1621784563330-caee0b138a00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Моменты подготовки актёров перед выходом на сцену"
    },
    {
      id: 9,
      title: "Мастерские театра",
      category: "Репортаж",
      imageUrl: "https://images.unsplash.com/photo-1601643157091-ce5c665179ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Репортаж из мастерских по созданию декораций"
    }
  ]
};

const PortfolioSection = () => {
  const [selectedTab, setSelectedTab] = useState("theater");
  const [selectedImage, setSelectedImage] = useState<(typeof portfolioItems.theater)[0] | null>(null);
  
  return (
    <section id="portfolio" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-theater-dark">
            Моё портфолио
          </h2>
          <p className="text-muted-foreground">
            Подборка моих работ в сфере театральной фотографии. Каждая фотография — это история, 
            запечатлённая в моменте.
          </p>
        </div>
        
        <Tabs defaultValue="theater" value={selectedTab} onValueChange={setSelectedTab} className="w-full max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="theater" className="text-sm md:text-base">Спектакли</TabsTrigger>
              <TabsTrigger value="portraits" className="text-sm md:text-base">Портреты</TabsTrigger>
              <TabsTrigger value="backstage" className="text-sm md:text-base">Закулисье</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="theater" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioItems.theater.map((item) => (
                <div 
                  key={item.id} 
                  className="group relative h-64 rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                >
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white font-medium text-lg">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="portraits" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioItems.portraits.map((item) => (
                <div 
                  key={item.id} 
                  className="group relative h-64 rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                >
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white font-medium text-lg">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="backstage" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioItems.backstage.map((item) => (
                <div 
                  key={item.id} 
                  className="group relative h-64 rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                >
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white font-medium text-lg">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-8 text-center">
          <Button 
            className="bg-theater-accent hover:bg-theater-accent/90"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Заказать фотосессию
          </Button>
        </div>
      </div>
      
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        {selectedImage && (
          <DialogContent className="sm:max-w-3xl">
            <DialogHeader>
              <DialogTitle>{selectedImage.title}</DialogTitle>
              <DialogDescription>{selectedImage.description}</DialogDescription>
            </DialogHeader>
            <div className="mt-2 h-[50vh] rounded-lg overflow-hidden">
              <img 
                src={selectedImage.imageUrl} 
                alt={selectedImage.title} 
                className="w-full h-full object-contain"
              />
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default PortfolioSection;
