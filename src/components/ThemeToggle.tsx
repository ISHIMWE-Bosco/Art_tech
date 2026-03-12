import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const SLIDE_DISTANCE = 32;

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className="relative flex h-9 w-[72px] items-center justify-between rounded-full border border-border bg-card/80 px-2 shadow-card backdrop-blur-md"
        aria-label="Theme toggle loading"
      >
        <span className="absolute left-1 top-1 h-7 w-7 rounded-full bg-primary shadow-button" />
        <Sun className="h-4 w-4 text-foreground" />
        <Moon className="h-4 w-4 text-muted-foreground" />
      </div>
    );
  }

  const isDarkMode = theme === "dark";
  const applyTheme = (nextDarkMode: boolean) => setTheme(nextDarkMode ? "dark" : "light");

  return (
    <div
      role="switch"
      tabIndex={0}
      aria-checked={isDarkMode}
      aria-label="Drag to switch between light mode and dark mode"
      className="relative flex h-9 w-[72px] items-center justify-between rounded-full border border-border bg-card/80 px-2 shadow-card backdrop-blur-md transition-colors touch-none select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          applyTheme(!isDarkMode);
        }
      }}
    >
      <motion.span
        drag="x"
        dragConstraints={{ left: 0, right: SLIDE_DISTANCE }}
        dragElastic={0}
        dragMomentum={false}
        animate={{ x: isDarkMode ? SLIDE_DISTANCE : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 35 }}
        className="absolute left-1 top-1 h-7 w-7 cursor-grab rounded-full bg-primary shadow-button active:cursor-grabbing"
        onDragEnd={(_, info) => {
          if (info.offset.x > SLIDE_DISTANCE / 2) {
            applyTheme(true);
            return;
          }

          if (info.offset.x < -SLIDE_DISTANCE / 2) {
            applyTheme(false);
            return;
          }

          applyTheme(isDarkMode);
        }}
      />
      <Sun className={`z-10 h-4 w-4 transition-colors ${isDarkMode ? "text-muted-foreground" : "text-primary-foreground"}`} />
      <Moon className={`z-10 h-4 w-4 transition-colors ${isDarkMode ? "text-primary-foreground" : "text-muted-foreground"}`} />
    </div>
  );
};

export default ThemeToggle;
