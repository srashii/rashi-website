import { ContactSection } from "@/components/contact-section";
import { Intro } from "@/components/intro";
import { PortfolioSection } from "@/components/portfolio-section";
import { WorkSection } from "@/components/work-section";

export default async function Home() {
  return (
    <>
      <Intro />
      <div className="m-auto h-12 w-12 rounded-full bg-accent hover:animate-ping" />
      <PortfolioSection />
      <div className="m-auto h-12 w-12 rounded-full bg-accent hover:animate-ping" />
      <WorkSection />
      <ContactSection />
    </>
  );
}
