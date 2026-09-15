import type { LucideIcon } from "lucide-react";

/** Tile com ilustração de linha teal. Espaço reservado evita layout shift. */
export function IconTile({ Icon, label }: { Icon: LucideIcon; label: string }) {
  return (
    <span className="icon-tile" role="img" aria-label={label}>
      <Icon className="icon-line" size={30} strokeWidth={1.25} aria-hidden="true" />
    </span>
  );
}
