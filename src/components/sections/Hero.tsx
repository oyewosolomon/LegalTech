// Hero.js
import React from 'react';
import { ArrowRight, FileText, ShieldCheck, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white">

      {/* Hero Content */}
      <div className="container mx-auto px-6 pt-32 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Transform Your Legal Workflow
            </h1>
            <p className="text-xl text-gray-600">
              Automate document processing, ensure compliance, and manage cases efficiently. 
              Join 1000+ firms saving 70% on review time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all">
                Schedule Demo
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">50K+</div>
                <div className="text-gray-600">Monthly Documents</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">70%</div>
                <div className="text-gray-600">Time Saved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">99%</div>
                <div className="text-gray-600">Accuracy Rate</div>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Document Automation</h3>
                  <p className="text-gray-600">Process and analyze legal documents with AI-powered automation</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <ShieldCheck className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Compliance Checking</h3>
                  <p className="text-gray-600">Ensure documents meet regulatory requirements automatically</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Case Management</h3>
                  <p className="text-gray-600">Streamline your workflow with intelligent case tracking</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;