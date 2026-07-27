import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "ProcureFlow",
    description:
      "An end-to-end procurement workspace that helps organizations manage requests, approvals, suppliers, purchase orders, budgets, inventory, and audit trails from one place. Built with React, TypeScript, Tailwind CSS, TanStack Query, and Zustand for state management. And Supabase for authentication and database management.",
    image: "/image/projects/procureflow.png",
    tech: ["React", "TypeScript", "Tailwind", "TanStack Query", "Zustand", "Supabase"],
    github: "https://github.com/femba01/procureFlowApp",
    demo: "https://procure-flow-app.vercel.app/",
    featured: true,
  },
  // {
  //   title: "AI Scientist Research Dashboard",
  //   description:
  //     "Worked with a team of developers to build a scalable analytics ai research platform that visualizes real-time operational data using optimized rendering and reusable chart components.",
  //   image: "/image/projects/chisquares-dashboard.png",
  //   tech: ["React", "Vite", "TypeScript", "Tailwind"],
  //   github: "#",
  //   demo: "https://app.chisquares.com",
  // },
  // {
  //   title: "Shipment Management Dashboard",
  //   description:
  //     "Dashboard for creating, managing and tracking shipments in real-time.",
  //   image: "/image/projects/unpause-dashboard.png",
  //   tech: ["Next.js", "TypeScript", "Tailwind"],
  //   github: "https://github.com/unpauseglobal/frontend-dev",
  //   demo: "#",
  // },
  {
    title: "Shipment Admin Dashboard",
    description:
      "Dashboard for managing customer's shipments, procurements, pickups, users management, and system settings for Unpause",
    image: "/image/projects/shipmentAdmin.png",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/unpauseglobal/frontend-dev",
    demo: "#",
  },
  // {
  //   title: "Super Admin Dashboard",
  //   description:
  //     "Building a super admin dashboard for managing users, permissions, live chat feature with ticketing, and system settings for Joble, a Zartech product.",
  //   image: "/image/projects/jobpro-super-admin.png",
  //   tech: ["React", "TypeScript", "Tailwind"],
  //   github: "#",
  //   demo: "#",
  // },
  // {
  //   title: "Creditframes Loan App Dashboard",
  //   description:
  //     "Dashboard for managing and tracking loan applications in real-time. Features include user authentication, application tracking, and data visualization.",
  //   image: "/image/projects/creditframes.png",
  //   tech: ["React", "TypeScript", "Tailwind"],
  //   github: "#",
  //   demo: "#",
  // },
  // {
  //   title: "An NGO Donation Platform",
  //   description:
  //     "A donation platform for an NGO that allows users to easily contribute to charitable causes. The platform features a user-friendly interface, secure payment processing, and real-time donation tracking.",
  //   image: "/image/projects/childrensgate.png",
  //   tech: ["Next.js", "TypeScript", "Tailwind"],
  //   github: "#",
  //   demo: "https://childrensgate.org/",
  // },
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
      className="scroll-mt-24 bg-black px-6 py-24 text-white"
    >
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">Selected work</p>
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Products built for real-world impact</h2>
        <p className="mt-5 leading-7 text-gray-400">A selection of dashboards, platforms, and digital products I have designed and engineered.</p>
      </div>

      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
