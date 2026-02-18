import {
  React as ReactIcon,
  JavaScript,
  Vite,
  Source,
  Preview,
  Bash,
  Linux,
  TypeScript,
  NextJS,
  Supabase,
} from "@/components/icons";

export const projectsData = [
  {
    title: "PokéDex App",
    source: "/pokedex-project.webp",
    description:
      "Simple Pokedex application built using React. It utilizes the PokeAPI to fetch and display Pokémon information.",
    skills: [
      { color: "bg-blue-500/30", skill: "React", Icon: ReactIcon },
      { color: "bg-yellow-500/30", skill: "JavaScript", Icon: JavaScript },
      { color: "bg-pink-500/30", skill: "Vite", Icon: Vite },
    ],
    buttons: [
      {
        href: "https://github.com/gedevcel/pokedex-api",
        label: "Source Code",
        Icon: Source,
      },
      {
        href: "https://pokeindex-app.netlify.app/",
        label: "Preview",
        Icon: Preview,
      },
    ],
  },
  {
    title: "UNIX System Scripts",
    source: "/unix-system-scripts.webp",
    description:
      "Collection of Bash scripts designed to enhance system administration and user management tasks on Unix-like systems.",
    skills: [
      { color: "bg-slate-500/30", skill: "Bash", Icon: Bash },
      { color: "bg-red-500/30", skill: "Linux", Icon: Linux },
    ],
    buttons: [
      {
        href: "https://github.com/gedevcel/unix-system-scripts",
        label: "Source Code",
        Icon: Source,
      },
    ],
  },
  {
    title: "Gramioo",
    source: "/gramioo.png",
    description:
      "A platform to explore, find and follow your favourite Telegram channels in one place.",
    skills: [
      { color: "bg-transparent-500/30", skill: "NextJS", Icon: NextJS },
      { color: "bg-blue-500/30", skill: "TypeScript", Icon: TypeScript },
      { color: "bg-green-500/30", skill: "Supabase", Icon: Supabase },
    ],
    buttons: [
      {
        href: "https://gramioo.com/",
        label: "Preview",
        Icon: Preview,
      },
    ],
  },
];
