import React from "react";

export default function NavBar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-extrabold bg-clip-text text-transparent bg-linear-to-br from-sokblue to-[#03a3e7]">
          🔐 SokWatch Technologies
        </div>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <li>
            <a href="#services" className="hover:text-sokblue">
              Services
            </a>
          </li>
          <li>
            <a href="#why-us" className="hover:text-sokblue">
              Why Us
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-sokblue">
              Contact
            </a>
          </li>
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-block px-5 py-2 rounded-full bg-;linear-to-br from-sokblue to-[#0040a0] text-white font-semibold shadow-md hover:-translate-y-0.5 transition"
        >
          Get Started
        </a>

        <div className="md:hidden">
          <button aria-label="open menu" className="p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
