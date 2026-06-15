import ContentPageShell from "@/components/ContentPageShell";
import { featuredProjects } from "../profileContent";

export default function ProjectsPage() {
  return (
    <ContentPageShell kicker="03 / Work" title="Featured Projects">
      <div className="content-page-stack">
        {featuredProjects.map((project, index) => (
          <article key={project.title} className="content-page-row">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <small>Tech: {project.tech}</small>
            </div>
          </article>
        ))}
      </div>
    </ContentPageShell>
  );
}
