'use client'
import useDarkMode from "@/app/hook/useDarkMode";
import { Moon, Sun } from "lucide-react";
import { Eczar } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const eczar = Eczar({
  weight: ["400","500","600", "700","800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  const handleToggleDarkMode = () => {
    toggleDarkMode();
  };


  return (
    <nav className="bg-transparent dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <Link href="/" className="flex flex-shrink-0 items-center gap-4 flex-row justify-center">
              <Image
                src={`${darkMode ? '/images/keyboard-light.svg' : '/images/keyboard.svg' }`}
                alt="Letrometro"
                width={30}
                height={30}
              />
              <h1 className={`text-2xl font-bold dark:text-white text-black uppercase ${eczar.className}`}>Letrometro</h1>
            </Link>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2">
            <button
              type="button"
              className="p-1 text-black/50 rounded-md bg-gray-500 hover:bg-gray-700 hover:text-white dark:bg-accent-foreground dark:hover:bg-white/80 cursor-pointer"
              onClick={handleToggleDarkMode}
              aria-label="Toggle dark mode"
              title="Toggle dark mode"
              aria-pressed={darkMode}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}