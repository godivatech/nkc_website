import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/images/logo.png";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-display",
        scrolled && !isOpen ? "bg-white/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6 text-white"
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 z-50 relative">
          <img src={logo} alt="NKC Builders" className="h-14 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}
              className={cn(
                "text-sm font-medium tracking-wide hover:text-secondary transition-colors",
                scrolled ? "text-primary" : "text-white/90",
                location === link.href && "text-secondary font-semibold"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button
            asChild
            variant={scrolled ? "default" : "secondary"}
            className={cn("rounded-none px-6", !scrolled && "bg-white text-primary hover:bg-white/90")}
          >
            <Link href="/contact">
              Get a Quote
            </Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn("md:hidden z-50 relative", scrolled && !isOpen ? "text-primary" : "text-white")}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 bg-primary z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out md:hidden",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}
              className="text-2xl font-light text-white hover:text-secondary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
