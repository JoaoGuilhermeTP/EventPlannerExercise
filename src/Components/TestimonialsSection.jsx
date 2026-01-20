import React from "react";

export default function TestimonialsSection() {
  return (
    <>
      {/* Section to showcase user reviews or testimonials */}
      <section className="testimonials">
        {/* Section heading */}
        <h2>Testimonials</h2>
        {/* Individual testimonial block */}
        <div className="testimonial">
          <p>
            "Event Planner made organizing my wedding a breeze. Highly
            recommended!"
          </p>
          <p className="author">- Emily Johnson</p>
        </div>
        {/* Another testimonial block */}
        <div className="testimonial">
          <p>
            "I use Event Planner for all my corporate events. It saves me so
            much time and effort!"
          </p>
          <p className="author">- John Smith</p>
        </div>
      </section>
    </>
  );
}
