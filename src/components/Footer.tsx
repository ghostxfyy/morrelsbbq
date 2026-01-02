import { MapPin, Clock, Phone, Mail, Instagram, Facebook, Flame } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Flame className="w-8 h-8 text-orange-500" />
              <h3 className="text-2xl font-black">MORRELL'S BBQ</h3>
            </div>
            <p className="text-gray-400 mb-4">
              True Southern Smoke served with pride in Lilburn, Georgia.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/morrellsbbq"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/morrellsbbq"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-orange-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-orange-400 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('menu')} className="text-gray-400 hover:text-orange-400 transition-colors">
                  Menu
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('location')} className="text-gray-400 hover:text-orange-400 transition-colors">
                  Location
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('catering')} className="text-gray-400 hover:text-orange-400 transition-colors">
                  Catering
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-orange-400">Hours</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Mon-Tue: Closed</li>
              <li>Wed-Sat: 12pm - 8pm</li>
              <li>Sunday: 12pm - 6pm</li>
              <li className="text-orange-400 text-sm pt-2">*Or until sold out</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-orange-400">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                <span className="text-sm">
                  4060 Five Forks Trickum Rd SW<br />
                  Lilburn, GA 30047
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <a href="tel:+17705551234" className="hover:text-orange-400 transition-colors">
                  (770) 555-1234
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <a href="mailto:info@morrellsbbq.com" className="hover:text-orange-400 transition-colors">
                  info@morrellsbbq.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Morrell's BBQ. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-gray-500">
              <button className="hover:text-orange-400 transition-colors">Privacy Policy</button>
              <span>•</span>
              <button className="hover:text-orange-400 transition-colors">Terms of Service</button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-900 to-orange-700 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
            <a
              href="tel:+17705551234"
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-xl"
            >
              Call to Order
            </a>
            <a
              href="https://maps.google.com/?q=4060+Five+Forks+Trickum+Rd+SW+Lilburn+GA+30047"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-8 py-3 rounded-lg font-bold hover:bg-stone-900 transition-colors shadow-xl"
            >
              Get Directions
            </a>
            <button
              onClick={() => scrollToSection('menu')}
              className="bg-stone-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-stone-800 transition-colors shadow-xl"
            >
              See Today's Menu
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
