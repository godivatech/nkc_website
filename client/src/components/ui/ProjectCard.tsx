import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Maximize2, X } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  image: string;
  title: string;
  location: string;
  category: string;
  description: string;
  year?: string;
  status?: string;
  type?: string;
  gallery?: string[];
  delay?: number;
}

export function ProjectCard({ image, title, location, category, description, year, status, type, gallery, delay = 0 }: ProjectCardProps) {
  const [selectedImage, setSelectedImage] = useState(image);
  const [isFullScreen, setIsFullScreen] = useState(false);

  return (
    <>
      <Dialog onOpenChange={() => setSelectedImage(image)}>
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
              <span className="text-secondary text-sm font-medium uppercase tracking-wider mb-2">{type || category}</span>
              <h3 className="text-2xl font-display font-bold mb-1">{title}</h3>
              <p className="text-white/80 text-sm mb-4 flex items-center gap-2">{location}</p>
              <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                <ArrowUpRight size={20} />
              </div>
            </div>
          </motion.div>
        </DialogTrigger>
        <DialogContent className="max-w-5xl p-0 overflow-hidden bg-background border-none rounded-none max-h-[90vh] flex flex-col md:block">
          <div className="grid md:grid-cols-2 h-full">
            <div className="h-[40vh] md:h-full bg-muted/50 relative overflow-hidden group/image flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  src={selectedImage}
                  alt={title}
                  className="w-full h-full object-contain absolute inset-0 cursor-zoom-in"
                  onClick={() => setIsFullScreen(true)}
                />
              </AnimatePresence>

              <Button
                size="icon"
                variant="secondary"
                className="absolute top-4 right-4 opacity-0 group-hover/image:opacity-100 transition-opacity z-10"
                onClick={() => setIsFullScreen(true)}
              >
                <Maximize2 size={18} />
              </Button>
            </div>
            <ScrollArea className="h-[50vh] md:h-full max-h-[90vh]">
              <div className="p-6 md:p-10 flex flex-col justify-center">
                <span className="text-secondary text-sm font-bold uppercase tracking-widest mb-4">{category}</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">{title}</h2>
                <p className="text-muted-foreground mb-6">{location}</p>
                <p className="text-primary/80 leading-relaxed mb-8">
                  {description}
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm mb-8">
                  <div>
                    <span className="block text-muted-foreground mb-1">Year</span>
                    <span className="font-semibold text-primary">{year || "2024"}</span>
                  </div>
                  <div>
                    <span className="block text-muted-foreground mb-1">Status</span>
                    <span className="font-semibold text-primary">{status || "Completed"}</span>
                  </div>
                  {type && (
                    <div className="col-span-2">
                      <span className="block text-muted-foreground mb-1">Project Type</span>
                      <span className="font-semibold text-primary">{type}</span>
                    </div>
                  )}
                </div>

                {/* Gallery Grid */}
                {gallery && gallery.length > 0 && (
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest mb-4 text-primary">Gallery</h4>
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                      {/* Main Image Thumbnail */}
                      <div
                        className={`aspect-square overflow-hidden bg-muted cursor-pointer border-2 ${selectedImage === image ? 'border-secondary' : 'border-transparent'}`}
                        onClick={() => setSelectedImage(image)}
                      >
                        <img src={image} alt="Main" className="w-full h-full object-cover hover:opacity-80 transition-opacity" />
                      </div>
                      {/* Other Gallery Images */}
                      {gallery.filter(img => img !== image).map((img, i) => (
                        <div
                          key={i}
                          className={`aspect-square overflow-hidden bg-muted cursor-pointer border-2 ${selectedImage === img ? 'border-secondary' : 'border-transparent'}`}
                          onClick={() => setSelectedImage(img)}
                        >
                          <img src={img} alt={`${title} ${i + 1}`} className="w-full h-full object-cover hover:opacity-80 transition-opacity" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
          </div>
        </DialogContent>
      </Dialog>

      {/* Full Screen Image Modal */}
      <AnimatePresence>
        {isFullScreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
            onClick={() => setIsFullScreen(false)}
          >
            <Button
              size="icon"
              variant="ghost"
              className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full w-12 h-12"
              onClick={() => setIsFullScreen(false)}
            >
              <X size={24} />
            </Button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="Full Screen"
              className="max-w-full max-h-full object-contain cursor-zoom-out"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
