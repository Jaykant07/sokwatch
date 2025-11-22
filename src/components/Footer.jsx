import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-6 grid gap-8 grid-cols-1 md:grid-cols-3">
        <div>
          <h5 className="text-sokblue font-semibold">SokWatch Technologies</h5>
          <p className="mt-2 text-sm">
            Enterprise cybersecurity and compliance solutions designed for
            modern businesses.
          </p>
        </div>

        <div>
          <h5 className="text-sokblue font-semibold">Services</h5>
          <nav className="mt-2 flex flex-col gap-1">
            <a
              href="#services"
              className="text-sm text-gray-300 hover:text-white"
            >
              Compliance Advisory
            </a>
            <a
              href="#services"
              className="text-sm text-gray-300 hover:text-white"
            >
              Security Training
            </a>
            <a
              href="#services"
              className="text-sm text-gray-300 hover:text-white"
            >
              Security Audits
            </a>
          </nav>
        </div>

        <div>
          <h5 className="text-sokblue font-semibold">Contact</h5>
          <p className="mt-2 text-sm">📧 info@sokwatch.com</p>
          <p className="text-sm">🌐 www.sokwatch.tech</p>
          <p className="text-sm">📱 +1 (800) Security</p>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        &copy; 2025 SokWatch Technologies. All rights reserved. | Privacy Policy
        | Terms of Service
      </div>
    </footer>
  );
}
