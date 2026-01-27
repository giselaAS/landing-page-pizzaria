import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Flame, Leaf } from "lucide-react";

const pizzas = [
  { 
    id: 1,
    name: "Margherita", 
    price: "R$ 45,00",
    description: "Molho de tomate, mussarela, manjericão fresco e azeite de oliva.",
    tags: ['Vegetariano', 'Clássica'],
    icon: <Leaf className="w-4 h-4" />,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJnaGVyaXRhJTIwcGl6emF8ZW58MXx8fHwxNzY4MjM2ODYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',

  },
  { 
    id: 2,
    name: "Pepperoni", 
    price: "R$ 50,00",
    description: "Molho de tomate, mussarela, pepperoni e azeite de oliva.",
    tags: ['Picante', 'Clássica'],
    icon: <Flame className="w-4 h-4" />,
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXBwZXJvbmklMjBwaXp6YXxlbnwxfHx8fDE3NjgyMjQ4NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',

  },
  { 
    id: 3,
    name: "Calabresa Especial",
    price: "R$ 48,00",
    description: "Molho de tomate, mussarela, calabresa fatiada, cebola e azeitonas.",
    tags: ['Clássica'],
    icon: <Flame className="w-4 h-4" />,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format',

  },
  { 
    id: 4,
    name: "Quatro Queijos", 
    price: "R$ 55,00",
    description: "Molho de tomate, mussarela, gorgonzola, parmesão e catupiry.",
    tags: ['Vegetariano', 'Clássica'],
    icon: <Leaf className="w-4 h-4" />,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format',

  },
  { 
    id: 5,
    name: 'Frango com Catupiry',
    description: 'Frango desfiado, catupiry original, milho e azeitonas',
    price: 'R$ 49,00',
    image: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800&auto=format',
    tags: ['Popular', 'Brasileira'],
    icon: <Flame className="w-4 h-4" />,
  },
  {
    id: 6,
    name: 'Veggie Suprema',
    description: 'Tomate, cogumelos, pimentão, cebola, azeitonas e rúcula',
    price: 'R$ 46,00',
    image: 'https://images.unsplash.com/photo-1511689660979-10d2b1aada49?w=800&auto=format',
    tags: ['Vegetariano', 'Light'],
    icon: <Leaf className="w-4 h-4" />,
  },
];

export function Menu() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-orange-50" id="menu">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-orange-100 text-orange-700 mb-4">Nosso Cardápio</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Pizzas <span className="text-orange-600">Irresistíveis</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Feitas com ingredientes frescos e receitas tradicionais italianas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pizzas.map((pizza) => (
            <Card key={pizza.id} 
            className="p-0 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">

              <div className="relative overflow-hidden">
                <img
                  src={pizza.image}
                  alt={pizza.name}
                  className="w-full h-65 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold">{pizza.name}</h3>
                  <span className="text-orange-600 font-bold text-xl">{pizza.price}</span>
                </div>

                <p className="text-gray-600 mb-4 text-sm">{pizza.description}</p>

                <div className="flex gap-2 flex-wrap">
                  {pizza.tags.map((tag, index) => (
                    <Badge 
                      key={index}
                      variant="outline" 
                      className="text-xs border-orange-300 text-orange-700"
                    >
                      {pizza.icon}
                      <span className="ml-1">{tag}</span>
                    </Badge>
                  ))}
                </div>

              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
            Ver Cardápio Completo
          </Button>
        </div>
        
      </div>
    </section>
  );
}