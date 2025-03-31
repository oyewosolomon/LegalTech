import React from 'react';
import { Mail, Briefcase, FileText, Shield, Users, HelpCircle, Facebook, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const legalLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'GDPR Compliance', href: '#' },
    { name: 'Security Practices', href: '#' }
  ];

  const resources = [
    { name: 'Documentation', href: '#', icon: <FileText className="w-4 h-4" /> },
    { name: 'Compliance Center', href: '#', icon: <Shield className="w-4 h-4" /> },
    { name: 'Case Studies', href: '#', icon: <Briefcase className="w-4 h-4" /> },
    { name: 'Support Center', href: '#', icon: <HelpCircle className="w-4 h-4" /> }
  ];

  const company = [
    { name: 'About Us', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Partners', href: '#' },
    { name: 'Press', href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Legal<span className="text-blue-400">Tech</span></h3>
            <p className="mb-6 text-gray-400 leading-relaxed">
              AI-powered solutions for modern legal teams. Streamline workflows, reduce risk, and enhance productivity.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Briefcase className="w-5 h-5 mr-2" />
              Solutions
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Contract Review</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Compliance Automation</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">E-Discovery</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Legal Research</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <FileText className="w-5 h-5 mr-2" />
              Resources
            </h4>
            <ul className="space-y-3">
              {resources.map((item) => (
                <li key={item.name} className="flex items-center">
                  <span className="mr-2">{item.icon}</span>
                  <a href={item.href} className="hover:text-blue-400 transition-colors">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Users className="w-5 h-5 mr-2" />
              Company
            </h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="hover:text-blue-400 transition-colors">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter & Bottom Bar */}
        <div className="border-t border-gray-800 pt-12 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Legal Links */}
            <div className="flex flex-wrap gap-4 lg:justify-end items-center">
              {legalLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <span className="text-sm text-gray-500">© {currentYear} LegalTech Inc.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;