import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface ProjectCardProps {
  image: string;
  title: string;
  location: string;
  category: string;
  description: string;
  delay?: number;
}

export function ProjectCard({ image, title, location, category, description, delay = 0 }: ProjectCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay }}
          viewport={{ once: true }}
          className="group relative overflow-hidden cursor-pointer"
        >
          <div className="aspect-[3/4] overflow-hidden bg-muted">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-colors duration-500" />
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 p-8 flex flex-col justify-end text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
            <span className="text-secondary text-sm font-medium uppercase tracking-wider mb-2">{category}</span>
            <h3 className="text-2xl font-display font-bold mb-1">{title}</h3>
            <p className="text-white/80 text-sm mb-4 flex items-center gap-2">{location}</p>
            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
              <ArrowUpRight size={20} />
            </div>
          </div>
        </motion.div>
      </DialogTrigger>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-background border-none rounded-none">
        <div className="grid md:grid-cols-2 h-full">
          <div className="h-64 md:h-full">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <span className="text-secondary text-sm font-bold uppercase tracking-widest mb-4">{category}</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">{title}</h2>
            <p className="text-muted-foreground mb-6">{location}</p>
            <p className="text-primary/80 leading-relaxed mb-8">
              {description}
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="block text-muted-foreground mb-1">Year</span>
                <span className="font-semibold text-primary">2024</span>
              </div>
              <div>
                <span className="block text-muted-foreground mb-1">Status</span>
                <span className="font-semibold text-primary">Completed</span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
