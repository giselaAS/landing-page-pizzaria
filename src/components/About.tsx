import { Award, Heart, Pizza, Users } from "lucide-react";

export function About() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1558138838-76294be30005?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMGNoZWZ8ZW58MXx8fHwxNzY4MjU2MTk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Chef preparando pizza"
                className="w-full h-[550px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

              <div className="absolute bottom-8 left-8 bg-white rounded-lg p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Pizza className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-bold text-2xl text-orange-600">20+</p>
                    <p className="text-sm text-gray-600">Anos de Experiência</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">
              Nossa História
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Tradição e Sabor em Cada <span className="text-orange-600">Fatia</span>
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Desde 2005, trazemos a autêntica experiência da culinária italiana para sua mesa. 
              Nosso compromisso é com ingredientes frescos, receitas tradicionais e o sabor 
              incomparável que só uma pizza feita com amor pode proporcionar.
            </p>
            <p className="text-gray-600 text-lg mb-8">
              Cada pizza é preparada artesanalmente em nosso forno a lenha, mantendo viva 
              a tradição italiana e conquistando o coração de milhares de clientes.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="bg-orange-100 p-3 rounded-lg h-fit">
                  <Award className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <p className="font-bold text-2xl">50+</p>
                  <p className="text-gray-600 text-sm">Prêmios Ganhos</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-orange-100 p-3 rounded-lg h-fit">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <p className="font-bold text-2xl">100k+</p>
                  <p className="text-gray-600 text-sm">Clientes Felizes</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-orange-100 p-3 rounded-lg h-fit">
                  <Pizza className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <p className="font-bold text-2xl">500+</p>
                  <p className="text-gray-600 text-sm">Pizzas por Dia</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-orange-100 p-3 rounded-lg h-fit">
                  <Heart className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <p className="font-bold text-2xl">100%</p>
                  <p className="text-gray-600 text-sm">Feito com Amor</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}