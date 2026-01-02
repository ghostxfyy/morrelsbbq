import { MapPin, Clock, Phone, Navigation } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="py-20 bg-stone-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">Visit Us</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-stone-800 rounded-lg p-8 border-2 border-stone-700 hover:border-orange-500/50 transition-colors">
              <div className="flex items-start gap-4">
                <MapPin className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Location</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    4060 Five Forks Trickum Rd SW<br />
                    Lilburn, GA 30047
                  </p>
                  <a
                    href="https://maps.google.com/?q=4060+Five+Forks+Trickum+Rd+SW+Lilburn+GA+30047"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-orange-400 hover:text-orange-300 font-semibold transition-colors"
                  >
                    <Navigation className="w-5 h-5" />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-stone-800 rounded-lg p-8 border-2 border-stone-700 hover:border-orange-500/50 transition-colors">
              <div className="flex items-start gap-4">
                <Clock className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Hours</h3>
                  <div className="space-y-2 text-lg">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Monday - Tuesday</span>
                      <span className="text-gray-500 font-semibold">CLOSED</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Wednesday - Saturday</span>
                      <span className="text-white font-semibold">12:00 PM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Sunday</span>
                      <span className="text-white font-semibold">12:00 PM - 6:00 PM</span>
                    </div>
                  </div>
                  <p className="text-orange-400 font-bold mt-4 text-sm">
                    * Or until sold out — come early for best selection!
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-lg p-8 shadow-xl">
              <div className="flex items-start gap-4">
                <Phone className="w-8 h-8 text-white flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Contact</h3>
                  <p className="text-white/90 text-lg mb-4">
                    Call ahead for large orders or catering inquiries
                  </p>
                  <a
                    href="tel:+17705551234"
                    className="inline-block bg-white text-orange-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                  >
                    (770) 555-1234
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-8 h-fit">
            <div className="rounded-lg overflow-hidden shadow-2xl border-4 border-stone-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.4!2d-84.1!3d33.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDU0JzAwLjAiTiA4NMKwMDYnMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="600"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[50%] hover:grayscale-0 transition-all duration-300"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
