
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

const blogPosts = [
  {
    id: 1,
    title: "Тонкости театральной фотографии",
    description: "Освещение, ракурсы и другие секреты съёмки спектаклей",
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    date: "24 апреля 2025"
  },
  {
    id: 2,
    title: "Закулисье театральной жизни",
    description: "Интересные истории и наблюдения из моего опыта работы с театрами",
    image: "https://images.unsplash.com/photo-1580809361436-42a7ec5c8d7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    date: "16 апреля 2025"
  },
  {
    id: 3,
    title: "Творческое образование: за и против",
    description: "О плюсах и минусах обучения в институте культуры",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    date: "4 апреля 2025"
  }
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Мой блог</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            В моем блоге вы узнаете о театральной фотографии, закулисье спектаклей, организации творческих мероприятий, 
            ярких премьерах и тонкостях работы фотографом.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <Card key={post.id} className="overflow-hidden transition-all hover:shadow-lg">
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-playfair">{post.title}</CardTitle>
                <CardDescription>{post.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{post.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-theater-accent hover:text-theater-accent/90 p-0 flex items-center gap-2">
                  Читать далее <ArrowRight size={16} />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="border-theater-accent text-theater-accent hover:bg-theater-accent/10">
            Все записи блога
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
