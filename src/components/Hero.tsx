import { ArrowRight, Flame } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Flame className="w-12 h-12 text-orange-500 animate-pulse" />
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tight">
            MORRELL'S
          </h1>
          <Flame className="w-12 h-12 text-orange-500 animate-pulse" />
        </div>

        <div className="text-3xl md:text-5xl font-bold text-orange-400 mb-4 tracking-wide">
          BBQ
        </div>

        <p className="text-2xl md:text-3xl text-gray-200 font-semibold mb-8 italic">
          True Southern Smoke — Low & Slow Barbecue
        </p>

        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Lilburn's favorite for deep-smoked meats, classic Southern sides, and bold flavor
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('menu')}
            className="group bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 flex items-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            See Menu
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => scrollToSection('location')}
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 border-2 border-white/30 hover:border-white/50 shadow-xl hover:scale-105"
          >
            Visit Us
          </button>

          <button
            onClick={() => scrollToSection('catering')}
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 border-2 border-white/30 hover:border-white/50 shadow-xl hover:scale-105"
          >
            Catering
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
