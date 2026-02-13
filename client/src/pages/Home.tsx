import { Layout } from "@/components/layout/Layout";
import { StatsCounter } from "@/components/ui/StatsCounter";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Building2, Home, PaintBucket, MoveRight } from "lucide-react";
import heroBg from "@/assets/images/hero-bg.png";
import imgAnandham from "@/assets/images/Projects/Andhaman Palace/Main.webp";
import imgJSKMahal from "@/assets/images/Projects/JSK Mahal/Main.webp";
import imgSivagangai from "@/assets/images/Projects/Sivagangai Mosque/Main.webp";
import imgSrimethila from "@/assets/images/Projects/Srimethila Hotel/Main.webp";
import imgVKT from "@/assets/images/Projects/VKT Commercial Complex/Main.webp";
import abstractTexture from "@/assets/images/texture-abstract.png";
import { Link } from "wouter";
import { useRef, useState } from "react";

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.3]);

  // Horizontal Scroll Setup
  const horizontalRef = useRef(null);
  const { scrollYProgress: horizontalScrollY } = useScroll({
    target: horizontalRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(horizontalScrollY, [0.1, 0.9], ["50%", "-95%"]);
  const fadeOpacity = useTransform(horizontalScrollY, [0.8, 0.9], [1, 0]);

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
                    Architecture<br />
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
                      <span className="text-4xl font-display font-bold block mb-2">500+</span>
                      <span className="text-xs uppercase tracking-widest text-muted-foreground">Finished Projects</span>
                    </div>
                    <div className="border-t border-primary/10 pt-6">
                      <span className="text-4xl font-display font-bold block mb-2">20Y</span>
                      <span className="text-xs uppercase tracking-widest text-muted-foreground">Years Experience</span>
                    </div>
                    <div className="border-t border-primary/10 pt-6">
                      <span className="text-4xl font-display font-bold block mb-2">400+</span>
                      <span className="text-xs uppercase tracking-widest text-muted-foreground">Happy Clients</span>
                    </div>
                    <div className="border-t border-primary/10 pt-6">
                      <span className="text-4xl font-display font-bold block mb-2">30+</span>
                      <span className="text-xs uppercase tracking-widest text-muted-foreground">Ongoing Projects</span>
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
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
              <h2 className="text-6xl md:text-8xl font-display font-bold text-primary uppercase leading-none">
                Core<br />Domain
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

        {/* Project Showcase - Horizontal Scroll */}
        <div ref={horizontalRef} className="h-[300vh] relative">
          <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden bg-white">
            <div className="container mx-auto px-6 mb-12">
              <motion.div
                style={{ opacity: fadeOpacity }}
                className="max-w-2xl"
              >
                <h2 className="text-2xl font-display font-bold tracking-widest uppercase mb-4">Masterpieces</h2>
                <div className="w-full h-px bg-primary/10 mb-4" />
                <p className="text-muted-foreground">Scroll to explore our defining structures.</p>
              </motion.div>
            </div>

            <motion.div
              style={{ x }}
              className="flex gap-10 px-6 w-max"
            >
              {[
                { title: "Anandham Palace", cat: "Residential", img: imgAnandham, id: "01" },
                { title: "JSK Mahal", cat: "Commercial", img: imgJSKMahal, id: "02" },
                { title: "Sivagangai Mosque", cat: "Religious", img: imgSivagangai, id: "03" },
                { title: "Srimethila Hotel", cat: "Hospitality", img: imgSrimethila, id: "04" },
                { title: "VKT Commercial", cat: "Commercial", img: imgVKT, id: "05" },
              ].map((p, i) => (
                <div key={i} className="w-[80vw] md:w-[60vw] lg:w-[45vw] flex-shrink-0 group cursor-pointer">
                  <div className="aspect-[16/9] overflow-hidden bg-muted mb-6 relative">
                    <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md px-4 py-2 text-white font-display text-sm border border-white/20 z-10">
                      {p.id}
                    </div>
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="flex justify-between items-end border-b border-primary/10 pb-4">
                    <div>
                      <h3 className="text-4xl md:text-5xl font-display font-bold uppercase mb-2 text-primary">{p.title}</h3>
                      <span className="text-sm uppercase tracking-widest text-muted-foreground">{p.cat} — 2024</span>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                      <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Testimonials Section - Single Item Carousel */}
        <section className="py-32 mb-24 bg-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/src/assets/images/texture-abstract.png')] opacity-10 mix-blend-overlay bg-cover bg-center" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-4">
                <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-6 block">Client Perspectives</span>
                <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-8">
                  Trusted by <br /><span className="text-secondary">Visionaries</span>
                </h2>
                <div className="flex gap-4">
                  <button
                    onClick={() => setActiveTestimonial((prev) => (prev === 0 ? 3 : prev - 1))}
                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300"
                  >
                    <ArrowRight className="rotate-180" />
                  </button>
                  <button
                    onClick={() => setActiveTestimonial((prev) => (prev === 3 ? 0 : prev + 1))}
                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300"
                  >
                    <ArrowRight />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-8">
                <div className="relative h-[450px] md:h-[400px]">
                  <AnimatePresence mode="wait">
                    {[
                      {
                        title: "RESPONSIVE AND DEEPLY COMMITTED",
                        text: "NKC is skilled, responsive and deeply committed to client satisfaction. Their attention to detail and proactive communication made the entire process seamless.",
                        name: "Mr. Siva",
                        role: "Business Owner"
                      },
                      {
                        title: "CONSISTENT AND PRO-ACTIVE",
                        text: "NKC is professional. Communication throughout the project was clear, consistent and pro-active. They delivered exactly what was promised, on time.",
                        name: "Mr. Elanjeliyan",
                        role: "Director of Operations"
                      },
                      {
                        title: "EXCELLENT TECHNICAL CAPABILITIES",
                        text: "NKC team displayed excellent technical capabilities. Their engineering solutions were innovative and efficient, saving us both time and resources.",
                        name: "Mr. Vadivelu",
                        role: "Chief Engineer"
                      },
                      {
                        title: "DELIVERING QUALITY RESULTS",
                        text: "This Construction company had a strong commitment in delivering quality results. The build quality exceeded our expectations in every measurable way.",
                        name: "Mr. Dhanasekaran",
                        role: "Real Estate Developer"
                      }
                    ].map((t, i) => (
                      i === activeTestimonial && (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                          className="absolute inset-0"
                        >
                          <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" className="text-secondary mb-8 opacity-50">
                            <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                          </svg>
                          <h3 className="text-2xl md:text-4xl font-display font-bold leading-tight mb-8">"{t.text}"</h3>
                          <div>
                            <h4 className="text-xl font-bold text-secondary mb-1">{t.name}</h4>
                            <p className="text-white/60 text-sm uppercase tracking-wider">{t.role}</p>
                          </div>
                        </motion.div>
                      )
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </div>
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
              Let's craft the<br />
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
