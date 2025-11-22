import React from "react";

export default function CTA() {
  return (
    <section
      id="contact"
      className="py-12 bg-linear-to-br from-sokblue to-sokdeep text-black text-center"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold">
          Ready to Strengthen Your Security Posture?
        </h2>
        <p className="mt-2">
          Let's discuss how SokWatch can help protect your business
        </p>
        <a
          href="mailto:info@sokwatch.com"
          className="mt-6 inline-block px-6 py-3 rounded-full bg-white text-sokblue font-semibold"
        >
          Contact Us Today
        </a>
      </div>
    </section>
  );
}
