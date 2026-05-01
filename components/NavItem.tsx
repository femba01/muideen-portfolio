"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NavItem({
  href,
  label,
  active,
  scrolled,
}: {
  href: string;
  label: string;
  active: boolean;
  scrolled: boolean;
}) {
  return (
    <Link
      href={href}
      className={`relative px-4 py-1 text-[16px] ${active
          ? "text-primary"
          : scrolled
            ? "text-gray-600"
            : "text-white"
        } hover:text-primary transition`}
    >
      {label}

      {/* underline */}
      <motion.span
        className="absolute left-0 -bottom-1 h-0.5 w-full bg-primary origin-left"
        initial={{ scaleX: active ? 1 : 0 }}
        animate={{ scaleX: active ? 1 : 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
    </Link>
  );
}