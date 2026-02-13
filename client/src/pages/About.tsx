import { Layout } from "@/components/layout/Layout";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Check, Users, Leaf, ShieldCheck, Linkedin, ArrowRight } from "lucide-react";
import teamImg from "@/assets/images/about-team.png";
import imgFounder from "@/assets/images/team/MR. NK. Chandrasoodan-Architect Founder.webp";
import imgPravin from "@/assets/images/team/Ar. Pravin kumar-Senior Architect.webp";
import imgRamesh from "@/assets/images/team/MR. Ramesh Kannan-Project Manager.webp";
import imgSaranya from "@/assets/images/team/MRS. Saranya-Purchase Manager.webp";
import imgMurali from "@/assets/images/team/Mr. Muralitharan-Procurement Manager.webp";
import imgDurai from "@/assets/images/team/Mr. Duraikoothan-Site Manager.webp";
import imgHari from "@/assets/images/team/Mr. Hariharasudan-Site Engineer.webp";
import imgIbrahim from "@/assets/images/team/Mr. Ibrahim-Quantity Surveyor.webp";
import imgMathi from "@/assets/images/team/Ar. Mathiyalagan-Junior Architect.webp";
import { useRef, useState } from "react";

export default function AboutPage() {
  const timelineRef = useRef(null);
  const [activeMember, setActiveMember] = useState(0);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0.1, 0.9], ["50%", "-100%"]);
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
              NKC, Ramanathapuram has built a solid reputation as one of the leading construction companies in the industry.
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
              <h2 className="text-4xl font-display font-bold text-primary mb-6">Delivering High-Quality Solutions</h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Known for delivering high-quality, innovative, and sustainable building solutions. With decades of experience, we have successfully completed projects across a wide range of sectors, including residential, commercial, industrial, and infrastructure.
              </p>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                With a track record of over 400 successful clients and a commitment to continuous improvement, we take pride in being a trusted partner in the construction industry, committed to shaping the future of our built environment.
              </p>

              <div className="space-y-4">
                {[
                  "Plan, build, modeling, publish",
                  "Beautiful full screen sliders",
                  "Intuitive drag-and-drop Visual Composer plugin"
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

      {/* Vision & Mission Section */}
      <section className="py-32 bg-primary text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform origin-top-right" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-secondary/10 rounded-tr-[100px]" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-secondary" />
                <span className="text-secondary font-bold tracking-[0.3em] uppercase text-sm">Our Vision</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
                Shaping the <span className="text-secondary">Future</span> of Construction
              </h2>
              <p className="text-white/70 text-lg leading-relaxed font-light">
                We envision a future by embracing new technologies, fostering a culture of safety and collaboration, and upholding the highest standards of craftsmanship. We aspire to shape the future of construction with a commitment to excellence, where our work continues to exceed client expectations, drives positive environmental impact, and contributes to the growth and development of the communities we serve.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8 lg:pl-10 lg:border-l border-white/10"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-secondary" />
                <span className="text-secondary font-bold tracking-[0.3em] uppercase text-sm">Our Mission</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
                Built on <span className="italic font-normal">Integrity</span> & Precision
              </h2>
              <p className="text-white/70 text-lg leading-relaxed font-light">
                By fostering a collaborative environment and prioritizing clear communication, we aim to bring each project to life with precision and care, ensuring the long-term success of every endeavor we undertake within budget, and with the highest level of professionalism and integrity. Our focus is on building strong, lasting relationships with our clients, partners, and communities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-zinc-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Testimonials</span>
            <h2 className="text-4xl font-display font-bold text-primary">Client Perspectives</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "RESPONSIVE AND DEEPLY COMMITTED",
                text: "NKC is skilled, responsive and deeply committed to client satisfaction.",
                name: "Mr. Siva",
                role: "Business"
              },
              {
                title: "CONSISTENT AND PRO-ACTIVE",
                text: "NKC is professional. Communication throughout the project was clear, consistent and pro-active.",
                name: "Mr. Elanjeliyan",
                role: "Business"
              },
              {
                title: "EXCELLENT TECHNICAL CAPABILITIES",
                text: "NKC team displayed excellent technical capabilities.",
                name: "Mr. Vadivelu",
                role: "Business"
              },
              {
                title: "DELIVERING QUALITY RESULTS",
                text: "This Construction company had a strong commitment in delivering quality results.",
                name: "Mr. Dhanasekaran",
                role: "Business"
              }
            ].map((t, i) => (
              <div key={i} className="bg-white p-10 border border-primary/5 hover:border-secondary/30 transition-all duration-300 shadow-sm hover:shadow-lg group">
                <div className="mb-6">
                  <div className="w-10 h-10 bg-secondary/10 flex items-center justify-center rounded-br-2xl mb-6 text-secondary">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-display font-bold text-primary mb-2 uppercase tracking-wide">{t.title}</h3>
                  <p className="text-muted-foreground leading-relaxed italic">"{t.text}"</p>
                </div>
                <div className="flex items-center gap-4 pt-6 border-t border-primary/5">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                    {t.name.charAt(4)}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-sm">{t.name}</h4>
                    <p className="text-secondary text-xs uppercase tracking-wider">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Team Section */}
      <section className="py-24 bg-zinc-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <div>
              <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Our People</span>
              <h2 className="text-4xl font-display font-bold text-primary">Leadership Team</h2>
            </div>
            <p className="text-muted-foreground max-w-sm text-right hidden md:block">The minds behind our finest creations.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            {/* Left: Interactive List */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-2">
              {[
                { name: "Mr. NK. Chandrasoodan", role: "Architect Founder", img: imgFounder },
                { name: "Ar. Pravin Kumar", role: "Senior Architect", img: imgPravin },
                { name: "Mr. Ramesh Kannan", role: "Project Manager", img: imgRamesh },
                { name: "Mrs. Saranya", role: "Purchase Manager", img: imgSaranya },
                { name: "Mr. Muralitharan", role: "Procurement Manager", img: imgMurali },
                { name: "Mr. Duraikoothan", role: "Site Manager", img: imgDurai },
                { name: "Mr. Hariharasudan", role: "Site Engineer", img: imgHari },
                { name: "Mr. Ibrahim", role: "Quantity Surveyor", img: imgIbrahim },
                { name: "Ar. Mathiyalagan", role: "Junior Architect", img: imgMathi }
              ].map((member, i) => (
                <motion.div
                  key={i}
                  onMouseEnter={() => setActiveMember(i)}
                  className={`group cursor-pointer py-4 border-b border-primary/10 flex items-center justify-between transition-all duration-300 ${activeMember === i ? 'pl-4 border-secondary' : 'hover:pl-2'}`}
                >
                  <div>
                    <h3 className={`text-xl md:text-2xl font-display font-bold transition-colors duration-300 ${activeMember === i ? 'text-primary' : 'text-primary/40 group-hover:text-primary/70'}`}>
                      {member.name}
                    </h3>
                    <p className={`text-xs uppercase tracking-widest font-medium mt-1 transition-all duration-300 ${activeMember === i ? 'text-secondary opacity-100 translate-y-0' : 'text-primary/0 opacity-0 -translate-y-2 group-hover:text-primary/40 group-hover:opacity-100 group-hover:translate-y-0'}`}>
                      {member.role}
                    </p>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${activeMember === i ? 'border-secondary bg-secondary text-white rotate-0' : 'border-primary/20 text-primary/20 -rotate-45 group-hover:border-primary/40 group-hover:text-primary/40'}`}>
                    <ArrowRight size={14} />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right: Sticky Image Display */}
            <div className="lg:col-span-7 sticky top-24">
              <div className="relative aspect-[4/3] md:aspect-[16/9] lg:aspect-[3/2] overflow-hidden rounded-sm bg-primary/5">
                <AnimatePresence mode="wait">
                  {[
                    { name: "Mr. NK. Chandrasoodan", role: "Architect Founder", img: imgFounder },
                    { name: "Ar. Pravin Kumar", role: "Senior Architect", img: imgPravin },
                    { name: "Mr. Ramesh Kannan", role: "Project Manager", img: imgRamesh },
                    { name: "Mrs. Saranya", role: "Purchase Manager", img: imgSaranya },
                    { name: "Mr. Muralitharan", role: "Procurement Manager", img: imgMurali },
                    { name: "Mr. Duraikoothan", role: "Site Manager", img: imgDurai },
                    { name: "Mr. Hariharasudan", role: "Site Engineer", img: imgHari },
                    { name: "Mr. Ibrahim", role: "Quantity Surveyor", img: imgIbrahim },
                    { name: "Ar. Mathiyalagan", role: "Junior Architect", img: imgMathi }
                  ].map((member, i) => (
                    activeMember === i && (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="absolute inset-0"
                      >
                        <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale-0" />

                        {/* Optional text overlay on image for mobile or emphasis */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60" />
                        <div className="absolute bottom-8 left-8">
                          <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-secondary font-bold tracking-widest uppercase text-sm mb-2"
                          >
                            {member.role}
                          </motion.p>
                          <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl text-white font-display font-bold"
                          >
                            {member.name}
                          </motion.h3>
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

      {/* Timeline Section */}
      <div ref={timelineRef} className="h-[250vh] relative bg-primary text-white">
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
          <div className="container mx-auto px-6 mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-display font-bold leading-tight"
            >
              Our Journey <span className="text-secondary">Through Time</span>
            </motion.h2>
          </div>

          <motion.div
            style={{ x }}
            className="flex gap-12 px-6 w-max items-center"
          >
            {[
              { year: "2015", title: "Founded", desc: "NKC Builders established in Chennai with a small team of 5." },
              { year: "2017", title: "First Villa Project", desc: "Completed our first luxury villa in ECR, setting a benchmark." },
              { year: "2019", title: "Expansion", desc: "Opened new office and expanded into commercial construction." },
              { year: "2020", title: "First Skyscraper", desc: "Awarded contract for a 15-story commercial tower in OMR." },
              { year: "2023", title: "Sustainability Award", desc: "Recognized for eco-friendly construction practices." },
              { year: "2026", title: "Future Vision", desc: "Aiming to become the leading sustainable builder in South India." }
            ].map((item, i) => (
              <div key={i} className="min-w-[350px] md:min-w-[450px] border-l-2 border-white/20 pl-8 relative py-4 group">
                <div className="absolute top-0 left-[-6px] w-3 h-3 bg-secondary rounded-full group-hover:scale-150 transition-transform duration-300 shadow-[0_0_15px_rgba(234,179,8,0.5)]" />
                <span className="text-6xl md:text-8xl font-display font-bold text-white/5 mb-4 block group-hover:text-white/10 transition-colors duration-500">{item.year}</span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-secondary">{item.title}</h3>
                <p className="text-white/70 text-lg leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
