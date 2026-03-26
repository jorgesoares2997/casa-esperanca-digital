import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-background/80 text-foreground backdrop-blur-sm transition-colors duration-200 hover:bg-accent hover:text-accent-foreground"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
};

export default ThemeToggle;
