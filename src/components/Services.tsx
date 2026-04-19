import { Heart, Users, TrendingUp, Apple, Activity, Shield } from 'lucide-react';

const services = [
  {
    icon: Heart,
    title: 'Weight Management',
    description: 'Sustainable weight loss or gain programs tailored to your metabolism and lifestyle.',
    color: 'bg-rose-100 text-rose-600',
  },
  {
    icon: Users,
    title: 'Family Nutrition',
    description: 'Comprehensive nutrition plans for the whole family, promoting healthy eating habits.',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: TrendingUp,
    title: 'Sports Nutrition',
    description: 'Optimize performance with specialized nutrition strategies for athletes.',
    color: 'bg-emerald-100 text-emerald-600',
  },
  {
    icon: Apple,
    title: 'Meal Planning',
    description: 'Custom meal plans with recipes designed for your dietary needs and preferences.',
    color: 'bg-amber-100 text-amber-600',
  },
  {
    icon: Activity,
    title: 'Chronic Disease Management',
    description: 'Nutritional support for diabetes, heart disease, and other chronic conditions.',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: Shield,
    title: 'Preventive Care',
    description: 'Proactive nutrition strategies to prevent disease and maintain optimal health.',
    color: 'bg-teal-100 text-teal-600',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Comprehensive Nutrition Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From personalized meal plans to specialized dietary guidance, we offer expert services to meet your unique health goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-emerald-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`${service.color} w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Not Sure Which Service Is Right For You?</h3>
          <p className="text-lg mb-8 text-emerald-50 max-w-2xl mx-auto">
            Schedule a free consultation with one of our certified nutritionists to discuss your goals and find the perfect plan.
          </p>
          <button
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-emerald-600 px-8 py-4 rounded-xl hover:bg-gray-50 transition-all font-semibold shadow-lg transform hover:scale-105"
          >
            Schedule Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
