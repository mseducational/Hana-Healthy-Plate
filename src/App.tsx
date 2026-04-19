import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import BMICalculator from './components/BMICalculator';
import BookingForm from './components/BookingForm';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <BMICalculator />
        <BookingForm />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
