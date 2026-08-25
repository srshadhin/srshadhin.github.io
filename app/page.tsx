import { Hero } from "@/components/hero/Hero";
import { WhatIBuild } from "@/components/engineering/WhatIBuild";
import { Philosophy } from "@/components/philosophy/Philosophy";
import { CaseStudies } from "@/components/case-studies/CaseStudies";
import { TechConstellation } from "@/components/technologies/TechConstellation";
import { CurrentlyExploring } from "@/components/exploring/CurrentlyExploring";
import { Timeline } from "@/components/timeline/Timeline";
import { OpenSource } from "@/components/opensource/OpenSource";
import { EngineeringNotes } from "@/components/writing/EngineeringNotes";
import { About } from "@/components/about/About";
import { OutsideTheCode } from "@/components/outside/OutsideTheCode";
import { Contact } from "@/components/contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatIBuild />
      <Philosophy />
      <CaseStudies />
      <TechConstellation />
      <CurrentlyExploring />
      <Timeline />
      <OpenSource />
      <EngineeringNotes />
      <About />
      <OutsideTheCode />
      <Contact />
    </>
  );
}
