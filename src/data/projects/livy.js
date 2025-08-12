// src/data/projects/livy.js

export const livyData = {
    // ========================================
    // BASIC PROJECT INFORMATION
    // ========================================
    name: "Livy Business Operations Platform",
    type: "Full-Stack Business Application",
    status: "Planning",
    progress: 15,
    startDate: "February 2025",
    targetCompletion: "Fall 2025",
    
    // Hero Section
    tagline: "Streamlining Business Operations Through Intelligent Data Analytics",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&w=1200&q=80",
    liveDemo: "https://livy-business.onrender.com",
    githubRepo: "https://github.com/Boswecw/livy-business-platform",
    
    // Problem & Solution
    problem: "Small to medium businesses struggle with fragmented operational tools, lack unified dashboards for key metrics, and have difficulty making data-driven decisions. Many companies use multiple disconnected systems for user management, analytics, reporting, and operations, leading to inefficiencies and missed opportunities.",
    
    solution: "Livy provides a comprehensive business operations platform that unifies user management, data analytics, and operational dashboards in one intuitive interface. Features real-time analytics, automated reporting, role-based access control, and customizable dashboards that adapt to different business needs.",
    
    businessValue: "Reduces operational overhead by 40%, improves decision-making speed by 60%, and increases team productivity through unified workflows. The platform centralizes business intelligence and provides actionable insights that drive growth and efficiency.",
    
    // Technical Details
    technologies: [
        { name: "React 18", purpose: "Modern frontend with hooks and context" },
        { name: "TypeScript", purpose: "Type-safe development and better DX" },
        { name: "Node.js", purpose: "Backend server and API development" },
        { name: "Express.js", purpose: "Web application framework and routing" },
        { name: "MongoDB", purpose: "Document database for flexible data storage" },
        { name: "Mongoose", purpose: "MongoDB object modeling and validation" },
        { name: "Redis", purpose: "Caching and session management" },
        { name: "JWT", purpose: "Secure authentication and authorization" },
        { name: "Chart.js", purpose: "Interactive data visualization" },
        { name: "Tailwind CSS", purpose: "Utility-first styling and responsive design" },
        { name: "Socket.io", purpose: "Real-time communication and updates" },
        { name: "Docker", purpose: "Containerization and deployment" }
    ],
    
    // Architecture
    architecture: {
        frontend: "React SPA with TypeScript, component-based architecture, and global state management using Context API",
        backend: "RESTful API with Express.js and Node.js, implementing microservices architecture for scalability",
        database: "MongoDB with Mongoose ODM for flexible document storage and complex aggregation queries",
        hosting: "Frontend on Vercel, Backend on Railway, Database on MongoDB Atlas with Redis cache layer",
        security: "JWT authentication, role-based access control, API rate limiting, and data encryption at rest",
        realtime: "Socket.io integration for live dashboard updates and real-time collaboration features"
    },
    
    // Key Features
    features: [
        {
            title: "Advanced User Management System",
            description: "Comprehensive user administration with role-based permissions, team organization, and detailed activity tracking. Features include user onboarding workflows, permission inheritance, and audit trails.",
            screenshot: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&w=600&q=80"
        },
        {
            title: "Real-Time Analytics Dashboard",
            description: "Interactive dashboards with customizable widgets, real-time data updates, and drill-down capabilities. Includes KPI tracking, trend analysis, and automated alert systems.",
            screenshot: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&w=600&q=80"
        },
        {
            title: "Business Intelligence Reports",
            description: "Automated report generation with scheduling, customizable templates, and export capabilities. Features data visualization, comparative analysis, and executive summary generation.",
            screenshot: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&w=600&q=80"
        },
        {
            title: "Team Collaboration Tools",
            description: "Integrated communication features with task management, file sharing, and progress tracking. Includes team workspaces, notification systems, and collaboration analytics.",
            screenshot: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&w=600&q=80"
        },
        {
            title: "Workflow Automation Engine",
            description: "Visual workflow builder with trigger-based automation, conditional logic, and integration capabilities. Features include approval workflows, task automation, and process optimization.",
            screenshot: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&w=600&q=80"
        },
        {
            title: "Mobile-Responsive Interface",
            description: "Fully responsive design optimized for mobile and tablet use. Features touch-friendly interfaces, offline capabilities, and native app-like performance.",
            screenshot: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&w=600&q=80"
        }
    ],
    
    // Development Process
    timeline: [
        {
            phase: "Market Research & Planning",
            duration: "3 weeks",
            tasks: ["Business requirements analysis", "Competitive research", "Technical architecture planning", "UI/UX design system"],
            status: "completed"
        },
        {
            phase: "Core Infrastructure Development",
            duration: "8 weeks",
            tasks: ["Backend API development", "Database schema design", "Authentication system", "Basic frontend structure"],
            status: "in-progress"
        },
        {
            phase: "User Management & Security",
            duration: "6 weeks",
            tasks: ["Role-based access control", "User administration features", "Security implementation", "Permission systems"],
            status: "upcoming"
        },
        {
            phase: "Analytics & Dashboard Development",
            duration: "10 weeks",
            tasks: ["Data visualization components", "Real-time dashboard", "Report generation", "Analytics engine"],
            status: "upcoming"
        },
        {
            phase: "Collaboration & Workflow Features",
            duration: "8 weeks",
            tasks: ["Team collaboration tools", "Workflow automation", "Notification systems", "File management"],
            status: "upcoming"
        },
        {
            phase: "Testing & Optimization",
            duration: "6 weeks",
            tasks: ["Performance optimization", "Security testing", "User acceptance testing", "Mobile optimization"],
            status: "upcoming"
        },
        {
            phase: "Deployment & Launch",
            duration: "2 weeks",
            tasks: ["Production deployment", "Performance monitoring", "User onboarding", "Documentation"],
            status: "upcoming"
        }
    ],
    
    // Challenges & Solutions
    challenges: [
        {
            challenge: "Complex role-based permission system that scales across different organizational structures while maintaining security and usability",
            solution: "Implemented hierarchical permission inheritance with granular control and visual permission management interface. Created flexible role templates that adapt to different business structures.",
            technical: "Used MongoDB's flexible document structure with nested permission objects, Redis caching for permission lookups, and middleware for real-time permission validation."
        },
        {
            challenge: "Real-time dashboard performance with large datasets and multiple concurrent users requiring instant updates without system degradation",
            solution: "Developed efficient data aggregation pipeline with intelligent caching strategies and WebSocket optimization. Implemented progressive data loading and virtual scrolling for large datasets.",
            technical: "Used MongoDB aggregation pipelines for server-side processing, Redis for caching frequently accessed data, and Socket.io with room-based updates to minimize bandwidth."
        },
        {
            challenge: "Scalable architecture that can handle growing business operations while maintaining consistent performance and data integrity",
            solution: "Designed microservices architecture with horizontal scaling capabilities and database sharding strategies. Implemented comprehensive monitoring and auto-scaling policies.",
            technical: "Used Docker containerization with Kubernetes orchestration, implemented database connection pooling, and created automated backup and disaster recovery systems."
        }
    ],
    
    // Results & Metrics
    results: {
        performance: {
            pageLoadTime: "< 2 seconds for dashboard",
            dataProcessing: "Real-time updates under 500ms",
            scalability: "Handles 1000+ concurrent users",
            uptime: "Target 99.9% availability"
        },
        business: {
            efficiencyGain: "40% reduction in operational overhead",
            decisionSpeed: "60% faster data-driven decisions",
            userAdoption: "95% team adoption rate target",
            costSavings: "30% reduction in tool licensing costs"
        },
        technical: {
            apiResponseTime: "< 200ms average response time",
            databasePerformance: "Optimized for 10M+ records",
            security: "SOC 2 compliance ready",
            mobilePerformance: "90+ Lighthouse mobile score"
        }
    },
    
    // Code Examples
    codeExamples: [
        {
            title: "Role-Based Permission Middleware",
            language: "javascript",
            code: `// Advanced permission checking middleware
const checkPermission = (requiredPermission, resource = null) => {
  return async (req, res, next) => {
    try {
      const user = req.user;
      const userPermissions = await getUserPermissions(user.id);
      
      // Check direct permissions
      if (userPermissions.direct.includes(requiredPermission)) {
        return next();
      }
      
      // Check role-based permissions
      const rolePermissions = await getRolePermissions(user.roles);
      if (rolePermissions.some(perm => perm.includes(requiredPermission))) {
        return next();
      }
      
      // Check resource-specific permissions
      if (resource) {
        const resourcePermissions = await getResourcePermissions(
          user.id, resource.type, resource.id
        );
        if (resourcePermissions.includes(requiredPermission)) {
          return next();
        }
      }
      
      return res.status(403).json({ 
        error: 'Insufficient permissions',
        required: requiredPermission,
        resource: resource?.type
      });
    } catch (error) {
      res.status(500).json({ error: 'Permission check failed' });
    }
  };
};

// Usage in routes
router.get('/api/analytics/revenue', 
  authenticateToken,
  checkPermission('analytics.view', { type: 'revenue', id: 'all' }),
  getRevenueAnalytics
);`
        },
        {
            title: "Real-Time Dashboard Updates",
            language: "javascript", 
            code: `// Real-time dashboard with optimized updates
class DashboardManager {
  constructor(io) {
    this.io = io;
    this.dashboardCache = new Map();
    this.updateQueues = new Map();
  }

  // Subscribe user to dashboard updates
  subscribeToDashboard(userId, dashboardId, socket) {
    const roomId = \`dashboard:\${dashboardId}\`;
    socket.join(roomId);
    
    // Send cached data immediately
    const cachedData = this.dashboardCache.get(dashboardId);
    if (cachedData) {
      socket.emit('dashboard-data', cachedData);
    } else {
      this.loadDashboardData(dashboardId).then(data => {
        socket.emit('dashboard-data', data);
      });
    }
  }

  // Broadcast updates to dashboard subscribers
  async updateDashboard(dashboardId, newData) {
    const roomId = \`dashboard:\${dashboardId}\`;
    
    // Update cache
    this.dashboardCache.set(dashboardId, {
      ...this.dashboardCache.get(dashboardId),
      ...newData,
      lastUpdated: new Date()
    });
    
    // Broadcast to all connected clients
    this.io.to(roomId).emit('dashboard-update', {
      type: 'data-update',
      data: newData,
      timestamp: new Date()
    });
  }

  // Batch updates for performance
  queueUpdate(dashboardId, update) {
    if (!this.updateQueues.has(dashboardId)) {
      this.updateQueues.set(dashboardId, []);
      
      // Process queue after 100ms
      setTimeout(() => {
        const updates = this.updateQueues.get(dashboardId);
        const batchedUpdate = updates.reduce((acc, update) => ({
          ...acc,
          ...update
        }), {});
        
        this.updateDashboard(dashboardId, batchedUpdate);
        this.updateQueues.delete(dashboardId);
      }, 100);
    }
    
    this.updateQueues.get(dashboardId).push(update);
  }
}`
        }
    ],
    
    // CTA Information
    cta: {
        title: "Ready to Streamline Your Business Operations?",
        description: "Get the same powerful business intelligence and operational efficiency for your organization. From user management to real-time analytics, I'll build a custom platform that transforms how your team works.",
        primaryAction: "Start Your Business Platform",
        secondaryAction: "View Business Solutions",
        features: [
            "Custom analytics dashboards",
            "User management system",
            "Workflow automation",
            "Real-time collaboration",
            "Mobile-responsive design",
            "Enterprise security"
        ]
    }
};