import { DollarSign } from 'lucide-react';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
}

const menuSections = [
  {
    title: 'Smoked Meats',
    items: [
      {
        name: 'Beef Brisket',
        description: 'Slow-smoked for 14+ hours with our signature rub. Tender, juicy, and full of smoky flavor.',
        price: '$16-24',
        image: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        name: 'St. Louis Ribs',
        description: 'Fall-off-the-bone tender ribs glazed with our house BBQ sauce.',
        price: '$18-26',
        image: 'https://images.pexels.com/photos/6210749/pexels-photo-6210749.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        name: 'Pulled Pork',
        description: 'Hickory-smoked pork shoulder pulled to perfection. Served with pickles and onions.',
        price: '$14-22',
        image: 'https://images.pexels.com/photos/4518842/pexels-photo-4518842.jpeg?auto=compress&cs=tinysrgb&w=400'
      }
    ]
  },
  {
    title: 'Sandwiches & Combos',
    items: [
      {
        name: 'Brisket Sandwich',
        description: 'Sliced brisket piled high on a toasted bun with coleslaw and pickles.',
        price: '$12',
        image: 'https://images.pexels.com/photos/15832879/pexels-photo-15832879.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        name: 'BBQ Combo Plate',
        description: 'Choose 2 meats, 2 sides, and cornbread. Perfect for the hungry.',
        price: '$22',
        image: 'https://images.pexels.com/photos/5710192/pexels-photo-5710192.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        name: 'Pulled Pork Sandwich',
        description: 'Tender pulled pork with tangy sauce on a soft bun.',
        price: '$10',
        image: 'https://images.pexels.com/photos/5638730/pexels-photo-5638730.jpeg?auto=compress&cs=tinysrgb&w=400'
      }
    ]
  }
];

const sides = [
  'Baked Beans',
  'Mac n\' Cheese',
  'Potato Salad',
  'Collard Greens',
  'Coleslaw',
  'Cornbread'
];

export default function Menu() {
  return (
    <section id="menu" className="py-20 bg-stone-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">Menu Highlights</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Every dish smoked low and slow to bring out bold, authentic Southern flavors
          </p>
        </div>

        {menuSections.map((section) => (
          <div key={section.title} className="mb-16">
            <h3 className="text-4xl font-bold text-orange-400 mb-8 text-center">{section.title}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.items.map((item) => (
                <div
                  key={item.name}
                  className="bg-stone-900 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow border-2 border-stone-700 hover:border-orange-500/50"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-2xl font-bold text-white">{item.name}</h4>
                      <span className="text-orange-400 font-bold text-xl flex items-center gap-1">
                        <DollarSign className="w-5 h-5" />
                        {item.price.replace('$', '')}
                      </span>
                    </div>
                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-16 bg-gradient-to-r from-orange-900/30 to-stone-900/30 rounded-lg p-8 border-2 border-orange-500/30">
          <h3 className="text-3xl font-bold text-white mb-6 text-center">Classic Southern Sides</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {sides.map((side) => (
              <div key={side} className="bg-stone-800 rounded-lg p-4 text-center border border-stone-700 hover:border-orange-500 transition-colors">
                <p className="text-white font-semibold">{side}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 mt-6 text-lg">
            Choose 1-2 sides with any meat plate • Add extra sides for $3 each
          </p>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-orange-600 rounded-lg p-6 shadow-xl">
            <p className="text-white text-lg font-bold">
              Signature house sauces available: Mild, Hot, Carolina Gold, and Texas-Style
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
