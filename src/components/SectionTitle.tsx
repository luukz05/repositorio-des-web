import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  icon?: ReactNode;
}

export default function SectionTitle({ children, icon }: Props) {
  return (
    <h2 className="mb-4 flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-text-secondary">
      {icon && <span className="text-accent-light">{icon}</span>}
      {children}
    </h2>
  );
}
