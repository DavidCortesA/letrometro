import Link from "next/link";

// Comming soon page
export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center md:p-24 p-12 dark:bg-gray-800 justify-center">
      <h1 className="md:text-8xl text-4xl font-bold dark:text-white mb-4 text-center break-all">Próximamente...</h1>
      <Link href="/" className="dark:bg-white bg-black dark:text-black text-white rounded-2xl px-5 py-1 text-2xl font-bold text-center cursor-pointer">{"<"} Volvamos a Inicio</Link>
    </div>
  );
}