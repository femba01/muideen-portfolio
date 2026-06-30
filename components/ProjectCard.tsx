"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
};

export default function ProjectCard({
  title,
  description,
  image,
  tech,
  github,
  demo,
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)] transition"
    >
      <div className="relative h-56 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">

        <h3 className="text-xl font-semibold text-white">
          {title}
        </h3>

        <p className="text-gray-400 mt-2">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {tech.map((item) => (
            <span
              key={item}
              className="text-xs px-3 py-1 bg-neutral-800 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex gap-6 mt-6 text-sm">

          {/* <a
            href={github}
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            GitHub
          </a> */}

          <a
            href={demo}
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            Live Demo
          </a>

        </div>

      </div>
    </motion.div>
  );
}