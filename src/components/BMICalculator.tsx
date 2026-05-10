import { useState } from 'react';
import { Calculator, TrendingUp, TrendingDown, Minus } from 'lucide-react';

export default function BMICalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    let heightInMeters: number;
    let weightInKg: number;

    if (unit === 'metric') {
      heightInMeters = parseFloat(height) / 100;
      weightInKg = parseFloat(weight);
    } else {
      heightInMeters = (parseFloat(height) * 2.54) / 100;
      weightInKg = parseFloat(weight) * 0.453592;
    }

    if (heightInMeters > 0 && weightInKg > 0) {
      const calculatedBMI = weightInKg / (heightInMeters * heightInMeters);
      setBmi(parseFloat(calculatedBMI.toFixed(1)));

      if (calculatedBMI < 18.5) {
        setCategory('Underweight');
      } else if (calculatedBMI >= 18.5 && calculatedBMI < 25) {
        setCategory('Normal Weight');
      } else if (calculatedBMI >= 25 && calculatedBMI < 30) {
        setCategory('Overweight');
      } else {
        setCategory('Obese');
      }
    }
  };

  const getCategoryColor = () => {
    switch (category) {
      case 'Underweight':
        return 'text-blue-600 bg-blue-100';
      case 'Normal Weight':
        return 'text-emerald-600 bg-emerald-100';
      case 'Overweight':
        return 'text-amber-600 bg-amber-100';
      case 'Obese':
        return 'text-rose-600 bg-rose-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getCategoryIcon = () => {
    switch (category) {
      case 'Underweight':
        return <TrendingDown className="h-8 w-8" />;
      case 'Normal Weight':
        return <Minus className="h-8 w-8" />;
      case 'Overweight':
      case 'Obese':
        return <TrendingUp className="h-8 w-8" />;
      default:
        return null;
    }
  };

  return (
    <section id="calculator" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
            Health Tools
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-3 mb-4">
            BMI Calculator
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate your Body Mass Index to understand your weight status and take the first step toward your health goals.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-12">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="bg-emerald-100 p-3 rounded-xl">
                    <Calculator className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Enter Your Details</h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Unit System
                    </label>
                    <div className="flex space-x-4">
                      <button
                        onClick={() => setUnit('metric')}
                        className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all ${
                          unit === 'metric'
                            ? 'bg-emerald-600 text-white shadow-lg'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        Metric
                      </button>
                      <button
                        onClick={() => setUnit('imperial')}
                        className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all ${
                          unit === 'imperial'
                            ? 'bg-emerald-600 text-white shadow-lg'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        Imperial
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Height {unit === 'metric' ? '(cm)' : '(inches)'}
                    </label>
                    <input
                      type="number"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      placeholder={unit === 'metric' ? '170' : '67'}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-600 focus:outline-none transition-colors text-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Weight {unit === 'metric' ? '(kg)' : '(lbs)'}
                    </label>
                    <input
                      type="number"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      placeholder={unit === 'metric' ? '70' : '154'}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-600 focus:outline-none transition-colors text-lg"
                    />
                  </div>

                  <button
                    onClick={calculateBMI}
                    disabled={!height || !weight}
                    className="w-full bg-emerald-600 text-white py-4 rounded-lg hover:bg-emerald-700 transition-all font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Calculate BMI
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-emerald-600 to-teal-600 p-8 md:p-12 text-white flex flex-col justify-center">
                {bmi !== null ? (
                  <div className="text-center space-y-6">
                    <div>
                      <div className="text-6xl font-bold mb-2">{bmi}</div>
                      <div className="text-emerald-100 text-lg">Your BMI</div>
                    </div>

                    <div className={`inline-flex items-center space-x-3 px-6 py-3 rounded-full ${getCategoryColor()}`}>
                      {getCategoryIcon()}
                      <span className="font-bold text-lg">{category}</span>
                    </div>

                    <div className="pt-6 space-y-3 text-left">
                      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                        <div className="text-emerald-100 text-sm mb-1">BMI Categories:</div>
                        <div className="space-y-1 text-sm">
                          <div>Underweight: &lt; 18.5</div>
                          <div>Normal: 18.5 - 24.9</div>
                          <div>Overweight: 25 - 29.9</div>
                          <div>Obese: ≥ 30</div>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                      className="w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-gray-50 transition-all font-bold shadow-lg"
                    >
                      Get Personalized Plan
                    </button>
                  </div>
                ) : (
                  <div className="text-center space-y-4">
                    <Calculator className="h-24 w-24 mx-auto opacity-50" />
                    <div className="text-2xl font-bold">Calculate Your BMI</div>
                    <p className="text-emerald-100">
                      Enter your height and weight to discover your Body Mass Index and get personalized recommendations.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white p-6 rounded-xl shadow-md">
            <p className="text-sm text-gray-600 text-center">
              <strong>Note:</strong> BMI is a general indicator and may not be accurate for athletes, pregnant women, or elderly individuals.
              Consult with our nutritionists for a comprehensive health assessment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
