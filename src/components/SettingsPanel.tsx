import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

interface SettingsPanelProps {
  onGenerateNew: () => void;
  onTextLengthChange: (length: number) => void;
  currentLength: number;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({ onGenerateNew, onTextLengthChange, currentLength }) => {

  return (
    <div className="flex items-center justify-between space-x-4 h-full w-full">
      <Button onClick={onGenerateNew} variant="outline">
        Generar Nuevo Texto
      </Button>
      <div className="flex items-center space-x-2">
        <label htmlFor="textLength" className="text-sm font-medium">
          Longitud:
        </label>
        <Slider
          id="textLength"
          defaultValue={[currentLength]}
          min={10}
          max={200}
          step={10}
          onValueChange={(value) => onTextLengthChange(value[0])}
          className="w-32"
        />
        <span className="text-sm">{currentLength}</span>
      </div>
    </div>
  );
};

export default SettingsPanel;