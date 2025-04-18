'use client'
import useDarkMode from "@/app/hook/useDarkMode";
import { usePathname } from 'next/navigation'
import { Moon, Sun } from "lucide-react";
import { Eczar } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react"; // Importa useState

const eczar = Eczar({
  weight: ["400","500","600", "700","800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const path = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Estado para el menú móvil

  const handleToggleDarkMode = () => {
    toggleDarkMode();
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-transparent dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen} // Indica si el menú está expandido para accesibilidad
              onClick={toggleMobileMenu} // Función para cambiar el estado del menú
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg className="block size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              ) : (
                <svg className="block size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
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
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a href="/letronomo" className={`rounded-md px-3 py-2 text-sm font-medium ${path.includes('letronomo') ? 'bg-gray-800 text-white dark:bg-accent-foreground dark:hover:bg-white/80 dark:text-gray-800' : 'text-gray-500 hover:bg-gray-700 hover:text-white'}`} aria-current={path.includes('letronomo') ? 'page' : undefined}>Letronomo</a>
                <a href="/typetest" className={`rounded-md px-3 py-2 text-sm font-medium ${path.includes('typetest') ? 'bg-gray-800 text-white dark:bg-accent-foreground dark:hover:bg-white/80 dark:text-gray-800' : 'text-gray-500 hover:bg-gray-700 hover:text-white'}`} aria-current={path.includes('typetest') ? 'page' : undefined}>TypeTest</a>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2">
            <button
              type="button"
              className="p-1 text-white dark:text-gray-900 rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white dark:bg-accent-foreground dark:hover:bg-white/80 cursor-pointer"
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

      {/* Menú móvil */}
      <div className={`sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link href="/letronomo" onClick={() => setIsMobileMenuOpen(false)} className={`block rounded-md px-3 py-2 text-base font-medium ${path.includes('letronomo') ? 'bg-gray-900 text-white dark:bg-accent-foreground dark:text-gray-800' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`} aria-current={path.includes('letronomo') ? 'page' : undefined}>Letronomo</Link>
          <Link href="/typetest" onClick={() => setIsMobileMenuOpen(false)} className={`block rounded-md px-3 py-2 text-base font-medium ${path.includes('typetest') ? 'bg-gray-900 text-white dark:bg-accent-foreground dark:text-gray-800' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`} aria-current={path.includes('typetest') ? 'page' : undefined}>TypeTest</Link>
        </div>
      </div>
    </nav>
  );
}