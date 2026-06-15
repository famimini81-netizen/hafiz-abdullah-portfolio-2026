import ContentPageShell from "@/components/ContentPageShell";
import { contactLinks } from "../profileContent";

export default function ContactPage() {
  return (
    <ContentPageShell kicker="07 / Contact" title="Contact">
      <p className="content-page-lead">Let&apos;s build intelligent automation systems for your business.</p>
      <div className="content-page-contact">
        <p>
          Email: <a href="mailto:ai8254072@gmail.com">ai8254072@gmail.com</a>
        </p>
        <p>
          WhatsApp:{" "}
          <a href="https://wa.me/923221607275" target="_blank" rel="noopener">
            +92 322 1607275
          </a>
        </p>
        <p>
          Instagram:{" "}
          <a href="https://www.instagram.com/abdullahminhas19" target="_blank" rel="noopener">
            @abdullahminhas19
          </a>
        </p>
        <p>Location: Karachi, Pakistan</p>
        <p>Availability: Open to Remote</p>
      </div>
      <div className="content-page-tags">
        {contactLinks.map(item => (
          <a
            key={item.label}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener" : undefined}
          >
            {item.label}
          </a>
        ))}
      </div>
    </ContentPageShell>
  );
}
