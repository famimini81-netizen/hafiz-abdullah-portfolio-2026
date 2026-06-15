import NavBar from "./NavBar";

type ContentPageShellProps = {
  kicker: string;
  title: string;
  children: React.ReactNode;
};

export default function ContentPageShell({ kicker, title, children }: ContentPageShellProps) {
  return (
    <main className="content-page">
      <NavBar />
      <div className="page-shell">
        <section className="content-page-section">
          <p className="content-page-kicker">{kicker}</p>
          <h1>{title}</h1>
          <div className="content-page-body">{children}</div>
        </section>
      </div>
    </main>
  );
}
