import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

interface Childprops {
  children: React.ReactNode;
}
export const Screen = ({ children }: Childprops) => {
  const { theme, setTheme } = useTheme();
  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className=" relative max-w-7xl mx-auto w-full dark:bg-black  bg-white">
      <button
        onClick={handleTheme}
        className=" absolute  top-2 right-3 border dark:border-neutral-900 dark:bg-neutral-900  bg-slate-200 border-slate-100 cursor-pointer ease-in-out duration-300 transition-all rounded-md w-10 h-6 flex items-center justify-center"
      >
        {theme === "dark" ? (
          <Sun className="size-4" />
        ) : (
          <Moon className="size-4" />
        )}
      </button>
      {children}
    </div>
  );
};
