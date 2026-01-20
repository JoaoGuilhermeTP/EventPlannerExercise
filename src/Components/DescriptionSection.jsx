import React from "react";

export default function DescriptionSection() {
  return (
    <>
      {/* Section for describing the purpose or overview of the app */}
      <section className="description">
        {/* Brief introduction or marketing message */}
        <p>
          Plan and organize your events effortlessly with Event Planner. From
          birthdays to corporate meetings, we've got you covered.
        </p>
        {/* Primary call-to-action button */}
        <button className="get-started-button">Get Started</button>
      </section>
    </>
  );
}
