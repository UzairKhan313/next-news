"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navlink = ({ href, children }) => {
  const path = usePathname();
  return (
    <Link href={href} className={path.startsWith(href) ? "active" : ""}>
      {children}
    </Link>
  );
};

export default Navlink;
