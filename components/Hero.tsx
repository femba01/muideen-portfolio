"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center px-6 relative overflow-hidden">

      <div className="max-w-7xl mx-auto my-52 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}>


          <p className="text-gray-200 text-lg">
            Hi, I'm Muideen Adeogun, building
          </p>

          <h1 className="text-5xl md:text-6xl font-bold my-6">
            <span className="italic text-white">
              Digital Experiences.
            </span>
          </h1>

          <p className="text-gray-200 mt-6 max-w-lg leading-loose">
            From scalable SaaS dashboards to production-ready applications,
            I build high-performance, user-focused web products using React and Next.js.
          </p>

          <div className="flex gap-4 mt-10">

            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-linear-to-r from-blue-500 to-blue-700"
            >
              Let's Connect
            </a>

            <a
              href="#projects"
              className="px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur"
            >
              See My Work
            </a>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center items-center">

          {/* Glow Circle */}
          <div className="absolute w-150 h-100 bg-blue-600/90 rounded-full blur-[120px]" />

          {/* Profile Image */}
          <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }} className="bg-red-100 relative w-120 h-120 rounded-full overflow-hidden border border-white/10">
            <Image
              src="/image/profile.png"
              alt="Muideen"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Floating Cards */}

          {/* Experience */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute bottom-0 left-0 bg-white/5 backdrop-blur-md border border-white/10 px-6 py-4 rounded-xl"
          >
            <p className="text-2xl font-bold">6+</p>
            <p className="text-gray-400 text-sm">Years Experience</p>
          </motion.div>

          {/* Projects */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-0 right-0 bg-white/5 backdrop-blur-md border border-white/10 px-6 py-4 rounded-xl"
          >
            <p className="text-2xl font-bold">50+</p>
            <p className="text-gray-400 text-sm">Projects Built</p>
          </motion.div>

          {/* Performance */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 7, repeat: Infinity }}
            className="absolute top-10 left-0 bg-white/5 backdrop-blur-md border border-white/10 px-6 py-4 rounded-xl"
          >
            <p className="text-2xl font-bold">40%</p>
            <p className="text-gray-400 text-sm">Performance Boost</p>
          </motion.div>

          {/* Team Impact */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute bottom-10 right-0 bg-white/5 backdrop-blur-md border border-white/10 px-6 py-4 rounded-xl"
          >
            <p className="text-2xl font-bold">15+</p>
            <p className="text-gray-400 text-sm">Developers Mentored</p>
          </motion.div>

        </div>

      </div>

    </section>
  );
}