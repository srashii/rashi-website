import Image from "next/image";

const About = () => {
  return (
    <div className="px-5 xl:px-0">
      <h1 className="my-4 font-serif text-5xl  font-bold text-accent md:text-8xl">
        About
      </h1>
      <div className="flex flex-col-reverse md:flex-row-reverse  md:gap-20">
        <div className="max-w-lg text-pretty text-base leading-relaxed md:text-lg">
          <p>
            Hey, I am Rashi Srivastava, have almost 7 years of experience in
            Product space, I bring the expertise in building the products from
            scratch and guiding the same through 0 to 1 journey with a strong
            metric & experiment driven approach.
          </p>
          <p className="my-4">
            I actually started my career as a Business Analyst and got into
            product role accidentally, but after I got in I realised I love
            working on user problems. The happiness & excitement which you gain
            when you see that something you worked on is actually being used by
            people and it’s actually solving a pain point they had, it just
            feels great, Plus I really enjoy kind of enjoy dealing and solving
            the chaos and complexity which every problem statement brings in.
            (Chaos is a ladder, these words by Littlefinger seem so true - for
            Game of Thrones fan only)
          </p>
          <p className="my-4">
            Right now I am in CoLearn, which is an edtech platform focused on
            Indonesian market, got promoted to Lead Product Manager 1 year back,
            as the Lead PM, I have owned the product strategy & development for
            the entire product where I played a pivotal role in orchestrating
            the expansion of live classes from 1000 to over 5000 paid
            subscribers within just six months. I am looking forward to gain
            more learning experiences and grow further in product.
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

      {/* Timeline */}
      <section className="my-14">
        <div className="mb-10 text-center md:text-left">
          <h3 className="text-3xl font-semibold">Work </h3>
          <span className="text-sm font-bold uppercase tracking-wider text-gray-400">
            Things I did over the years
          </span>
        </div>
        <div className="flex max-w-md flex-col before:bg-accent sm:relative sm:before:absolute sm:before:left-[-35px] sm:before:top-2 sm:before:z-[1] sm:before:h-4 sm:before:w-4 sm:before:rounded-full">
          <h3 className="text-xl font-semibold tracking-wide">Colearn</h3>
          <time className="text-xs uppercase tracking-wide text-gray-400">
            2021 - Present
          </time>
          <p className="my-3">
            Orchestrated the expansion of live classes from 1000 to over 5000
            paid subscribers within a swift six-month period.
          </p>
          <p className="my-3">
            Achieved a remarkable 97% reduction in onboarding time by
            streamlining and automating the entire end-to-end process
          </p>
          <p className="my-3">
            Slashed weekly support time by 60% via strategic implementation of
            crucial customer support data infrastructure and in-app support
          </p>
          <p className="my-3">
            Boosted paid user engagement by 12% by experimentation with a range
            of in-class and post-class activities
          </p>
          <p className="my-3">
            Mentored promising team members across business teams & enabled
            their upward movement in Product by crafting different training
            programs
          </p>
        </div>
        <div className="flex max-w-md flex-col before:bg-accent sm:relative sm:before:absolute sm:before:left-[-35px] sm:before:top-2 sm:before:z-[1] sm:before:h-4 sm:before:w-4 sm:before:rounded-full">
          <h3 className="text-xl font-semibold tracking-wide">INDmoney</h3>
          <time className="text-xs uppercase tracking-wide text-gray-400">
            2020 - 2021
          </time>
          <p className="my-3">
            Developed the Loan Against Investments product vertical from
            inception
          </p>
          <p className="my-3">
            Designed numerous marketing campaign experiments, conducting weekly
            A/B tests that resulted in a 40% surge in acquired leads
          </p>
          <p className="my-3">
            Enhanced bank loan approval rates by 7% through the implementation
            of technology-driven and process-led adjustments
          </p>
          <p className="my-3">
            Boosted paid user engagement by 12% by experimentation with a range
            of in-class and post-class activities
          </p>
          <p className="my-3">
            Mentored promising team members across business teams & enabled
            their upward movement in Product by crafting different training
            programs
          </p>
        </div>
        <div className="flex max-w-md flex-col before:bg-accent sm:relative sm:before:absolute sm:before:left-[-35px] sm:before:top-2 sm:before:z-[1] sm:before:h-4 sm:before:w-4 sm:before:rounded-full">
          <h3 className="text-xl font-semibold tracking-wide">Ziploan</h3>
          <time className="text-xs uppercase tracking-wide text-gray-400">
            2019 - 2020
          </time>
          <p className="my-3">
            Increased application punches by ~23% via automation of Direct
            Selling Agents (DSA) Payout process as it helped improve DSA
            relations
          </p>
          <p className="my-3">
            Reduced delinquency instances by 4% by designing an Early Warning
            Signal system
          </p>
          <p className="my-3">
            Reduced credit approval rate by 3% by building a Credit Deviations &
            Approval's Risk Assessment model
          </p>
        </div>
        <div className="flex max-w-md flex-col before:bg-accent sm:relative sm:before:absolute sm:before:left-[-35px] sm:before:top-2 sm:before:z-[1] sm:before:h-4 sm:before:w-4 sm:before:rounded-full">
          <h3 className="text-xl font-semibold tracking-wide">JSimple</h3>
          <time className="text-xs uppercase tracking-wide text-gray-400">
            2017-2020
          </time>
          <p className="my-3">
            Enhanced quarterly sales by 18% via the implementation of an
            insurance recommendation feature
          </p>
          <p className="my-3">
            Automated invoice generation, reducing manual effort by 60%, by
            developing a billing tool for employers and insurance providers
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
