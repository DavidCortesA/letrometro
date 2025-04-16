interface ResultDisplayProps {
  correct: number;
  incorrect: number;
  time: number;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ correct, incorrect, time }) => {
  const total = correct + incorrect;
  const accuracy = total > 0 ? (correct / total) * 100 : 0;

  return (
    <div className="mt-4 space-y-2 text-center">
      <h3 className="text-lg font-semibold">Resultados</h3>
      <p>
        Correctas: <span className="font-bold text-green-500">{correct}</span>
      </p>
      <p>
        Incorrectas: <span className="font-bold text-red-500">{incorrect}</span>
      </p>
      <p>
        Tiempo: <span className="font-bold">{time.toFixed(2)} segundos</span>
      </p>
      <p>
        Precisión: <span className="font-bold">{accuracy.toFixed(2)}%</span>
      </p>
    </div>
  );
};

export default ResultDisplay;