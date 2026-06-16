import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="section-1" className="hero-section px-5 md:px-10 mt-20 md:mt-36 overflow-hidden ">
      <span id="home" className="absolute top-0" />
      <div className="hero-inner md:flex">
        <div className="hero-heading-wrap md:text-right md:w-1/2 md:-translate-x-[70px] translate-y-[10px] max-h-[80vh] overflow-visible">
          <h1 className="hero-heading text-[2.6rem] md:text-[5rem] font-bold leading-[0.95] m-0">
            I Build <br /> Intelligent <br /> Automation <br />
            Systems
          </h1>
        </div>
        <div className="hero-copy mt-12 md:w-1/4 md:ml-35 md:mt-128">
          <h2 className="text-[1.4rem] md:text-2xl ">
            Hafiz Muhammad Abdullah is an AI Automation Engineer, AI Agent Developer, and Backend
            Engineer.
          </h2>
          <p className="text-xs md:text-[15px] mt-2 opacity-100 text-black/90 font-medium">
            Building intelligent workflows, backend systems, AI agents, and machine learning
            solutions for modern businesses.
          </p>
          <ul className="hero-links flex mt-8 text-xs gap-2 ">
            {["Email", "WhatsApp", "Instagram", "Remote"].map((item, index) => (
              <li key={item}>
                {index === 0 ? "" : "/"}
                {"  "}
                <Link href="/" className="cursor-pointer">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="absolute bg-red-600 h-px w-30 top-30 left-[80vw] md:left-[70vw] md:w-50 -rotate-45" />
      <div className="absolute hidden md:block bg-red-600 h-px w-160 top-90  md:left-[5vw] rotate-45" />
    </section>
  );
}
