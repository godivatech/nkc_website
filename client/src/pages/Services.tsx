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

      {/* Construction Process - 14 Steps */}
      <section className="py-32 bg-zinc-50 relative overflow-hidden">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">The Blueprint</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-primary">Construction Process</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">Our meticulous 14-step methodology ensuring precision from the first handshake to the final key handover.</p>
          </div>

          <div className="max-w-6xl mx-auto border-t-2 border-primary mt-16">
            <div className="flex flex-col">
              {[
                { title: "Enquiry", desc: "Enquiries are pre-dominantly through word of mouth, reflecting strong client satisfaction and trust." },
                { title: "Project Initiation & Client Brief", desc: "Finalising project scope through various client discussions on budget, timeline, purpose. It includes feasibility study on site respective to the project." },
                { title: "Site Survey & Investigation", desc: "Topographical survey, soil investigation and bearing capacity test, Utility availability check on water, electricity, drain." },
                { title: "Design & Planning", desc: "Architectural approach begins here, design development and structural design and analysis. Cost estimation and BOQ preparation involves in this step." },
                { title: "Contract Finalisation", desc: "Payment details on civil scope gets discussed here. Agreement process happens with the clarity of discussed design process." },
                { title: "Project Scheduling", desc: "Architectural team provides stage wise working drawing. Project engineers and Site supervisors are assigned." },
                { title: "Super Structure Construction", desc: "Excavation, PCC laying, Foundation concrete and curing, columns, beams and slab casting. Floor by floor progress monitoring takes place with quality control." },
                { title: "MEP & Lighting Co-ordination", desc: "Electrical conduits, plumbing and sanitary lines, HVAC, Fire-fighting and lift works. Testing and inspection of services are inevitable." },
                { title: "External Development", desc: "Compound wall, gates, roads, pavements and landscaping with storm water drainage and sewage systems. Parking areas and external lightings are well-organized." },
                { title: "Quality Control & Safety", desc: "Workmanship inspection and material testing. Structural and service testing. Safety audits and compliance checks are done after each and every steps of the process." },
                { title: "Interior Material Finalization", desc: "Interior design and options are delivered in the process of construction and materials will be finalized leading with Architect team. Additional finishes are being discussed." },
                { title: "Final Inspection", desc: "Rectification of defects and snags with punch list preparation if any." },
                { title: "Hand-over", desc: "Submission of as-built drawings, Operation and maintenance manuals handover. Key handover with no further defect." },
                { title: "Defects Liability Period", desc: "Post-handover maintenance support. Rectification of defects during DLP. Final closure after DLP completion." }
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-12 py-10 md:py-14 border-b border-primary/10 group hover:bg-primary transition-colors duration-700 px-6 lg:px-12 items-start"
                >
                  <div className="md:col-span-2 flex items-center">
                    <span className="text-4xl md:text-6xl font-display font-light text-primary/20 group-hover:text-secondary group-hover:opacity-100 transition-all duration-700">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="md:col-span-4 flex items-center">
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-primary group-hover:text-white transition-colors duration-700">
                      {step.title}
                    </h3>
                  </div>

                  <div className="md:col-span-6 flex items-center">
                    <p className="text-lg text-muted-foreground group-hover:text-white/70 transition-colors duration-700 leading-relaxed font-light">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-white border-t border-border">
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
