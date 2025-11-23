import React, { useState, useEffect, useRef } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // outside click closes menu
  useEffect(() => {
    function handleOutside(e) {
      if (!open) return;
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [open]);

  // sticky style on scroll
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when menu open
  useEffect(() => {
    const prev = document.body.style.overflow;
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = prev || "";
    return () => {
      document.body.style.overflow = prev || "";
    };
  }, [open]);

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 h-16 flex items-center transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-sm bg-white/80 text-gray-800 shadow-md"
            : "bg-transparent text-white"
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-6xl mx-auto w-full px-4 md:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-xl font-extrabold bg-clip-text text-transparent bg-linear-to-br from-sokblue to-[#0486f0] md:text-2xl">
              🔐 SokWatch Technologies
            </div>
          </div>

          <div className="flex items-center gap-6">
            <ul
              className={`hidden md:flex items-center gap-8 text-sm font-medium ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
            >
              <li>
                <a href="#services" className="hover:opacity-90">
                  Services
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:opacity-90">
                  Why Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:opacity-90">
                  Contact
                </a>
              </li>
            </ul>

            <div className="hidden md:block">
              <a
                href="#contact"
                className={`px-5 py-2 rounded-full font-semibold shadow-md transition transform ${
                  scrolled ? "bg-sokblue text-white" : "bg-white text-sokblue"
                }`}
              >
                Get Started
              </a>
            </div>

            <div className="md:hidden">
              <button
                ref={buttonRef}
                aria-label="Toggle menu"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="p-2 inline-flex items-center justify-center rounded-md focus:outline-none focus:ring-2 focus:ring-sokblue"
              >
                <svg
                  className={`relative h-6 w-6 transition-transform duration-300 ${
                    open ? "rotate-90 scale-95" : "rotate-0"
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <g
                    className={`transform transition-all duration-200 ${
                      open ? "opacity-0 scale-90" : "opacity-100 scale-100"
                    }`}
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 6h16" />
                    <path d="M4 12h16" />
                    <path d="M4 18h16" />
                  </g>
                </svg>

                <svg
                  className={`absolute h-6 w-6 transition-opacity duration-200 ${
                    open ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      >
        <div
          className={`absolute inset-0 ${
            open ? "bg-black/30 backdrop-blur-sm" : "bg-transparent"
          }`}
        />
      </div>

      <div
        ref={menuRef}
        className={`fixed left-0 right-0 top-16 z-50 md:hidden transition-[max-height,opacity,transform] duration-300 ease-in-out overflow-hidden ${
          open
            ? "max-h-[420px] opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-3"
        }`}
        aria-hidden={!open}
      >
        <div className="w-full bg-white text-gray-800 shadow-lg">
          <ul className="flex flex-col p-4 space-y-3">
            <li>
              <a
                href="#services"
                onClick={() => setOpen(false)}
                className="block px-4 py-2 rounded hover:bg-gray-100"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#why-us"
                onClick={() => setOpen(false)}
                className="block px-4 py-2 rounded hover:bg-gray-100"
              >
                Why Us
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block px-4 py-2 rounded hover:bg-gray-100"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block px-4 py-2 mt-1 bg-sokblue text-white text-center rounded hover:bg-sokdeep"
              >
                Get Started
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
