import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import {
  FaXTwitter,
  FaTiktok,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Logo / Name */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-black">
              Vybz<span className="text-cyan-400">/</span>Codeck
            </h3>

            <p className="text-gray-400 mt-2">
              Full-Stack Developer
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6 text-gray-400">

            <a
              href="#home"
              className="hover:text-cyan-400 transition"
            >
              Home
            </a>

            <a
              href="#about"
              className="hover:text-cyan-400 transition"
            >
              About
            </a>

            <a
              href="#skills"
              className="hover:text-cyan-400 transition"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="hover:text-cyan-400 transition"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="hover:text-cyan-400 transition"
            >
              Contact
            </a>

          </div>

          {/* Socials */}
          <div className="flex gap-4">

            <a
              href="#"
              className="
                p-3
                rounded-full
                bg-white/5
                border border-white/10
                hover:border-cyan-400/40
                hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <FaGithub />
            </a>

            <a
              href="#"
              className="
                p-3
                rounded-full
                bg-white/5
                border border-white/10
                hover:border-cyan-400/40
                hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <FaLinkedin />
            </a>

            <a
              href="#"
              className="
                p-3
                rounded-full
                bg-white/5
                border border-white/10
                hover:border-cyan-400/40
                hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <FaXTwitter />
            </a>

            <a
              href="#"
              className="
                p-3
                rounded-full
                bg-white/5
                border border-white/10
                hover:border-cyan-400/40
                hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <FaTiktok />
            </a>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-white/10 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 Vybz. Built with React & Tailwind CSS.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;