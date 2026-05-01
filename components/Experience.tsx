
"use client";

const experiences = [
  {
    role: "Lead Senior Frontend Engineer",
    company: "Chisquares",
    period: "Dec 2023 - Sep 2025",
    description:
      "Led a distributed frontend team building scalable applications using React, TypeScript, and Next.js. Defined architecture, introduced CI/CD workflows, and mentored engineers to improve productivity and code quality.",
  },
  {
    role: "Frontend Engineer",
    company: "Chisquares",
    period: "Oct 2022 - Nov 2023",
    description:
      "Developed scientific web applications with optimized UI components and efficient state management. Collaborated with data teams to improve data visualization and performance.",
  },
  {
    role: "Frontend Developer / Web Development Lead",
    company: "Zarttech",
    period: "Jun 2021 - Jun 2023",
    description:
      "Led frontend strategy and mentored developers on scalable architecture for enterprise-grade projects across Europe and the U.S. Improved application load performance by 40%.",
  },
  {
    role: "Frontend Developer",
    company: "Zarttech",
    period: "Dec 2020 - Jun 2021",
    description:
      "Developed modular and reusable UI components for healthcare, finance, and e-commerce client applications.",
  },
  {
    role: "Frontend Web Developer",
    company: "TTF Ltd",
    period: "Oct 2019 - Present",
    description:
      "Built responsive websites and single-page applications tailored for business clients while ensuring strong performance and modern UX.",
  },
];


import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-black text-white py-24 px-6"
    >
      <div className="max-w-4xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-20">
          Experience
        </h2>

        <div className="relative border-l border-blue-500/30 pl-8 space-y-16">

          {experiences.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >

              <div className="absolute -left-[45px] top-1 w-6 h-6 bg-blue-500 rounded-full border-4 border-black" />

              <h3 className="text-xl font-semibold">
                {job.role}
              </h3>

              <p className="text-blue-400">
                {job.company}
              </p>

              <p className="text-gray-400 text-sm">
                {job.period}
              </p>

              <p className="text-gray-500 mt-2">
                {job.description}
              </p>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}