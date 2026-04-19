import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Michael Thompson',
    role: 'Lost 35 lbs in 4 months',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300',
    content: 'Working with NutriVita changed my life. The personalized meal plan was easy to follow and the results speak for themselves. I have more energy than ever and finally feel confident in my body.',
    rating: 5,
  },
  {
    name: 'Jennifer Martinez',
    role: 'Managing Type 2 Diabetes',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
    content: 'The team helped me understand how to manage my diabetes through nutrition. My blood sugar levels are now stable, and I\'ve reduced my medication. Their support has been invaluable.',
    rating: 5,
  },
  {
    name: 'David Lee',
    role: 'Athletic Performance',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
    content: 'As a competitive cyclist, nutrition is crucial. The sports nutrition program helped me optimize my performance and recovery. I\'ve seen significant improvements in my race times.',
    rating: 5,
  },
  {
    name: 'Lisa Anderson',
    role: 'Family Wellness',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300',
    content: 'The family nutrition plan transformed how we eat at home. My kids are more willing to try healthy foods, and meal times are no longer a battle. Thank you for making healthy eating enjoyable!',
    rating: 5,
  },
  {
    name: 'Robert Wilson',
    role: 'Heart Health Journey',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=300',
    content: 'After my heart scare, I needed to make serious changes. The nutritionists created a heart-healthy plan that was delicious and sustainable. My cholesterol has dropped significantly.',
    rating: 5,
  },
  {
    name: 'Amanda Foster',
    role: 'Postpartum Recovery',
    image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=300',
    content: 'The postpartum nutrition plan helped me regain my energy while breastfeeding. The team was so understanding and supportive during this important time in my life.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
            Client Success Stories
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Real Results, Real People
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our clients who have transformed their lives through personalized nutrition guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <Quote className="h-10 w-10 text-emerald-200 mb-4" />

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-emerald-100"
                />
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-emerald-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-emerald-50 px-8 py-6 rounded-2xl">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Star className="h-6 w-6 text-yellow-400 fill-current" />
              <span className="text-4xl font-bold text-gray-900">4.9</span>
              <span className="text-gray-600">/5</span>
            </div>
            <p className="text-gray-600">Based on 500+ client reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
}
