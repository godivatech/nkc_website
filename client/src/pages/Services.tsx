import { Layout } from "@/components/layout/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import project1 from "@/assets/images/project-residential.png";
import project2 from "@/assets/images/project-commercial.png";
import project3 from "@/assets/images/project-interior.png";
import heroBg from "@/assets/images/project-commercial.png";

export default function ServicesPage() {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative h-[60vh] flex items-center bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="NKC Services" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-primary/60 mix-blend-multiply" />
        </div>
        <div className="container mx-auto px-6 relative z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">Our Expertise</h1>
            <p className="text-xl md:text-2xl text-white/80 font-light max-w-2xl">
              Tailored solutions for every build. From blueprints to keys, we handle it all.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Residential */}
      <section className="py-24 border-b border-border">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">01</span>
            <h2 className="text-4xl font-display font-bold text-primary mb-6">Construction & Execution</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Our team is composed of experienced professionals who are passionate about turning your vision into reality. From planning and design to construction and completion, we provide comprehensive solutions tailored to your specific needs.
            </p>
            <ul className="space-y-4 mb-8">
              {["Project Planning & Management", "Quality Construction Standards", "Timeline Adherence", "Safety Compliance"].map(item => (
                <li key={item} className="flex items-center gap-3 font-medium text-primary">
                  <Check size={18} className="text-secondary" /> {item}
                </li>
              ))}
            </ul>
            <Button asChild className="rounded-none">
              <Link href="/contact">Start Your Project</Link>
            </Button>
          </div>
          <div className="aspect-video bg-gray-200 overflow-hidden relative group">
            <img src={project1} alt="Construction & Execution" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
        </div>
      </section>

      {/* Commercial */}
      <section className="py-24 border-b border-border bg-muted/10">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center md:grid-flow-dense">
          <div className="md:col-start-2">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">02</span>
            <h2 className="text-4xl font-display font-bold text-primary mb-6">Architecture and Design</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              The firm embraces a collaborative approach, working closely with clients to transform their ideas into impactful, aesthetic, design-driven designs that are both sustainable and functional. Despite being a Construction oriented firm, NKC has quickly gained recognition for its cutting-edge, design-forward approach and commitment to pushing the boundaries of architecture.
            </p>
            <ul className="space-y-4 mb-8">
              {["Sustainable Design Solutions", "Aesthetic Excellence", "Functional Layouts", "Innovative Concepts"].map(item => (
                <li key={item} className="flex items-center gap-3 font-medium text-primary">
                  <Check size={18} className="text-secondary" /> {item}
                </li>
              ))}
            </ul>
            <Button asChild className="rounded-none">
              <Link href="/contact">Explore Our Designs</Link>
            </Button>
          </div>
          <div className="aspect-video bg-gray-200 md:col-start-1 overflow-hidden relative group">
            <img src={project2} alt="Architecture and Design" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
        </div>
      </section>

      {/* Interiors */}
      <section className="py-24 border-b border-border">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">03</span>
            <h2 className="text-4xl font-display font-bold text-primary mb-6">Interior and Exterior</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Closely working with designers, we specialize in creating unique, functional, and aesthetically pleasing interiors that reflect the personalities and needs of our clients. We offer a full range of services including space planning, furniture selection, color schemes, lighting design, and custom installations. We pride ourselves on paying close attention to detail.
            </p>
            <ul className="space-y-4 mb-8">
              {["Space Planning", "Furniture Selection", "Lighting Design", "Custom Installations"].map(item => (
                <li key={item} className="flex items-center gap-3 font-medium text-primary">
                  <Check size={18} className="text-secondary" /> {item}
                </li>
              ))}
            </ul>
            <Button asChild className="rounded-none">
              <Link href="/contact">Transform Your Space</Link>
            </Button>
          </div>
          <div className="aspect-video bg-gray-200 overflow-hidden relative group">
            <img src={project3} alt="Interior and Exterior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
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
