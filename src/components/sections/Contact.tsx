import React, { useState, FormEvent } from 'react';
import { Calendar, Clock, Mail, MessageSquare } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  serviceType: string;
  message: string;
  preferredDate: string;
  preferredTime: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    serviceType: '',
    message: '',
    preferredDate: '',
    preferredTime: ''
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Let us know how we can help streamline your legal processes with our technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Methods Cards */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-6 flex flex-col">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-600 mb-4">Send us a message and we'll get back to you within 24 hours.</p>
            <a href="mailto:support@legaltechsolutions.com" className="text-blue-600 font-medium mt-auto">
              support@legaltechsolutions.com
            </a>
          </div>

          {/* Form Card (takes 2 cols on desktop) */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden lg:col-span-2">
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">
                    Service Type
                  </label>
                  <select
                    id="serviceType"
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select a service</option>
                    <option value="document-automation">Document Automation</option>
                    <option value="compliance-checking">Compliance Checking</option>
                    <option value="case-management">Case Management</option>
                    <option value="legal-analytics">Legal Analytics</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Time
                    </label>
                    <select
                      id="preferredTime"
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select a time</option>
                      <option value="9:00">9:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="15:00">3:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                >
                  Submit Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-blue-600 mb-3">
              <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold">1</span>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">AI-powered Automation</h3>
            <p className="text-gray-600">Streamline document processing with our intelligent automation solutions.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-blue-600 mb-3">
              <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold">2</span>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Compliance Assurance</h3>
            <p className="text-gray-600">Ensure regulatory adherence with our compliance checking tools.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-blue-600 mb-3">
              <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold">3</span>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Case Management</h3>
            <p className="text-gray-600">Optimize your workflows with our intelligent case management system.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;