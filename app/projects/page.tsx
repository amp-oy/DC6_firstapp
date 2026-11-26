
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Work | John Paul",
};

const projectList = [
  {
    id: 1,
    name: "TaskMate",
    description:
      "A task management application that helps users organize daily activities, set priorities, and keep track of completed tasks.",
  },
  {
    id: 2,
    name: "FoodExpress",
    description:
      "An online food ordering platform where customers can browse menus, choose meals, and place delivery orders.",
  },
  {
    id: 3,
    name: "BudgetBuddy",
    description:
      "A personal finance application that allows users to record expenses, monitor their spending, and manage their monthly budget.",
  },
];

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="mb-4 text-3xl font-bold">
        My Projects
      </h1>

      <p className="mb-8 text-gray-600">
        Here are some of the applications I have developed and explored.
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {projectList.map((item) => (
          <div
            key={item.id}
            className="rounded-lg bg-white p-6 shadow transition-shadow duration-300 hover:shadow-lg"
          >
            <h2 className="mb-3 text-xl font-semibold">
              {item.name}
            </h2>

            <p className="leading-relaxed text-gray-600">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
