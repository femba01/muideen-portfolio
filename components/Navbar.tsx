"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  // Detect scroll for navbar style
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active section detection
      const sections = links.map((l) => l.href.replace("#", ""));
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 100;
          const bottom = top + el.offsetHeight;

          if (window.scrollY >= top && window.scrollY < bottom) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-7xl px-2">

      {/* <div className="
        flex items-center justify-between
        px-6 py-5
        rounded-full
        bg-linear-to-r from-white/10 to-white/5
        backdrop-blur-xl
        border border-white/10
        shadow-[0_8px_30px_rgba(0,0,0,0.3)]
      "> */}

      <div
        className={`
          flex items-center justify-between px-6 py-5 rounded-full transition-all duration-300
          ${scrolled
            ? "bg-white/10 backdrop-blur-xl border border-white/10 shadow-lg"
            : "bg-transparent"}
        `}
      >

        {/* Logo */}
        <h1 className="text-3xl text-white font-semibold tracking-wide">
          Muideen <span className="text-blue-400">A.</span>
        </h1>

        {/* Center Nav */}
        <div className="hidden md:flex gap-14 text-gray-300">
          {links.map((link) => {
            const isActive = active === link.href.replace("#", "");

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative transition ${
                  isActive ? "text-white" : "hover:text-white"
                }`}
              >
                {link.name}

                {isActive && (
                  <motion.span
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400"
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          className="
            hidden md:block
            px-8 py-3
            rounded-full
            bg-linear-to-r from-blue-500 to-blue-700
            text-white font-medium
            hover:opacity-90 transition
            shadow-md
          "
        >
          Hire Me
        </a>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-4 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 p-6 md:hidden"
          >

            <div className="flex flex-col gap-6 text-gray-300">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="hover:text-white"
                >
                  {link.name}
                </Link>
              ))}

              <a
                href="#contact"
                className="px-5 py-2 rounded-full bg-linear-to-r from-blue-500 to-blue-700 text-white text-center"
              >
                Hire Me
              </a>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
