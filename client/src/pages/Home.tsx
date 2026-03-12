import { Layout } from "@/components/layout/Layout";
import { StatsCounter } from "@/components/ui/StatsCounter";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Building2, Home, PaintBucket, MoveRight, MapPin, Target, TrendingUp } from "lucide-react";
// import heroBg from "@/assets/images/hero-bg.png";
import abstractTexture from "@/assets/images/texture-abstract.png";
import { getOptimizedImageUrl } from "../lib/cloudinary";
import cloudinaryData from "../data/cloudinary_images.json";

// ─────────────────────────────────────────────────────────────────────────────
// Cloudinary Slider Image URLs
// ─────────────────────────────────────────────────────────────────────────────
const sliderImages = {
  anandamPalace: "https://res.cloudinary.com/doeodacsg/image/upload/v1773314285/nkc-builders-website/slider/slider_anandam_palace.png",
  jskMahal: "https://res.cloudinary.com/doeodacsg/image/upload/v1773314881/nkc-builders-website/slider/slider_jsk_mahal.png",
  sivagangaiMosque: "https://res.cloudinary.com/doeodacsg/image/upload/v1773315363/nkc-builders-website/slider/slider_sivagangai_mosque.png",
  srimethilaHotel: "https://res.cloudinary.com/doeodacsg/image/upload/v1773315486/nkc-builders-website/slider/slider_srimethila_hotel.png",
  vktCommercial: "https://res.cloudinary.com/doeodacsg/image/upload/v1773315616/nkc-builders-website/slider/slider_vkt_commercial.png",
};

// ─────────────────────────────────────────────────────────────────────────────
// Testimonial Video URLs (Cloudinary)
// Folder: nkc-builders-website/testimonials/
// Upload your videos to Cloudinary and replace these placeholders with the
// actual delivery URLs. Format: https://res.cloudinary.com/<cloud>/video/upload/<public_id>
// ─────────────────────────────────────────────────────────────────────────────
const vidTest1 = getOptimizedImageUrl("https://res.cloudinary.com/doeodacsg/video/upload/v1773220411/nkc-builders-website/testimonials/testimonial-1.mp4", { width: 800 });
const vidTest2 = getOptimizedImageUrl("https://res.cloudinary.com/doeodacsg/video/upload/v1773220411/nkc-builders-website/testimonials/testimonial-2.mp4", { width: 800 });
const vidTest3 = getOptimizedImageUrl("https://res.cloudinary.com/doeodacsg/video/upload/v1773220412/nkc-builders-website/testimonials/testimonial-3.mp4", { width: 800 });
const vidTest4 = getOptimizedImageUrl("https://res.cloudinary.com/doeodacsg/video/upload/v1773220412/nkc-builders-website/testimonials/testimonial-4.mp4", { width: 800 });

import { Link } from "wouter";




import { useRef, useState, useEffect, useCallback } from "react";

