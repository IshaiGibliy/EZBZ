export function HeaderCard({
  eyebrow,
  title,
  description,
  children
}: {
  eyebrow?: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="header-card">
      <div className="header-top">
        <div>
          {eyebrow && <div className="eyebrow">{eyebrow}</div>}
          <h1>{title}</h1>
          <p className="muted">{description}</p>
        </div>
        {children}
      </div>
    </section>
  );
}
