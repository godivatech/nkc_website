import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Check, Users, Leaf, ShieldCheck, Linkedin } from "lucide-react";
import teamImg from "@/assets/images/about-team.png";

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <img src={teamImg} alt="NKC Team" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-primary/60 mix-blend-multiply" />
        </div>
        <div className="container mx-auto px-6 relative z-10 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">About NKC Builders</h1>
            <p className="text-xl md:text-2xl text-white/80 font-light max-w-2xl">
              Experienced professionals delivering collaborative, sustainable construction excellence in Chennai since 2015.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
              <h2 className="text-4xl font-display font-bold text-primary mb-6">Building Trust, One Structure at a Time</h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Founded in Chennai, NKC Builders emerged from a shared vision to redefine the construction landscape. We believe that every project is an opportunity to create something lasting – not just in concrete and steel, but in the relationships we build with our clients.
              </p>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Our approach is simple: transparent communication, uncompromised quality, and a commitment to sustainable practices. We treat every home and office as if it were our own.
              </p>
              
              <div className="space-y-4">
                {[
                  "Quality First Approach",
                  "Client Collaboration", 
                  "Eco-Friendly Construction",
                  "On-Time Delivery"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span className="font-medium text-primary">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-muted relative z-10 border-8 border-white shadow-2xl">
                 <img src={teamImg} alt="Office" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
              <div className="absolute -bottom-10 -right-10 w-2/3 h-2/3 bg-secondary/10 -z-0" />
              <div className="absolute -top-10 -left-10 w-1/2 h-1/2 bg-primary/5 -z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-primary mb-4">Leadership Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">The minds behind our finest creations.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: "N. Kumar", role: "Founder & CEO", bio: "20+ years in civil engineering and project management." },
              { name: "S. Priya", role: "Lead Architect", bio: "Award-winning designer with a passion for sustainable spaces." },
              { name: "R. Dinesh", role: "Operations Head", bio: "Ensuring every project runs on time and within budget." },
              { name: "K. Anita", role: "Interior Design Lead", bio: "Transforming spaces with elegance and functionality." }
            ].map((member, i) => (
              <div key={i} className="bg-white p-6 border border-border hover:border-secondary transition-all group">
                <div className="aspect-[3/4] bg-muted mb-6 overflow-hidden">
                   {/* Placeholder for team faces */}
                   <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                     <Users size={48} />
                   </div>
                </div>
                <h3 className="text-xl font-display font-bold text-primary">{member.name}</h3>
                <p className="text-secondary text-sm font-medium mb-3 uppercase tracking-wider">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                <a href="#" className="text-primary/50 hover:text-[#0077b5] transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-primary text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-4xl font-display font-bold">Our Journey</h2>
          </div>
          
          <div className="flex gap-12 overflow-x-auto pb-12 snap-x">
            {[
              { year: "2015", title: "Founded", desc: "NKC Builders established in Chennai with a small team of 5." },
              { year: "2017", title: "First Villa Project", desc: "Completed our first luxury villa in ECR, setting a benchmark." },
              { year: "2019", title: "Expansion", desc: "Opened new office and expanded into commercial construction." },
              { year: "2020", title: "First Skyscraper", desc: "Awarded contract for a 15-story commercial tower in OMR." },
              { year: "2023", title: "Sustainability Award", desc: "Recognized for eco-friendly construction practices." },
              { year: "2026", title: "Future Vision", desc: "Aiming to become the leading sustainable builder in South India." }
            ].map((item, i) => (
              <div key={i} className="min-w-[300px] snap-start border-l border-white/20 pl-8 relative">
                 <div className="absolute top-0 left-[-5px] w-2.5 h-2.5 bg-secondary rounded-full" />
                 <span className="text-6xl font-display font-bold text-white/10 mb-4 block">{item.year}</span>
                 <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                 <p className="text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
