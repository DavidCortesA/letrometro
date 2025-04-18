'use client'
import { useEffect, useRef, useState } from "react";
import { generate } from 'random-words';
import SettingsPanel from "./SettingsPanel";
import TypingText from "./TypingText";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { LucidePlay, RefreshCcw, StopCircle } from "lucide-react";
import ResultDisplay from "./ResultDisplay";

interface TypingTestState {
  text: string;
  inputText: string;
  startTime: number | null;
  endTime: number | null;
  correctChars: number;
  incorrectChars: number;
  isRunning: boolean;
  showResults: boolean;
  charColors: string[];
  isFinished: boolean;
}

const initialState: TypingTestState = {
  text: '',
  inputText: '',
  startTime: null,
  endTime: null,
  correctChars: 0,
  incorrectChars: 0,
  isRunning: false,
  showResults: false,
  charColors: [],
  isFinished: true,
};

export default function TypeTesting () {
  const [state, setState] = useState<TypingTestState>(initialState);
  const [textLength, setTextLength] = useState<number>(50);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    generateRandomText();
  }, []);

  const generateRandomText = () => {
    const generated = generate(textLength);
    const newText = Array.isArray(generated) ? generated : [generated];
    setState((prev) => ({
      ...prev,
      text: newText.join(' '),
      inputText: '',
      correctChars: 0,
      incorrectChars: 0,
      charColors: Array(textLength).fill(''),
      showResults: false,
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
  
    setState((prev) => {
      const isStarting = !prev.isRunning && value.length > 0;
      const newCharColors = prev.text.split('').map((char, index) => {
        if (index < value.length) {
          return value[index] === char ? 'green' : 'red';
        }
        return '';
      });
      const correct = newCharColors.filter((color) => color === 'green').length;
      const incorrect = newCharColors.filter((color) => color === 'red').length;
      const isFinished = value.length === prev.text.length && prev.isRunning;
      const endTime = isFinished ? Date.now() : prev.endTime;
      const showResults = isFinished || prev.showResults;
      const startTime = isStarting ? Date.now() : prev.startTime;
      const isRunning = isStarting ? true : isFinished ? false : prev.isRunning;
  
      return {
        ...prev,
        inputText: value,
        isRunning: isRunning,
        startTime: startTime,
        endTime: endTime,
        correctChars: correct,
        incorrectChars: incorrect,
        charColors: newCharColors,
        showResults: showResults,
        isFinished: isFinished,
      };
    });
  };

  const handleStart = () => {
    generateRandomText();
    setState((prev) => ({ ...prev, isRunning: true, startTime: Date.now(), endTime: null, isFinished: false, showResults: false }));
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleFinish = () => {
    if (state.isRunning) {
      setState((prev) => ({ ...prev, isRunning: false, endTime: Date.now(), showResults: true, isFinished: true }));
    }
  };

  const handleReset = () => {
    generateRandomText();
    setState(initialState);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleTextLengthChange = (length: number) => {
    setTextLength(length);
  };

  const handleGenerateNewText = () => {
    generateRandomText();
  };

  return (
    <section className="md:w-1/2 w-full md:container flex flex-col items-center justify-center gap-4 mt-10">
      <SettingsPanel
        onGenerateNew={handleGenerateNewText}
        onTextLengthChange={handleTextLengthChange}
        currentLength={textLength}
      />
      <TypingText text={state.text} charColors={state.charColors}/>
      <div className="w-full my-5 h-full flex flex-col items-center justify-center">
        <Input
          ref={inputRef}
          value={state.inputText}
          onChange={handleInputChange}
          placeholder="Escribe aquí..."
          disabled={state.isFinished}
        />
      </div>
      <div className="flex justify-center gap-2 w-full">
        {!state.isRunning && !state.showResults && state.text.length > 0 && (
          <Button onClick={handleStart} className="w-full cursor-pointer"><LucidePlay /> Iniciar</Button>
        )}
        {state.isRunning && (
          <Button onClick={handleFinish} className="w-full bg-red-400 hover:bg-red-500 text-white cursor-pointer"><StopCircle/> Finalizar</Button>
        )}
        {state.showResults && (
          <Button onClick={handleReset} className="w-full bg-green-400 hover:bg-green-500 text-white cursor-pointer"><RefreshCcw /> Reiniciar</Button>
        )}
      </div>

      {state.showResults && state.endTime && state.startTime && (
        <ResultDisplay
          correct={state.correctChars}
          incorrect={state.incorrectChars}
          time={(state.endTime - state.startTime) / 1000}
        />
      )}
    </section>
  )
};
