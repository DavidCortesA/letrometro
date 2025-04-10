'use client'
import { useState } from "react";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { CardInfo } from "./Card";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";

const estiamteReadingTime = (text:string) => {
  const wordsPerMinute = 200;
  const wordCount = text.trim().split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return readingTime;
};

const getLetterDensity = (text:string) => {
  const letters = text.toLowerCase().replace(/[^a-záéíóúñ]/gi, "");
  const total = letters.length;
  const map = new Map<string, number>();
  
  for (const letter of letters) {
    map.set(letter, (map.get(letter) || 0) + 1);
  }

  return Array.from(map.entries())
    .map(([char, count]) => ({
      char,
      percent: (count / total) * 100,
    }))
    .sort((a, b) => b.percent - a.percent);
};

export default function Letrometro() {
  const [text, setText] = useState("");
  const [excludeSpaces, setExcludeSpaces] = useState(false);
  const [limitEnabled, setLimitEnabled] = useState(false);
  const [charLimit, setChartLimit] = useState(200);
  const [showAll,setShowAll] = useState(false);

  const characters = excludeSpaces ? text.replace(/\s/g, "") : text;
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  const sentenceCount = text.split(/[.!?]+/).filter((s) => s.trim().length > 0).length;
  const readingTime = estiamteReadingTime(text);
  const letterDensity = getLetterDensity(text);

  return (
    <section className="md:w-1/2 w-full md:container flex flex-col items-center justify-center gap-4 mt-10">
      <Textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escribe tu texto...(o pega tu texto)"
        maxLength={limitEnabled ? charLimit : undefined}
        className="text-base w-full h-50 resize-none text-start leading-tight align-start"
        style={{
          whiteSpace: "pre-wrap", // Permitir salto de línea
          wordWrap: "break-word", // Romper palabras largas
        }}
      />
      {/* Warnings */}
      {limitEnabled && characters.length > charLimit && (
        <p className="text-red-500 text-sm font-semibold">
          ⚠️ Has superado el límite de caracteres ({characters.length}/{charLimit})
        </p>
      )}
      {/** Checkbox with readingtime */}
      <div className="flex md:flex-row flex-col md:items-center justify-between w-full gap-4">
        <div className="flex md:flex-row flex-col md:items-center justify-between gap-4 md:w-2/3 w-full">
          <div className="flex flex-row items-center md:w-1/3 w-full gap-2">
            <Checkbox
              checked={excludeSpaces}
              id="ExcludeSpace"
              onClick={() => setExcludeSpaces(!excludeSpaces)}
            />
            <Label htmlFor="ExcludeSpace">Excluir espacios</Label>
          </div>
          <div className="flex flex-row items-center md:w-2/3 w-full h-5 gap-2">
            <Checkbox
              checked={limitEnabled}
              id="limitEnabled"
              onClick={() => setLimitEnabled(!limitEnabled)}
            />
            <Label htmlFor="limitEnabled">Limitar caracteres</Label>
            {limitEnabled && (
              <Input
                value={charLimit}
                onChange={(e) => setChartLimit(parseInt(e.target.value))}
                type="number"
                className="md:w-1/3 w-2/4 md:h-5"
              />
            )}
          </div>
        </div>
        <div className="md:w-1/3 font-semibold text-sm md:text-right">
          Tiempo de lectura: {text.length < 200 ? text.length < 50 ? '0' : '<1' : readingTime} minuto(s)
        </div>
      </div>
      {/** Cards */}
      <div className="flex md:flex-row flex-col items-center justify-between w-full gap-4 mt-5">
        <CardInfo title="Total de Caracteres" date={characters.length} bgcolor='bg-gradient-to-r from-indigo-500 to-blue-500'/>
        <CardInfo title="Total de Palabras" date={wordCount} bgcolor='bg-gradient-to-r from-rose-400 to-red-500'/>
        <CardInfo title="Total de Frases" date={sentenceCount} bgcolor='bg-gradient-to-r from-teal-200 to-teal-500'/>
      </div>
      {/** Letter Density */}
      <div className="space-y-2 mt-10 w-full">
        {/** Letter Density Title */}
        <h2 className="text-lg font-semibold">Densidad de letras</h2>
        {/** Letter Density Description */}
        {letterDensity.length === 0 && (
          <p className="text-sm ">No se encontraros caracteres. Empíeza a escribir para ver la densidad de letras.</p>
        )}
        {/** Letter Density List */}
        <ul className="w-full space-y-2">
          {letterDensity.slice(0, showAll ? letterDensity.length : 5).map((l) => (
            <li key={l.char} className="flex flex-row items-center w-full gap-2 transition-all duration-300 justify-between">
              <span className="font-semibold text-start w-1/12">{l.char.toUpperCase()}</span>
              <span
                className={`w-10/12 h-2 rounded-full`}
                style={{
                  backgroundImage: `linear-gradient(to right, #8e44ad ${l.percent}%, #8e44ad ${l.percent}%, #ebdef0 ${100 - l.percent}%, #ebdef0 100%)`,
                }}
              />
              <span className="font-semibold text-end w-1/12">{l.percent.toFixed(2)}%</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex">
        {/** Show All Button */}
        {letterDensity.length > 5 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="dark:bg-white bg-black dark:text-black text-white rounded-2xl px-5 py-1 text-base font-bold text-center cursor-pointer hover:scale-105 transition-all duration-300"
          >
            {showAll ? "Mostrar menos" : "Mostrar más"}
          </button>
        )}
      </div>
    </section>
  )
}