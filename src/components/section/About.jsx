import {
  Download,
  Code2,
  Sparkles,
  Zap,
  CheckCircle,
  Atom,
  Database,
  Server,
  GitBranch,
  Globe,
  Layers,
  Palette,
  Terminal,
} from "lucide-react";
import { PERSONAL_INFO, ABOUT_STATS } from "../../utils/constant";
import FadeIn from "../animations/FadeIn";

const About = () => {
  return (
    <section id="about" className="relative py-12 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-20 right-0 w-125 h-125 bg-primary/10 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-75 h-75 bg-primary/5 blur-[120px] rounded-full" />

      <div className="container mx-auto px-5 relative z-10">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm">
              <Sparkles size={16} />
              About Me
            </span>

            <h2 className="mt-6 text-4xl lg:text-5xl font-bold">
              Building Modern
              <span className="text-primary"> Web Experiences</span>
            </h2>

            <p className="mt-4 max-w-2xl mx-auto text-gray-400">
              Passionate MERN Stack Developer focused on building scalable,
              responsive and user-friendly web applications.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          {/* Left Side */}
          <FadeIn direction="left" delay={300}>
            <div>
              <h3 className="text-4xl lg:text-6xl font-bold leading-tight mb-8">
                Crafting Digital
                <br />
                Experiences That Matter
              </h3>

              <div className="space-y-6 text-gray-400 leading-relaxed">
                {PERSONAL_INFO.bio.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>

              {/* Resume Button */}
              <a
                href={PERSONAL_INFO.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 mt-10 px-7 py-4 rounded-2xl bg-primary text-black font-semibold hover:scale-105 transition duration-300"
              >
                <Download size={18} />
                Download Resume
              </a>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-12">
                {ABOUT_STATS.map((stat, index) => (
                  <div key={index} className="border-l-2 border-primary pl-4">
                    <h3 className="text-3xl lg:text-4xl font-bold">
                      {stat.value}
                    </h3>

                    <p className="mt-2 text-gray-400 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right Side */}
          <FadeIn direction="right" delay={500}>
            <div className="space-y-5">
              {/* Expertise */}
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 hover:border-primary/30 transition-all duration-300">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Code2 className="text-primary" size={28} />
                  </div>

                  <div>
                    <h4 className="text-2xl font-semibold mb-3">Expertise</h4>

                    <p className="text-gray-400 leading-relaxed">
                      Specialized in building scalable web applications with
                      modern technologies and industry best practices.
                    </p>
                  </div>
                </div>
              </div>

              {/* Middle Cards */}
              <div className="grid md:grid-cols-2 gap-5">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-primary/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <CheckCircle className="text-primary" size={24} />
                  </div>

                  <h4 className="text-xl font-semibold mb-3">Clean Code</h4>

                  <p className="text-gray-400">
                    Writing maintainable, well-documented code that scales
                    efficiently.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-primary/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <Zap className="text-primary" size={24} />
                  </div>

                  <h4 className="text-xl font-semibold mb-3">Performance</h4>

                  <p className="text-gray-400">
                    Optimizing every application for speed, responsiveness and
                    scalability.
                  </p>
                </div>
              </div>

              {/* Bottom Stats Card */}
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <h3 className="text-3xl font-bold text-primary">100%</h3>

                    <p className="mt-2 text-sm text-gray-400">
                      Client Satisfaction
                    </p>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold text-primary">24/7</h3>

                    <p className="mt-2 text-sm text-gray-400">
                      Support Available
                    </p>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold text-primary">Fast</h3>

                    <p className="mt-2 text-sm text-gray-400">Delivery Time</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
        {/* Skills Grid Section */}
        <FadeIn delay={600}>
          <div className="mt-28">
            {/* Section Header */}
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm">
                <Code2 size={16} />
                Expertise & Technology
              </span>

              <h3 className="mt-5 text-3xl lg:text-4xl font-bold">
                Technologies I Use To
                <span className="text-primary"> Build Modern Apps</span>
              </h3>

              <p className="mt-4 max-w-2xl mx-auto text-gray-400">
                Leveraging modern frontend and backend technologies to create
                fast, scalable, and user-focused web applications.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
              {[
                { name: "React.js", icon: Atom },
                { name: "Next.js", icon: Layers },
                { name: "Tailwind CSS", icon: Palette },
                { name: "JavaScript", icon: Code2 },
                { name: "Node.js", icon: Server },
                { name: "Express.js", icon: Terminal },
                { name: "MongoDB", icon: Database },
                { name: "REST APIs", icon: Globe },
                { name: "Git & GitHub", icon: GitBranch },
                { name: "Redux Toolkit", icon: Layers },
              ].map((tech, index) => {
                const Icon = tech.icon;

                return (
                  <div
                    key={index}
                    className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 text-center overflow-hidden hover:border-primary/40 hover:-translate-y-2 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative z-10">
                      <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300">
                        <Icon
                          size={30}
                          className="text-primary group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>

                      <h4 className="font-semibold text-lg mb-2">
                        {tech.name}
                      </h4>

                      <p className="text-gray-400 text-sm">
                        Modern Development
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default About;
