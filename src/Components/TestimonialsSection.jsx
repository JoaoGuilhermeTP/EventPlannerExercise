import React from "react";
import testimonials from "./Testimonials.json";

export default function TestimonialsSection() {
  return (
    <>
      {/* Section to showcase user reviews or testimonials */}
      <section className="testimonials">
        {/* Section heading */}
        <h2>Testimonials</h2>
        {/* Individual testimonial block */}
        {testimonials.map((testimonial) => (
          <div className="testimonial">
            <p>{testimonial.text}</p>
            <p className="author">- {testimonial.author}</p>
          </div>
        ))}
      </section>
    </>
  );
}
