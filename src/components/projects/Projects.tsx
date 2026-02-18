import ProjectCard from "@/components/projects/ProjectCard";
import Badge from "@/components/ui/Badge";
import SecondaryButton from "@/components/ui/SecondaryButton";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

import { projectsData } from "@/data/projects"; // ajusta ruta si es necesario

export default function Projects() {
  return (
    <Section id="projects">
      <SectionTitle label="Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-10">
        {projectsData.map(
          ({ title, source, description, skills, buttons }, idx) => (
            <ProjectCard
              key={idx}
              title={title}
              source={source}
              description={description}
              skills={
                <>
                  {skills.map(({ color, skill, Icon }) => (
                    <Badge key={skill} color="bg-green-500/30" skill={skill}>
                      <Icon className="w-4 h-4" />
                    </Badge>
                  ))}
                </>
              }
              buttons={
                <>
                  {buttons.map(({ href, label, Icon }) => (
                    <SecondaryButton key={label} href={href} label={label}>
                      <Icon className="w-4 h-4" />
                    </SecondaryButton>
                  ))}
                </>
              }
            />
          ),
        )}
      </div>
    </Section>
  );
}
