import { Link, useLocation } from "react-router-dom";
import { BookOpen, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isLanding = location.pathname === "/";

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-primary">
            <BookOpen className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-extrabold text-foreground">
            Art<span className="text-primary">_tech</span>
          </span>
        </Link>

        {isLanding && (
          <div className="hidden items-center gap-6 md:flex">
            <a href="#courses" className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">Courses</a>
            <a href="#features" className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">Features</a>
            <a href="#about" className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">About</a>
          </div>
        )}

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Button variant="ghost" asChild>
            <Link to="/login">Log In</Link>
          </Button>
          <Button asChild className="gradient-primary border-0 shadow-soft">
            <Link to="/login">Get Started</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border bg-card md:hidden"
          >
            <div className="flex flex-col gap-2 p-4">
              {isLanding && (
                <>
                  <a href="#courses" className="rounded-lg px-4 py-2 text-sm font-semibold hover:bg-muted" onClick={() => setMobileOpen(false)}>Courses</a>
                  <a href="#features" className="rounded-lg px-4 py-2 text-sm font-semibold hover:bg-muted" onClick={() => setMobileOpen(false)}>Features</a>
                  <a href="#about" className="rounded-lg px-4 py-2 text-sm font-semibold hover:bg-muted" onClick={() => setMobileOpen(false)}>About</a>
                </>
              )}
              <Button asChild className="gradient-primary border-0 mt-2">
                <Link to="/login">Get Started</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
