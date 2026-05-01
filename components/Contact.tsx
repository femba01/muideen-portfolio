// import React from 'react'

// type Props = {}

// export default function Contact({ }: Props) {
//     return (
//         <section id="contact" className="bg-black text-white py-24 text-center">
//             <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>

//             <p className="text-gray-400 mb-8">
//                 I'm open to remote frontend opportunities.
//             </p>

//             <div className="flex justify-center gap-6">
//                 <a href="mailto:adeogunmuideen01@gmail.com">Email</a>
//                 <a href="https://github.com/femba01">GitHub</a>
//                 <a href="https://www.linkedin.com/in/muideen-adeogun/">LinkedIn</a>
//             </div>
//         </section>
//     )
// }


"use client";

import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";

export default function Footer() {
    return (
        <section>
            <div id="contact" className="bg-linear-to-b from-[#000413] to-[#020617] text-white py-24 text-center">
                <h2 className="text-6xl font-bold mb-6">Let's Work Together</h2>

                <p className="text-gray-400 mb-8">
                    I'm open to remote frontend opportunities.
                </p>
            </div>

            <hr/>

            <footer id="contact" className="bg-linear-to-b from-[#020617] to-[#010410] text-white py-20">



                {/* BIG NAME */}
                <div className="text-center">
                    <h1 className="text-5xl md:text-9xl font-bold tracking-wide bg-linear-to-b from-white via-gray-500 to-gray-900 text-transparent bg-clip-text">
                        MUIDEEN ADEOGUN
                    </h1>
                </div>

                {/* Divider */}
                <div className="my-10 border-t border-white/10 w-full max-w-5xl mx-auto" />

                {/* Nav Links */}
                <div className="flex justify-center gap-8 text-gray-400 text-sm">
                    <Link href="#skills">Skills</Link>
                    <Link href="#projects">Projects</Link>
                    <Link href="#experience">Experience</Link>
                    <Link href="#contact">Contact</Link>
                </div>

                {/* Social Icons */}
                <div className="flex justify-center gap-6 mt-10">

                    {[
                        { icon: <FaLinkedinIn size={20} />, link: "https://www.linkedin.com/in/muideen-adeogun/" },
                        { icon: <FaGithub size={20} />, link: "https://github.com/femba01" },
                        { icon: <FaEnvelope size={20} />, link: "mailto:adeogunmuideen01@gmail.com" },
                    ].map((item, index) => (
                        <a
                            key={index}
                            href={item.link}
                            target="_blank"
                            className="w-16 h-16 flex items-center justify-center rounded-full border border-blue-500/30 text-gray-200 hover:text-white hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition"
                        >
                            {item.icon}
                        </a>
                    ))}

                </div>

                {/* Bottom Text */}
                <div className="text-center text-gray-400 text-xs mt-10">
                    © {new Date().getFullYear()} Muideen Adeogun. All rights reserved.
                </div>

            </footer>
        </section>
    );
}