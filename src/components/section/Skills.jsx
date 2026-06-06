import { Code2, Server, Wrench, Sparkles } from "lucide-react";
import FadeIn from "../animations/FadeIn";
import { skillCategories } from "../../data/skills";

const levelConfig = {
  Expert: {
    width: "100%",
    textColor: "text-[#8DFF69]",
    progressColor: "bg-[#8DFF69]",
  },

  Advanced: {
    width: "80%",
    textColor: "text-green-400",
    progressColor: "bg-green-500",
  },

  Intermediate: {
    width: "60%",
    textColor: "text-yellow-400",
    progressColor: "bg-yellow-500",
  },

  Beginner: {
    width: "40%",
    textColor: "text-red-400",
    progressColor: "bg-red-500",
  },
};

const icons = {
  frontend: Code2,
  backend: Server,
  tools: Wrench,
};

const SkillItem = ({ skill }) => {
  const config = levelConfig[skill.level] || levelConfig.Intermediate;

  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-white text-sm font-medium">{skill.name}</h4>

        <span className={`text-xs font-semibold ${config.textColor}`}>
          {skill.level}
        </span>
      </div>

      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className={`${config.progressColor} h-full rounded-full`}
          style={{
            width: config.width,
          }}
        />
      </div>
    </div>
  );
};

const CategoryCard = ({ title, icon, skills }) => {
  const Icon = icons[icon];

  return (
    <div
      className="
        group
        rounded-3xl
        border
        border-white/10
        bg-white/3
        backdrop-blur-xl
        p-8
        hover:border-[#8DFF69]/30
        transition-all
        duration-300
      "
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 rounded-2xl bg-[#8DFF69]/10 border border-[#8DFF69]/20 flex items-center justify-center">
          <Icon className="w-6 h-6 text-[#8DFF69]" />
        </div>

        <div>
          <h3 className="text-xl font-bold text-white">{title}</h3>

          <p className="text-sm text-gray-500">{skills.length} Technologies</p>
        </div>
      </div>

      <div className="space-y-4">
        {skills.map((skill) => (
          <SkillItem key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-175 h-175 bg-[#8DFF69]/5 rounded-full blur-[180px]" />
      </div>

      <div className="max-w-330 mx-auto px-5 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#8DFF69]/20 bg-[#8DFF69]/5 text-[#8DFF69] text-sm">
              <Sparkles size={16} />
              Technical Expertise
            </div>

            <h2 className="mt-5 text-4xl md:text-5xl font-bold text-white">
              Skills &<span className="text-[#8DFF69]"> Technologies</span>
            </h2>

            <p className="max-w-2xl mx-auto mt-5 text-gray-400">
              Technologies and tools I use to build scalable, modern web
              applications.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <FadeIn key={category.title}>
              <CategoryCard {...category} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
