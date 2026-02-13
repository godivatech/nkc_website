import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const { toast } = useToast();
  const [showSuccess, setShowSuccess] = useState(false);
  const [budget, setBudget] = useState([50]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    setShowSuccess(true);
  };

  return (
    <Layout>
      <div className="bg-primary text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-display font-bold mb-4">Let's Build Together</h1>
          <p className="text-xl text-white/60">Reach out to start your journey with NKC Builders.</p>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-10 mb-20 relative z-10">
        <div className="grid lg:grid-cols-3 shadow-2xl">
          {/* Contact Info */}
          <div className="bg-primary-foreground text-primary p-12 lg:col-span-1 border-r border-border">
            <h3 className="text-2xl font-display font-bold mb-8">Contact Information</h3>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Head Office</h4>
                  <p className="text-muted-foreground text-sm">3/6, Muniyasamy kovil st.,<br />Ramnad-623501</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Phone</h4>
                  <p className="text-muted-foreground text-sm">+91 04567 220895<br />+91 94431 26608</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <p className="text-muted-foreground text-sm">nkchandrasoodan@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Working Hours</h4>
                  <p className="text-muted-foreground text-sm">Mon - Sat: 8:00 AM - 8:00 PM<br />Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-12 lg:col-span-2">
            <h3 className="text-2xl font-display font-bold mb-8 text-primary">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" required className="rounded-none h-12" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required className="rounded-none h-12" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="+91 98765 43210" className="rounded-none h-12" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="type">Project Type</Label>
                  <Select>
                    <SelectTrigger className="rounded-none h-12">
                      <SelectValue placeholder="Select Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">Residential</SelectItem>
                      <SelectItem value="commercial">Commercial</SelectItem>
                      <SelectItem value="interiors">Interiors</SelectItem>
                      <SelectItem value="renovation">Renovation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <Label>Budget Range (Lakhs)</Label>
                  <span className="text-secondary font-bold">₹{budget}L - ₹{budget[0] + 50}L+</span>
                </div>
                <Slider
                  defaultValue={[50]}
                  max={500}
                  step={10}
                  onValueChange={setBudget}
                  className="py-4"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Project Details</Label>
                <Textarea id="message" placeholder="Tell us about your project requirements..." className="rounded-none min-h-[150px]" />
              </div>

              <Button type="submit" size="lg" className="w-full md:w-auto rounded-none px-12 bg-secondary hover:bg-secondary/90 text-white">
                Send Request
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="h-[400px] w-full bg-muted">
        <iframe
          src="https://maps.google.com/maps?q=9.369650787567886,78.8248505743824&t=&z=17&ie=UTF8&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="sm:max-w-md text-center py-10">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle2 className="text-green-600" size={32} />
          </div>
          <h2 className="text-2xl font-display font-bold text-primary mb-2">Message Sent!</h2>
          <p className="text-muted-foreground mb-6">Thank you for contacting NKC Builders. Our team will get back to you within 24 hours.</p>
          <Button onClick={() => setShowSuccess(false)} className="rounded-none bg-primary text-white">Close</Button>
        </DialogContent>
      </Dialog>
    </Layout>
  );
}
