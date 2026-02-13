import { Layout } from "@/components/layout/Layout";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import imgAnandham from "@/assets/images/Projects/Andhaman Palace/Main.webp";
import imgAnandham1 from "@/assets/images/Projects/Andhaman Palace/image 1.webp";
import imgAnandham2 from "@/assets/images/Projects/Andhaman Palace/image 2.webp";
import imgAnandham3 from "@/assets/images/Projects/Andhaman Palace/image 3.webp";
import imgAnandham4 from "@/assets/images/Projects/Andhaman Palace/image 4.webp";
import imgAnandham5 from "@/assets/images/Projects/Andhaman Palace/image 5.webp";
import imgAnandham6 from "@/assets/images/Projects/Andhaman Palace/image 6.webp";
import imgAnandham7 from "@/assets/images/Projects/Andhaman Palace/image 7.webp";
import imgAnandham8 from "@/assets/images/Projects/Andhaman Palace/image 8.webp";

import imgAwinco from "@/assets/images/Projects/Awinco Badminton Court/Main.webp";
import imgAwinco1 from "@/assets/images/Projects/Awinco Badminton Court/image 1.webp";
import imgAwinco2 from "@/assets/images/Projects/Awinco Badminton Court/image 2.webp";
import imgAwinco3 from "@/assets/images/Projects/Awinco Badminton Court/image 3.webp";

import imgJavith from "@/assets/images/Projects/Javith Residence/Main.webp";
import imgJavith1 from "@/assets/images/Projects/Javith Residence/image 1.webp";
import imgJavith2 from "@/assets/images/Projects/Javith Residence/image 2.webp";
import imgJavith3 from "@/assets/images/Projects/Javith Residence/image 3.webp";
import imgJavith4 from "@/assets/images/Projects/Javith Residence/image 4.webp";

import imgJeyam from "@/assets/images/Projects/Jeyam Residence/Main.webp";
import imgJeyam1 from "@/assets/images/Projects/Jeyam Residence/image 1.webp";
import imgJeyam2 from "@/assets/images/Projects/Jeyam Residence/image 2.webp";
import imgJeyam3 from "@/assets/images/Projects/Jeyam Residence/image 3.webp";
import imgJeyam4 from "@/assets/images/Projects/Jeyam Residence/image 4.webp";
import imgJeyam5 from "@/assets/images/Projects/Jeyam Residence/image 5.webp";

import imgJSKMahal from "@/assets/images/Projects/JSK Mahal/Main.webp";
import imgJSKMahal1 from "@/assets/images/Projects/JSK Mahal/image 1.webp";
import imgJSKMahal2 from "@/assets/images/Projects/JSK Mahal/image 2.webp";
import imgJSKMahal3 from "@/assets/images/Projects/JSK Mahal/image 3.webp";
import imgJSKMahal4 from "@/assets/images/Projects/JSK Mahal/image 4.webp";
import imgJSKMahal5 from "@/assets/images/Projects/JSK Mahal/image 5.webp";
import imgJSKMahal6 from "@/assets/images/Projects/JSK Mahal/image 6.webp";

import imgJSKRes from "@/assets/images/Projects/JSK Residence/Main.webp";
import imgJSKRes1 from "@/assets/images/Projects/JSK Residence/image 1.webp";
import imgJSKRes2 from "@/assets/images/Projects/JSK Residence/image 2.webp";
import imgJSKRes3 from "@/assets/images/Projects/JSK Residence/image 3.webp";
import imgJSKRes4 from "@/assets/images/Projects/JSK Residence/image 4.webp";
import imgJSKRes5 from "@/assets/images/Projects/JSK Residence/image 5.webp";
import imgJSKRes6 from "@/assets/images/Projects/JSK Residence/image 6.webp";
import imgJSKRes7 from "@/assets/images/Projects/JSK Residence/image 7.webp";

import imgKarupusamy from "@/assets/images/Projects/Karupusamy Residence/Main.webp";
import imgKarupusamy1 from "@/assets/images/Projects/Karupusamy Residence/image 1.webp";
import imgKarupusamy2 from "@/assets/images/Projects/Karupusamy Residence/image 2.webp";
import imgKarupusamy3 from "@/assets/images/Projects/Karupusamy Residence/image 3.webp";
import imgKarupusamy4 from "@/assets/images/Projects/Karupusamy Residence/image 4.webp";
import imgKarupusamy5 from "@/assets/images/Projects/Karupusamy Residence/image 5.webp";

