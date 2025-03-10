import { useEffect, useState } from "react";
import {
  BlueColorTheme,
  DarkColorTheme,
  LargeFontTheme,
  MediumFontTheme,
  MonoFontTheme,
  PurpleColorTheme,
  SansFontTheme,
  SerifFontTheme,
  SmallFontTheme,
  SoftColorTheme,
  YellowColorTheme,
} from "../style";

export const themes = ["soft", "purple", "blue", "dark", "yellow"] as const;

export const themeClasses: Record<(typeof themes)[number], string> = {
  soft: SoftColorTheme.className,
  purple: PurpleColorTheme.className,
  blue: BlueColorTheme.className,
  dark: DarkColorTheme.className,
  yellow: YellowColorTheme.className,
};

export const fontSizes = ["small", "medium", "large"] as const;

export const fontSizeClasses: Record<(typeof fontSizes)[number], string> = {
  small: SmallFontTheme.className,
  medium: MediumFontTheme.className,
  large: LargeFontTheme.className,
};

export const fontStyles = ["sans", "serif", "mono"] as const;

export const fontStyleClasses: Record<(typeof fontStyles)[number], string> = {
  sans: SansFontTheme.className,
  serif: SerifFontTheme.className,
  mono: MonoFontTheme.className,
};

export const useTheme = () => {
  const [theme, setTheme] = useState<(typeof themes)[number] | null>(null);
  const [fontSize, setFontSize] = useState<(typeof fontSizes)[number] | null>(
    null
  );
  const [fontStyle, setFontStyle] = useState<
    (typeof fontStyles)[number] | null
  >(null);
  useEffect(() => {
    if (theme === null || fontSize === null || fontStyle === null) {
      const savedTheme = localStorage.getItem("ColorTheme");
      const savedFontSize = localStorage.getItem("FontSize");
      const savedFontStyle = localStorage.getItem("FontStyle");
      if (savedFontSize) {
        setFontSize(savedFontSize as (typeof fontSizes)[number]);
      } else {
        setFontSize("medium");
      }
      if (savedFontStyle) {
        setFontStyle(savedFontStyle as (typeof fontStyles)[number]);
      } else {
        setFontStyle("sans");
      }
      if (savedTheme) {
        setTheme(savedTheme as (typeof themes)[number]);
      } else {
        setTheme("soft");
      }
    } else {
      document.body.className = `${themeClasses[theme]} ${fontSizeClasses[fontSize]} ${fontStyleClasses[fontStyle]}`;
      localStorage.setItem("ColorTheme", theme);
      localStorage.setItem("FontSize", fontSize);
      localStorage.setItem("FontStyle", fontStyle);
    }
  }, [theme, fontSize, fontStyle]);

  return { theme, setTheme, fontSize, setFontSize, fontStyle, setFontStyle };
};
