import ContentPageShell from "@/components/ContentPageShell";
import { experienceItems } from "../profileContent";

export default function ExperiencePage() {
  return (
    <ContentPageShell kicker="05 / Career" title="Experience">
      <div className="content-page-stack">
        {experienceItems.map((item, index) => (
          <article key={item.role} className="content-page-row">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h2>{item.role}</h2>
              <small>{item.meta}</small>
              <ul className="content-page-list">
                {item.details.map(detail => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </ContentPageShell>
  );
}
