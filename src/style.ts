import { createStitches } from "@stitches/react";

export const { styled, css, globalCss, keyframes, theme, config, createTheme } =
  createStitches({
    theme: {
      colors: {
        back: "#181926",
        text: "#cad3f5",
        baseBack: "#24273a",
      },
      space: {
        small: "8px",
        medium: "16px",
        large: "32px",
      },
      fontSizes: {
        small: "12px",
        medium: "16px",
        large: "24px",
        xlarge: "32px",
        normal: "16px",
        title: "32px",
      },

      fonts: {
        old: "serif",
        simple: "sans-serif",
        free: "monospace",
        normal: "monospace",
      },
    },
  });

export const SoftColorTheme = createTheme({
  colors: {
    back: "#222831",
    text: "#EEEEEE",
    baseBack: "#393E46",
  },
});

export const PurpleColorTheme = createTheme({
  colors: {
    back: "#181926",
    text: "#cad3f5",
    baseBack: "#24273a",
  },
});

export const BlueColorTheme = createTheme({
  colors: {
    back: "#FFF2F2",
    text: "#2D336B",
    baseBack: "#A9B5DF",
  },
});

export const DarkColorTheme = createTheme({
  colors: {
    back: "#000000",
    text: "#F7F7F7",
    baseBack: "#854836",
  },
});

export const YellowColorTheme = createTheme({
  colors: {
    back: "#000000",
    text: "#FFB22C",
    baseBack: "#493628",
  },
});

export const SmallFontTheme = createTheme({
  fontSizes: {
    normal: "12px",
    title: "24px",
  },
});

export const MediumFontTheme = createTheme({
  fontSizes: {
    normal: "16px",
    title: "32px",
  },
});

export const LargeFontTheme = createTheme({
  fontSizes: {
    normal: "24px",
    title: "48px",
  },
});

export const SerifFontTheme = createTheme({
  fonts: {
    normal: "serif",
  },
});

export const SansFontTheme = createTheme({
  fonts: {
    normal: "sans-serif",
  },
});

export const MonoFontTheme = createTheme({
  fonts: {
    normal: "monospace",
  },
});
