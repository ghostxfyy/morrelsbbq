const galleryImages = [
  {
    url: 'https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Smoked ribs fresh off the pit'
  },
  {
    url: 'https://images.pexels.com/photos/2491273/pexels-photo-2491273.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'BBQ platter with sides'
  },
  {
    url: 'https://images.pexels.com/photos/5779234/pexels-photo-5779234.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Pulled pork sandwich'
  },
  {
    url: 'https://images.pexels.com/photos/7218637/pexels-photo-7218637.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'BBQ in action'
  },
  {
    url: 'https://images.pexels.com/photos/5409020/pexels-photo-5409020.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Grilled meats and flames'
  },
  {
    url: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Brisket slices'
  },
  {
    url: 'https://images.pexels.com/photos/8753657/pexels-photo-8753657.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'BBQ sides selection'
  },
  {
    url: 'https://images.pexels.com/photos/5908226/pexels-photo-5908226.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Meat on the grill'
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-stone-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">Gallery</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300">A glimpse of our smoky craft</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-lg shadow-xl border-2 border-stone-700 hover:border-orange-500 transition-all group cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-lg mb-6">
            Want to see more? Follow us on social media for daily updates!
          </p>
          <a
            href="https://instagram.com/morrellsbbq"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-stone-800 text-white px-8 py-4 rounded-lg font-bold hover:bg-stone-700 transition-colors border-2 border-orange-500/50 hover:border-orange-500"
          >
            View More on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
