import { Mail, MapPin, ArrowUp, Briefcase } from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import { PERSONAL_INFO, SOCIAL_LINKS, NAV_LINKS } from "../../utils/constant";

import { scrollToSection } from "../../hooks/useScrollSpy";
import FadeIn from "../animations/FadeIn";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10">
      {/* Glow */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-125 h-125 bg-primary/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-330 mx-auto px-5 py-16 relative z-10">
        <FadeIn>
          {/* Main Footer */}
          <div className="grid lg:grid-cols-[1.5fr_1fr_1fr] gap-12">
            {/* Brand */}
            <div>
              <h2 className="text-3xl font-bold mb-4">{PERSONAL_INFO?.name}</h2>

              <div className="flex items-center gap-2 text-primary mb-5">
                <Briefcase size={18} />
                <span className="font-medium">MERN Stack Developer</span>
              </div>

              <p className="text-gray-400 leading-relaxed max-w-md">
                Building modern, scalable, and user-friendly web applications
                with React, Node.js, Express.js, and MongoDB.
              </p>

              {/* Social */}
              <div className="flex gap-4 mt-8">
                {SOCIAL_LINKS?.github && (
                  <a
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Github"
                    className="
                      group
                      w-12 h-12
                      rounded-xl
                      border border-white/10
                      bg-white/5
                      flex items-center justify-center
                      hover:border-primary
                      hover:text-primary
                      hover:-translate-y-1
                      transition-all duration-300
                    "
                  >
                    <FaGithub
                      size={20}
                      className="group-hover:scale-110 transition-transform"
                    />
                  </a>
                )}

                {SOCIAL_LINKS?.linkedin && (
                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="
                      group
                      w-12 h-12
                      rounded-xl
                      border border-white/10
                      bg-white/5
                      flex items-center justify-center
                      hover:border-primary
                      hover:text-primary
                      hover:-translate-y-1
                      transition-all duration-300
                    "
                  >
                    <FaLinkedin
                      size={20}
                      className="group-hover:scale-110 transition-transform"
                    />
                  </a>
                )}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Navigation</h3>

              <ul className="space-y-4">
                {NAV_LINKS?.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="
                        text-gray-400
                        hover:text-primary
                        transition-colors
                      "
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact</h3>

              <div className="space-y-5">
                <a
                  href={`mailto:${PERSONAL_INFO?.email}`}
                  className="
                    flex items-center gap-3
                    text-gray-400
                    hover:text-primary
                    transition-colors
                  "
                >
                  <Mail size={18} className="text-primary" />

                  <span className="break-all">{PERSONAL_INFO?.email}</span>
                </a>

                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin size={18} className="text-primary" />

                  <span>{PERSONAL_INFO?.location}</span>
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={() => scrollToSection("contact")}
                className="
                  mt-8
                  px-6 py-3
                  rounded-xl
                  bg-primary
                  text-black
                  font-semibold
                  hover:scale-105
                  transition-transform
                "
              >
                Let's Talk
              </button>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500 text-center md:text-left">
              © {currentYear} {PERSONAL_INFO?.name}. All rights reserved.
            </p>

            <button
              onClick={() => scrollToSection("Hero")}
              className="
                flex items-center gap-2
                text-gray-400
                hover:text-primary
                transition-colors
              "
            >
              Back to Top
              <ArrowUp size={16} />
            </button>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
};

export default Footer;
