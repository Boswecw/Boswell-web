// src/pages/projects/Livy.jsx
import React from 'react';
import ProjectDetailTemplate from '../../components/ProjectDetailTemplate';
import { livyData } from '../../data/projects/livy';
import SEOHead from '../../components/SEOHead';

export default function Livy() {
  return (
    <>
      <SEOHead
        title="Livy Business Operations Platform | Project Details"
        description="Comprehensive full-stack business operations platform with advanced user management, data analytics, and intuitive dashboard interfaces. Built with React, Node.js, and MongoDB."
        keywords="business operations, data analytics, dashboard, React app, MongoDB, business intelligence"
        url="https://livy-business.onrender.com"
      />
      <ProjectDetailTemplate projectData={livyData} />
    </>
  );
}