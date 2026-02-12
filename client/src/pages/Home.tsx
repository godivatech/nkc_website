import { Layout } from "@/components/layout/Layout";
import { StatsCounter } from "@/components/ui/StatsCounter";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Home, PaintBucket } from "lucide-react";
import heroBg from "@/assets/images/hero-bg.png";
import project1 from "@/assets/images/project-residential.png";
import project2 from "@/assets/images/project-commercial.png";
import project3 from "@/assets/images/project-interior.png";
import { Link } from "wouter";

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[800px] flex items-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Construction Site" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="inline-block py-1 px-3 border border-secondary/50 text-secondary text-sm font-medium tracking-widest uppercase mb-6 bg-primary/50 backdrop-blur-sm">
              Premium Construction in Chennai
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 leading-tight">
              Turning Visions into <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Timeless Structures</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl font-light leading-relaxed">
              Expert residential, commercial & interiors. Delivering sustainable, collaborative excellence for over a decade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-none h-14 px-8 text-base bg-secondary hover:bg-secondary/90 text-white border-0">
                <Link href="/portfolio">View Portfolio</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-none h-14 px-8 text-base border-white text-white hover:bg-white hover:text-primary">
                <Link href="/contact">Get Free Quote</Link>
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatsCounter end={50} suffix="+" label="Projects Completed" />
            <StatsCounter end={10} suffix="+" label="Years Experience" />
            <StatsCounter end={100} suffix="%" label="On-Time Delivery" />
            <StatsCounter end={0} suffix="" label="Compromises" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">Our Expertise</h2>
            <p className="text-muted-foreground text-lg">Comprehensive construction solutions tailored to your unique requirements.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={Home}
              title="Residential Builds"
              description="From luxury villas to modern apartments, we craft homes that reflect your lifestyle and aspirations."
              features={["Custom Home Design", "Structural Excellence", "Sustainable Materials"]}
            />
            <ServiceCard 
              icon={Building2}
              title="Commercial Projects"
              description="State-of-the-art office spaces, retail complexes, and industrial structures built for business success."
              features={["Office Towers", "Retail Spaces", "Industrial Warehouses"]}
            />
            <ServiceCard 
              icon={PaintBucket}
              title="Premium Interiors"
              description="Turnkey interior design solutions that blend aesthetics with functionality for inspiring spaces."
              features={["Space Planning", "Custom Furniture", "Lighting Design"]}
            />
          </div>
        </div>
      </section>

      {/* Featured Projects Teaser */}
      <section className="py-24 bg-primary text-white overflow-hidden">
        <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
          <div>
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">Our Work</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold">Featured Projects</h2>
          </div>
          <Link href="/portfolio" className="hidden md:flex items-center gap-2 text-secondary font-bold uppercase tracking-wider hover:text-white transition-colors">
            View All Projects <ArrowRight size={18} />
          </Link>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group relative aspect-[4/5] overflow-hidden bg-gray-900 cursor-pointer">
              <img src={project1} alt="Project 1" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
              <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-secondary text-xs uppercase tracking-widest mb-1">Residential</p>
                <h3 className="text-2xl font-display font-bold">Azure Villa</h3>
              </div>
            </div>
            <div className="group relative aspect-[4/5] overflow-hidden bg-gray-900 cursor-pointer md:mt-12">
              <img src={project2} alt="Project 2" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
              <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-secondary text-xs uppercase tracking-widest mb-1">Commercial</p>
                <h3 className="text-2xl font-display font-bold">Tech Park One</h3>
              </div>
            </div>
            <div className="group relative aspect-[4/5] overflow-hidden bg-gray-900 cursor-pointer">
              <img src={project3} alt="Project 3" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
              <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-secondary text-xs uppercase tracking-widest mb-1">Interiors</p>
                <h3 className="text-2xl font-display font-bold">Luxe Penthouse</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="bg-white p-12 md:p-20 border border-border flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl shadow-primary/5">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">Ready to Build Your Vision?</h2>
              <p className="text-lg text-muted-foreground">
                Whether it's a dream home, a commercial landmark, or a renovation, our team is ready to bring your ideas to life with precision and passion.
              </p>
            </div>
            <div className="shrink-0">
              <Button asChild size="lg" className="rounded-none h-16 px-10 text-lg bg-primary hover:bg-primary/90 text-white">
                <Link href="/contact">Start Your Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
