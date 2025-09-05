import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full py-6 bg-background border-t border-border flex items-center justify-center">
      <div className="w-full text-center text-muted-foreground text-sm">
        &copy; {new Date().getFullYear()} Firaol T.
      </div>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={15} />
      </a>
    </footer>
  );
};
