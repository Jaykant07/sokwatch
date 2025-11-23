import React from "react";

const Feature = ({ number, title, desc }) => (
  <div className="text-center p-6">
    <div className="text-4xl font-extrabold text-sokblue">{number}</div>
    <h4 className="mt-2 font-semibold">{title}</h4>
    <p className="mt-1 text-gray-600">{desc}</p>
  </div>
);

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 bg-indigo-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl text-sokblue font-bold">
          Why Choose SokWatch?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-3">
          Industry expertise you can trust
        </p>

        <div className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-4">
          <Feature
            number="10+"
            title="Years Experience"
            desc="Proven track record in enterprise security"
          />
          <Feature
            number="500+"
            title="Businesses Secured"
            desc="Trusted by organizations across industries"
          />
          <Feature
            number="24/7"
            title="Expert Support"
            desc="Always available when you need us"
          />
          <Feature
            number="100%"
            title="Client Satisfaction"
            desc="Commitment to your security success"
          />
        </div>
      </div>
    </section>
  );
}
