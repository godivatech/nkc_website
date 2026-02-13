import { Layout } from "@/components/layout/Layout";
import { StatsCounter } from "@/components/ui/StatsCounter";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Building2, Home, PaintBucket, MoveRight } from "lucide-react";
import heroBg from "@/assets/images/hero-bg.png";
import project1 from "@/assets/images/project-residential.png";
import project2 from "@/assets/images/project-commercial.png";
import project3 from "@/assets/images/project-interior.png";
import abstractTexture from "@/assets/images/texture-abstract.png";
import { Link } from "wouter";
import { useRef } from "react";

export default function HomePage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.3]);

  return (
    <Layout>
      <div ref={containerRef}>
        {/* Hero Section - Awwwards Style */}
        <section className="relative h-screen flex flex-col justify-end pb-20 overflow-hidden bg-primary">
          <motion.div style={{ scale, opacity }} className="absolute inset-0 z-0">
            <img 
              src={heroBg} 
              alt="Construction Site" 
              className="w-full h-full object-cover grayscale brightness-50"
            />
            <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
          </motion.div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-8">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="text-secondary font-display font-bold tracking-[0.3em] uppercase text-xs mb-8 block">
                    Established 2015 — Chennai
                  </span>
                  <h1 className="text-[clamp(3rem,10vw,8rem)] font-display font-bold text-white mb-8 leading-[0.85] tracking-tighter uppercase">
                    Architecture<br/>
                    <span className="text-transparent border-t-2 border-white/20 pt-4 inline-block w-full" style={{ WebkitTextStroke: '1px white' }}>
                      Is a language
                    </span>
                  </h1>
                </motion.div>
              </div>
              <div className="lg:col-span-4 pb-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p className="text-white/60 text-lg font-light mb-10 leading-relaxed max-w-sm">
                    We translate complex visions into monolithic structures that define the modern skyline of South India.
                  </p>
                  <div className="flex gap-6">
                    <Button asChild variant="link" className="text-white group p-0 h-auto text-sm tracking-widest uppercase">
                      <Link href="/portfolio" className="flex items-center gap-3">
                        Our Work <MoveRight className="group-hover:translate-x-2 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Large Vertical Text */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 rotate-90 translate-x-1/2 hidden xl:block">
            <span className="text-[12rem] font-display font-black text-white/[0.03] uppercase whitespace-nowrap tracking-tighter">
              NKC BUILDERS
            </span>
          </div>
        </section>

        {/* Narrative Section */}
        <section className="py-32 bg-white relative overflow-hidden">
          <div className="noise-bg absolute inset-0 pointer-events-none" />
          <div className="architectural-grid absolute inset-0 opacity-[0.03] pointer-events-none" />
          
          <div className="container mx-auto px-6">
            <div className="max-w-5xl">
              <motion.h2 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-7xl font-display font-bold text-primary mb-16 leading-[0.95]"
              >
                We build with <span className="text-secondary">Precision</span>. We design with <span className="italic font-light">Purpose</span>. We deliver with <span className="underline decoration-1 underline-offset-8">Excellence</span>.
              </motion.h2>
              
              <div className="grid md:grid-cols-2 gap-20">
                <div className="aspect-[4/5] bg-muted relative group overflow-hidden">
                  <img src={abstractTexture} alt="Texture" className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-primary/20 mix-blend-color" />
                </div>
                <div className="flex flex-col justify-center space-y-10">
                  <p className="text-2xl text-muted-foreground leading-relaxed font-light">
                    Our philosophy is rooted in the intersection of structural engineering and artistic expression. Every slab poured and every beam placed is a testament to our dedication to the craft.
                  </p>
                  <div className="grid grid-cols-2 gap-10">
                    <div className="border-t border-primary/10 pt-6">
                      <span className="text-4xl font-display font-bold block mb-2">50+</span>
                      <span className="text-xs uppercase tracking-widest text-muted-foreground">Monolithic Builds</span>
                    </div>
                    <div className="border-t border-primary/10 pt-6">
                      <span className="text-4xl font-display font-bold block mb-2">10Y</span>
                      <span className="text-xs uppercase tracking-widest text-muted-foreground">Defining Skyline</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Mosaic */}
        <section className="py-32 bg-muted/20">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
              <h2 className="text-6xl md:text-8xl font-display font-bold text-primary uppercase leading-none">
                Core<br/>Domain
              </h2>
              <p className="max-w-xs text-muted-foreground text-sm uppercase tracking-widest leading-loose">
                Specialized in high-density commercial developments and bespoke residential enclaves.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 border-y border-primary/10">
              <div className="p-12 md:border-r border-primary/10 hover:bg-primary hover:text-white transition-colors duration-500 group cursor-default">
                <span className="text-secondary font-display font-bold mb-10 block">01/</span>
                <h3 className="text-4xl font-display font-bold mb-6">Residential</h3>
                <p className="text-sm opacity-60 mb-10 leading-loose group-hover:opacity-80">Bespoke living environments crafted with artisanal precision and modern engineering.</p>
                <ArrowRight className="group-hover:translate-x-4 transition-transform text-secondary" />
              </div>
              <div className="p-12 md:border-r border-primary/10 hover:bg-primary hover:text-white transition-colors duration-500 group cursor-default">
                <span className="text-secondary font-display font-bold mb-10 block">02/</span>
                <h3 className="text-4xl font-display font-bold mb-6">Commercial</h3>
                <p className="text-sm opacity-60 mb-10 leading-loose group-hover:opacity-80">Scalable infrastructure designed for the future of enterprise and retail.</p>
                <ArrowRight className="group-hover:translate-x-4 transition-transform text-secondary" />
              </div>
              <div className="p-12 hover:bg-primary hover:text-white transition-colors duration-500 group cursor-default">
                <span className="text-secondary font-display font-bold mb-10 block">03/</span>
                <h3 className="text-4xl font-display font-bold mb-6">Interiors</h3>
                <p className="text-sm opacity-60 mb-10 leading-loose group-hover:opacity-80">Turnkey interior ecosystems that harmonize aesthetics with spatial functionality.</p>
                <ArrowRight className="group-hover:translate-x-4 transition-transform text-secondary" />
              </div>
            </div>
          </div>
        </section>

        {/* Project Showcase - Horizontal Style */}
        <section className="py-32 bg-white overflow-hidden">
          <div className="container mx-auto px-6 mb-20">
            <h2 className="text-2xl font-display font-bold tracking-widest uppercase mb-4">Masterpieces</h2>
            <div className="w-full h-px bg-primary/10" />
          </div>
          
          <div className="flex gap-10 overflow-x-auto px-6 pb-20 no-scrollbar">
            {[
              { title: "Azure Coast", cat: "Villa", img: project1 },
              { title: "Nexus One", cat: "Office", img: project2 },
              { title: "Luxe Loft", cat: "Interior", img: project3 },
              { title: "The Monolith", cat: "Tower", img: heroBg },
            ].map((p, i) => (
              <div key={i} className="min-w-[400px] md:min-w-[600px] group cursor-pointer">
                <div className="aspect-video overflow-hidden bg-muted mb-6">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0" />
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="text-3xl font-display font-bold uppercase">{p.title}</h3>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">{p.cat} — 2024</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Big CTA */}
        <section className="py-40 bg-primary text-white text-center relative overflow-hidden">
          <div className="noise-bg absolute inset-0 opacity-[0.1]" />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="container mx-auto px-6 relative z-10"
          >
            <h2 className="text-[clamp(2.5rem,8vw,6rem)] font-display font-bold leading-none mb-12 uppercase tracking-tighter">
              Let's craft the<br/>
              <span className="text-secondary">Next Landmark</span>
            </h2>
            <Button asChild size="lg" className="rounded-none h-20 px-12 text-xl bg-white text-primary hover:bg-secondary hover:text-white transition-all">
              <Link href="/contact" className="flex items-center gap-4">
                Initiate Project <MoveRight />
              </Link>
            </Button>
          </motion.div>
        </section>
      </div>
    </Layout>
  );
}
