import { useState, useMemo } from "react";
import { FolderGit2 } from "lucide-react";

import FadeIn from "../animations/FadeIn";
import ProjectCard from "../ui/ProjectCard";

import { projects, categories } from "../../data/project";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const [visibleProjects, setVisibleProjects] = useState(6);

  const filteredProjects = useMemo(() => {
    return activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  const displayedProjects = filteredProjects.slice(0, visibleProjects);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setVisibleProjects(6);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-330 mx-auto px-5">
        {/* Heading */}
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span
              className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                bg-primary/10
                text-primary
                mb-5
              "
            >
              <FolderGit2 size={18} />
              Featured Projects
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My Recent Work
            </h2>

            <p className="text-gray-400">
              A collection of frontend, backend and full-stack applications
              built using modern web technologies.
            </p>
          </div>
        </FadeIn>

        {/* Category Filter */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`
                  px-5 py-2.5
                  rounded-full
                  text-sm
                  font-medium
                  transition-all
                  duration-300
                  border
                  ${
                    activeCategory === category
                      ? "bg-primary text-black border-primary"
                      : "border-white/10 hover:border-primary hover:text-primary"
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Projects Grid */}
        <FadeIn delay={0.2}>
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              xl:grid-cols-3
              gap-6
            "
          >
            {displayedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </FadeIn>

        {/* Show More */}
        {visibleProjects < filteredProjects.length && (
          <div className="flex justify-center mt-14">
            <button
              onClick={() => setVisibleProjects((prev) => prev + 3)}
              className="
                px-6
                py-3
                rounded-xl
                bg-primary
                text-black
                font-semibold
                transition-all
                hover:scale-105
              "
            >
              Show More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
