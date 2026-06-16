export default function FooterSection() {
  return (
    <div className="home-footer-section min-h-screen mt-30 relative">
      <div className="md:flex">
        <div className="  px-4 md:px-70 md:w-1/2">
          <h5 className="text-xs font-extrabold text-black/70 opacity-100">
            ABOUT HAFIZ ABDULLAH
          </h5>
          <p className="text-4xl md:text-5xl font-extrabold text-center md:text-start md:w-100">
            Crafting AI-powered digital automation experiences
          </p>
        </div>
        <div className="home-about-detail relative z-2 px-4 md:mr-10 mt-10 md:mt-60 pt-10 bg-gradient-to-b from-transparent to-black md:from-transparent md:to-transparent">
          <div className="flex flex-col md:flex-row text-sm text-black/85 opacity-100 font-bold gap-5 md:gap-20">
            <p className="md:w-60">
              I am Hafiz Muhammad Abdullah, a results-driven AI Automation Engineer and AI Agent
              Developer with 3+ years of hands-on production experience.
            </p>
            <p className="md:w-60">
              I specialize in n8n, Make.com, Zapier, OpenAI, LangChain, Python backends, Django,
              FastAPI, and AWS-based machine learning deployments.
            </p>
          </div>
          <h5 className="home-contact-stats border-b-2 border-red-500 w-fit py-2 font-bold mt-5 text-black/90">
            3+ years / 50+ automations / 100% success / 5.0 client rating
          </h5>
          <div className="home-contact-accent-line absolute bg-red-600 h-px w-70 top-39 md:top-90 right-[25vw] md:right-[50vw] md:w-90 rotate-45" />
        </div>
      </div>
      <div
        id="home-contact-section"
        className="home-contact-section relative z-2 bg-gradient-to-b from-transparent via-black/70 to-black w-full h-150 "
      >
        <div className="home-contact-inner flex w-full h-full items-end pb-15">
          <div className="home-contact-meta w-full h-50 text-2xl px-4 flex flex-col md:flex-row gap-4 md:items-end md:justify-end md:gap-35 text-white/95">
            <p>
              Karachi <span className="home-contact-dot">.</span>
            </p>
            <p>
              Pakistan <span className="home-contact-dot">.</span>
            </p>
            <p>
              Open to Remote <span className="home-contact-dot">.</span>
            </p>
          </div>
          <div className="home-contact-panel w-[80%] h-50 flex flex-col items-end md:pr-45 pr-4">
            <h3 className="text-[42px] md:text-[56px] font-extrabold text-end leading-[1.08] tracking-normal opacity-100 text-white">
              Hafiz <br />
              Muhammad <br />
              Abdullah{" "}
            </h3>
            <h4 className="text-sm mt-2 md:mt-9 text-white/95">
              ai8254072@gmail.com / +92 322 1607275
            </h4>
            <div className="home-contact-buttons">
              <a href="mailto:ai8254072@gmail.com">Email</a>
              <a href="https://wa.me/923221607275" target="_blank" rel="noopener">
                WhatsApp
              </a>
              <a
                href="https://www.instagram.com/abdullahminhas19"
                target="_blank"
                rel="noopener"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
