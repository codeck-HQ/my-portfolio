import { useEffect, useState } from "react";

import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMysql,
} from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiJquery } from "react-icons/si";

import { motion, AnimatePresence } from "framer-motion";

function Hero() {
  const [currentCard, setCurrentCard] = useState(0);

const cards = [
  {
    file: "developer.js",
    title: "Developer Profile",
    type: "code",
    glow: "rgba(255,255,255,0.15)",
  },

  {
    file: "server.php",
    title: "PHP",
    icon: <FaPhp className="text-indigo-400 text-6xl md:text-8xl" />,
    content: "Developing dynamic backend functionality.",
    glow: "rgba(129,140,248,0.35)",
  },

  {
    file: "database.sql",
    title: "MySQL",
    icon: <SiMysql className="text-sky-400 text-6xl md:text-8xl" />,
    content: "Managing and querying relational databases.",
    glow: "rgba(14,165,233,0.35)",
  },

  {
    file: "app.js",
    title: "JavaScript",
    icon: <FaJs className="text-yellow-400 text-6xl md:text-8xl" />,
    content: "Adding logic and interactivity to applications.",
    glow: "rgba(250,204,21,0.35)",
  },

  {
    file: "react.jsx",
    title: "React",
    icon: <FaReact className="text-cyan-400 text-6xl md:text-8xl" />,
    content: "Building modern and interactive user interfaces.",
    glow: "rgba(34,211,238,0.35)",
  },

  {
    file: "bootstrap.css",
    title: "Bootstrap",
    icon: <FaBootstrap className="text-purple-500 text-6xl md:text-8xl" />,
    content: "Building responsive layouts with Bootstrap framework.",
    glow: "rgba(168,85,247,0.35)",
  },

  {
    file: "tailwind.config.js",
    title: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-300 text-6xl md:text-8xl" />,
    content: "Building fast and scalable responsive interfaces.",
    glow: "rgba(34,211,238,0.35)",
  },

  {
    file: "jquery.js",
    title: "jQuery",
    icon: <SiJquery className="text-blue-400 text-6xl md:text-8xl" />,
    content: "Simplifying DOM manipulation and web interactions.",
    glow: "rgba(96,165,250,0.35)",
  },

  {
    file: "index.html",
    title: "HTML5",
    icon: <FaHtml5 className="text-orange-500 text-6xl md:text-8xl" />,
    content: "Creating semantic and accessible web structures.",
    glow: "rgba(249,115,22,0.35)",
  },

  {
    file: "styles.css",
    title: "CSS3",
    icon: <FaCss3Alt className="text-blue-500 text-6xl md:text-8xl" />,
    content: "Crafting responsive and beautiful layouts.",
    glow: "rgba(59,130,246,0.35)",
  },
];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % cards.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [cards.length]);
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden px-6 lg:px-10 pt-24"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full" />

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full" />

      {/* Watermark */}
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] md:text-[15vw] font-black text-white/5 md:text-white/3 select-none pointer-events-none">
        Codeck
      </h1>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div data-aos="fade-right">
          <p className="uppercase tracking-[0.3em] text-cyan-400 mb-6">
            Full-stack Developer
          </p>

          <h1 className="text-5xl md:text-7xl xl:text-8xl font-black leading-none">
            Building
            <br />
            <span className="bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Digital
            </span>
            <br />
            Experiences
          </h1>

          <p className="mt-8 text-lg text-gray-400 max-w-xl leading-relaxed">
            I build full-stack web applications with PHP, MySQL, JavaScript and React, 
            focusing on performance, scalability and user experience.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
<div className="mt-10 flex flex-wrap gap-4">
  <a href="#projects" className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition duration-300">
    View Projects
  </a>

  <a href="#contact" className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 transition duration-300">
    Contact Me
  </a>
</div>
          </div>

          {/* Socials */}
          <div className="flex gap-6 mt-10 text-2xl text-gray-400">
            <a href="https://github.com/codeck-HQ" target="_blank">
              <FaGithub className="hover:text-white transition" />
            </a>

            <a href="https://www.linkedin.com/in/chinemerem-ihemegbulam-381458376/" target="_blank">
              <FaLinkedin className="hover:text-white transition" />
            </a>

            <a href="https://x.com/codeck_Hq" target="_blank">
              <FaXTwitter className="hover:text-white transition" />
            </a>
          </div>
        </div>

        {/* Right Side Card */}
        
        <div
          data-aos="fade-left"
          className="flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, -12, 0],
              rotate: [-2, 2, -2],
              boxShadow: [
                `0 0 40px ${cards[currentCard].glow}`,
                `0 0 80px ${cards[currentCard].glow}`,
                `0 0 40px ${cards[currentCard].glow}`,
              ],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-full max-w-[450px] h-[500px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center gap-2 px-5 py-4 border-b border-white/10">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>

              <span className="ml-4 text-sm text-gray-400">
                {cards[currentCard].file}
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentCard}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="h-[420px] flex items-center justify-center"
              >
                {cards[currentCard].type === "code" ? (
                  <div className="font-mono text-left">
                    <p>
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-cyan-400">developer</span> = {"{"}
                    </p>

                    <p className="pl-6 text-green-400">
                      name: "Vybz",
                    </p>

                    <p className="pl-6 text-green-400">
                      role: "Full-stack Developer",
                    </p>

                    <p className="pl-6 text-green-400">
                      status: "Available for Work",
                    </p>

                    <p>{"};"}</p>
                  </div>
                ) : (
                  <div className="text-center px-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.4 }}
                      className="flex justify-center mb-8"
                    >
                      {cards[currentCard].icon}
                    </motion.div>

                    <h2 className="text-3xl font-bold mb-4">
                      {cards[currentCard].title}
                    </h2>

                    <p className="text-gray-400 leading-relaxed">
                      {cards[currentCard].content}
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
        </motion.div>
        </div>

      </div> {/* closes the grid container */}


      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
