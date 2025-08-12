// src/components/VirtualizedProjectList.jsx
import React, { useMemo, useState } from 'react';

// Simple ProjectCard component for the virtualized list
const ProjectCard = ({ project, style }) => (
  <div style={style} className="p-4 border border-gray-200 rounded-lg mb-4">
    <h3 className="text-lg font-semibold">{project.name}</h3>
    <p className="text-gray-600">{project.description}</p>
  </div>
);

const VirtualizedProjectList = ({ projects, itemHeight = 200 }) => {
  const [scrollTop, setScrollTop] = useState(0);
  const containerHeight = 600; // Fixed height for now
  
  const visibleItems = useMemo(() => {
    const startIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = Math.min(
      startIndex + Math.ceil(containerHeight / itemHeight) + 1,
      projects.length
    );
    
    return projects.slice(startIndex, endIndex).map((project, index) => ({
      ...project,
      index: startIndex + index
    }));
  }, [scrollTop, containerHeight, projects, itemHeight]);

  const totalHeight = projects.length * itemHeight;
  const offsetY = Math.floor(scrollTop / itemHeight) * itemHeight;

  return (
    <div 
      className="overflow-auto"
      style={{ height: containerHeight }}
      onScroll={(e) => setScrollTop(e.target.scrollTop)}
    >
      <div style={{ height: totalHeight, position: 'relative' }}>
        <div style={{ transform: `translateY(${offsetY}px)` }}>
          {visibleItems.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project}
              style={{ height: itemHeight }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VirtualizedProjectList;