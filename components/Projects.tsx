import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "AI Scientist Research Dashboard",
    description:
      "Worked with a team of developers to build a scalable analytics ai research platform that visualizes real-time operational data using optimized rendering and reusable chart components.",
    image: "/image/projects/chisquares-dashboard.png",
    tech: ["React", "Vite", "TypeScript", "Tailwind"],
    github: "#",
    demo: "https://app.chisquares.com",
  },
  {
    title: "Shipment Management Dashboard",
    description:
      "Dashboard for creating, managing and tracking shipments in real-time.",
    image: "/image/projects/unpause-dashboard.png",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/unpauseglobal/frontend-dev",
    demo: "#",
  },
  {
    title: "Shipment Admin Dashboard",
    description:
      "Dashboard for managing shipments, users, and system settings for Unpause",
    image: "/image/projects/shipmentAdmin.png",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/unpauseglobal/frontend-dev",
    demo: "#",
  },
  {
    title: "Super Admin Dashboard",
    description:
      "Building a super admin dashboard for managing users, permissions, live chat feature with ticketing, and system settings for Joble, a Zartech product.",
    image: "/image/projects/jobpro-super-admin.png",
    tech: ["React", "TypeScript", "Tailwind"],
    github: "#",
    demo: "#",
  },
  {
    title: "Creditframes Loan App Dashboard",
    description:
      "Dashboard for managing and tracking loan applications in real-time. Features include user authentication, application tracking, and data visualization.",
    image: "/image/projects/creditframes.png",
    tech: ["React", "TypeScript", "Tailwind"],
    github: "#",
    demo: "#",
  },
  {
    title: "An NGO Donation Platform",
    description:
      "A donation platform for an NGO that allows users to easily contribute to charitable causes. The platform features a user-friendly interface, secure payment processing, and real-time donation tracking.",
    image: "/image/projects/childrensgate.png",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    github: "#",
    demo: "https://childrensgate.org/",
  },
  {
    title: "An IT Consulting Firm Platform",
    description:
      "A modern website for an IT consulting firm that showcases their services, case studies, and contact information. The platform features a responsive design, interactive elements, and optimized performance.",
    image: "/image/projects/ttfltd.png",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/femba01/ttfltd",
    demo: "https://www.ttfltd.com/",
  },
  {
    title: "A Energy Construction Company Platform",
    description:
      "A website for an energy construction company that highlights their projects, services, and expertise in the industry. The platform features a clean design, easy navigation, and engaging content to attract potential clients.",
    image: "/image/projects/phoenix.png",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/femba01/phoenix-webiste",
    demo: "https://phoenix-webiste.vercel.app/",
  },
  {
    title: "An Interior Design and Construction Firm Platform",
    description:
      "A website for an interior design firm that showcases their work, services, and expertise. The platform features a clean design, easy navigation, and engaging content to attract potential clients.",
    image: "/image/projects/silk-lagos.png",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/femba01/silk-lagos",
    demo: "https://silklagos.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-black text-white py-24 px-6"
    >
      <h2 className="text-4xl font-bold text-center mb-16">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}