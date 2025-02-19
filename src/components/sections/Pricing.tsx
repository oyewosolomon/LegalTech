import React, { useState } from 'react';
import { Check, HelpCircle, ArrowRight, Zap } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface PlanFeature {
  name: string;
  description: string;
  included: ('starter' | 'professional' | 'enterprise')[];
}

interface Plan {
  id: string;
  name: string;
  description: string;
  price: string;
  period: string;
  highlight?: boolean;
  buttonText: string;
  documentLimit: string;
  userLimit: string;
}

const plans: Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for small law firms getting started with automation',
    price: '$199',
    period: 'per month',
    buttonText: 'Start Free Trial',
    documentLimit: '1,000',
    userLimit: '5',
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Ideal for growing firms with advanced automation needs',
    price: '$499',
    period: 'per month',
    highlight: true,
    buttonText: 'Start Free Trial',
    documentLimit: '5,000',
    userLimit: '15',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Custom solutions for large firms with complex requirements',
    price: 'Custom',
    period: 'per month',
    buttonText: 'Contact Sales',
    documentLimit: 'Unlimited',
    userLimit: 'Unlimited',
  },
];

const features: PlanFeature[] = [
  {
    name: 'Document Processing',
    description: 'AI-powered document analysis and processing',
    included: ['starter', 'professional', 'enterprise'],
  },
  {
    name: 'Basic Templates',
    description: 'Access to standard document templates',
    included: ['starter', 'professional', 'enterprise'],
  },
  {
    name: 'Custom Templates',
    description: 'Create and save custom document templates',
    included: ['professional', 'enterprise'],
  },
  {
    name: 'Basic Compliance',
    description: 'Standard compliance checking features',
    included: ['starter', 'professional', 'enterprise'],
  },
  {
    name: 'Advanced Compliance',
    description: 'Advanced compliance rules and custom rule creation',
    included: ['professional', 'enterprise'],
  },
  {
    name: 'Case Management',
    description: 'Basic case tracking and management',
    included: ['starter', 'professional', 'enterprise'],
  },
  {
    name: 'Advanced Analytics',
    description: 'Detailed analytics and custom reporting',
    included: ['professional', 'enterprise'],
  },
  {
    name: 'API Access',
    description: 'Full API access for custom integrations',
    included: ['enterprise'],
  },
  {
    name: 'White Labeling',
    description: 'Custom branding and white-label options',
    included: ['enterprise'],
  },
];

const PricingSection: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');

  return (
    <TooltipProvider>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your firm's needs
            </p>

            {/* Billing Toggle */}
            <div className="mt-8 inline-flex items-center space-x-4 bg-white rounded-full p-2 shadow-sm">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-6 py-2 rounded-full transition-colors ${
                  billingPeriod === 'monthly' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod('annual')}
                className={`px-6 py-2 rounded-full transition-colors flex items-center space-x-2 ${
                  billingPeriod === 'annual' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <span>Annual</span>
                <span className="text-sm bg-green-500 text-white px-2 py-1 rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105 ${
                  plan.highlight ? 'ring-2 ring-blue-600' : ''
                }`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {plan.description}
                  </p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-600">
                      {plan.period}
                    </span>
                  </div>

                  <button 
                    className={`w-full py-3 px-6 rounded-full flex items-center justify-center space-x-2 ${
                      plan.highlight 
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
                    } transition-colors`}
                  >
                    <span>{plan.buttonText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="mt-8 space-y-4">
                    <div className="flex items-center space-x-2">
                      <Zap className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-600">Up to {plan.documentLimit} docs/month</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Zap className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-600">Up to {plan.userLimit} users</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-100">
                  <div className="p-8 space-y-4">
                    {features.map((feature) => (
                      <div
                        key={feature.name}
                        className="flex items-center space-x-3"
                      >
                        {feature.included.includes(plan.id as any) ? (
                          <Check className="w-5 h-5 text-green-500" />
                        ) : (
                          <div className="w-5 h-5" />
                        )}
                        <span className="text-gray-700">{feature.name}</span>
                        <Tooltip>
                          <TooltipTrigger>
                            <HelpCircle className="w-4 h-4 text-gray-400" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="text-sm">{feature.description}</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="mt-20 max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h3>
            <p className="text-gray-600">
              Need help choosing the right plan? {' '}
              <button className="text-blue-600 hover:text-blue-700 font-medium">
                Contact our sales team
              </button>
            </p>
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
};

export default PricingSection;