import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import {
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen px-6 lg:px-10 py-24"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div
          data-aos="fade-up"
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[0.3em] text-cyan-400 mb-4">
            Contact
          </p>

          <h2 className="text-4xl md:text-6xl font-black">
            Ready To Build
            <span className="text-cyan-400">
              {" "}Something Great?
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            Whether it's a business website, web application,
            freelance project or collaboration, I'm always open
            to discussing new opportunities.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Side */}
          <div
            data-aos="fade-right"
            className="
              p-8
              rounded-3xl
              bg-white/5
              border border-white/10
              backdrop-blur-xl
              shadow-[0_0_20px_rgba(34,211,238,0.08)]
            "
          >
            <h3 className="text-3xl font-bold mb-6">
              Get In Touch
            </h3>

            <p className="text-gray-400 mb-10 leading-relaxed">
              Have a project idea, freelance opportunity,
              internship, job offer or collaboration in mind?
              Feel free to reach out and let's create something amazing.
            </p>

            <div className="space-y-8">

              <div className="flex items-center gap-4">
                <div
                  className="
                    p-4
                    rounded-full
                    bg-cyan-500/10
                    border border-cyan-400/20
                  "
                >
                  <FaEnvelope className="text-cyan-400 text-xl" />
                </div>

                <div>
                  <p className="text-cyan-400 font-semibold">
                    Email
                  </p>

                  <p className="text-gray-300">
                  codeckhq@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div
                  className="
                    p-4
                    rounded-full
                    bg-cyan-500/10
                    border border-cyan-400/20
                  "
                >
                  <FaMapMarkerAlt className="text-cyan-400 text-xl" />
                </div>

                <div>
                  <p className="text-cyan-400 font-semibold">
                    Location
                  </p>

                  <p className="text-gray-300">
                    West Africa
                  </p>
                </div>
              </div>

            </div>

            {/* Socials */}
            <div className="flex gap-4 mt-10">

              <a
                href="https://github.com/codeck-HQ"
                className="
                  p-4
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
                <FaGithub className="text-xl" />
              </a>

              <a
                href="https://www.linkedin.com/in/chinemerem-ihemegbulam-381458376/" target="_blank"
                className="
                  p-4
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
                <FaLinkedin className="text-xl" />
              </a>

                 <a
                href="https://x.com/codeck_Hq" target="_blank"
                className="
                  p-4
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
                <FaXTwitter className="text-xl" />
              </a>

                <a
                href="#"
                className="
                  p-4
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
                <FaTiktok className="text-xl" />
              </a>

            </div>
          </div>

          {/* Right Side */}
          <form
            data-aos="fade-left"
            className="
              p-8
              rounded-3xl
              bg-white/5
              border border-white/10
              backdrop-blur-xl
              shadow-[0_0_20px_rgba(34,211,238,0.08)]
              space-y-6
            "
          >
            <input
              type="text"
              placeholder="Your Name"
              className="
                w-full
                p-4
                rounded-xl
                bg-black/20
                border border-white/10
                outline-none
                transition-all
                duration-300
                focus:border-cyan-400/50
                focus:shadow-[0_0_20px_rgba(34,211,238,0.2)]
              "
            />

            <input
              type="email"
              placeholder="Your Email"
              className="
                w-full
                p-4
                rounded-xl
                bg-black/20
                border border-white/10
                outline-none
                transition-all
                duration-300
                focus:border-cyan-400/50
                focus:shadow-[0_0_20px_rgba(34,211,238,0.2)]
              "
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="
                w-full
                p-4
                rounded-xl
                bg-black/20
                border border-white/10
                outline-none
                resize-none
                transition-all
                duration-300
                focus:border-cyan-400/50
                focus:shadow-[0_0_20px_rgba(34,211,238,0.2)]
              "
            />

            <button
              type="submit"
              className="
                px-8
                py-4
                rounded-full
                bg-cyan-400
                text-black
                font-bold
                hover:scale-105
                hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]
                transition-all
                duration-300
              "
            >
              Send Message
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;