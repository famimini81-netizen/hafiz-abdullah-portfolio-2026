import ContentPageShell from "@/components/ContentPageShell";
import { servicesList } from "../profileContent";

export default function ServicesPage() {
  return (
    <ContentPageShell kicker="04 / Services" title="Services">
      <ul className="content-page-list columns">
        {servicesList.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </ContentPageShell>
  );
}
