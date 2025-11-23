import React from "react";

export default function Hero() {
  return (
    <section className="hero-bg py-24 relative overflow-hidden bg-indigo-400">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h1 className="text-2xl md:text-4xl font-extrabold leading-tight">
          Protect Your Business with Enterprise-Grade Security
        </h1>
        <p className="mt-4 text-md md:text-xl opacity-95">
          Compliance advisory, cybersecurity training, and comprehensive audits
          tailored for your business needs
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#services"
            className=" inline-block px-8 py-3 rounded-full bg-white text-sokblue font-semibold shadow transition-all duration-200 hover:bg-gray-100 hover:text-sokblue hover:scale-105"
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="inline-block px-8 py-3 rounded-full bg-white text-sokblue font-semibold shadow transition-all duration-200 hover:bg-gray-100 hover:text-sokblue hover:scale-105"
          >
            Schedule a Demo
          </a>
        </div>
      </div>

      <div className="hidden md:block absolute -top-40 -right-24 w-96 h-96 bg-white/10 rounded-full animate-bounce-slow"></div>
      <div className="hidden md:block absolute -bottom-40 -left-24 w-96 h-96 bg-white/10 rounded-full animate-bounce-slow"></div>
    </section>
  );
}
