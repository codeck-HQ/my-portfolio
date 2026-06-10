import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMysql,
  SiJquery,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

function Skills() {
const skills = [
  // Frontend
  {
    name: "HTML5",
    level: "Advanced",
    icon: <FaHtml5 className="text-orange-500 text-5xl" />,
  },

  {
    name: "CSS3",
    level: "Advanced",
    icon: <FaCss3Alt className="text-blue-500 text-5xl" />,
  },

  {
    name: "Bootstrap",
    level: "Advanced",
    icon: <FaBootstrap className="text-purple-500 text-5xl" />,
  },

  {
    name: "Tailwind CSS",
    level: "Intermediate",
    icon: <SiTailwindcss className="text-cyan-300 text-5xl" />,
  },

  {
    name: "JavaScript",
    level: "Intermediate",
    icon: <FaJs className="text-yellow-400 text-5xl" />,
  },

  {
    name: "jQuery",
    level: "Intermediate",
    icon: <SiJquery className="text-blue-400 text-5xl" />,
  },

  {
    name: "React",
    level: "Learning",
    icon: <FaReact className="text-cyan-400 text-5xl" />,
  },

  {
    name: "PHP",
    level: "Intermediate",
    icon: <FaPhp className="text-indigo-400 text-5xl" />,
  },

  {
    name: "MySQL",
    level: "Intermediate",
    icon: <SiMysql className="text-sky-400 text-5xl" />,
  },

  {
    name: "Git",
    level: "Intermediate",
    icon: <FaGitAlt className="text-orange-500 text-5xl" />,
  },

  {
    name: "GitHub",
    level: "Intermediate",
    icon: <FaGithub className="text-white text-5xl" />,
  },

  {
    name: "VS Code",
    level: "Daily Use",
    icon: <VscVscode className="text-blue-400 text-5xl" />,
  },
];

  return (
    <section
      id="skills"
      className="min-h-screen px-6 lg:px-10 py-24"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div
          data-aos="fade-up"
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[0.3em] text-cyan-400 mb-4">
             Expertise
          </p>

          <h2 className="text-4xl md:text-6xl font-black">
            Technologies Behind My Work
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Technologies and tools I use to build responsive,
            scalable and user-focused web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="
                p-8
                rounded-3xl
                bg-white/5
                border border-cyan-400/20
                shadow-[0_0_20px_rgba(34,211,238,0.1)]
                backdrop-blur-xl
                flex flex-col
                items-center
                justify-center
                gap-4
                cursor-pointer
                active:scale-95
                md:hover:-translate-y-2
                md:hover:border-cyan-400/40
                md:hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]
                transition-all
                duration-300
              "
            >
              {skill.icon}

<h3 className="font-semibold text-center">
  {skill.name}
</h3>

<p className="text-xs text-gray-500">
  {skill.level}
</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;