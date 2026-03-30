import Carousel from "@/components/about/Carousel";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

export default function About() {
  return (
    <Section id="aboutme">
      <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">
        <div>
          <SectionTitle label="About me" />
        </div>
        <div>
          <div className="w-full text-lg md:text-lg mb-16">
            <p className="mb-4">
              Computer Engineer with more than{" "}
              <span className="text-primary font-semibold">
                {new Date().getFullYear() - 2023} years of experience using PHP
              </span>
              . Worked mainly with Laravel, JavaScript and SQL. Additionally, I
              have gained proficiency in React and TypeScript.
            </p>
            <p className="mb-4">
              My interest in technology started at the age of 15 when I got a
              Raspberry Pi and began experimenting. This
              experience led me to <span className="text-primary font-semibold">develop an interest in computer science</span> ever
              since.
            </p>
          </div>
        </div>
      </div>
      <Carousel />
    </Section>
  );
}
