import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Building2, Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  companySize: string;
  image: string;
  quote: string;
  rating: number;
  industry: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    role: 'Senior Partner',
    company: 'Mitchell & Associates',
    companySize: '50+ lawyers',
    image: '/api/placeholder/100/100',
    quote: 'LegalTech Solutions has transformed how we handle document processing. The 70% reduction in review time has allowed us to focus more on strategic case management.',
    rating: 5,
    industry: 'Corporate Law'
  },
  {
    id: '2',
    name: 'James Wilson',
    role: 'Legal Operations Director',
    company: 'Global Legal Corp',
    companySize: '200+ lawyers',
    image: '/api/placeholder/100/100',
    quote: 'The compliance checking features have been a game-changer for our international operations. We\'ve seen a significant decrease in review cycles and improved accuracy.',
    rating: 5,
    industry: 'International Law'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Managing Partner',
    company: 'Rodriguez Legal',
    companySize: '25+ lawyers',
    image: '/api/placeholder/100/100',
    quote: 'As a growing firm, the automated case management has helped us scale efficiently. The platform is intuitive and the support team is exceptional.',
    rating: 5,
    industry: 'Family Law'
  }
];

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveIndex((current) => 
          current === testimonials.length - 1 ? 0 : current + 1
        );
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setActiveIndex((current) => 
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((current) => 
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setActiveIndex(index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Leading Law Firms
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how legal professionals are transforming their practice with our platform
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Testimonial Card */}
          <div 
            className="bg-white rounded-2xl shadow-xl p-8 mb-8"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="grid md:grid-cols-5 gap-8">
              {/* Testimonial Content */}
              <div className="md:col-span-3 space-y-6">
                <div className="flex items-center space-x-2">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <Quote className="w-12 h-12 text-blue-600 opacity-20" />
                
                <p className="text-xl text-gray-700 italic">
                  "{testimonials[activeIndex].quote}"
                </p>
                
                <div className="pt-4">
                  <div className="font-semibold text-gray-900">
                    {testimonials[activeIndex].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[activeIndex].role}
                  </div>
                </div>
              </div>

              {/* Company Info */}
              <div className="md:col-span-2 bg-gray-50 rounded-xl p-6 space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <Building2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonials[activeIndex].company}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonials[activeIndex].companySize}
                    </div>
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  Industry: {testimonials[activeIndex].industry}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between">
            <button 
              onClick={handlePrevious}
              className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>

            {/* Navigation Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button 
              onClick={handleNext}
              className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Customer Satisfaction', value: '98%' },
            { label: 'Time Saved', value: '70%' },
            { label: 'Law Firms', value: '500+' },
            { label: 'Documents Processed', value: '1M+' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;