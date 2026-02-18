import {
  Laravel,
  Livewire,
  Alpine,
  JavaScript,
  Tailwind,
  Sql,
  Git,
  Php,
  Bootstrap,
  Angular,
  TypeScript,
  WordPress,
  Css,
} from "@/components/icons";

export type ExperienceItem = {
  date: string;
  position: string;
  company: string;
  description: string;
  skills: {
    color: string;
    skill: string;
    Icon: React.FC<React.SVGProps<SVGSVGElement> | any>;
  }[];
};

const experienceData: ExperienceItem[] = [
  {
    date: "Oct 2024 - Oct 2025",
    position: "Software Developer",
    company: "eAgora",
    description:
      "Working with a development team to enhance the main platform, including integrating and refining APIs and endpoints, while also managing a dashboard that allows for a variety of actions.",
    skills: [
      { color: "bg-red-500/30", skill: "Laravel", Icon: Laravel },
      { color: "bg-pink-500/30", skill: "Livewire", Icon: Livewire },
      { color: "bg-cyan-500/30", skill: "AlpineJS", Icon: Alpine },
      { color: "bg-yellow-500/30", skill: "JavaScript", Icon: JavaScript },
      { color: "bg-sky-500/30", skill: "Tailwind", Icon: Tailwind },
      { color: "bg-slate-500/30", skill: "MySQL", Icon: Sql },
      { color: "bg-amber-500/30", skill: "Git", Icon: Git },
    ],
  },
  {
    date: "Jan 2023 - Oct 2024",
    position: "Software Developer",
    company: "3&Punt",
    description:
      "Developing quality Moodle plugins and integrations. Utilizing technologies to enhance the Moodle e-learning experience. Collaborating with clients, I analyze requirements to craft optimal solutions and ensure smooth integration.",
    skills: [
      { color: "bg-indigo-500/30", skill: "PHP", Icon: Php },
      { color: "bg-yellow-500/30", skill: "JavaScript", Icon: JavaScript },
      { color: "bg-indigo-500/30", skill: "Bootstrap", Icon: Bootstrap },
      { color: "bg-slate-500/30", skill: "MySQL", Icon: Sql },
      { color: "bg-amber-500/30", skill: "Git", Icon: Git },
    ],
  },
  {
    date: "Apr 2022 - Sep 2022",
    position: "Software Developer",
    company: "Namastech",
    description:
      "Fixing general bugs of their web application. (4DMOVIN) Development of small tools to imporve web utility. Building WordPress sites, including landing pages, working with woo-commerce.",
    skills: [
      { color: "bg-indigo-500/30", skill: "PHP", Icon: Php },
      { color: "bg-red-500/30", skill: "Angular", Icon: Angular },
      { color: "bg-blue-500/30", skill: "TypeScript", Icon: TypeScript },
      { color: "bg-slate-500/30", skill: "WordPress", Icon: WordPress },
      { color: "bg-sky-500/30", skill: "CSS", Icon: Css },
      { color: "bg-slate-500/30", skill: "MySQL", Icon: Sql },
      { color: "bg-amber-500/30", skill: "Git", Icon: Git },
    ],
  },
];

export default experienceData;
