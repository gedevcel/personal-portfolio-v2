import React from "@/components/icons/React";
import Carousel from "@/components/about/Carousel";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

export default function About() {
  return (
    <Section id="aboutme">
      <SectionTitle label="About me" />
      <div className="w-full text-lg md:text-xl mb-16">
        <p className="mb-4">
          Computer Engineer with more than{" "}
          <span className="text-primary font-semibold">
            {new Date().getFullYear() - 2023} years of experience using PHP
          </span>
          . Worked mainly with Laravel, JavaScript and SQL. Additionally, I have
          gained proficiency in React and TypeScript.
        </p>
        <p className="mb-4">
          My interest in technology started at the age of 15 when I got a
          Raspberry Pi and began experimenting with different projects. This
          experience led me to develop an interest in computer science ever
          since.
        </p>
        <p className="mb-4">
          One of my significant accomplishments includes{" "}
          <span className="text-primary font-semibold">
            working with Spain's first Moodle Premium Partner
          </span>
          , where I developed crucial plugins for well-known clients in the
          e-learning industry.
        </p>
      </div>
      <Carousel />
    </Section>
  );
}
