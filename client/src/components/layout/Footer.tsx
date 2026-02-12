import { Link } from "wouter";
import { Phone, Mail, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";
import logo from "@/assets/images/logo.png";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <img src={logo} alt="NKC Builders" className="h-10 w-auto bg-white p-1" />
              <span className="text-xl font-bold tracking-tighter text-white">
                NKC Builders
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Turning Visions into Timeless Structures. Premium residential and commercial construction in Chennai.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 hover:bg-secondary/20 hover:text-secondary transition-colors rounded-none">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-secondary/20 hover:text-secondary transition-colors rounded-none">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-secondary/20 hover:text-secondary transition-colors rounded-none">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-6 text-white">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Our Team', 'Careers', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/60 hover:text-secondary text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              {['Residential Construction', 'Commercial Projects', 'Interior Design', 'Renovations'].map((item) => (
                <li key={item}>
                  <Link href="/services" className="text-white/60 hover:text-secondary text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-6 text-white">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="shrink-0 text-secondary" size={18} />
                <span>123 Anna Salai, Thousand Lights,<br />Chennai, Tamil Nadu 600006</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Phone className="shrink-0 text-secondary" size={18} />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Mail className="shrink-0 text-secondary" size={18} />
                <span>info@nkcbuilders.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© 2026 NKC Builders. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
