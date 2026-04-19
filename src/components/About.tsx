import { Award, BookOpen, Users2, Target } from 'lucide-react';

const team = [
  {
    name: 'Dr. Sarah Mitchell',
    role: 'Lead Nutritionist & Founder',
    image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=600',
    credentials: 'PhD in Nutritional Science, RD',
  },
  {
    name: 'James Rodriguez',
    role: 'Sports Nutrition Specialist',
    image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=600',
    credentials: 'MS in Exercise Science, CSCS',
  },
  {
    name: 'Emily Chen',
    role: 'Clinical Dietitian',
    image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=600',
    credentials: 'MS, RDN, CDN',
  },
];

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'Committed to the highest standards of nutritional care and evidence-based practices.',
  },
  {
    icon: BookOpen,
    title: 'Education',
    description: 'Empowering clients with knowledge to make informed decisions about their health.',
  },
  {
    icon: Users2,
    title: 'Compassion',
    description: 'Creating a supportive environment where every client feels heard and valued.',
  },
  {
    icon: Target,
    title: 'Results',
    description: 'Dedicated to helping you achieve sustainable, lasting health outcomes.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
            About Us
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Meet Your Nutrition Experts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team of certified nutritionists and dietitians brings decades of combined experience to help you achieve your health goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/6285235/pexels-photo-6285235.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Nutrition consultation"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Transforming Lives Through Nutrition Science
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Founded in 2014, NutriVita has been at the forefront of personalized nutrition consulting. Our mission is to make expert nutritional guidance accessible to everyone seeking a healthier lifestyle.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We believe in a holistic approach that considers your unique circumstances, preferences, and goals. Our evidence-based strategies are designed to create lasting change, not quick fixes.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-6">
              {values.map((value, index) => (
                <div key={index} className="space-y-2">
                  <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center">
                    <value.icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h4 className="font-bold text-gray-900">{value.title}</h4>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Expert Team
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h4>
                  <p className="text-emerald-600 font-semibold mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600">
                    {member.credentials}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
