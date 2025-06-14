"use client";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItemProps = {
  label: string;
  icon: IconDefinition;
  href: string;
  active?: boolean;
};

export const NavItem = ({ href, icon, label, active }: NavItemProps) => {
  const pathName = usePathname();
  const isMe = pathName === href;

  return (
    <Link
      href={href}
      className={`flex items-center gap-6 py-3 ${
        active || isMe ? "opacity-100" : "opacity-50"
      } hover:opacity-100`}
    >
      <FontAwesomeIcon icon={icon} className="size-6 " />
      <div className="text-lg">{label}</div>
    </Link>
  );
};
