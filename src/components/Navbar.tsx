import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Calendar, ArrowRight, Sparkles, Search, Users, Zap, Palette, Smartphone } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesDropdownOpen, setIsMobileServicesDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (href) => {
    setIsOpen(false);
    if (href.startsWith('#')) {
      // Check if we're on the homepage
      if (window.location.pathname === '/') {
        // We're on homepage, just scroll to section
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // We're on a different page, navigate to homepage first, then scroll
        navigate('/');
        // Use setTimeout to ensure the page loads before scrolling
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  };

  const handleBooking = () => {
    setIsOpen(false);
    navigate("/pricing");
  };

  const services = [
    {
      name: "SEO",
      href: "/services/seo",
      icon: Search,
      description: "Search Engine Optimization"
    },
    {
      name: "Lead Capturing",
      href: "/services/lead-capturing", 
      icon: Users,
      description: "Convert Visitors to Leads"
    },
    {
      name: "Automation & AI",
      href: "/services/automation-ai",
      icon: Zap,
      description: "AI-Powered Automation"
    },
    {
      name: "Beautiful Web Design",
      href: "/services/beautiful-web-design",
      icon: Palette,
      description: "Modern Website Design"
    },
    {
      name: "Mobile App Manageable",
      href: "/services/mobile-app-manageable",
      icon: Smartphone,
      description: "Mobile-First Solutions"
    }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="text-xl sm:text-2xl font-bold cursor-pointer"
            style={{ color: '#092C5D' }}
            onClick={() => navigate('/')}
          >
            ThinkCraft
            <div className="text-xs font-normal italic" style={{ color: '#00B3A4' }}>
              Empowering Students. Supporting Professionals.
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <a 
              href="#home" 
              className="text-sm font-medium transition-colors hover:opacity-80"
              style={{ color: '#092C5D' }}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
            >
              HOME
            </a>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                className="text-sm font-medium transition-colors hover:opacity-80 flex items-center gap-1"
                style={{ color: '#092C5D' }}
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                onMouseLeave={() => setIsServicesDropdownOpen(false)}
              >
                SERVICES
                <ChevronDown 
                  size={16} 
                  className={`transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} 
                />
              </button>
              
              {/* Services Dropdown Menu */}
              {isServicesDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-80 bg-[#092C5D] rounded-b-lg shadow-xl border-t-4 border-[#00B3A4]"
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                >
                  <div className="p-6">
                    <div className="space-y-4">
                      {services.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                          <Link
                            key={index}
                            to={service.href}
                            className="flex items-center space-x-4 p-3 rounded-lg hover:bg-[#00B3A4]/10 transition-colors group"
                            onClick={() => setIsServicesDropdownOpen(false)}
                          >
                            <div className="w-10 h-10 bg-[#00B3A4] rounded-lg flex items-center justify-center group-hover:bg-[#00B3A4]/80 transition-colors">
                              <IconComponent className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-white font-semibold text-sm group-hover:text-[#00B3A4] transition-colors">
                                {service.name}
                              </h3>
                              <p className="text-white/70 text-xs mt-1">
                                {service.description}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <a 
              href="#about" 
              className="text-sm font-medium transition-colors hover:opacity-80"
              style={{ color: '#092C5D' }}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#about');
              }}
            >
              ABOUT US
            </a>
            
            <a 
              href="#testimonials" 
              className="text-sm font-medium transition-colors hover:opacity-80"
              style={{ color: '#092C5D' }}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#testimonials');
              }}
            >
              TESTIMONIALS
            </a>
            
            <a 
              href="#faqs" 
              className="text-sm font-medium transition-colors hover:opacity-80"
              style={{ color: '#092C5D' }}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#faqs');
              }}
            >
              FAQs
            </a>
            
            <Link
              to="/contact"
              className="text-sm font-medium transition-colors hover:opacity-80"
              style={{ color: '#092C5D' }}
             >
              CONTACT / GET STARTED
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md transition-colors hover:bg-gray-100"
            style={{ color: '#092C5D' }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-[600px] opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-4 pb-4">
            <a 
              href="#home" 
              className="text-sm font-medium py-2 px-4 rounded-md transition-colors hover:bg-gray-50"
              style={{ color: '#092C5D' }}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
            >
              HOME
            </a>
            
            {/* Mobile Services Dropdown */}
            <div>
              <button
                className="text-sm font-medium py-2 px-4 rounded-md transition-colors hover:bg-gray-50 w-full text-left flex items-center justify-between"
                style={{ color: '#092C5D' }}
                onClick={() => setIsMobileServicesDropdownOpen(!isMobileServicesDropdownOpen)}
              >
                SERVICES
                <ChevronDown size={16} className={`transition-transform ${isMobileServicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isMobileServicesDropdownOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  {services.map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                      <Link
                        key={index}
                        to={service.href}
                        className="block text-sm py-2 px-4 rounded-md transition-colors hover:bg-gray-50 flex items-center space-x-3"
                        style={{ color: '#092C5D' }}
                        onClick={() => {
                          setIsOpen(false);
                          setIsMobileServicesDropdownOpen(false);
                        }}
                      >
                        <IconComponent size={16} className="text-[#00B3A4]" />
                        <span>{service.name}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
            <a 
              href="#about" 
              className="text-sm font-medium py-2 px-4 rounded-md transition-colors hover:bg-gray-50"
              style={{ color: '#092C5D' }}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#about');
              }}
            >
              ABOUT US
            </a>
            
            <a 
              href="#testimonials" 
              className="text-sm font-medium py-2 px-4 rounded-md transition-colors hover:bg-gray-50"
              style={{ color: '#092C5D' }}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#testimonials');
              }}
            >
              TESTIMONIALS
            </a>
            
            <a 
              href="#faqs" 
              className="text-sm font-medium py-2 px-4 rounded-md transition-colors hover:bg-gray-50"
              style={{ color: '#092C5D' }}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#faqs');
              }}
            >
              FAQs
            </a>

            <Link
               to="/contact"
              className="text-sm font-medium py-2 px-4 rounded-md transition-colors hover:bg-gray-50"
              style={{ color: '#092C5D' }}
              onClick={() => navigate('/contact')}
            >
              CONTACT / GET STARTED
            </Link>
                

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;