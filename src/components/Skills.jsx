import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap } from "react-icons/fa";
import {
  SiTailwindcss,
  SiRedux,
  SiTypescript,
  SiMaterialdesign,
} from "react-icons/si";

function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },

    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-600" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
    {
      name: "Material Design",
      icon: <SiMaterialdesign className="text-blue-500" />,
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto text-center px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold mb-8 animate-fadeIn">
          <span className="text-blue-400">Frontend</span> Skills
        </h2>

        {/* Skills Grid */}
        <div className="bg-gray-900 rounded-lg p-10 shadow-lg">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-gray-700 rounded-lg p-6 shadow-md transform hover:scale-110 transition-transform duration-500 animate-slideIn"
              >
                <div className="text-5xl mb-4">{skill.icon}</div>
                <p className="text-lg font-medium">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
