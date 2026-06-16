"use client";

import { useEffect, useId, useState } from "react";

type ProjectDetail = {
  imageKey: string;
  meta: string;
  title: string;
  category: string;
  description: string;
  stackLabel: string;
  stack: string;
  featuresLabel: string;
  features: string[];
};

const projectDetails: ProjectDetail[] = [
  {
    imageKey: "tomorrowland",
    meta: "2026 - NEXT.JS",
    title: "Hostyo Owner Portal",
    category: "SaaS / Property Management Platform",
    description:
      "A modern owner portal built for property and rental management. It allows property owners to view bookings, revenue summaries, property performance, documents, and key operational updates from one clean dashboard.",
    stackLabel: "Tech Stack",
    stack: "Next.js, React, TypeScript, Tailwind CSS, API Integration, Dashboard UI",
    featuresLabel: "Key Features",
    features: [
      "Owner dashboard",
      "Booking and revenue overview",
      "Property performance tracking",
      "Document and report access",
      "Responsive portal interface",
      "Clean SaaS-style user experience",
    ],
  },
  {
    imageKey: "navy-pier",
    meta: "2026 - FASTAPI",
    title: "PDF Extraction Service",
    category: "AI Document Automation",
    description:
      "An intelligent PDF data extraction system that processes uploaded documents and extracts structured information automatically. It is designed for invoices, reports, forms, contracts, and business documents.",
    stackLabel: "Tech Stack",
    stack: "FastAPI, Python, OCR, AI Extraction, JSON Validation, API Backend",
    featuresLabel: "Key Features",
    features: [
      "PDF upload and parsing",
      "OCR-based text extraction",
      "AI-powered structured data extraction",
      "JSON output",
      "Error handling and validation",
      "API-ready backend service",
    ],
  },
  {
    imageKey: "msi-chicago",
    meta: "2026 - AI/ML",
    title: "Social Media AI Pipeline",
    category: "AI Content Analysis / Automation",
    description:
      "An AI-powered workflow that analyzes social media content, extracts useful insights, scores performance, and helps automate reporting or decision-making for marketing teams.",
    stackLabel: "Tech Stack",
    stack: "Python, OpenAI, AI/ML, Automation Workflow, Data Processing",
    featuresLabel: "Key Features",
    features: [
      "Social media content analysis",
      "AI scoring and classification",
      "Insight generation",
      "Automated reporting",
      "Data cleaning and processing",
      "Marketing workflow automation",
    ],
  },
  {
    imageKey: "phone",
    meta: "2026 - CRM",
    title: "Multi-Channel Outreach",
    category: "CRM / Lead Generation Automation",
    description:
      "A multi-channel outreach automation system for managing leads, contacts, follow-ups, and communication across email, CRM, and messaging channels.",
    stackLabel: "Tech Stack",
    stack: "CRM, n8n, Email Automation, Google Sheets, Webhooks, Lead Management",
    featuresLabel: "Key Features",
    features: [
      "Lead capture and organization",
      "Multi-channel communication flow",
      "Automated follow-ups",
      "CRM updates",
      "Contact tracking",
      "Outreach workflow automation",
    ],
  },
  {
    imageKey: "kikk",
    meta: "2026 - AI/ML",
    title: "Brain Tumor Detector",
    category: "Medical AI / Computer Vision",
    description:
      "An AI-based brain tumor detection project that uses machine learning/computer vision concepts to classify medical scan images and assist in detection workflows.",
    stackLabel: "Tech Stack",
    stack: "Python, Machine Learning, Computer Vision, Image Classification, AI Model",
    featuresLabel: "Key Features",
    features: [
      "Medical image processing",
      "Brain tumor classification concept",
      "AI model workflow",
      "Prediction output",
      "Clean result display",
      "Research-focused AI solution",
    ],
  },
  {
    imageKey: "kennedy",
    meta: "3+ YEARS",
    title: "AI Automation Engineer",
    category: "Experience",
    description:
      "3+ years of hands-on experience building AI automation workflows, backend systems, CRM automations, document processing tools, and AI-powered business solutions.",
    stackLabel: "Skills",
    stack:
      "n8n, Make.com, Zapier, OpenAI, LangChain, Python, FastAPI, Django, Google Sheets, CRM Automation, API Integration",
    featuresLabel: "Key Features",
    features: [
      "AI automation workflows",
      "Backend systems",
      "CRM automations",
      "Document processing tools",
      "AI-powered business solutions",
    ],
  },
  {
    imageKey: "opera",
    meta: "50+ BUILT",
    title: "Workflow Automation",
    category: "Automation Systems",
    description:
      "50+ automation workflows built for business operations, lead generation, CRM, email handling, document processing, reporting, and AI-powered task automation.",
    stackLabel: "Workflow Types",
    stack:
      "Gmail automation, Google Sheets automation, CRM automation, Webhook automation, AI agent workflows, Document extraction workflows, Calendar and task automation",
    featuresLabel: "Key Features",
    features: [
      "Gmail automation",
      "Google Sheets automation",
      "CRM automation",
      "Webhook automation",
      "AI agent workflows",
      "Document extraction workflows",
      "Calendar and task automation",
    ],
  },
];

export default function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const titleId = useId();

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

  useEffect(() => {
    if (!selectedProject) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [selectedProject]);

  return (
    <section id="section-2" className="overflow-hidden md:pl-40 pl-3">
      <div className="titles">
        {projectDetails.map((project) => (
          <button
            key={project.title}
            type="button"
            data-img-title={project.imageKey}
            className="title gap-5 md:gap-16"
            onClick={() => setSelectedProject(project)}
            aria-haspopup="dialog"
          >
            <small>{project.meta}</small>
            <h1>{project.title}</h1>
          </button>
        ))}
      </div>
      <div className="absolute bg-red-600 h-px w-390 top-280 md:top-240 left-[10vw] md:left-[70vw] md:w-200 -rotate-45" />

      {selectedProject && (
        <div className="project-detail-backdrop" onClick={() => setSelectedProject(null)}>
          <article
            className="project-detail-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="project-detail-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
            >
              Close
            </button>
            <small>{selectedProject.meta}</small>
            <h2 id={titleId}>{selectedProject.title}</h2>
            <p className="project-detail-category">{selectedProject.category}</p>
            <p>{selectedProject.description}</p>
            <div className="project-detail-stack">
              <span>{selectedProject.stackLabel}</span>
              <p>{selectedProject.stack}</p>
            </div>
            <div>
              <span className="project-detail-label">{selectedProject.featuresLabel}</span>
              <ul>
                {selectedProject.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      )}
    </section>
  );
}
