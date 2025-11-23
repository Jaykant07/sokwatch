import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <NavBar />
      <main className="flex-1 pt-16">
        <Hero />
        <Services />
        <WhyUs />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
