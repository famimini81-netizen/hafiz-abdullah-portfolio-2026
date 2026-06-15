import ContentPageShell from "@/components/ContentPageShell";
import { automationCapabilities } from "../profileContent";

export default function AIAutomationsPage() {
  return (
    <ContentPageShell kicker="02 / Automation" title="AI Automation Work">
      <p className="content-page-lead">
        I design and build intelligent automation systems using n8n, Make.com, Zapier, OpenAI,
        LangChain, and CRM APIs. My work includes lead automation, email automation, CRM updates,
        AI chatbots, data extraction, PDF automation, Google Sheets workflows, Slack alerts, Gmail
        workflows, Google Calendar automation, webhook systems, and multi-step business process
        automation.
      </p>
      <ul className="content-page-list columns">
        {automationCapabilities.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </ContentPageShell>
  );
}
