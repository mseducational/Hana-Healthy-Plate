import { useState, FormEvent } from 'react';
import { Calendar, Clock, Mail, Phone, User, MessageSquare, CheckCircle2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    consultationType: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const consultationTypes = [
    'Weight Management',
    'Sports Nutrition',
    'Family Nutrition',
    'Chronic Disease Management',
    'Meal Planning',
    'General Consultation',
  ];

  const timeSlots = [
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
    '4:00 PM - 5:00 PM',
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const { error: submitError } = await supabase
        .from('consultation_bookings')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            consultation_type: formData.consultationType,
            preferred_date: formData.preferredDate,
            preferred_time: formData.preferredTime,
            message: formData.message,
          },
        ]);

      if (submitError) throw submitError;

      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        consultationType: '',
        preferredDate: '',
        preferredTime: '',
        message: '',
      });

      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      setError('Failed to submit booking. Please try again.');
      console.error('Error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="booking" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
            Get Started Today
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Book Your Consultation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take the first step toward your health goals. Schedule a free consultation with one of our expert nutritionists.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {isSuccess && (
            <div className="mb-8 bg-emerald-50 border-2 border-emerald-200 rounded-xl p-6 flex items-center space-x-4 animate-fade-in">
              <CheckCircle2 className="h-8 w-8 text-emerald-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-emerald-900 text-lg">Booking Submitted Successfully!</h3>
                <p className="text-emerald-700">
                  We'll contact you within 24 hours to confirm your consultation appointment.
                </p>
              </div>
            </div>
          )}

          {error && (
            <div className="mb-8 bg-rose-50 border-2 border-rose-200 rounded-xl p-6">
              <p className="text-rose-700 font-semibold">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-600 focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-600 focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-600 focus:outline-none transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Consultation Type *
                </label>
                <select
                  name="consultationType"
                  value={formData.consultationType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-600 focus:outline-none transition-colors appearance-none bg-white"
                >
                  <option value="">Select a consultation type</option>
                  {consultationTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Preferred Date *
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-600 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Preferred Time *
                </label>
                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-600 focus:outline-none transition-colors appearance-none bg-white"
                  >
                    <option value="">Select a time slot</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Additional Notes or Concerns
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-600 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your health goals, dietary restrictions, or any specific concerns..."
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-8 bg-emerald-600 text-white py-4 rounded-xl hover:bg-emerald-700 transition-all font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? 'Submitting...' : 'Book Free Consultation'}
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              Your first consultation is completely free with no obligation.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