import imgPeeriyapattinam from "@/assets/images/Projects/Peeriyapattinam Mosque/Main.webp";
import imgPeeriyapattinam1 from "@/assets/images/Projects/Peeriyapattinam Mosque/image 1.webp";
import imgPeeriyapattinam2 from "@/assets/images/Projects/Peeriyapattinam Mosque/image 2.webp";
import imgPeeriyapattinam3 from "@/assets/images/Projects/Peeriyapattinam Mosque/image 3.webp";

import imgSivagangai from "@/assets/images/Projects/Sivagangai Mosque/Main.webp";
import imgSivagangai1 from "@/assets/images/Projects/Sivagangai Mosque/image 1.webp";
import imgSivagangai2 from "@/assets/images/Projects/Sivagangai Mosque/image 2.webp";
import imgSivagangai3 from "@/assets/images/Projects/Sivagangai Mosque/image 3.webp";
import imgSivagangai4 from "@/assets/images/Projects/Sivagangai Mosque/image 4.webp";
import imgSivagangai5 from "@/assets/images/Projects/Sivagangai Mosque/image 5.webp";

import imgSrimethila from "@/assets/images/Projects/Srimethila Hotel/Main.webp";
import imgSrimethila1 from "@/assets/images/Projects/Srimethila Hotel/image 1.webp";
import imgSrimethila2 from "@/assets/images/Projects/Srimethila Hotel/image 2.webp";
import imgSrimethila3 from "@/assets/images/Projects/Srimethila Hotel/image 3.webp";
import imgSrimethila4 from "@/assets/images/Projects/Srimethila Hotel/image 4.webp";
import imgSrimethila5 from "@/assets/images/Projects/Srimethila Hotel/image 5.webp";
import imgSrimethila6 from "@/assets/images/Projects/Srimethila Hotel/image 6.webp";

import imgVKT from "@/assets/images/Projects/VKT Commercial Complex/Main.webp";
import imgVKT1 from "@/assets/images/Projects/VKT Commercial Complex/image 1.webp";
import imgVKT2 from "@/assets/images/Projects/VKT Commercial Complex/image 2.webp";
import imgVKT3 from "@/assets/images/Projects/VKT Commercial Complex/image 3.webp";
import imgVKT4 from "@/assets/images/Projects/VKT Commercial Complex/image 4.webp";
import imgVKT5 from "@/assets/images/Projects/VKT Commercial Complex/image 5.webp";
import imgVKT6 from "@/assets/images/Projects/VKT Commercial Complex/image 6.webp";

