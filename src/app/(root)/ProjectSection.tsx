"use client";

import { useEffect } from "react";

export default function ProjectSection() {
  useEffect(() => {
    const section = document.querySelector("#section-2");
    if (!section) return;

    const titles = Array.from(section.querySelectorAll<HTMLElement>(".title"));
    const clearActiveTitle = () => titles.forEach((title) => title.classList.remove("is-active"));

    const updateActiveTitle = () => {
      if (window.innerWidth > 768) {
        clearActiveTitle();
        return;
      }

      const viewportFocus = window.innerHeight * 0.48;
      let activeIndex = -1;
      let nearestDistance = Number.POSITIVE_INFINITY;

      titles.forEach((title, index) => {
        const rect = title.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) return;

        const titleCenter = rect.top + rect.height / 2;
        const distance = Math.abs(titleCenter - viewportFocus);

        if (distance < nearestDistance) {
          nearestDistance = distance;
          activeIndex = index;
        }
      });

      clearActiveTitle();
      if (activeIndex >= 0) {
        titles[activeIndex]?.classList.add("is-active");
      }
    };

    updateActiveTitle();
    window.addEventListener("scroll", updateActiveTitle, { passive: true });
    window.addEventListener("resize", updateActiveTitle);

    return () => {
      window.removeEventListener("scroll", updateActiveTitle);
      window.removeEventListener("resize", updateActiveTitle);
      clearActiveTitle();
    };
  }, []);

  return (
    <section id="section-2" className="overflow-hidden md:pl-40 pl-3">
      <div className="titles">
        <div img-title="tomorrowland" className="title  gap-5 md:gap-16">
          <small>2026 - NEXT.JS</small>
          <h1>Hostyo Owner Portal</h1>
        </div>
        <div img-title="navy-pier" className="title  gap-5 md:gap-16">
          <small>2026 - FASTAPI</small>
          <h1> PDF Extraction Service</h1>
        </div>
        <div img-title="msi-chicago" className="title  gap-5 md:gap-16">
          <small>2026 - AI/ML</small>
          <h1> Social Media AI Pipeline</h1>
        </div>
        <div img-title="phone" className="title  gap-5 md:gap-16">
          <small>2026 - CRM</small>
          <h1>Multi-Channel Outreach</h1>
        </div>
        <div img-title="kikk" className="title  gap-5 md:gap-16">
          <small>2026 - DJANGO</small>
          <h1>Brain Tumor Detector</h1>
        </div>
        <div img-title="kennedy" className="title  gap-5 md:gap-16">
          <small>3+ YEARS</small>
          <h1>AI Automation Engineer</h1>
        </div>
        <div img-title="opera" className="title  gap-5 md:gap-16">
          <small>50+ BUILT</small>
          <h1>Workflow Automation</h1>
        </div>
      </div>
      <div className="absolute bg-red-600 h-px w-390 top-280 md:top-240 left-[10vw] md:left-[70vw] md:w-200 -rotate-45" />
    </section>
  );
}
