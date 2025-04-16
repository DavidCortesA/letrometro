interface TypingTextProps {
  text: string;
  charColors: string[];
}

const TypingText: React.FC<TypingTextProps> = ({ text, charColors }) => {
  return (
    <div className="whitespace-pre-wrap font-mono text-lg">
      {text.split('').map((char, index) => (
        <span key={index} className={charColors[index]}>
          {char}
        </span>
      ))}
    </div>
  );
};

export default TypingText;