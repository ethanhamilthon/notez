import { Check } from "lucide-react";
import { Setting, ThemeContainer, ThemeItem } from "./Settings";

type SettingsOptionProps = {
  label: string;
  options: string[];
  currentValue: string;
  onSelect: (value: string) => void;
  getClassName?: (value: string) => string;
};

export const SettingsOption = ({
  label,
  options,
  currentValue,
  onSelect,
  getClassName,
}: SettingsOptionProps) => (
  <Setting alignContent="start">
    <label>{label}</label>
    <ThemeContainer>
      {options.map((option) => (
        <ThemeItem
          key={option}
          className={getClassName?.(option)}
          onClick={() => onSelect(option)}
        >
          {currentValue === option ? <Check size={16} /> : null}
          {option}
        </ThemeItem>
      ))}
    </ThemeContainer>
  </Setting>
);