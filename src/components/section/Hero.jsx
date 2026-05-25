import { ChevronDown, Star } from "lucide-react";
import {
  SiReact,
  SiTailwindcss,
  SiMongodb,
  SiNodedotjs,
  SiNextdotjs,
} from "react-icons/si";
import { PERSONAL_INFO, STATS } from "../../utils/constant";
import { scrollToSection } from "../../hooks/useScrollSpy";
import FadeIn from "../animations/FadeIn";
import RadialGradientBackground from "../background/RadialGradientBackground";
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black m">
      {/* <RadialGradientBackground variant="hero" /> */}
      {/*content container*/}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-25 w-full ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* left column content */}
          <div className="text-left">
            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-2.5 px-4.5 py-2.75 mb-8 bg-linear-to-r from-primary/10 via-primary/15 to-primary/20 border border-primary/20 rounded-full">
                <Star className="w-4 h-4 text-white fill-white" />
                <span className="text-xs md:text-sm text-white tacking-[1.2px]">
                  {PERSONAL_INFO.title} | based in {PERSONAL_INFO.location}
                </span>
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white leading-tight mb-6">
                MERN Stack Developer Portfolio{" "}
              </h1>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-lg text-white/70 max-w-137.5 mb-8">
                Hi, I’m a passionate MERN Stack Developer skilled in building
                modern, responsive, and scalable web applications using
                React.js, Node.js, Express.js, and MongoDB. I love creating
                clean UI, smooth user experiences, and efficient backend
                solutions.
              </p>
            </FadeIn>
            <FadeIn delay={300}>
              <button
                className="inline-flex item-centre gap-0 mb-12 group"
                onClick={() => scrollToSection("projects")}
              >
                <div className="relative z-10 bg-white text-[#212121] rounded-[17px] px-6.5 py-3.5 text-base font-medium border border-white">
                  Get in touch
                </div>
              </button>
            </FadeIn>
            <FadeIn delay={400}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-full">
                {STATS.map((stat, index) => (
                  <div
                    key={index}
                    className="text-left border-r border-white/50 pr-10 last:border-r-0"
                  >
                    <h3 className="text-2xl font-normal text-primary mb-2 font-mono">
                      {stat.value}
                    </h3>
                    <p className="text-sm text-white leading-snug">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
          {/* right column devoloper image*/}
          <FadeIn delay={200}>
            <div className="className">
              <div className="className">
                <div className="className">
                  <div className="className"></div>
                </div>
              </div>
            </div>
            {/image container*/}
            <div className="className">
              <img
                src="/assets/hero-image.png"
                alt="Developer"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;
