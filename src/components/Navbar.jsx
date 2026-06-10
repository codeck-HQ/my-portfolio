import { Link } from "react-scroll";

function Navbar() {
  const navLinks = [
    "About",
    "Skills",
    "Projects",
    "Contact",
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 md:h-20 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wider text-white">
         Vybz<span className="text-cyan-400">/</span>Codeck
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <Link
                to={link.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer text-gray-300 hover:text-white transition"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:inline-flex px-5 py-2 rounded-full bg-white text-black font-medium hover:scale-105 transition"
        >
          Hire Me
        </a>
      </nav>
    </header>
  );
}

export default Navbar;