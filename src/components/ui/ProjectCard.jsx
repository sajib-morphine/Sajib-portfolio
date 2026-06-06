import { ArrowUpRight, FolderKanban } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <article
      className="
        group
        h-full
        bg-zinc-900/60
        backdrop-blur-xl
        border border-white/10
        rounded-3xl
        overflow-hidden
        transition-all duration-500
        hover:-translate-y-2
        hover:border-primary/40
        hover:shadow-[0_20px_50px_rgba(141,255,105,0.12)]
      "
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[16/10]">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="
            w-full
            h-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        {/* Category */}
        <span
          className="
            absolute top-4 left-4
            px-3 py-1
            rounded-full
            text-xs font-medium
            bg-primary
            text-black
          "
        >
          {project.category}
        </span>

        {/* Action Buttons */}
        <div className="absolute bottom-4 right-4 flex gap-2">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Github Repository"
            className="
              w-11 h-11
              rounded-xl
              bg-black/60
              backdrop-blur
              border border-white/10
              flex items-center justify-center
              hover:bg-primary
              hover:text-black
              transition-all
            "
          >
            <FaGithub size={18} />
          </a>

          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Live Demo"
            className="
              w-11 h-11
              rounded-xl
              bg-primary
              text-black
              flex items-center justify-center
              hover:scale-105
              transition-all
            "
          >
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 md:p-6 flex flex-col">
        <h3
          className="
            text-xl
            md:text-2xl
            font-bold
            mb-3
            line-clamp-2
          "
        >
          {project.title}
        </h3>

        <p
          className="
            text-sm
            text-gray-400
            leading-relaxed
            line-clamp-3
            mb-5
          "
        >
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="
                px-3 py-1
                rounded-full
                text-xs
                bg-white/5
                border border-white/10
                text-gray-300
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-auto pt-4 border-t border-white/10">
          <div className="flex items-center gap-2 text-primary">
            <FolderKanban size={16} />
            <span className="text-sm font-medium">{project.metrics}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
