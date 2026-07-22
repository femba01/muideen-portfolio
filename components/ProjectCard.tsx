"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

type Props = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
  featured?: boolean;
};

export default function ProjectCard({
  title,
  description,
  image,
  tech,
  github,
  demo,
  featured = false,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0b1120] transition-colors hover:border-blue-500/60 ${featured ? "md:col-span-2 lg:col-span-2" : ""}`}
    >
      <div className={`relative w-full overflow-hidden bg-slate-950 ${featured ? "h-64 md:h-80" : "h-56"}`}>
        <Image
          src={image}
          alt={`${title} project preview`}
          fill
          sizes={featured ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
          className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#0b1120]/40 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-7">

        <h3 className="text-xl font-semibold text-white">
          {title}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-6 text-gray-400">
          {description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-5 text-sm font-medium">
          {demo !== "#" && (
            <a href={demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-blue-400 transition hover:text-blue-300">
              Live project <ArrowUpRight size={16} />
            </a>
          )}
          {github !== "#" && (
            <a href={github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-gray-300 transition hover:text-white">
              <FaGithub size={16} /> Source
            </a>
          )}
        </div>

      </div>
    </motion.div>
  );
}
