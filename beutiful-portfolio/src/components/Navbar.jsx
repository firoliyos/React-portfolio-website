import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.screenY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
  className="text-xl font-bold text-primary flex items-center"
  href="#hero"
>
  <div className="flex items-center gap-2 group">
    {/* Outer rotating circle */}
    <div className="relative h-10 w-10 sm:h-20 sm:w-20 rounded-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 h-10 w-10 sm:h-20 sm:w-20 rounded-full shadow-2xl shadow-primary/60 flex items-center justify-center">
        <motion.div
          className="absolute inset-0 h-10 w-10 sm:h-20 sm:w-20 rounded-full"
          style={{
            background:
              "conic-gradient(#6366f1, #06b6d4, #f59e42, #6366f1)",
          }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
        />
        {/* Inner logo */}
        <div className="bg-background rounded-full flex items-center justify-center w-8 h-8 sm:w-16 sm:h-16">
          <img
            src="/projects/logo.png"
            alt="Logo"
            className="h-8 w-8 sm:h-16 sm:w-16 rounded-full object-cover shadow"
            style={{ zIndex: 2 }}
          />
        </div>
      </div>
    </div>
  </div>
</a>


        {/* desktop nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
          {/* ✅ ThemeToggle for desktop */}
          <ThemeToggle />
        </div>

        {/* mobile nav */}
        
        <div className="flex items-center space-x-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="p-2 text-foreground z-50 cursor-pointer"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdroup-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