// ── Instagram-style Video Card ──────────────────────────────────────────────
function VideoCard({ src, index }: { src: string; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);

  // Cloudinary poster: grab first frame as jpg, scaled to 400px
  const poster = src
    .replace("/video/upload/", "/video/upload/so_0,w_400,f_jpg/")
    .replace(/\.mp4$/, ".jpg");

  const togglePlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      setLoading(true);
      // Automatically unmute when user explicitly clicks to play
      v.muted = false;
      setMuted(false);

      v.play()
        .then(() => { setPlaying(true); setLoading(false); })
        .catch(() => { setLoading(false); });
    } else {
      v.pause();
      setPlaying(false);
    }
  }, []);

  const toggleMute = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  }, []);

  // Progress tracking
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const onTimeUpdate = () => {
      if (v.duration) setProgress((v.currentTime / v.duration) * 100);
    };
    const onWaiting = () => setLoading(true);
    const onCanPlay = () => { setLoading(false); setReady(true); };
    const onEnded = () => { setPlaying(false); setProgress(0); };

    v.addEventListener("timeupdate", onTimeUpdate);
    v.addEventListener("waiting", onWaiting);
    v.addEventListener("canplay", onCanPlay);
    v.addEventListener("ended", onEnded);

    return () => {
      v.removeEventListener("timeupdate", onTimeUpdate);
      v.removeEventListener("waiting", onWaiting);
      v.removeEventListener("canplay", onCanPlay);
      v.removeEventListener("ended", onEnded);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative bg-primary overflow-hidden rounded-sm shadow-2xl aspect-[9/16] cursor-pointer select-none"
      onClick={togglePlay}
    >
      {/* Video */}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-full object-cover"
        loop
        muted
        playsInline
        preload="metadata"
      />

      {/* Dark overlay when paused */}
      <div
        className={`absolute inset-0 transition-colors duration-300 pointer-events-none ${playing ? "bg-transparent" : "bg-black/30"
          }`}
      />

      {/* Loading spinner */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div className="w-10 h-10 border-3 border-white/30 border-t-white rounded-full animate-spin" />
        </div>
      )}

      {/* Play button (visible when paused & not loading) */}
      {!playing && !loading && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center pointer-events-none z-10 transition-transform duration-300 hover:scale-110">
          <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-1" />
        </div>
      )}

      {/* Pause icon flash (visible briefly when playing) */}
      {playing && !loading && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10 opacity-0 hover:opacity-60 transition-opacity">
          <div className="flex gap-1.5">
            <div className="w-3 h-8 bg-white rounded-sm" />
            <div className="w-3 h-8 bg-white rounded-sm" />
          </div>
        </div>
      )}

      {/* Bottom controls bar */}
      <div className="absolute inset-x-0 bottom-0 z-10 pointer-events-none">
        {/* Progress bar */}
        <div className="w-full h-1 bg-white/20">
          <div
            className="h-full bg-secondary transition-[width] duration-200 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Info + Mute */}
        <div className="flex items-end justify-between p-4 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
          <div>
            <span className="text-secondary font-display font-bold tracking-wider text-[10px] uppercase mb-0.5 block">
              Story {index + 1}
            </span>
            <p className="text-white font-display font-bold text-sm uppercase tracking-normal italic leading-none">
              Client Experience
            </p>
          </div>

          {/* Mute toggle */}
          <button
            onClick={toggleMute}
            className="pointer-events-auto w-8 h-8 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
            aria-label={muted ? "Unmute" : "Mute"}
          >
            {muted ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <line x1="23" y1="9" x2="17" y2="15" />
                <line x1="17" y1="9" x2="23" y2="15" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

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

  const heroBg = getOptimizedImageUrl(cloudinaryData.hero.background);

  const serviceSlider = [
    {
      title: "Anandam Palace",
      image: getOptimizedImageUrl(cloudinaryData.slider["Anandam Palace.png"]),
      location: "Rajapalayam"
    },
    {
      title: "Anantham Office",
      image: getOptimizedImageUrl(cloudinaryData.slider["Anantham Office.png"]),
      location: "Rajapalayam"
    },
    {
      title: "Awinco Badminton Court",
      image: getOptimizedImageUrl(cloudinaryData.slider["Awinco Badminton Court.png"]),
      location: "Sivakasi"
    },
    {
      title: "Javith Residence",
      image: getOptimizedImageUrl(cloudinaryData.slider["Javith Residence.png"]),
      location: "Peeriyapattinam"
    },
    {
      title: "Jeyam Bridal fashion studio",
      image: getOptimizedImageUrl(cloudinaryData.slider["Jeyam Bridal fashion studio.png"]),
      location: "Rajapalayam"
    },
    {
      title: "JSK mahal",
      image: getOptimizedImageUrl(cloudinaryData.slider["JSK mahal.png"]),
      location: "Pudukottai"
    },
    {
      title: "JSK Residence",
      image: getOptimizedImageUrl(cloudinaryData.slider["JSK Residence.png"]),
      location: "Pudukottai"
    },
    {
      title: "Karupusamy Residence",
      image: getOptimizedImageUrl(cloudinaryData.slider["Karupusamy Residence.png"]),
      location: "Rajapalayam"
    },
    {
      title: "Peeriyapattinam Mosque",
      image: getOptimizedImageUrl(cloudinaryData.slider["Peeriyapattinam Mosque.png"]),
      location: "Peeriyapattinam"
    },
    {
      title: "Sivagangai Mosque",
      image: getOptimizedImageUrl(cloudinaryData.slider["Sivagangai Mosque.png"]),
      location: "Sivagangai"
    },
    {
      title: "Srimethila Hotel",
      image: getOptimizedImageUrl(cloudinaryData.slider["Srimethila Hotel.png"]),
      location: "Rajapalayam"
    },
    {
      title: "VKT Commercial",
      image: getOptimizedImageUrl(cloudinaryData.slider["VKT Commercial.png"]),
      location: "Rajapalayam"
    }
  ];

  return (
    <Layout>
      <div ref={containerRef}>
        {/* Hero Section - Awwwards Style */}
        <section className="relative h-screen flex flex-col justify-end pb-20 overflow-hidden bg-primary">
          <motion.div style={{ scale, opacity }} className="absolute inset-0 z-0">
            <img
              src={heroBg}
              alt="Construction Site"
              className="w-full h-full object-cover brightness-50"
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
                  <span className="text-secondary font-display font-bold tracking-wider uppercase text-xs mb-8 block">
                    Established 2015 — Chennai
                  </span>
                  <h1 className="text-[clamp(3rem,10vw,8rem)] font-display font-bold text-white mb-8 leading-[0.85] tracking-normal uppercase">
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
                    <Button asChild variant="link" className="text-white group p-0 h-auto text-sm tracking-wider uppercase">
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
            <span className="text-[12rem] font-display font-black text-white/[0.03] uppercase whitespace-nowrap tracking-normal">
              NKC BUILDERS
            </span>
          </div>
        </section>

        {/* Narrative Section & Stats */}
        <section className="py-32 bg-white relative overflow-hidden">
          <div className="noise-bg absolute inset-0 pointer-events-none" />
          <div className="architectural-grid absolute inset-0 opacity-[0.03] pointer-events-none" />

          {/* High Impact Stats Bar */}
          <div className="container mx-auto px-6 mb-32 border-b border-primary/10 pb-20">
            <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <span className="text-secondary font-display font-bold tracking-wider text-xl uppercase block mb-4">Legacy</span>
                <div className="text-6xl md:text-7xl font-display font-light text-primary mb-2 flex items-baseline justify-center md:justify-start">
                  18<span className="text-4xl text-secondary ml-1 font-bold">+</span>
                </div>
                <div className="text-muted-foreground uppercase tracking-wider text-xs font-bold mt-4 border-t border-primary/10 pt-4 group-hover:border-secondary transition-colors duration-500">
                  Years of Excellence Since 2007
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <span className="text-secondary font-display font-bold tracking-wider text-xl uppercase block mb-4">Capacity</span>
                <div className="text-6xl md:text-7xl font-display font-light text-primary mb-2 flex items-baseline justify-center md:justify-start">
                  1 L<span className="text-4xl text-secondary ml-1 font-bold">+</span>
                </div>
                <div className="text-muted-foreground uppercase tracking-wider text-xs font-bold mt-4 border-t border-primary/10 pt-4 group-hover:border-secondary transition-colors duration-500">
                  Sq. Ft. Delivery Capacity & Assets
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <span className="text-secondary font-display font-bold tracking-wider text-xl uppercase block mb-4">Trust</span>
                <div className="text-6xl md:text-7xl font-display font-light text-primary mb-2 flex items-baseline justify-center md:justify-start">
                  400<span className="text-4xl text-secondary ml-1 font-bold">+</span>
                </div>
                <div className="text-muted-foreground uppercase tracking-wider text-xs font-bold mt-4 border-t border-primary/10 pt-4 group-hover:border-secondary transition-colors duration-500">
                  Successful Clients Throughout TN
                </div>
              </motion.div>
            </div>
          </div>

          <div className="container mx-auto px-6">
            <div className="max-w-7xl">
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-7xl font-display font-bold text-primary mb-16 leading-[0.95]"
              >
                WE BUILD WITH <span className="text-secondary">PRECISION</span><br />
                WE DESIGN WITH <span className="italic font-light">PURPOSE</span><br />
                WE DELIVER WITH <span className="underline decoration-2 underline-offset-8">EXCELLENCE</span>
              </motion.h2>

              <div className="grid md:grid-cols-2 gap-20">
                <div className="aspect-[4/5] bg-muted relative group overflow-hidden">
                  <img src={abstractTexture} alt="Texture" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                </div>
                <div className="flex flex-col justify-center space-y-10">
                  <p className="text-2xl text-primary/90 leading-relaxed">
                    Our philosophy is rooted in the intersection of structural engineering and artistic expression. Every slab poured and every beam placed is a testament to our dedication to the craft.
                  </p>
                  <p className="text-lg text-primary/80 leading-relaxed">
                    With over a decade of shaping the Tamil Nadu skyline, we have engineered infrastructure that withstands the test of time, marrying brutalist functionality with elegant aesthetics.
                  </p>
                  <Button asChild variant="outline" className="w-max rounded-none border-primary text-primary hover:bg-primary hover:text-white uppercase tracking-wider text-xs px-8 h-14">
                    <Link href="/about">Discover Our Legacy</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Reach - Map/Expansion Section */}
        <section className="py-32 bg-primary text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 blur-3xl rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20 border-b border-white/10 pb-12">
              <div>
                <span className="text-secondary font-display font-bold tracking-wider uppercase text-sm mb-4 block flex items-center gap-3">
                  <MapPin size={16} /> Operational Footprint
                </span>
                <h2 className="text-5xl md:text-7xl font-display font-bold leading-none tracking-normal">
                  Territorial<br />
                  <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>Dominance</span>
                </h2>
              </div>
              <p className="max-w-md text-white/90 text-right hidden md:block text-lg leading-relaxed">
                From our roots in Ramanathapuram to active construction sites spanning the entirety of Tamil Nadu.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 p-10 hover:bg-white/10 transition-colors duration-500 group"
              >
                <div className="text-secondary mb-8 block font-display text-4xl font-light">01</div>
                <h3 className="text-2xl font-display font-bold mb-4 flex items-center gap-3"><Home className="text-secondary w-6 h-6" /> Genesis</h3>
                <p className="text-white/90 leading-relaxed font-normal">Our journey began in and around Ramanathapuram, laying the unbreakable foundation of NKC Builders.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 p-10 hover:bg-white/10 transition-colors duration-500 group"
              >
                <div className="text-secondary mb-8 block font-display text-4xl font-light">02</div>
                <h3 className="text-2xl font-display font-bold mb-4 flex items-center gap-3"><TrendingUp className="text-secondary w-6 h-6" /> Expansion</h3>
                <p className="text-white/90 leading-relaxed font-normal">Strategic growth extending operations into Sivagangai, Rajapalayam, Madurai, Dindigul, and Coimbatore.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-secondary/10 border border-secondary/30 p-10 hover:bg-secondary/20 transition-colors duration-500 group relative overflow-hidden"
              >
                <div className="absolute -right-8 -top-8 text-secondary/10">
                  <Target className="w-48 h-48" />
                </div>
                <div className="relative z-10">
                  <div className="text-secondary mb-8 block font-display text-4xl font-light">03</div>
                  <h3 className="text-2xl font-display font-bold mb-4 text-white">Current Reach</h3>
                  <p className="text-white/90 leading-relaxed font-normal">Fully equipped with a massive 1 Lakh sq. ft. capacity, undertaking high-value projects across Chennai and the entirety of Tamil Nadu.</p>
                </div>
              </motion.div>
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
              <p className="max-w-sm text-muted-foreground text-base uppercase tracking-wider leading-loose">
                Specialized in high-density commercial developments and bespoke residential enclaves.
              </p>
            </div>

            <div className="grid md:grid-cols-3 border-y border-primary/10">
              <div className="p-12 md:border-r border-primary/10 hover:bg-primary hover:text-white transition-colors duration-500 group cursor-default">
                <span className="text-secondary font-display font-bold mb-10 block">01/</span>
                <h3 className="text-4xl font-display font-bold mb-6">Residential</h3>
                <p className="text-lg font-medium opacity-80 mb-10 leading-loose group-hover:opacity-100">Bespoke living environments crafted with artisanal precision and modern engineering.</p>
                <ArrowRight className="group-hover:translate-x-4 transition-transform text-secondary" />
              </div>
              <div className="p-12 md:border-r border-primary/10 hover:bg-primary hover:text-white transition-colors duration-500 group cursor-default">
                <span className="text-secondary font-display font-bold mb-10 block">02/</span>
                <h3 className="text-4xl font-display font-bold mb-6">Commercial</h3>
                <p className="text-lg font-medium opacity-80 mb-10 leading-loose group-hover:opacity-100">Scalable infrastructure designed for the future of enterprise and retail.</p>
                <ArrowRight className="group-hover:translate-x-4 transition-transform text-secondary" />
              </div>
              <div className="p-12 hover:bg-primary hover:text-white transition-colors duration-500 group cursor-default">
                <span className="text-secondary font-display font-bold mb-10 block">03/</span>
                <h3 className="text-4xl font-display font-bold mb-6">Interiors</h3>
                <p className="text-lg font-medium opacity-80 mb-10 leading-loose group-hover:opacity-100">Turnkey interior ecosystems that harmonize aesthetics with spatial functionality.</p>
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
                <h2 className="text-3xl font-display font-bold tracking-wider uppercase mb-4">Masterpieces</h2>
                <div className="w-full h-px bg-primary/10 mb-6" />
                <p className="text-muted-foreground text-lg">Scroll to explore our defining structures.</p>
              </motion.div>
            </div>

            <motion.div
              style={{ x }}
              className="flex gap-10 px-6 w-max"
            >
              {[
                { title: "Anandam Palace", cat: "Residential", img: sliderImages.anandamPalace, id: "01" },
                { title: "JSK Mahal", cat: "Commercial", img: sliderImages.jskMahal, id: "02" },
                { title: "Sivagangai Mosque", cat: "Religious", img: sliderImages.sivagangaiMosque, id: "03" },
                { title: "Srimethila Hotel", cat: "Hospitality", img: sliderImages.srimethilaHotel, id: "04" },
                { title: "VKT Commercial", cat: "Commercial", img: sliderImages.vktCommercial, id: "05" },
              ].map((p, i) => (
                <div key={i} className="w-[80vw] md:w-[60vw] lg:w-[45vw] flex-shrink-0 group cursor-pointer">
                  <div className="aspect-[16/9] overflow-hidden bg-muted mb-6 relative">
                    <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md px-4 py-2 text-white font-display text-sm border border-white/20 z-10">
                      {p.id}
                    </div>
                    <img 
                      src={getOptimizedImageUrl(p.img, { width: 1200, height: 675, crop: 'fill' })} 
                      alt={p.title} 
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="flex justify-between items-end border-b border-primary/10 pb-4">
                    <div>
                      <h3 className="text-4xl md:text-5xl font-display font-bold uppercase mb-2 text-primary">{p.title}</h3>
                      <span className="text-sm uppercase tracking-wider text-muted-foreground">{p.cat} — 2024</span>
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


        {/* Video Testimonials Showcase - Interactive Bento Grid */}
        <section className="py-32 bg-white overflow-hidden">
          <div className="container mx-auto px-6 mb-20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-2xl"
              >
                <span className="text-secondary font-display font-bold tracking-wider uppercase text-xs mb-4 block">
                  Documented Excellence
                </span>
                <h2 className="text-5xl md:text-8xl font-display font-bold text-primary uppercase leading-[0.9] tracking-normal">
                  Client<br /><span className="text-transparent" style={{ WebkitTextStroke: '1px #0f172a' }}>Stories</span>
                </h2>
              </motion.div>
              <p className="max-w-xs text-muted-foreground text-xs uppercase tracking-wider leading-loose text-right hidden lg:block">
                Witness the transformation journeys of our clients through interactive visual narratives.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[vidTest1, vidTest2, vidTest3, vidTest4].map((src, i) => (
                <VideoCard key={i} src={src} index={i} />
              ))}
            </div>

          </div>
        </section>

        {/* Testimonials Section - Single Item Carousel */}
        <section className="py-32 mb-24 bg-primary text-white relative overflow-hidden">


          <div className="absolute inset-0 bg-[url('/src/assets/images/texture-abstract.png')] opacity-10 mix-blend-overlay bg-cover bg-center" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-4">
                <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-6 block">Client Perspectives</span>
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
            <h2 className="text-[clamp(2.5rem,8vw,6rem)] font-display font-bold leading-none mb-12 uppercase tracking-normal">
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
