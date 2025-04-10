import Letrometro from "@/components/Letrometro";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center md:p-24 p-12 dark:bg-gray-800">
      <h1 className="md:text-8xl text-4xl font-bold dark:text-white mb-4 text-center break-all">Analiza tu texto, <br /><span className="font-normal italic">en tiempo real.</span> </h1>
      <Letrometro />
    </div>
  );
}
