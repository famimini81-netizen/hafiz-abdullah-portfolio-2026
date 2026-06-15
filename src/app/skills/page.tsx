import ContentPageShell from "@/components/ContentPageShell";
import { skillsGroups } from "../profileContent";

export default function SkillsPage() {
  return (
    <ContentPageShell kicker="06 / Stack" title="Skills">
      <div className="content-page-skill-grid">
        {skillsGroups.map(([group, items]) => (
          <div key={group}>
            <h2>{group}</h2>
            <p>{items}</p>
          </div>
        ))}
      </div>
    </ContentPageShell>
  );
}
