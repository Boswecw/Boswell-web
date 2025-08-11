// src/pages/projects/FurBabies.jsx
import React from 'react';
import ProjectDetailTemplate from '../../components/ProjectDetailTemplate';
import { furBabiesData } from '../../data/projects/furbabies';
import SEOHead from '../../components/SEOHead';

export default function FurBabies() {
  return (
    <>
      <SEOHead
        title="FurBabies E-commerce Platform | Project Details"
        description="Complete e-commerce platform for pet supplies with React, Node.js, and Stripe integration. Advanced features and mobile-first design."
        keywords="e-commerce development, pet supplies website, React e-commerce, Stripe integration"
        url="https://furbabies-frontend.onrender.com"
      />
      <ProjectDetailTemplate projectData={furBabiesData} />
    </>
  );
}