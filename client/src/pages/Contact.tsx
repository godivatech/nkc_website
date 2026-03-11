/**
 * Contact Page — NKC Builders
 *
 * Fully controlled form that:
 *  - Collects name, email, phone, projectType, budget, and message
 *  - Submits to Firestore via the shared submitWebsiteForm helper
 *  - Shows a loading state, success dialog, and error toast
 */

import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Map, Loader2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { CheckCircle2 } from "lucide-react";
import { submitWebsiteForm } from "@/lib/firebase";

// ── Types ─────────────────────────────────────────────────────
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: number;
  message: string;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

// ── Constants ─────────────────────────────────────────────────
const SERVICE_AREAS = [
  "Ramanathapuram",
  "Sivagangai",
  "Madurai",
  "Coimbatore",
  "Chennai",
  "Dindigul",
  "Rajapalayam",
] as const;

const INITIAL_FORM: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  budget: 50,
  message: "",
};

// ── Component ─────────────────────────────────────────────────
export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [showSuccess, setShowSuccess] = useState(false);

  // ── Field helpers ──────────────────────────────────────────
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleProjectTypeChange = (value: string) => {
    setFormData((prev) => ({ ...prev, projectType: value }));
  };

  const handleBudgetChange = (values: number[]) => {
    setFormData((prev) => ({ ...prev, budget: values[0] }));
  };

  // ── Submit ─────────────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("loading");

    const result = await submitWebsiteForm("contact-submissions", {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      projectType: formData.projectType,
      budgetMin: formData.budget,
      budgetMax: formData.budget + 50,
      message: formData.message,
    });

    if (result.success) {
      setSubmitStatus("success");
      setShowSuccess(true);
      setFormData(INITIAL_FORM);
    } else {
      setSubmitStatus("error");
      toast({
        title: "Submission failed",
        description:
          "We couldn't send your message. Please try again or call us directly.",
        variant: "destructive",
      });
    }

    // Reset status so user can resubmit after error
    if (!result.success) {
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

  const isLoading = submitStatus === "loading";

  return (
    <Layout>
      {/* ── Hero ─────────────────────────────────────────── */}
      <div className="bg-primary text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-display font-bold mb-4">
            Let's Build Together
          </h1>
          <p className="text-xl text-white/90">
            Reach out to start your journey with NKC Builders.
          </p>
        </div>
      </div>

      {/* ── Main Card ────────────────────────────────────── */}
      <div className="container mx-auto px-6 -mt-10 mb-20 relative z-10">
        <div className="grid lg:grid-cols-3 shadow-2xl">

          {/* Contact Info Sidebar */}
          <div className="bg-primary-foreground text-primary p-12 lg:col-span-1 border-r border-border">
            <h3 className="text-2xl font-display font-bold mb-8">
              Contact Information
            </h3>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Head Office</h4>
                  <p className="text-primary/90 text-base">
                    3/6, Muniyasamy kovil st.,
                    <br />
                    Ramnad-623501
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Phone</h4>
                  <p className="text-primary/90 text-base">
                    +91 04567 220895
                    <br />
                    +91 94431 26608
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <p className="text-primary/90 text-base">
                    nkchandrasoodan@gmail.com
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Working Hours</h4>
                  <p className="text-primary/90 text-base">
                    Mon - Sat: 8:00 AM - 8:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>

              {/* Service Areas */}
              <div className="pt-8 mt-8 border-t border-border">
                <div className="flex gap-4 mb-4">
                  <div className="w-10 h-10 bg-primary flex items-center justify-center text-white shrink-0">
                    <Map size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Active Service Areas</h4>
                    <p className="text-primary/90 text-base leading-relaxed">
                      We handle projects across Tamil Nadu, with major
                      operations currently in:
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 pl-14">
                  {SERVICE_AREAS.map((city) => (
                    <span
                      key={city}
                      className="text-sm font-medium bg-muted text-primary/80 px-3 py-1 border border-border"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Contact Form ─────────────────────────────── */}
          <div className="bg-white p-12 lg:col-span-2">
            <h3 className="text-2xl font-display font-bold mb-8 text-primary">
              Send us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Row 1: Name & Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    disabled={isLoading}
                    className="rounded-none h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    required
                    disabled={isLoading}
                    className="rounded-none h-12"
                  />
                </div>
              </div>

              {/* Row 2: Phone & Project Type */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    disabled={isLoading}
                    className="rounded-none h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="type">Project Type</Label>
                  <Select
                    value={formData.projectType}
                    onValueChange={handleProjectTypeChange}
                    disabled={isLoading}
                  >
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

              {/* Budget Slider */}
              <div className="space-y-4">
                <div className="flex justify-between">
                  <Label>Budget Range (Lakhs)</Label>
                  <span className="text-secondary font-bold">
                    ₹{formData.budget}L – ₹{formData.budget + 50}L+
                  </span>
                </div>
                <Slider
                  defaultValue={[50]}
                  value={[formData.budget]}
                  max={500}
                  step={10}
                  onValueChange={handleBudgetChange}
                  disabled={isLoading}
                  className="py-4"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message">Project Details</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your project details..."
                  disabled={isLoading}
                  className="rounded-none min-h-[150px]"
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                size="lg"
                disabled={isLoading}
                className="w-full md:w-auto rounded-none px-12 bg-secondary hover:bg-secondary/90 text-white"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Request"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* ── Map ──────────────────────────────────────────── */}
      <div className="h-[400px] w-full bg-muted">
        <iframe
          src="https://maps.google.com/maps?q=9.369650787567886,78.8248505743824&t=&z=17&ie=UTF8&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* ── Success Dialog ───────────────────────────────── */}
      <Dialog
        open={showSuccess}
        onOpenChange={(open) => {
          setShowSuccess(open);
          if (!open) setSubmitStatus("idle");
        }}
      >
        <DialogContent className="sm:max-w-md text-center py-10">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle2 className="text-green-600" size={32} />
          </div>
          <h2 className="text-2xl font-display font-bold text-primary mb-2">
            Message Sent!
          </h2>
          <p className="text-muted-foreground mb-6">
            Thank you for contacting NKC Builders. Our team will get back to
            you within 24 hours.
          </p>
          <Button
            onClick={() => setShowSuccess(false)}
            className="rounded-none bg-primary text-white"
          >
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </Layout>
  );
}
