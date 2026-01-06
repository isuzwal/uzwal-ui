"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

function NavBara() {
  const { theme, setTheme } = useTheme();
  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <nav
      className=" sticky top-0 w-full border flex justify-between px-2 py-1.5  font-mono  bg-slate-50 border-slate-50 dark:bg-neutral-950/15 shadow-[inset_0_2px_2px_rgba(50,50,50,0.6),inset_0_-2px_4px_rgba(55,55,55,0.6),inset_2px_0_4px_rgba(55,55,55,0.6),inset_-2px_0_4px_rgba(55,55,55,0.6)]
 dark:border-neutral-900  rounded-lg"
    >
      <div className="flex gap-2 items-center ">
        <div className="w-12 h-12 border flex justify-center items-center rounded-md dark:border-neutral-900 border-gray-200">
          Logo
        </div>
        <h1 className=" text-xl md:text-2xl font-semibold dark:text-neutral-200 text-neutral-900">
          Visual<span>UI</span>
        </h1>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <button>ShowCase</button>
          <input type="text" placeholder="Search the UI" />
        </div>
        <button
          onClick={handleTheme}
          className="  border dark:border-neutral-900 dark:bg-neutral-900  bg-slate-200 border-slate-100 cursor-pointer ease-in-out duration-300 transition-all rounded-md w-10 h-6 flex items-center justify-center"
        >
          {theme === "dark" ? (
            <Sun className="size-4" />
          ) : (
            <Moon className="size-4" />
          )}
        </button>
      </div>
    </nav>
  );
}
export default NavBara;
