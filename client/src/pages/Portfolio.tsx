import { Layout } from "@/components/layout/Layout";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import project1 from "@/assets/images/project-residential.png";
import project2 from "@/assets/images/project-commercial.png";
import project3 from "@/assets/images/project-interior.png";

const projects = [
  {
    id: 1,
    title: "Azure Villa",
    location: "ECR, Chennai",
    category: "Residential",
    image: project1,
    description: "A luxury 4BHK villa overlooking the coast. Features include a floating staircase, infinity pool, and sustainable rainwater harvesting systems. The design philosophy centered around bringing the outdoors in."
  },
  {
    id: 2,
    title: "Tech Park One",
    location: "OMR, Chennai",
    category: "Commercial",
    image: project2,
    description: "A LEED Gold certified IT park with 15 floors of premium office space. Designed for energy efficiency with high-performance glazing and automated building management systems."
  },
  {
    id: 3,
    title: "Luxe Penthouse",
    location: "Anna Nagar, Chennai",
    category: "Interiors",
    image: project3,
    description: "Complete interior renovation of a 3000 sq.ft penthouse. We used Italian marble, custom teak wood furniture, and smart lighting to create a warm yet sophisticated ambience."
  },
  // Duplicates for grid filling
  {
    id: 4,
    title: "Green Valley Homes",
    location: "Porur, Chennai",
    category: "Residential",
    image: project1,
    description: "A gated community project focusing on community living and green spaces."
  },
  {
    id: 5,
    title: "Nexus Hub",
    location: "Guindy, Chennai",
    category: "Commercial",
    image: project2,
    description: "Co-working space design with industrial aesthetics."
  },
  {
    id: 6,
    title: "Urban Loft",
    location: "Adyar, Chennai",
    category: "Interiors",
    image: project3,
    description: "Minimalist interior design for a young professional couple."
  },
];

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <Layout>
      <div className="bg-primary pt-32 pb-20 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Our Masterpieces</h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12">
            Explore our diverse portfolio of residential, commercial, and interior projects delivered with excellence.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {["All", "Residential", "Commercial", "Interiors"].map(cat => (
              <Button 
                key={cat} 
                onClick={() => setFilter(cat)}
                variant={filter === cat ? "secondary" : "outline"}
                className={`rounded-none px-6 min-w-[120px] ${filter !== cat ? "border-white/20 text-white hover:bg-white/10 hover:text-white" : "text-white"}`}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              {...project}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button variant="outline" size="lg" className="rounded-none px-12 border-primary text-primary hover:bg-primary hover:text-white">
            Load More Projects
          </Button>
        </div>
      </div>
    </Layout>
  );
}
