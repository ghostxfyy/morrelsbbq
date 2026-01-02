import { Star, Quote } from 'lucide-react';

interface Review {
  text: string;
  author: string;
  rating: number;
}

const reviews: Review[] = [
  {
    text: "BBQ is off the hook — deep, smokey flavor & huge portions! Best brisket I've had in Georgia.",
    author: "Marcus T.",
    rating: 5
  },
  {
    text: "Friendly family vibe and great takeout! The pulled pork sandwich is unbelievable. We come every weekend.",
    author: "Jennifer L.",
    rating: 5
  },
  {
    text: "A local favorite for true Southern BBQ. The ribs are tender, the sides are incredible, and the sauce is perfection.",
    author: "David R.",
    rating: 5
  },
  {
    text: "Morrell's has become our go-to spot. Everything is smoked to perfection and the portions are generous!",
    author: "Sarah M.",
    rating: 5
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-stone-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">What People Say</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300">Loved by locals and BBQ enthusiasts</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-stone-900 rounded-lg p-8 border-2 border-stone-700 hover:border-orange-500/50 transition-all hover:scale-105 shadow-xl relative"
            >
              <Quote className="absolute top-4 right-4 w-12 h-12 text-orange-500/20" />

              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-orange-500 text-orange-500" />
                ))}
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-6 italic">
                "{review.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {review.author[0]}
                </div>
                <div>
                  <p className="text-white font-bold">{review.author}</p>
                  <p className="text-gray-500 text-sm">Verified Customer</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-orange-900/40 to-stone-900/40 rounded-lg p-8 text-center border-2 border-orange-500/30">
          <h3 className="text-2xl font-bold text-white mb-4">Follow Us on Instagram</h3>
          <p className="text-gray-300 text-lg mb-6">
            See daily specials, behind-the-scenes smoke sessions, and mouth-watering BBQ photos
          </p>
          <a
            href="https://instagram.com/morrellsbbq"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-orange-600 to-orange-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-orange-700 hover:to-orange-800 transition-all shadow-xl hover:scale-105"
          >
            @morrellsbbq
          </a>
        </div>
      </div>
    </section>
  );
}
