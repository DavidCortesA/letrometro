import TypeTesting from "@/components/TypeTesting";

export default function Page() {

  return (
    <div className="flex min-h-screen flex-col items-center md:p-24 p-12 dark:bg-gray-800">
      <h1 className="md:text-8xl text-4xl font-bold dark:text-white mb-4 text-center break-all">Prueba de Velocidad <br /><span className="font-normal italic">de Escritura</span></h1>
      <TypeTesting />
    </div>
  );
}
