import { Skills } from "@/icons/skills";
import {
  Eye,
  Shuffle,
  Lightbulb,
  Sun,
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
          With my startup background, I bring a lean and agile approach to building products quickly and efficiently. I’m passionate about <b>understanding users</b> and <b>driven by data</b>, always aiming for <b>clear and open communication.</b> </p>
          <p className="my-4 md:text-xl lg:my-10">My diverse experiences across different industries help me craft products that genuinely improve user experiences. Here are the key strengths I've honed through my varied journey:
          </p>
        </div>

        <figure className="m-0 md:grow">
          <Skills />
        </figure>
      </div>
      <ul className="my-10  md:grid md:grid-cols-2 md:gap-x-4">
        <li className="my-4 flex items-center lg:my-10">
          <Eye size={48} strokeWidth={0.5} />
          <div className="ml-5">
            <h3 className="text-md font-bold lg:text-lg">Clarity in Ambiguity</h3>
            <p className="text-sm lg:text-base">
            Navigate complex or vague problems with ease, bringing clarity where there’s uncertainty            </p>
          </div>
        </li>
        <li className="my-4 flex items-center">
          <Shuffle size={48} strokeWidth={0.5} />
          <div className="ml-5">
            <h3 className="text-md font-bold lg:text-lg">Adaptability</h3>
            <p className="text-sm lg:text-base">
            Seamlessly adjust strategies to thrive in dynamic environments and evolving needs            </p>
          </div>
        </li>

        <li className="my-4 flex items-center">
          <Lightbulb size={48} strokeWidth={0.5} />
          <div className="ml-5">
            <h3 className="text-md font-bold lg:text-lg">
            Unique & Fresh Perspective </h3>
            <p className="text-sm lg:text-base">
            Leverage my multi-industry background (Fintech, Insurtech, Edtech) to bring innovative viewpoints to problem-solving            
            </p>
          </div>
        </li>
        <li className="my-4 flex items-center">
          <Sun size={48} strokeWidth={0.5} />
          <div className="ml-5">
            <h3 className="text-md font-bold lg:text-lg">Positive Energy</h3>
            <p className="text-sm lg:text-base">
            Infuse the team with optimism and motivation, turning challenges into opportunities            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};
