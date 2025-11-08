import React from "react";
import { Linkedin, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#092C5D] py-12">
      <div className="container mx-auto px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Left Section - Company Information & Contact */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#092C5D] font-bold text-xl">T</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">THINKCRAFT</h3>
                <p className="text-body-small text-white">SCHOLAR & DESIGN SOLUTIONS</p>
              </div>
            </div>
            
            <p className="text-[#00B3A4] text-body-small font-medium">
              Empowering Students. Supporting Professionals.
            </p>
            
            <div className="space-y-2">
              <p className="text-white text-body-small">Email: info@thinkcraft.com</p>
              <p className="text-white text-body-small">WhatsApp: +1 (415) 418-5227</p>
            </div>
          </div>

          {/* Middle Section - Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-[#00B3A4] font-semibold text-sm uppercase tracking-wide">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-[#00B3A4] hover:text-white transition-colors text-sm">
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/more-about-us" className="text-[#00B3A4] hover:text-white transition-colors text-sm">
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-[#00B3A4] hover:text-white transition-colors text-sm">
                  PLANS
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#00B3A4] hover:text-white transition-colors text-sm">
                  CONTACT US
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#00B3A4] hover:text-white transition-colors text-sm">
                  GET STARTED
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Section - Services/Features List */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wide">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services/cad-engineering-design" className="text-white hover:text-[#00B3A4] transition-colors text-sm">
                  CAD & ENGINEERING DESIGN
                </Link>
              </li>
              <li>
                <Link to="/services/website-ui-design" className="text-white hover:text-[#00B3A4] transition-colors text-sm">
                  WEBSITE & UI DESIGN
                </Link>
              </li>
              <li>
                <Link to="/services/academic-project-assistance" className="text-white hover:text-[#00B3A4] transition-colors text-sm">
                  ACADEMIC & PROJECT ASSISTANCE
                </Link>
              </li>
              <li>
                <Link to="/services/assignment-help-tutoring" className="text-white hover:text-[#00B3A4] transition-colors text-sm">
                  ASSIGNMENT HELP
                </Link>
              </li>
              <li>
                <Link to="/services/documentation-formatting" className="text-white hover:text-[#00B3A4] transition-colors text-sm">
                  DOCUMENTATION & FORMATTING
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section - Legal & Copyright */}
        <div className="border-t border-[#00B3A4] pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#00B3A4] text-body-small mb-4 md:mb-0">
              © ThinkCraft Agency All Rights Reserved
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-[#00B3A4] hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms-conditions" className="text-[#00B3A4] hover:text-white transition-colors text-sm">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
