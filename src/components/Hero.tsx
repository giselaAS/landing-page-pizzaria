import Image from "next/image";
import { Button } from "./ui/button";
import { ChefHat, Clock, MapPin } from "lucide-react";


export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
                <Image 
                    src="/background-hero.jpg" 
                    alt="background" 
                    fill
                    className="object-cover" 
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center text-white">
                <div className="inline-flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-full mb-6 animate-bounce">
                    <ChefHat className="w-5 h-5" />
                    <span className="text-sm font-semibold">
                        Autêntica Pizza Italiana
                    </span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    A Melhor Pizza
                    <br />
                    <span className="text-orange-500">da Cidade</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto">
                    Receitas tradicionais, ingredientes frescos e muito
                    amor em cada fatia
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <Button
                        asChild
                        size="lg"
                        className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg"
                    >
                        <a href="#menu">
                            Ver Cardápio
                        </a>
                    </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                        <Clock className="w-8 h-8 text-orange-500 mb-3 mx-auto" />
                        <h3 className="font-semibold mb-2">
                        Entrega Rápida
                        </h3>
                        <p className="text-gray-300 text-sm">
                        30 minutos ou menos, garantido!
                        </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                        <ChefHat className="w-8 h-8 text-orange-500 mb-3 mx-auto" />
                        <h3 className="font-semibold mb-2">
                        Chefs Experientes
                        </h3>
                        <p className="text-gray-300 text-sm">
                        20 anos de tradição
                        </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                        <MapPin className="w-8 h-8 text-orange-500 mb-3 mx-auto" />
                        <h3 className="font-semibold mb-2">
                        Várias Localizações
                        </h3>
                        <p className="text-gray-300 text-sm">
                        Sempre perto de você
                        </p>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                <div className="w-1.5 h-3 bg-white rounded-full mt-2 animate-bounce" />
                </div>
            </div>
        </section>
    );
}