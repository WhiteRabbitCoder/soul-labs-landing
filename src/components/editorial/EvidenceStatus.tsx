type EvidenceStatusProps = {
  status: "confirmed" | "testing" | "pending";
  label: string;
  title: string;
  children: string;
};

const statusLabels = {
  confirmed: "Confirmado",
  testing: "En observación",
  pending: "Pendiente de evidencia",
};

export function EvidenceStatus({ status, label, title, children }: EvidenceStatusProps) {
  return (
    <article className={`evidence-card evidence-card--${status}`}>
      <div className="evidence-card__status">
        <span aria-hidden="true" />
        {statusLabels[status]}
      </div>
      <p className="evidence-card__label">{label}</p>
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}
