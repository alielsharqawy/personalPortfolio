import { useState } from "react";
import img1 from "../components/img/1.jpeg";
import img2 from "../components/img/2.jpeg";
import img3 from "../components/img/3.jpeg";

function Projects() {
  const allProjects = [
    {
      title: "Landing Store",
      category: "E-Commerce",
      description: "A modern and responsive e-commerce landing page.",
      image: img1,
      link: "https://landing-store.vercel.app/",
    },
    {
      title: "Management System",
      category: "Management",
      description: "A robust management system with a user-friendly interface.",
      image: img2,
      link: "https://management-system-beryl-sigma.vercel.app/",
    },
    {
      title: "CRUD App",
      category: "Web Application",
      description: "A basic CRUD application showcasing data manipulation.",
      image: img3,
      link: "https://crud-six-fawn.vercel.app/",
    },
  ];

  const categories = ["All", "E-Commerce", "Management", "Web Application"];

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-blue-400 text-4xl font-bold mb-8">Projects</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-12">
          I have worked on a wide range of projects. From flutter apps to web
          apps. Here are some of my projects.
        </p>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 flex-wrap mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold text-lg transition-all ${
                activeCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-blue-500 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-500"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:from-purple-600 hover:to-indigo-600 transition-all"
                >
                  View
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
