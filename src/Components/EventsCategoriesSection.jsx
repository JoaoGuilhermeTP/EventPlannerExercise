import React from "react";
import eventsCategories from "./EventsCategories.json";

export default function EventsCategoriesSection() {
  return (
    <>
      {/* Section to list or categorize different types of events */}
      <section className="events_categories">
        {/* Event categories content goes here */}

        {eventsCategories.map(({ type, categories }) => (
          <article key={type}>
            <h2>{type}</h2>
            <ul>
              {categories.map((category) => (
                <li key={category}>{category}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </>
  );
}
