import React from "react";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl text-center text-sokblue font-bold">
          Our Services
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mt-3">
          Comprehensive security solutions designed to protect and strengthen
          your organization
        </p>

        <div className="mt-10 grid gap-6 grid-cols-1 md:grid-cols-3">
          <ServiceCard
            icon="⚖️"
            title="Compliance Advisory"
            subtitle="Powered by UNISOC"
            bullets={["ISO 27001", "SOC 2", "GDPR", "HIPAA"]}
          >
            Navigate complex regulatory requirements with expert guidance on
            GDPR, HIPAA, ISO 27001, SOC 2, and industry-specific compliance
            frameworks.
          </ServiceCard>

          <ServiceCard
            icon="👥"
            title="Cybersecurity Training & Awareness"
            subtitle="Risk Assessment Tool"
            bullets={[
              "Phishing Simulation",
              "Compliance Training",
              "Risk Analytics",
            ]}
          >
            Empower your team with cutting-edge security knowledge. Our risk
            assessment tool identifies security gaps and delivers targeted
            training programs.
          </ServiceCard>

          <ServiceCard
            icon="🔍"
            title="Cybersecurity Audits"
            subtitle="Cybr-Posture Assessment Tool"
            bullets={[
              "Vulnerability Assessment",
              "Penetration Testing",
              "Posture Scoring",
            ]}
          >
            Comprehensive security assessments using Cybr-Posture Assessment
            Tool to identify vulnerabilities and risks. Detailed reports with
            actionable remediation roadmaps.
          </ServiceCard>
        </div>
      </div>
    </section>
  );
}
