import { Users, Calendar, Mail, Phone } from 'lucide-react';

export default function Catering() {
  return (
    <section id="catering" className="py-20 bg-stone-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">Catering & Events</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
            Let Morrell's BBQ bring bold Southern flavor to your next event
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.pexels.com/photos/2544829/pexels-photo-2544829.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="BBQ Catering Setup"
              className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
            />
          </div>

          <div className="space-y-8">
            <div className="bg-stone-900 rounded-lg p-8 border-2 border-stone-700">
              <h3 className="text-3xl font-bold text-white mb-6">Perfect For</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Corporate Events',
                  'Family Reunions',
                  'Weddings',
                  'Birthday Parties',
                  'Church Gatherings',
                  'Sports Events',
                  'Tailgates',
                  'Block Parties'
                ].map((event) => (
                  <div key={event} className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="font-medium">{event}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-900/40 to-stone-900/40 rounded-lg p-8 border-2 border-orange-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">What We Offer</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <span>Full-service catering for groups of 10-200+</span>
                </li>
                <li className="flex items-start gap-3">
                  <Calendar className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <span>Flexible scheduling and menu customization</span>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <span>Professional setup and cleanup options available</span>
                </li>
              </ul>
            </div>

            <div className="bg-stone-900 rounded-lg p-8 border-2 border-orange-500">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Get a Quote</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-stone-800 text-white border-2 border-stone-700 focus:border-orange-500 focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-stone-800 text-white border-2 border-stone-700 focus:border-orange-500 focus:outline-none transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-lg bg-stone-800 text-white border-2 border-stone-700 focus:border-orange-500 focus:outline-none transition-colors"
                />
                <input
                  type="text"
                  placeholder="Event Date"
                  className="w-full px-4 py-3 rounded-lg bg-stone-800 text-white border-2 border-stone-700 focus:border-orange-500 focus:outline-none transition-colors"
                />
                <input
                  type="number"
                  placeholder="Number of Guests"
                  className="w-full px-4 py-3 rounded-lg bg-stone-800 text-white border-2 border-stone-700 focus:border-orange-500 focus:outline-none transition-colors"
                />
                <textarea
                  placeholder="Tell us about your event..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-stone-800 text-white border-2 border-stone-700 focus:border-orange-500 focus:outline-none transition-colors resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-orange-700 hover:to-orange-800 transition-all shadow-xl hover:scale-105"
                >
                  Request Catering Info
                </button>
              </form>

              <div className="mt-6 pt-6 border-t-2 border-stone-700 flex items-center justify-center gap-6 text-gray-400">
                <a href="tel:+17705551234" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
                  <Phone className="w-5 h-5" />
                  (770) 555-1234
                </a>
                <a href="mailto:catering@morrellsbbq.com" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
