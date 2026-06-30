"use client";

import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
} from "react-icons/fa";
import { FaPython, FaWordpress } from "react-icons/fa6";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiReactquery,
  SiGraphql,
  SiVite,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const skills = [
  {
    name: "React",
    icon: <FaReact size={40} />,
    description: "Building scalable component-driven interfaces.",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs size={40} />,
    description: "Full-stack React framework with SSR and routing.",
  },
  {
    name: "Next.js",
    icon: <SiVite size={40} />,
    description: "Full-stack React framework with SSR and routing.",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={40} />,
    description: "Type-safe JavaScript for large-scale apps.",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={40} />,
    description: "Utility-first CSS for rapid UI development.",
  },
  {
    name: "React Query",
    icon: <SiReactquery size={40} />,
    description: "Predictable global state management.",
  },
  {
    name: "RESTful APIs",
    icon: <TbApi size={40} />,
    description: "Building scalable RESTful APIs.",
  },
  {
    name: "GraphQL APIs",
    icon: <SiGraphql size={40} />,
    description: "Building scalable GraphQL APIs.",
  },
  {
    name: "WordPress",
    icon: <FaWordpress size={40} />,
    description: "WordPress Web Development.",
  },
  {
    name: "HTML5",
    icon: <FaHtml5 size={40} />,
    description: "Semantic markup and accessibility.",
  },
  {
    name: "Python",
    icon: <FaPython size={40} />,
    description: "Data science, analysis with visualization.",
  },
];

export default function TechStack() {
  return (
    <section
      id="skills"
      className="bg-linear-to-b from-black via-[#0f172a] to-black py-24 px-6 text-white"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-16">
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">

          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 rounded-xl bg-[#111827] border border-white/10 hover:border-blue-500 transition relative overflow-hidden"
            >
              
              {/* Glow Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-blue-500/10 to-blue-500/10" />

              <div className="relative z-10">

                <div className="text-blue-400 mb-4">
                  {skill.icon}
                </div>

                <h3 className="text-lg font-semibold">
                  {skill.name}
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  {skill.description}
                </p>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}