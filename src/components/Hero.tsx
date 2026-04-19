import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Hero() {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold">
                Professional Nutrition Consulting
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Transform Your
              <span className="text-emerald-600"> Health </span>
              Journey
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Personalized nutrition plans designed by certified experts to help you achieve your wellness goals and maintain a healthier lifestyle.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                <span className="text-gray-700">Certified Nutritionists with 8+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                <span className="text-gray-700">Customized Meal Plans & Build Nutrition Strategies</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                <span className="text-gray-700">Ongoing Support & Progress Tracking</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={scrollToBooking}
                className="group bg-emerald-600 text-white px-8 py-4 rounded-xl hover:bg-emerald-700 transition-all transform hover:scale-105 font-semibold shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-emerald-600 px-8 py-4 rounded-xl hover:bg-gray-50 transition-all font-semibold border-2 border-emerald-600"
              >
                Explore Services
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-6">
              <div>
                <div className="text-4xl font-bold text-gray-900">1000+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div>
                <div className="text-4xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div>
                <div className="text-4xl font-bold text-gray-900">8+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="relative lg:h-[600px] h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-3xl transform rotate-3 opacity-20"></div>
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Healthy nutrition lifestyle"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <CheckCircle className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Personalized Plans</div>
                  <div className="text-sm text-gray-600">Tailored to your goals</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
