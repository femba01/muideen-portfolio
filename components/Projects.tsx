import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "AI SaaS Dashboard",
    description:
      "Built a scalable analytics dashboard that visualizes real-time operational data using optimized rendering and reusable chart components.",
    image: "/image/projects/chisquares-dashboard.png",
    tech: ["React", "TypeScript", "Tailwind"],
    github: "#",
    demo: "#",
  },
  {
    title: "Shipment Management Dashboard",
    description:
      "Dashboard for managing and tracking shipments in real-time.",
    image: "/image/projects/unpause-dashboard.png",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    github: "#",
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