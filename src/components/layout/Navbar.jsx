import { Menu, Code, X } from "lucide-react";
import { useState, useEffect } from "react";
import { NAV_LINKS, PERSONAL_INFO } from "../../utils/constant";
import { useScrollSpy, scrollToSection } from "../../hooks/useScrollSpy";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useScrollSpy(NAV_LINKS.map((link) => link.href));
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleNavclick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-1000 py-4 transition-all duration-300 ${isScrolled ? "bg-black/30 backdrop-blur-lg" : "bg-transparent"}`}
      style={{ transform: "translate3d(0, 0, 0)" }}
    >
      <div className="mx-w-[1320px] mx-auto px-5">
        <div className="flex justify-between items-center">
          {/*logo */}
          <div className="flex items-center gap-4">
            <Code className="w-6 h-6 text-primary" />
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-2xl  font-bold bg-linear-to-r from-cyan-400 via-blue-500 to-violet-500 text-transparent bg-clip-text hover:opacity-80 transition-opacity"
              aria-label="Home"
            >
              {PERSONAL_INFO.name}
            </button>
          </div>
          {/*Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavclick(link.id)}
                className={`text-base font-medium transition-all duration-300 ${activeSection === link.id ? "text-white" : "text-white/70 hover:text-white"}`}
              >
                {link.text || link.name || link.label}
              </button>
            ))}
          </nav>

          {/*CTA Button */}
          <div className="hidden md:flex items-center gap-7">
            <button
              onClick={() => handleNavclick("contact")}
              className="px-7 py-3.5 bg-white text-[#212121] text-base font-medium rounded-[17px] border border-white hover:bg-white/90 transition-all duration-300"
            >
              Hire Me
            </button>
          </div>
          {/*Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-4 text-white hover:text-white/80 transition-colors"
            aria-label="menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      {/*Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="bg-black/90 backdrop-blur-lg rounded-lg border-t border-white/10 px-5 py-6 space--y-3">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavclick(link.id)}
              className={`block w-full text-left px-4 py-3 rounded-lg font-medium text-base trasition-all duration-300 ${activeSection === link.id ? "text-white bg-white/10" : "text-white/70 hover:text-white hover:bg-white/50"}`}
            >
              {link.text || link.name || link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavclick("contact")}
            className="block w-full text-center px-4 py-3 mt-3 bg-white text-[#212121] text-base font-medium rounded-[17px] border border-white hover:bg-white/90 transition-all duration-300"
          >
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
