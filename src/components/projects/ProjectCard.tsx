import { ReactNode } from "react";
import { motion } from "framer-motion";

export default function ProjectCard({
  title,
  source,
  description,
  skills,
  buttons,
}: {
  title: string;
  source: string;
  description: string;
  children?: ReactNode;
  skills: ReactNode;
  buttons: ReactNode;
}) {
  return (
    <motion.div
      className="flex flex-col mb-8 w-full bg-black/20 rounded"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
        type: "easeOut",
      }}
      viewport={{ once: true }}
    >
      <div className="project-image w-full overflow-hidden rounded">
        <img
          className="w-full aspect-video object-contain hover:animate-zoomIn"
          loading="lazy"
          src={source}
          alt={title}
        />
      </div>
      <div className="flex flex-col justify-between w-full p-6">
        <div className="flex flex-col">
          <h2 className="opacity-85 text-2xl font-semibold mb-3">{title}</h2>
          <div
            className={`no-scrollbar flex flex-nowrap overflow-x-auto scroll-smooth
            justify-start lg:flex-wrap mb-2`}
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0, black 0px, black calc(100% - 15px), transparent 100%)",
            }}
          >
            {skills}
          </div>
          <p className="text-base mb-4 text-gray-400 dark:text-gray-400">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap sm:flex-nowrap gap-x-1">{buttons}</div>
      </div>

      <style jsx>{`
        .project-image {
          mask-image: linear-gradient(to bottom, black 60%, transparent);
          -webkit-mask-image: linear-gradient(
            to bottom,
            black 60%,
            transparent
          );
        }
      `}</style>
    </motion.div>
  );
}