const projects = [
  {
    id: 1,
    title: "Anandham Palace",
    location: "Rajapalayam",
    category: "Residential",
    type: "Classic Bungalow",
    year: "Ongoing",
    status: "Ongoing",
    image: imgAnandham,
    gallery: [
      imgAnandham, imgAnandham1, imgAnandham2, imgAnandham3, imgAnandham4,
      imgAnandham5, imgAnandham6, imgAnandham7, imgAnandham8
    ],
    description: "This design draws deep inspiration from the Chettinad architectural heritage of Tamil Nadu, reflecting the elegance, functionality, and cultural richness. Rooted in vernacular wisdom and adapted for modern comfort, this home blends heritage aesthetics with contemporary utility."
  },
  {
    id: 2,
    title: "Awinco Badminton Court",
    location: "Ramanathapuram",
    category: "Commercial",
    type: "Sports Complex",
    year: "2025",
    status: "Completed",
    image: imgAwinco,
    gallery: [imgAwinco, imgAwinco1, imgAwinco2, imgAwinco3],
    description: "This badminton court is a purpose-built indoor/outdoor sports facility designed for high-performance play, recreational use, or training. Engineered with precision and user comfort in mind, the court adheres strictly to standard dimensions and international specifications."
  },
  {
    id: 3,
    title: "Javith Residence",
    location: "Ramanathapuram",
    category: "Residential",
    type: "Villa",
    year: "2025",
    status: "Completed",
    image: imgJavith,
    gallery: [imgJavith, imgJavith1, imgJavith2, imgJavith3, imgJavith4],
    description: "This villa presents a harmonious fusion of modernism and Islamic elements, creating a home that is both visually striking and spiritually serene. With clean lines, geometric harmony, and elegant Islamic detailing, the design reflects timeless cultural values reimagined for the modern world."
  },
  {
    id: 4,
    title: "Jeyam Residence",
    location: "Ramanathapuram",
    category: "Residential",
    type: "Villa / Commercial",
    year: "2025",
    status: "Completed",
    image: imgJeyam,
    gallery: [imgJeyam, imgJeyam1, imgJeyam2, imgJeyam3, imgJeyam4, imgJeyam5],
    description: "This modern residence is a bold expression of minimalism, function, and refined aesthetics, offering a seamless blend of architecture and lifestyle. Clean lines, open spaces, and natural light define the character of the home, where every detail is purposeful and uncluttered."
  },
  {
    id: 5,
    title: "JSK Mahal",
    location: "Ramanathapuram",
    category: "Commercial",
    type: "Multipurpose Hall",
    year: "Ongoing",
    status: "Ongoing",
    image: imgJSKMahal,
    gallery: [
      imgJSKMahal, imgJSKMahal1, imgJSKMahal2, imgJSKMahal3,
      imgJSKMahal4, imgJSKMahal5, imgJSKMahal6
    ],
    description: "This multipurpose hall is a vibrant, adaptable space designed to accommodate a wide range of public and private functions. With its flexible layout, accessible design, and high-visibility location, the hall serves as a dynamic hub for cultural, social, and professional gatherings."
  },
  {
    id: 6,
    title: "JSK Residence",
    location: "Ramanathapuram",
    category: "Residential",
    type: "Modern Bungalow",
    year: "Ongoing",
    status: "Ongoing",
    image: imgJSKRes,
    gallery: [
      imgJSKRes, imgJSKRes1, imgJSKRes2, imgJSKRes3,
      imgJSKRes4, imgJSKRes5, imgJSKRes6, imgJSKRes7
    ],
    description: "This villa design embodies the timeless grandeur of Classical architecture, fusing symmetry, proportion, and intricate detailing to create a residence that exudes elegance and permanence. Rooted in Greco-Roman architectural traditions, the villa offers a sophisticated living experience."
  },
  {
    id: 7,
    title: "Karupusamy Residence",
    location: "Ramanathapuram",
    category: "Residential",
    type: "Villa",
    year: "2015",
    status: "Completed",
    image: imgKarupusamy,
    gallery: [
      imgKarupusamy, imgKarupusamy1, imgKarupusamy2, imgKarupusamy3,
      imgKarupusamy4, imgKarupusamy5
    ],
    description: "This residence embodies the essence of modern minimalism, where simplicity meets sophistication. With clean lines, open spaces, and a restrained material palette, the design celebrates clarity, calm, and function, creating a peaceful sanctuary tailored for contemporary living."
  },
  {
    id: 8,
    title: "Peeriyapattinam Mosque",
    location: "Periyapattinam, Ramanathapuram",
    category: "Commercial",
    type: "Religious Building",
    year: "Ongoing",
    status: "Ongoing",
    image: imgPeeriyapattinam,
    gallery: [imgPeeriyapattinam, imgPeeriyapattinam1, imgPeeriyapattinam2, imgPeeriyapattinam3],
    description: "This modest mosque design reflects the essence of Islamic architecture through simplicity, spirituality, and community focus. Thoughtfully planned to serve a small congregation, the structure emphasizes clarity, accessibility, and serene aesthetics."
  },
  {
    id: 9,
    title: "Sivagangai Mosque",
    location: "Sivagangai",
    category: "Commercial",
    type: "Religious Building",
    year: "Ongoing",
    status: "Ongoing",
    image: imgSivagangai,
    gallery: [
      imgSivagangai, imgSivagangai1, imgSivagangai2, imgSivagangai3,
      imgSivagangai4, imgSivagangai5
    ],
    description: "This mosque stands as a monument of grandeur and spiritual magnificence, embodying the highest traditions of Islamic architecture. With sweeping arches, a soaring central dome, and finely detailed ornamentation, the design is both awe-inspiring and reverent."
  },
  {
    id: 10,
    title: "Srimethila Hotel",
    location: "Rameswaram",
    category: "Commercial",
    type: "Hospitality",
    year: "2023",
    status: "Completed",
    image: imgSrimethila,
    gallery: [
      imgSrimethila, imgSrimethila1, imgSrimethila2, imgSrimethila3,
      imgSrimethila4, imgSrimethila5, imgSrimethila6
    ],
    description: "This multi-storey hotel is a modern hospitality landmark, offering a seamless blend of comfort, functionality, and refined design. Rising with elegant verticality, the building is designed to maximize spatial efficiency, guest experience, and visual appeal."
  },
  {
    id: 11,
    title: "VKT Commercial Complex",
    location: "Sivagangai",
    category: "Commercial",
    type: "Commercial Building",
    year: "2025",
    status: "Completed",
    image: imgVKT,
    gallery: [
      imgVKT, imgVKT1, imgVKT2, imgVKT3,
      imgVKT4, imgVKT5, imgVKT6
    ],
    description: "This modern commercial complex is a multi-functional destination that blends business, leisure, and hospitality under one roof. Designed with a focus on efficiency, elegance, and experience, the building integrates a spacious banquet hall and fine-dining restaurant."
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
