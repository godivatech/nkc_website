import { LucideIcon, ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export function ServiceCard({ icon: Icon, title, description, features }: ServiceCardProps) {
  return (
    <div className="group bg-white p-8 border border-border transition-all duration-300 hover:border-secondary hover:shadow-lg relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-0 bg-secondary group-hover:h-full transition-all duration-500 ease-in-out" />
      
      <div className="w-14 h-14 bg-primary/5 text-primary rounded-none flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
        <Icon size={28} strokeWidth={1.5} />
      </div>
      
      <h3 className="text-2xl font-display font-bold text-primary mb-4">{title}</h3>
      <p className="text-muted-foreground mb-8 leading-relaxed">
        {description}
      </p>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3 text-sm font-medium text-primary/80">
            <div className="w-1.5 h-1.5 bg-secondary" />
            {feature}
          </li>
        ))}
      </ul>

      <Link href="/services" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-secondary uppercase tracking-wider transition-colors">
        Learn More <ArrowRight size={16} />
      </Link>
    </div>
  );
}
