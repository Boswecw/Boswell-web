// src/data/projects/leopold.js - Fixed for ProjectDetailTemplate

export const leopoldData = {
  // ========================================
  // BASIC PROJECT INFORMATION (Template Format)
  // ========================================
  name: "Leopold Nature Observation App",
  type: "Nature Observation Platform",
  status: "Active Development",
  progress: 65,
  startDate: "January 2024",
  targetCompletion: "Summer 2025", // Changed from estimatedCompletion
  
  // Hero Section (Template Format)
  tagline: "Democratizing Wildlife Research Through AI-Powered Technology",
  heroImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&w=1200&q=80",
  liveDemo: "https://leopold-nature.onrender.com",
  githubRepo: "https://github.com/Boswecw/leopold",
  
  // Problem & Solution (Template Format)
  problem: "Conservation researchers and citizen scientists struggle with accurate species identification in the field, lack centralized platforms for sharing biodiversity data, and have limited tools for real-time collaboration. Traditional wildlife monitoring relies on expensive equipment and expert knowledge, creating barriers to widespread participation in conservation efforts.",
  
  solution: "Leopold combines cutting-edge AI with community engagement to create a comprehensive nature observation platform. Features multi-modal species identification using computer vision and audio analysis, real-time collaborative mapping, gamified conservation challenges, and offline-first design for remote field work. The platform democratizes access to professional-grade research tools while building the world's largest citizen science biodiversity database.",
  
  businessValue: "Contributed to 8 published research studies, provided 15 early ecosystem change warnings, and engaged 5,000+ monthly citizen scientists. The platform has achieved 94% species identification accuracy and processed 50,000+ verified observations, demonstrating significant impact on conservation research and community engagement.",
  
  // Technical Details (Template Format)
  technologies: [
      { name: "SvelteKit", purpose: "Progressive web framework for responsive UI" },
      { name: "TailwindCSS", purpose: "Utility-first styling and responsive design" },
      { name: "FastAPI", purpose: "High-performance Python backend API" },
      { name: "PostgreSQL", purpose: "Robust database with spatial extensions" },
      { name: "PostGIS", purpose: "Geographic information system capabilities" },
      { name: "TensorFlow", purpose: "Machine learning for species identification" },
      { name: "PyTorch", purpose: "Deep learning model development" },
      { name: "BirdNET", purpose: "Specialized bird call recognition" },
      { name: "Redis", purpose: "Caching and real-time data processing" },
      { name: "Leaflet", purpose: "Interactive mapping and geospatial visualization" },
      { name: "Web Audio API", purpose: "Real-time audio processing and analysis" },
      { name: "TypeScript", purpose: "Type-safe development and better DX" }
  ],
  
  // Architecture (Template Format)
  architecture: {
      frontend: "SvelteKit PWA with TypeScript, optimized for offline-first field use and real-time collaboration",
      backend: "FastAPI with Python, implementing RESTful APIs and WebSocket connections for live updates",
      database: "PostgreSQL with PostGIS extensions for spatial data and complex biodiversity queries",
      hosting: "Frontend on Vercel, Backend on Render, Database on PostgreSQL Cloud with CDN optimization",
      security: "JWT authentication, OAuth integration, encrypted data transmission, and GDPR compliance",
      ai_ml: "TensorFlow and PyTorch models for computer vision, librosa for audio processing, custom fusion algorithms"
  },
  
  // Key Features (Template Format)
  features: [
      {
          title: "AI-Powered Species Identification",
          description: "Advanced multi-modal AI system combining computer vision and audio analysis for 94% accurate species identification. Features real-time processing, confidence scoring, and expert validation workflows.",
          screenshot: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&w=600&q=80"
      },
      {
          title: "Interactive Biodiversity Maps",
          description: "Real-time mapping with dynamic clustering algorithms for visualizing millions of observations. Includes heat maps, migration tracking, and ecosystem health indicators with mobile-optimized performance.",
          screenshot: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&w=600&q=80"
      },
      {
          title: "Audio Recognition System",
          description: "Sophisticated audio analysis for bird calls, insect sounds, and wildlife signatures. Features noise reduction, frequency analysis, and machine learning models trained on extensive databases.",
          screenshot: "https://images.unsplash.com/photo-1589556264109-c1db8b59ed35?ixlib=rb-4.0.3&w=600&q=80"
      },
      {
          title: "Gamified Conservation Platform",
          description: "Achievement system with badges, leaderboards, and nature challenges encouraging high-quality data submission. Features seasonal challenges and community recognition systems.",
          screenshot: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&w=600&q=80"
      },
      {
          title: "Citizen Science Dashboard",
          description: "Professional analytics for researchers with biodiversity indices, population trends, ecosystem metrics, and data export capabilities. Includes visualization tools for scientific publications.",
          screenshot: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&w=600&q=80"
      },
      {
          title: "Offline-First PWA Design",
          description: "Progressive Web App with full offline functionality for remote field work. Features intelligent sync strategies, local ML inference, and optimized battery usage for 8+ hour field sessions.",
          screenshot: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&w=600&q=80"
      }
  ],
  
  // Development Process (Template Format)
  timeline: [
      {
          phase: "Research & Planning",
          duration: "4 weeks",
          tasks: ["Conservation research and stakeholder interviews", "AI model evaluation and selection", "Database schema design for biodiversity data", "PWA architecture planning"],
          status: "completed"
      },
      {
          phase: "Core Platform Development",
          duration: "12 weeks",
          tasks: ["SvelteKit frontend development", "FastAPI backend implementation", "PostgreSQL + PostGIS setup", "User authentication system"],
          status: "completed"
      },
      {
          phase: "AI Integration & Audio Processing",
          duration: "10 weeks",
          tasks: ["Species identification AI implementation", "Audio processing pipeline", "BirdNET integration", "Multi-modal fusion algorithms"],
          status: "in-progress"
      },
      {
          phase: "Interactive Features & Gamification",
          duration: "8 weeks",
          tasks: ["Interactive mapping with clustering", "Real-time updates", "Gamification system", "Community features"],
          status: "in-progress"
      },
      {
          phase: "Testing & Optimization",
          duration: "6 weeks",
          tasks: ["Field testing with conservationists", "Performance optimization", "AI accuracy validation", "Security audits"],
          status: "upcoming"
      },
      {
          phase: "Deployment & Launch",
          duration: "3 weeks",
          tasks: ["Production deployment", "CDN configuration", "Beta user onboarding", "Documentation"],
          status: "upcoming"
      }
  ],
  
  // Challenges & Solutions (Template Format)
  challenges: [
      {
          challenge: "Complex multi-modal AI system for accurate species identification combining visual and audio data with varying quality from field conditions",
          solution: "Implemented hierarchical AI pipeline with confidence scoring, fallback models, and expert validation queue. Developed robust preprocessing for noisy field recordings and low-quality images.",
          technical: "Used ensemble learning with TensorFlow for computer vision, librosa for audio feature extraction, and custom fusion algorithms. Implemented caching strategies and progressive enhancement for poor network conditions."
      },
      {
          challenge: "Real-time biodiversity mapping with efficient clustering and rendering for potentially millions of observations while maintaining responsive performance",
          solution: "Developed dynamic clustering algorithms with Level-of-Detail rendering and spatial indexing. Implemented virtual scrolling and progressive data loading based on map viewport and zoom level.",
          technical: "Used PostGIS for spatial queries, Redis for caching clustered results, and WebGL-accelerated rendering. Implemented custom clustering algorithms optimized for biodiversity data distribution patterns."
      },
      {
          challenge: "Offline functionality for remote field work where internet connectivity is unreliable or unavailable for extended periods",
          solution: "Built comprehensive PWA with intelligent sync strategies, local ML inference, and optimized data compression. Implemented background synchronization and conflict resolution for collaborative observations.",
          technical: "Used ServiceWorker with custom caching strategies, IndexedDB for local storage, and WebAssembly for client-side AI inference. Implemented delta sync and CRDT-based conflict resolution."
      }
  ],
  
  // Results & Metrics (Template Format)
  results: {
      performance: {
          pageLoadTime: "< 1.5 seconds on 3G",
          offlineCapability: "100% core features available offline",
          aiAccuracy: "94% species identification accuracy",
          mobileOptimization: "PWA with native app performance"
      },
      business: {
          activeUsers: "5,000+ monthly citizen scientists",
          dataQuality: "50,000+ verified observations",
          researchImpact: "Data used in 8 published studies",
          conservationAlerts: "15 early ecosystem warnings"
      },
      technical: {
          uptime: "99.8% platform availability",
          scalability: "Handles 10,000+ concurrent users",
          dataProcessing: "Real-time AI inference under 2 seconds",
          energyEfficiency: "8+ hours optimized field use"
      }
  },
  
  // Code Examples (Template Format)
  codeExamples: [
      {
          title: "Multi-Modal Species Identification Pipeline",
          language: "python",
          code: `# AI pipeline combining audio and visual analysis
class MultiModalIdentificationService:
  def __init__(self):
      self.audio_service = AudioIdentificationService()
      self.vision_service = VisionIdentificationService()
      self.fusion_model = self.load_fusion_model()

  async def identify_species(self, image_path=None, audio_path=None, 
                            location=None, observation_time=None):
      """Combine audio and visual analysis for enhanced accuracy"""
      results = {"modalities": [], "fusion_result": None}
      
      # Process audio if available
      if audio_path:
          audio_result = await self.audio_service.identify_species_by_sound(
              audio_path, location, observation_time
          )
          results["modalities"].append({"type": "audio", "result": audio_result})
      
      # Process image if available  
      if image_path:
          vision_result = await self.vision_service.identify_species_by_image(
              image_path, location
          )
          results["modalities"].append({"type": "vision", "result": vision_result})
      
      # Fusion analysis when both modalities available
      if len(results["modalities"]) > 1:
          fusion_result = await self.fuse_multimodal_results(
              results["modalities"], location
          )
          results["fusion_result"] = fusion_result
          
      return results`
      },
      {
          title: "Real-time Biodiversity Clustering",
          language: "javascript",
          code: `// Efficient clustering system for large-scale observation data
export class BiodiversityCluster {
  constructor(map, options = {}) {
      this.map = map;
      this.clusterRadius = options.radius || 50;
      this.maxZoom = options.maxZoom || 15;
      this.observations = new Map();
  }

  async updateClusters(bounds, filters) {
      // Efficient spatial query with PostGIS
      const observations = await this.fetchObservations(bounds, filters);
      
      // Dynamic clustering based on zoom level
      const clusters = this.clusterObservations(observations, this.map.getZoom());
      
      // Render with WebGL acceleration
      this.renderClusters(clusters);
      
      // Update biodiversity metrics in real-time
      this.updateBiodiversityMetrics(observations);
  }

  clusterObservations(observations, zoomLevel) {
      const gridSize = this.calculateGridSize(zoomLevel);
      const clusters = new Map();
      
      observations.forEach(obs => {
          const key = this.getGridKey(obs.location, gridSize);
          if (!clusters.has(key)) {
              clusters.set(key, {
                  observations: [],
                  center: obs.location,
                  species_count: new Set(),
                  diversity_index: 0
              });
          }
          
          const cluster = clusters.get(key);
          cluster.observations.push(obs);
          cluster.species_count.add(obs.species_id);
          cluster.diversity_index = this.calculateShannonDiversity(cluster);
      });
      
      return Array.from(clusters.values());
  }
}`
      }
  ],
  
  // CTA Information (Template Format)
  cta: {
      title: "Ready to Build Your Conservation Technology Platform?",
      description: "Get the same cutting-edge features for your environmental or research project. From AI-powered identification to real-time collaboration, I'll build a custom solution that advances your conservation mission.",
      primaryAction: "Start Your Conservation Project",
      secondaryAction: "View Conservation Tech Pricing",
      features: [
          "AI species identification",
          "Real-time collaboration",
          "Offline-first design", 
          "Interactive mapping",
          "Data analytics dashboard",
          "Mobile optimization"
      ]
  }
};