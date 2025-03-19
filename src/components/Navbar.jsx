import { useState, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../Images/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const timeoutRef = useRef(null); // Reference to track close delay

  // Opens the dropdown
  const handleMouseEnter = (menu) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current); // Cancel any closing delay
    }
    setActiveDropdown(menu);
  };

  // Starts closing with delay (prevents flickering)
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300); // Delay to allow moving between menu & dropdown
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
          <img
            className="h-8 w-12 sm:h-12 sm:w-16 transition-transform hover:scale-105"
            src={logo}
            alt="logo"
          />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8 text-sm font-bold text-white">
            {[
              {
                name: "PRODUCTS",
                type: "detailed",
                submenu: [
                  {
                    heading: "TimeClock Plus",
                    description:
                      "Streamline time tracking for better bottom lines and happier teams",
                  },
                  {
                    heading: "Humanity Schedule",
                    description:
                      "Automate shift planning, close coverage gaps, and manage compliance",
                  },
                  {
                    heading: "Humanity Time",
                    description:
                      "Automate time tracking, ensure compliance, and control costs-designed for small businesses",
                  },
                  {
                    heading: "Aladtec",
                    description:
                      "Meet unique need to public safety, corrections and healthcare",
                  },
                  {
                    heading: "ScheduleAnywhere",
                    description:
                      "Simple way to create and populate static shifts easily and monitor coverage counts",
                  },
                  {
                    heading: "InstaSub",
                    description:
                      "K-12 substitute management, automated absence management, notifications and substitute hour tracking",
                  },
                  {
                    heading: "Time Clocks",
                    description:
                      "Boost hours accuracy and reduce timekeeping friction",
                  },
                  {
                    heading: "Integrations",
                    description:
                      "Secure, flexible integrations to your wider ecosystem of ERP, HCM and payroll systems",
                  },
                ],
              },
              {
                name: "SOLUTIONS",
                type: "simple",
                submenu: [
                  { heading: "By Industry" },
                  { heading: "K-12 eduction" },
                  { heading: "Higher Education" },
                  { heading: "Government & public safety" },
                  { heading: "Hospitality" },
                  { heading: "Retail" },
                  { heading: "Healthcare" },
                  { heading: "Manufacturing" },
                  { heading: "Construction" },
                  { heading: "------------" },
                  { heading: "By Need" },
                  { heading: "Small Business" },
                  { heading: "Integrations" },
                ],
              },
              {
                name: "RESOURCES",
                type: "simple",
                submenu: [
                  { heading: "Resource Library" },
                  { heading: "Customer Stories" },
                  { heading: "Blog" },
                ],
              },
              {
                name: "COMPANY",
                type: "simple",
                submenu: [
                  { heading: "About" },
                  { heading: "Partners" },
                  { heading: "Contact Us" },
                ],
              },
            ].map((menu) => (
              <div
                key={menu.name}
                className="relative"
                onMouseEnter={() => handleMouseEnter(menu.name)}
                onMouseLeave={handleMouseLeave}
              >
                <a href="#" className="hover:text-gray-300 transition-colors">
                  {menu.name}
                </a>

                {/* Dropdown Menu */}
                {activeDropdown === menu.name && (
                  <div
                    className={`absolute left-0 mt-2 bg-white text-gray-800 shadow-lg rounded-lg p-4 ${
                      menu.type === "detailed" ? "w-[500px]" : "w-48"
                    } opacity-100 visible transition-opacity duration-200`}
                    onMouseEnter={() => handleMouseEnter(menu.name)} // Prevent close when hovering dropdown
                    onMouseLeave={handleMouseLeave} // Close only if fully left
                  >
                    {menu.type === "detailed" ? (
                      <div className="grid grid-cols-2 gap-4">
                        {menu.submenu.map((item) => (
                          <a
                            key={item.heading}
                            href="#"
                            className="block p-2 hover:bg-gray-100 rounded"
                          >
                            <h3 className="font-bold text-lg text-gray-900">
                              {item.heading}
                            </h3>
                            <p className="text-gray-500 tex-xs font-normal mt-2 ">
                              {item.description}
                            </p>
                          </a>
                        ))}
                      </div>
                    ) : (
                      <div>
                        {menu.submenu.map((item) => (
                          <a
                            key={item.heading}
                            href="#"
                            className="block px-4 py-2 font-normal text-semibold text-blue-600 hover:underline hover:bg-gray-100 rounded"
                          >
                            {item.heading}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
            <button className="border border-white px-4 py-2 rounded hover:bg-gray-700 transition-colors">
              Get a Demo
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-gray-700 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
