import { Heart, Users, Flame } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-stone-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">About Us</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.pexels.com/photos/5175540/pexels-photo-5175540.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="BBQ Smoker"
              className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
            />
          </div>

          <div className="space-y-6">
            <p className="text-xl text-gray-300 leading-relaxed">
              Morrell's BBQ is a <span className="text-orange-400 font-bold">local Lilburn favorite</span> serving up deep-smoked meats, classic Southern sides, and big portions with bold flavor.
            </p>

            <p className="text-xl text-gray-300 leading-relaxed">
              We smoke our meats slowly, celebrate soulful BBQ traditions, and welcome everyone like family. Every plate tells a story of patience, passion, and authentic Southern cooking.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 pt-8">
              <div className="text-center p-6 bg-stone-800 rounded-lg border-2 border-orange-500/30 hover:border-orange-500 transition-colors">
                <Flame className="w-12 h-12 text-orange-500 mx-auto mb-3" />
                <h3 className="text-white font-bold text-lg mb-2">Low & Slow</h3>
                <p className="text-gray-400 text-sm">Hours of smoking perfection</p>
              </div>

              <div className="text-center p-6 bg-stone-800 rounded-lg border-2 border-orange-500/30 hover:border-orange-500 transition-colors">
                <Users className="w-12 h-12 text-orange-500 mx-auto mb-3" />
                <h3 className="text-white font-bold text-lg mb-2">Community</h3>
                <p className="text-gray-400 text-sm">Locals and families welcome</p>
              </div>

              <div className="text-center p-6 bg-stone-800 rounded-lg border-2 border-orange-500/30 hover:border-orange-500 transition-colors">
                <Heart className="w-12 h-12 text-orange-500 mx-auto mb-3" />
                <h3 className="text-white font-bold text-lg mb-2">Made Fresh</h3>
                <p className="text-gray-400 text-sm">Daily smoked meats</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
