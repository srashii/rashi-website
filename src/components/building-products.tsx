import { Skills } from "@/icons/skills";
import {
  ArrowDown01,
  Paintbrush,
  Presentation,
  ScatterChart,
} from "lucide-react";

export const BuildingProducts = () => {
  return (
    <section className="my-24  px-5 xl:px-0">
      <div className="md:flex lg:gap-8">
        <div className="max-w-lg">
          <h2 className="font-serif text-5xl leading-none text-accent md:text-7xl">
            Building products for humans
          </h2>
          <p className="my-4 md:text-xl lg:my-10">
            With my startup background, I bring a lean mindset for building
            products fast. My previous experiences helps me in building products
            that understand and enhance user experiences
          </p>
        </div>

        <figure className="m-0 md:grow">
          <Skills />
        </figure>
      </div>
      <ul className="my-10  md:grid md:grid-cols-2 md:gap-x-4">
        <li className="my-4 flex items-center lg:my-10">
          <Presentation size={48} strokeWidth={0.5} />
          <div className="ml-5">
            <h3 className="text-md font-bold lg:text-lg">Product Strategy</h3>
            <p className="text-sm lg:text-base">
              Roadmapping, A/B Tests, Project Management
            </p>
          </div>
        </li>
        <li className="my-4 flex items-center">
          <Paintbrush size={48} strokeWidth={0.5} />
          <div className="ml-5">
            <h3 className="text-md font-bold lg:text-lg">Product Design</h3>
            <p className="text-sm lg:text-base">
              User Stories, User Flows, Wireframes, Personas
            </p>
          </div>
        </li>

        <li className="my-4 flex items-center">
          <ArrowDown01 size={48} strokeWidth={0.5} />
          <div className="ml-5">
            <h3 className="text-md font-bold lg:text-lg">
              Market & User Research
            </h3>
            <p className="text-sm lg:text-base">
              Market Analysis, Experiment Design,Usability Testing
            </p>
          </div>
        </li>
        <li className="my-4 flex items-center">
          <ScatterChart size={48} strokeWidth={0.5} />
          <div className="ml-5">
            <h3 className="text-md font-bold lg:text-lg">Analytics</h3>
            <p className="text-sm lg:text-base">
              Data driven decisions, user metrics, patterns & trends
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};
