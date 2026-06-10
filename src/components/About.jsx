import CountUpModule from "react-countup";

const CountUp = CountUpModule.default;
function About() {
  return (
    <section
      id="about"
      className="min-h-screen px-6 lg:px-10 py-24"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div data-aos="fade-up">
          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
            About Me
          </p>

          <h2 className="text-4xl md:text-6xl font-black mb-8">
            Turning Ideas Into
            <span className="text-cyan-400"> Web Applications</span>
          </h2>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div data-aos="fade-right">
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I'm a Full-Stack Developer with experience building
              dynamic web applications using PHP, MySQL,
              JavaScript and React.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I enjoy creating solutions that are fast,
              scalable and user-friendly while continuously
              improving my skills and exploring modern web technologies.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              Currently focused on strengthening my React skills
              while leveraging my backend experience to build
              complete web applications.
            </p>
          </div>

        {/* Right Side */}
        <div
          data-aos="fade-left"
          className="grid grid-cols-2 gap-6"
        >
          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all duration-300">
            <h3 className="text-4xl font-black text-cyan-400">
              <CountUp end={10} duration={2} enableScrollSpy />+
            </h3>

            <p className="text-gray-400 mt-2">
              Projects Built
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all duration-300">
            <h3 className="text-4xl font-black text-cyan-400">
              <CountUp end={8} duration={2} enableScrollSpy/>+
            </h3>

            <p className="text-gray-400 mt-2">
              Core Technologies
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all duration-300">
            <h3 className="text-4xl font-black text-cyan-400">
             React
            </h3>

            <p className="text-gray-400 mt-2">
              Frontend Development
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all duration-300">
            <h3 className="text-4xl font-black text-cyan-400">
             PHP & MySQL
            </h3>

            <p className="text-gray-400 mt-2">
              Backend Development
            </p>
          </div>
        </div>

        </div>
      </div>
    </section>
  );
}

export default About;