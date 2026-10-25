import { contacts } from "@/lib/content";

export function ContactLinks({ variant = "inline" }: { variant?: "inline" | "left" | "right" }) {
  const labels: (keyof typeof contacts)[] = variant === "left"
    ? ["GitHub", "LinkedIn"]
    : variant === "right" ? ["Resume", "Email"] : ["Resume", "GitHub", "LinkedIn", "Email"];

  return (
    <nav className={variant === "inline" ? "contact-links" : `edge edge-${variant}`} aria-label={variant === "left" ? "Social profiles" : variant === "right" ? "Resume and email" : "Contact and profiles"}>
      {labels.map((label) => (
        <a key={label} href={contacts[label]}>{label}</a>
      ))}
      {variant !== "inline" && <span className="edge-rule" aria-hidden="true" />}
    </nav>
  );
}
