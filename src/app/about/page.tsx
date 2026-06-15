import ContentPageShell from "@/components/ContentPageShell";
import { aboutStats } from "../profileContent";

export default function AboutPage() {
  return (
    <ContentPageShell kicker="01 / Profile" title="About Me">
      <p className="content-page-lead">
        I am Hafiz Muhammad Abdullah, an AI Automation Engineer and AI Agent Developer with 3+
        years of hands-on production experience building intelligent workflow automation systems,
        AI agents, backend systems, and machine learning solutions for modern businesses. I
        specialize in n8n, Make.com, Zapier, OpenAI, LangChain, Python, Django, FastAPI, AWS,
        APIs, CRMs, webhooks, and automation infrastructure.
      </p>
      <div className="content-page-tags">
        {aboutStats.map(item => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </ContentPageShell>
  );
}
