import { createStitches } from "@stitches/react";

export const { styled, css, globalCss, keyframes, theme, config } =
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
      },
      fonts: {
        body: "monospace",
      },
    },
  });
