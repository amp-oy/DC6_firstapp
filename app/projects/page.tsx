
export const metadata = {
  title: "Projects | john paul",
};

const projects = [
  { id: 1, name: "Project one", description: "One sentence about it." },
  { id: 2, name: "Project two", description: "One sentence about it." },
  { id: 3, name: "Project three", description: "One sentence about it." },
];

export default function ProjectsPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        My Projects
      </h1>

      <div className="space-y-4">
        {projects.map((project) => (
          <div key={project.id} className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold">
              {project.name}
            </h2>

            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
