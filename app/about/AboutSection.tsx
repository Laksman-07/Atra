import CollaboratorsSection from "./CollaboratorsSection";
import HowWeBeganSection from "./HowWeBeganSection";
import TeamSection from "./TeamSection";

export default function AboutSection() {
  return (
    <section className="relative flex flex-col items-center">
      <HowWeBeganSection />
      <TeamSection/>
      <CollaboratorsSection />
      
    </section>
  );
}
