import React from "react";

export default function ServiceCard({
  icon,
  title,
  subtitle,
  children,
  bullets,
}) {
  return (
    <div className="relative bg-indigo-200 rounded-2xl p-6 shadow-md hover:shadow-xl transform hover:-translate-y-3 transition card-border-top">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-sokblue text-lg font-semibold">{title}</h3>
      {subtitle && (
        <h4 className="text-sokblue text-sm font-medium mt-1">{subtitle}</h4>
      )}
      <p className="mt-3 text-gray-600 leading-relaxed">{children}</p>
      {bullets && (
        <p className="mt-4 text-sokblue text-sm font-medium">
          {bullets.map((b, i) => (
            <span key={i}>✓ {b} &nbsp;</span>
          ))}
        </p>
      )}
    </div>
  );
}
