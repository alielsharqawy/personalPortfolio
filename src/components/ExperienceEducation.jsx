import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

function ExperienceEducation() {
  const experiences = [
    {
      jobTitle: "Freelance Frontend Developer",
      employer: "Nexus Agency",
      city: "Mansoura",
      country: "Cairo",
      startDate: "Present",
      description: `
        Responsible for designing and implementing the visual and interactive elements of websites and web applications. 
        Bridged the gap between design and functionality, ensuring a seamless user experience.
        
        - Developed a personal portfolio website to showcase skills and projects.
        - Collaborated with Nexus Agency to create responsive and engaging websites.
        - Focused on high-performance and optimization for better usability.
      `,
    },
  ];

  const educationData = [
    {
      institution: "Mansoura University",
      degree: "Bachelor's in Computer Science",
      duration: "Oct 2020 - Sep 2024",
      grade: "Still Studying",
      description: "I am currently pursuing a degree in Computer Science.",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-12">
          Experience & Education
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <div>
            <h3 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <FaBriefcase className="text-blue-500" /> Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow animate-fadeIn"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center">
                      <FaBriefcase className="text-2xl" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold">{exp.jobTitle}</h4>
                      <p className="text-sm text-gray-400">{exp.employer}</p>
                      <p className="text-sm text-gray-400">
                        {exp.city}, {exp.country} | {exp.startDate}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <FaGraduationCap className="text-blue-500" /> Education
            </h3>
            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow animate-fadeIn"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center">
                      <FaGraduationCap className="text-2xl" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold">
                        {edu.institution}
                      </h4>
                      <p className="text-sm text-gray-400">{edu.degree}</p>
                      <p className="text-sm text-gray-400">{edu.duration}</p>
                    </div>
                  </div>
                  <p className="text-gray-300">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceEducation;
