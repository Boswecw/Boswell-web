// src/pages/projects/Leopold.jsx
import React from 'react';
import ProjectDetailTemplate from '../../components/ProjectDetailTemplate';
import { leopoldData } from '../../data/projects/leopold';
import SEOHead from '../../components/SEOHead';

export default function Leopold() {
  return (
    <>
      <SEOHead
        title="Leopold Nature Observation App | Project Details"
        description="Advanced nature observation and wildlife tracking application built with React, Node.js, and PostgreSQL. Features real-time data collection and collaborative research tools."
        keywords="nature app, wildlife tracking, conservation technology, React app, PostgreSQL, environmental science"
        url="https://leopold-app.onrender.com"
      />
      <ProjectDetailTemplate projectData={leopoldData} />
    </>
  );
}