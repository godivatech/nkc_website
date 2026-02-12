import { Layout } from "@/components/layout/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check } from "lucide-react";
import project1 from "@/assets/images/project-residential.png";
import project2 from "@/assets/images/project-commercial.png";
import project3 from "@/assets/images/project-interior.png";

export default function ServicesPage() {
  return (
    <Layout>
      <div className="bg-muted/30 py-20 border-b border-border">
        <div className="container mx-auto px-6">
           <h1 className="text-5xl font-display font-bold text-primary mb-4">Our Expertise</h1>
           <p className="text-xl text-muted-foreground max-w-2xl">Tailored solutions for every build. From blueprints to keys, we handle it all.</p>
        </div>
      </div>

      {/* Residential */}
      <section className="py-24 border-b border-border">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">01</span>
            <h2 className="text-4xl font-display font-bold text-primary mb-6">Residential Construction</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We build homes that stand the test of time. Whether it's a contemporary urban apartment or a sprawling luxury villa, our residential projects focus on livability, aesthetics, and structural integrity.
            </p>
            <ul className="space-y-4 mb-8">
               {["Earthquake-Resistant Structures", "Smart Home Integration", "Vaastu Compliant Designs", "Energy Efficient Lighting"].map(item => (
                 <li key={item} className="flex items-center gap-3 font-medium text-primary">
                   <Check size={18} className="text-secondary" /> {item}
                 </li>
               ))}
            </ul>
            <Button asChild className="rounded-none">
              <Link href="/contact">Start Your Dream Home</Link>
            </Button>
          </div>
          <div className="aspect-video bg-gray-200 overflow-hidden relative group">
             <img src={project1} alt="Residential" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
        </div>
      </section>

      {/* Commercial */}
      <section className="py-24 border-b border-border bg-muted/10">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center md:grid-flow-dense">
          <div className="md:col-start-2">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">02</span>
            <h2 className="text-4xl font-display font-bold text-primary mb-6">Commercial Projects</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              From office towers to retail spaces, we construct environments that enhance productivity and business growth. Our commercial builds prioritize safety, functionality, and brand identity.
            </p>
            <ul className="space-y-4 mb-8">
               {["Steel Structure Specialist", "HVAC & Fire Safety", "Modern Facade Systems", "Parking Solutions"].map(item => (
                 <li key={item} className="flex items-center gap-3 font-medium text-primary">
                   <Check size={18} className="text-secondary" /> {item}
                 </li>
               ))}
            </ul>
            <Button asChild className="rounded-none">
              <Link href="/contact">Discuss Your Project</Link>
            </Button>
          </div>
          <div className="aspect-video bg-gray-200 md:col-start-1 overflow-hidden relative group">
             <img src={project2} alt="Commercial" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
        </div>
      </section>

      {/* Interiors */}
      <section className="py-24 border-b border-border">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">03</span>
            <h2 className="text-4xl font-display font-bold text-primary mb-6">Interior Design</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Luxury turnkey designs that transform empty shells into vibrant living and working spaces. We curate materials, furniture, and lighting to match your personal style.
            </p>
            <ul className="space-y-4 mb-8">
               {["Material Selection", "Custom Joinery", "3D Visualization", "Furniture Procurement"].map(item => (
                 <li key={item} className="flex items-center gap-3 font-medium text-primary">
                   <Check size={18} className="text-secondary" /> {item}
                 </li>
               ))}
            </ul>
            <Button asChild className="rounded-none">
              <Link href="/contact">View Gallery</Link>
            </Button>
          </div>
          <div className="aspect-video bg-gray-200 overflow-hidden relative group">
             <img src={project3} alt="Interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-display font-bold text-center mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {[
              { q: "What is your typical project timeline?", a: "Timelines vary by project size. A standard 2000 sq.ft villa typically takes 8-10 months, while interiors can be done in 3-4 months." },
              { q: "Do you handle approvals and permits?", a: "Yes, we provide end-to-end assistance with CMDA/DTCP approvals and other necessary regulatory permits." },
              { q: "Do you use sustainable materials?", a: "Absolutely. We prioritize eco-friendly materials like fly ash bricks, low-VOC paints, and energy-efficient glass wherever possible." },
              { q: "How are payments structured?", a: "Payments are milestone-based, ensuring transparency. You pay as the construction progresses through defined stages." },
              { q: "Do you offer warranty?", a: "Yes, we provide a 1-year maintenance period and structural warranty as per industry standards." }
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-lg font-medium font-display">{item.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </Layout>
  );
}
