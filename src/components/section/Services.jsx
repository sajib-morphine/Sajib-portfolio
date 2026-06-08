import { services } from "../../data/services";
import FadeIn from "../animations/FadeIn";
import * as Icons from "lucide-react";
import { Wrench, ArrowUpRight, Code2 } from "lucide-react";
import Card from "../ui/Card";

const Services = () => {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 blur-[140px] rounded-full" />

      <div className="max-w-330 mx-auto px-5 relative z-10">
        {/* Header */}
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-5">
              <Wrench size={16} className="text-primary" />
              <span className="text-sm text-gray-300">
                Professional Services
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-5">
              What I <span className="text-primary">Offer</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              Building scalable, modern and high-performance web applications
              with clean code, responsive design and exceptional user
              experience.
            </p>
          </div>
        </FadeIn>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = Icons[service.icon] || Code2;

            return (
              <FadeIn key={service.id || index} delay={index * 0.1}>
                <Card
                  className="
                    group
                    relative
                    overflow-hidden
                    h-full
                    hover:-translate-y-2
                    hover:border-primary/40
                  "
                >
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-linear-to-br from-primary/10 via-transparent to-primary/5" />

                  {/* Glow */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

                  <div className="relative z-10 p-7">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-primary/10 border border-primary/20 mb-6 transition-transform duration-300 group-hover:scale-110">
                      <Icon
                        size={30}
                        strokeWidth={2}
                        className="text-primary"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-4 transition-colors group-hover:text-primary">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    {service.features?.length > 0 && (
                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-3 text-gray-300"
                          >
                            <span className="w-2 h-2 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Footer */}
                    <div className="flex items-center justify-between border-t border-white/10 pt-5">
                      <span className="text-sm text-gray-500">
                        Professional Service
                      </span>

                      <ArrowUpRight
                        size={20}
                        className="text-primary transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </div>
                  </div>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
