interface TypingTextProps {
  text: string;
  charColors: string[];
}

const TypingText: React.FC<TypingTextProps> = ({ text, charColors }) => {
  return (
    <div>
      {text.split('').map((char, index) => (
        <span key={index} style={{ color: charColors[index] }}>
          {char}
        </span>
      ))}
    </div>
  );
};

export default TypingText;