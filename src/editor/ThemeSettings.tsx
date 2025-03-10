import { Check } from "lucide-react";
import { Setting, ThemeContainer, ThemeItem } from "./Settings";
import {
  fontSizes,
  fontStyles,
  themeClasses,
  themes,
  useTheme,
} from "./useTheme";

export const ThemeSettings = () => {
  const { theme, setTheme, fontSize, fontStyle, setFontSize, setFontStyle } =
    useTheme();

  return (
    <>
      <Setting alignContent="start">
        <label>Themes</label>
        <ThemeContainer>
          {themes.map((t) => (
            <ThemeItem
              className={themeClasses[t]}
              key={t}
              onClick={() => setTheme(t)}
            >
              {theme === t ? <Check size={16} /> : null}
              {t}
            </ThemeItem>
          ))}
        </ThemeContainer>
      </Setting>

      <Setting alignContent="start">
        <label>Font size</label>
        <ThemeContainer>
          {fontSizes.map((f) => (
            <ThemeItem key={f} onClick={() => setFontSize(f)}>
              {fontSize === f ? <Check size={16} /> : null}
              {f}
            </ThemeItem>
          ))}
        </ThemeContainer>
      </Setting>

      <Setting alignContent="start">
        <label>Font style</label>
        <ThemeContainer>
          {fontStyles.map((f) => (
            <ThemeItem key={f} onClick={() => setFontStyle(f)}>
              {fontStyle === f ? <Check size={16} /> : null}
              {f}
            </ThemeItem>
          ))}
        </ThemeContainer>
      </Setting>
    </>
  );
};
