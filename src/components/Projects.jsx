function Projects() {
  const projects = [
    {
      title: "Medical Organization Website",
      image: "/projects/medical.png",
      description:
        "A responsive medical organization website featuring healthcare information, doctor profiles, service pages and contact functionality.",
      tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
      github: "#",
      demo: "#",
    },

    {
      title: "Food Delivery Website",
      image: "/projects/food.png",
      description:
        "A modern food delivery platform with engaging layouts, menu sections and a responsive user experience.",
      tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      github: "#",
      demo: "#",
    },

    {
      title: "E-Commerce Website",
      image: "/projects/ecomm.png",
      description:
        "An online shopping platform featuring product displays, responsive layouts and an intuitive browsing experience.",
      tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen px-6 lg:px-10 py-24"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div
          data-aos="fade-up"
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.3em] text-cyan-400 mb-4">
            Portfolio
          </p>

          <h2 className="text-4xl md:text-6xl font-black">
            Featured Projects
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            A selection of projects showcasing my frontend,
            backend and full-stack development experience.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div data-aos="fade-right">
                <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 md:h-80 object-cover hover:scale-105 transition duration-500"
                  />
                </div>
              </div>

              {/* Content */}
              <div data-aos="fade-left">
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="
                        px-4 py-2
                        rounded-full
                        bg-cyan-500/10
                        border border-cyan-400/20
                        text-cyan-300
                        text-sm
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.github}
                    className="
                      px-6 py-3
                      rounded-full
                      border border-white/20
                      hover:bg-white/10
                      transition
                    "
                  >
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    className="
                      px-6 py-3
                      rounded-full
                      bg-cyan-400
                      text-black
                      font-semibold
                      hover:scale-105
                      transition
                    "
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;