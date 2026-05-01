import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "AI SaaS Dashboard",
    description:
      "Data driven dashboard for analyzing and visualizing user data.",
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
    title: "Multiple Website Portfolio",
    description:
      "Showcasing various web development projects and experiences.",
    image: "/image/projects/websites.jpeg",
    tech: ["Next.js", "TypeScript", "Tailwind"],
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