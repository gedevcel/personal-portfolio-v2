import { motion } from "framer-motion";

export default function ExperienceCard({
  date,
  position,
  company,
  description,
  side,
  children,
}: {
  date: string;
  position: string;
  company: string;
  description: string;
  side: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="relative w-full pb-6">
      <div className="hidden lg:block absolute ml-2 lg:ml-0 bg-gradient-to-b from-[#FFC76B] to-[#F47B2A] bg-fixed w-4 h-4 rounded top-4 left-0 lg:left-1/2 transform -translate-x-1/2 mt-1.5"></div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1 },
          type: "ease",
        }}
        viewport={{ once: true }}
        className={`relative lg:ml-0 bg-black/20 py-4 lg:rounded-none rounded
            ${
              side == "right"
                ? "lg:left-[52.5%] lg:w-[47.5%] border-r-violet-500/50 border-r-[1px]"
                : "lg:w-[47.5%] lg:text-right lg:border-l-violet-500/50 lg:border-l-[1px] lg:border-r-0 border-l-0 border-r-violet-500/50 border-r-[1px]"
            }`}
      >
        <span className="px-4 bg-gradient-to-r from-[#FFC76B] to-[#F47B2A] inline-block text-transparent bg-clip-text text-xl font-bold mb-1">
          {position}
        </span>
        <span className="px-4 block mb-1 text-sm leading-none text-gray-400 dark:text-gray-500">
          {date}
        </span>
        <h3 className="px-4 text-lg font-semibold mb-1 text-gray-200">
          {company}
        </h3>
        <p className="px-4 md:text-lg mb-4 text-gray-400 dark:text-gray-400">
          {description}
        </p>
        <div
          className={`no-scrollbar px-4 flex flex-nowrap overflow-x-auto scroll-smooth
            ${side === "right" ? "lg:justify-start" : "lg:justify-end"} 
            justify-start lg:flex-wrap`}
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0, black 15px, black calc(100% - 15px), transparent 100%)",
          }}
        >
          {" "}
          {children}
        </div>
      </motion.div>
    </div>
  );
}
