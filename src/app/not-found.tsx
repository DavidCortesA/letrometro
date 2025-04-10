import { Eye } from "lucide-react";
import Link from "next/link";

export default function NoFound() {
  return (
    <div className="flex min-h-screen flex-col items-center md:p-24 p-12 dark:bg-gray-800 justify-center">
      <h1><Eye size={150} /></h1>
      <h1 className="md:text-8xl text-4xl font-bold dark:text-white mb-4 text-center break-all">Página no encontrada</h1>
      <p className="md:text-2xl text-xl font-bold dark:text-white mb-4 text-center break-all">Parece que escribimos algo mal, intenta nuevamente o vamos a incio</p>
      <Link href="/" className="dark:bg-white bg-black dark:text-black text-white rounded-2xl px-5 py-1 text-2xl font-bold text-center cursor-pointer">Volver al inicio</Link>
    </div>
  );
}