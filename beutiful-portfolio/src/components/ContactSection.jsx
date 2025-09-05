import {
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: "",
  });

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({
      submitting: true,
      success: false,
      error: false,
      message: "",
    });
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY
      );
      setFormStatus({
        submitting: false,
        success: true,
        error: false,
        message: "Message sent successfully!",
      });
      setFormData({ name: "", email: "", message: "" });
          toast({
            title: "✅ Your message is on its way!",
            description: "Thanks for reaching out!\n\nI appreciate your interest and will get back to you soon.",
      });
    } catch (error) {
      setFormStatus({
        submitting: false,
        success: false,
        error: true,
        message: "Failed to send message. Please try again.",
      });
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
      });
    }
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:firatesfaye44@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    firatesfaye44@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Phone</h4>
                  <a
                    href="tel:+251 982 135 305"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +251 982 135 305
                  </a>
                </div>
              </div>
             
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/firaol-tesfaye-a6949833b" target="_blank" rel="noopener noreferrer">
                  <Linkedin />
                </a>
                <a href="https://github.com/firoliyos" target="_blank" rel="noopener noreferrer">
                  <Github />
                </a>
              </div>
            </div>
          </div>

          <div
            className="bg-card p-8 rounded-lg shadow-xs"
          >
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="john@gmail.com"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </div>
              <button
                type="submit"
                disabled={formStatus.submitting}
                className={cn(
                  "cosmic-button w-fit px-4 py-2 text-sm rounded-full flex items-center justify-center gap-2 mx-auto cursor-pointer"
                )}
              >
                {formStatus.submitting ? <span className="text-xs">Sending...</span> : <span className="text-xs">Send Message</span>}
                <Send size={12} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
