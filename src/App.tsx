import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Location from './components/Location';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import Catering from './components/Catering';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-stone-900">
      <Hero />
      <About />
      <Menu />
      <Location />
      <Reviews />
      <Gallery />
      <Catering />
      <Footer />
    </div>
  );
}

export default App;
