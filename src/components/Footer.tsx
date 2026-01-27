import { Button } from "./ui/button";
import { Clock, Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="bg-gradient-to-r from-orange-600 to-red-600 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Venha nos Visitar!
          </h2>
          <p className="text-xl text-orange-50">
            Conheça nossas unidades e prove a melhor pizza da cidade
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-orange-500">Pizzaria</h3>
              <p className="text-gray-400 mb-4">
                A melhor pizza da cidade desde 2005. Tradição, qualidade e sabor em cada fatia.
              </p>
              <div className="flex gap-3">
                <Button 
                  size="icon" 
                  variant="outline" 
                  className="border-gray-700 bg-orange-600 border-orange-600"
                >
                  <Facebook className="w-5 h-5" />
                </Button>

                <Button 
                  size="icon" 
                  variant="outline" 
                  className="border-gray-700 bg-orange-600 border-orange-600"
                >
                  <Instagram className="w-5 h-5" />
                </Button>

                <Button 
                  size="icon" 
                  variant="outline" 
                  className="border-gray-700 bg-orange-600 border-orange-600"
                >
                  <Twitter className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#menu" className="text-gray-400 hover:text-orange-500 transition-colors">
                    Cardápio
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-orange-500 transition-colors">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                    Promoções
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                    Trabalhe Conosco
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Contatos</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-400">
                  <Phone className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <p>(11) 1234-5678</p>
                    <p>(11) 98765-4321</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <Mail className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                  <p>contato@pizzaria.com.br</p>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <MapPin className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                  <p>Rua das Pizzas, 123<br />São Paulo, SP</p>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Horário de Funcionamento</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-gray-400">
                  <Clock className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Segunda a Quinta</p>
                    <p>18h - 23h</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-gray-400">
                  <Clock className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Sexta a Domingo</p>
                    <p>18h - 00h</p>
                  </div>
                </div>
              </div>
            </div>

        </div>
      </div>
    </footer>
  );
}