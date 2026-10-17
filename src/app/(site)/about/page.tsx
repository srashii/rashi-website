import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

const About = () => {
  return (
    <div className="px-5 xl:px-0">
      <h1 className="my-4 font-serif text-5xl  font-bold text-accent md:text-8xl">
        About
      </h1>
      <div className="flex flex-col-reverse md:flex-row-reverse  md:gap-20">
        <div className="max-w-lg text-pretty text-base leading-relaxed md:text-lg">
        <h3 className="text-xl font-semibold tracking-wide"> 👋 Hey there, Here is What You Need to Know</h3>
          <p className="my-4">
          I’m Rashi Srivastava, a product manager with a knack for turning chaos into clarity. With 8+ years of experience in the product space, I’ve guided products from 0 to 1 and scaled them across Fintech and EdTech, always driven by data, experimentation, and an obsession with solving user problems. 
          </p>
          <p className="my-4">The joy and satisfaction of making an impact, coupled with my enjoyment of untangling the chaos and complexity that every problem brings, keeps me motivated. (And yes, as a Game of Thrones fan, I do believe "Chaos is a ladder 🪜 "—thanks, Littlefinger!)
          </p>
          <p className="my-4">
          I have multi-industry experience in Insurtech, Fintech, and Edtech, which helps me bring fresh perspectives and look at things from a diverse angle. 🌍
          </p>
          <p className="my-4">
          When I’m not working, you’ll find me lost in a good book 📚, cycling through new trails 🚴🏼‍♀️, planning my next travel adventure ✈️, or savoring a delicious meal 🥘. I believe that just like product management, life is about exploration, learning, and finding joy in every moment.
          </p>
        </div>

        <figure className="relative mb-10 h-[500px] w-full  lg:h-[600px] ">
          <Image
            src="/assets/rashi-working.jpg"
            alt="Rashi working from office"
            fill
            style={{ objectFit: "cover" }}
          />
        </figure>
      </div>

      
      {/* work values */}
      <section className="my-14">
        <div className="mb-10 text-center md:text-left">
          <h3 className="text-3xl font-semibold">My Work Values</h3>
          <span className="text-sm font-bold uppercase tracking-wider text-gray-400">
          (and What They Mean to Me)
          </span>
        </div>
        <div className="flex max-w-md flex-col before:bg-accent sm:relative sm:before:absolute sm:before:left-[-35px] sm:before:top-2 sm:before:z-[1] sm:before:h-4 sm:before:w-4 sm:before:rounded-full"> </div>
          <h3 className="text-xl font-semibold tracking-wide">Integrity ❤️ </h3>
        
          <p className="my-3">
          I believe in being true to my principles, ensuring that every product I work on is built with the user’s best interest at heart. 
          </p>
        <div className="flex max-w-md flex-col before:bg-accent sm:relative sm:before:absolute sm:before:left-[-35px] sm:before:top-2 sm:before:z-[1] sm:before:h-4 sm:before:w-4 sm:before:rounded-full"> </div>
          <h3 className="text-xl font-semibold tracking-wide">Growth 🌱</h3>
        
          <p className="my-3">
          Continuous learning and development are my driving forces, both personally and professionally. I’m always seeking new challenges and opportunities to grow.           </p>
        <div className="flex max-w-md flex-col before:bg-accent sm:relative sm:before:absolute sm:before:left-[-35px] sm:before:top-2 sm:before:z-[1] sm:before:h-4 sm:before:w-4 sm:before:rounded-full"> </div>
          <h3 className="text-xl font-semibold tracking-wide">Empathy 💡</h3>
        
          <p className="my-3">
          Understanding the user’s pain points is at the core of my approach. I put myself in their shoes to build solutions that truly make a difference. 
          </p>
        <div className="flex max-w-md flex-col before:bg-accent sm:relative sm:before:absolute sm:before:left-[-35px] sm:before:top-2 sm:before:z-[1] sm:before:h-4 sm:before:w-4 sm:before:rounded-full"> </div>
          <h3 className="text-xl font-semibold tracking-wide">Efficiency 🚀</h3>
        
          <p className="my-3">
          I believe in not reinventing the wheel. My approach is to first explore existing solutions and optimize them before creating something entirely new.         
          </p>
          <div className="flex max-w-md flex-col before:bg-accent sm:relative sm:before:absolute sm:before:left-[-35px] sm:before:top-2 sm:before:z-[1] sm:before:h-4 sm:before:w-4 sm:before:rounded-full"> </div>
          <h3 className="text-xl font-semibold tracking-wide">Collaboration 🤝</h3>
        
          <p className="my-3">
          Great products are built by great teams. I thrive in collaborative environments where diverse ideas come together to create something amazing. 
          </p>
      </section>

      {/* What i am doing now */}
     <section className="my-14">
        <div className="mb-10 text-center md:text-left">
          <h3 className="text-3xl font-semibold">What I’m Doing Now</h3>
        </div>
        <p className="my-4">
          Currently, I’m a Product Manager at AstraTech, leading the Chat, Growth & Cross-Sell and Homepage squads for Botim, the UAE’s calling and fintech super-app. My focus is turning everyday conversations into financial moments: helping people discover and use payments, transfers, rewards and lending right where they already talk. Along the way I built Botim’s Trust & Safety framework from scratch and the growth tooling that lets the team run experiments at scale.
          </p>
          <p className="my-4">
          My journey has been rewarding, and I’m excited about the challenges and opportunities that lie ahead. ✨ </p>
      </section>


    </div>
  );
};

export default About;
