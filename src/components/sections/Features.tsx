import React, { useState } from 'react';
import { 
  FileText, 
  ShieldCheck, 
  Clock, 
  Search, 
  PieChart, 
  AlertCircle,
  CheckCircle2,
  Building2,
  Users
} from 'lucide-react';

const Features = () => {
  const [activeTab, setActiveTab] = useState('automation');
  
  const features = {
    automation: {
      title: "Document Automation",
      description: "Transform your document processing workflow with AI-powered automation",
      icon: FileText,
      color: "blue",
      stats: [
        { label: "Faster Processing", value: "70%" },
        { label: "Documents Monthly", value: "50K+" },
        { label: "Error Reduction", value: "99%" }
      ],
      benefits: [
        "Automatic document classification",
        "Data extraction and validation",
        "Template matching and generation",
        "Batch processing capabilities"
      ]
    },
    compliance: {
      title: "Compliance Checking",
      description: "Ensure regulatory compliance with automated verification",
      icon: ShieldCheck,
      color: "green",
      stats: [
        { label: "Compliance Rate", value: "100%" },
        { label: "Rules Updated", value: "Daily" },
        { label: "Risk Reduction", value: "85%" }
      ],
      benefits: [
        "Real-time regulatory updates",
        "Automatic compliance verification",
        "Risk assessment reports",
        "Audit trail generation"
      ]
    },
    management: {
      title: "Case Management",
      description: "Streamline your case workflow with intelligent tracking",
      icon: Clock,
      color: "purple",
      stats: [
        { label: "Time Saved", value: "60%" },
        { label: "Task Automation", value: "80%" },
        { label: "Team Efficiency", value: "90%" }
      ],
      benefits: [
        "Centralized case tracking",
        "Automated task assignment",
        "Deadline management",
        "Performance analytics"
      ]
    }
  };

  const getColorClasses = (color: string) => ({
    tab: `border-b-2 px-6 py-3 text-sm font-medium transition-colors hover:text-${color}-600
          ${activeTab === color ? `border-${color}-600 text-${color}-600` : 'border-transparent text-gray-500'}`,
    icon: `bg-${color}-100 text-${color}-600`,
    button: `bg-${color}-600 hover:bg-${color}-700`
  });

  const activeFeature = features[activeTab as keyof typeof features];
  const colors = getColorClasses(activeFeature.color);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Legal Professionals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform combines advanced AI with legal expertise to streamline your workflow
            and enhance productivity.
          </p>
        </div>

        {/* Feature Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 place-items-center justify-center mb-12 border-b border-gray-200">
          {Object.entries(features).map(([key, feature]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={getColorClasses(feature.color).tab}
            >
              <div className="flex items-center space-x-2">
                <feature.icon className="w-5 h-5" />
                <span>{feature.title}</span>
              </div>
            </button>
          ))}
        </div>


        {/* Active Feature Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Feature Description */}
          <div className="space-y-8">
            <div className={`inline-flex p-3 rounded-lg ${colors.icon}`}>
              <activeFeature.icon className="w-8 h-8" />
            </div>
            
            <h3 className="text-3xl font-bold text-gray-900">
              {activeFeature.title}
            </h3>
            
            <p className="text-xl text-gray-600">
              {activeFeature.description}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6">
              {activeFeature.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              {activeFeature.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <button className={`px-8 py-4 rounded-full text-white transition-colors ${colors.button}`}>
              Learn More About {activeFeature.title}
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
            <h4 className="text-2xl font-semibold text-gray-900">Trusted by Industry Leaders</h4>
            
            {/* Trust Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Building2 className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-gray-600">Law Firms</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">10K+</div>
                  <div className="text-gray-600">Users</div>
                </div>
              </div>
            </div>

            {/* Feature Image Placeholder */}
            <div className="relative h-64 bg-gray-100 rounded-xl overflow-hidden">
              <img 
                src="/images/legal.jpg" 
                alt="Feature visualization" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;