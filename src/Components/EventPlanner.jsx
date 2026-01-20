import React from "react";
import "./EventPlanner.css"; // Import CSS file for styling
import HeaderSection from "./HeaderSection";
import DescriptionSection from "./DescriptionSection";
import EventsCategoriesSection from "./EventsCategoriesSection";
import FeaturesSection from "./FeaturesSection";
import TestimonialsSection from "./TestimonialsSection";
import ContactSection from "./ContactSection";
import FooterSection from "./FooterSection";

const EventPlanner = () => {
  return (
    <div className="event-planner-container">
      <HeaderSection />
      <DescriptionSection />
      <EventsCategoriesSection />
      <FeaturesSection />
      <TestimonialsSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default EventPlanner;
