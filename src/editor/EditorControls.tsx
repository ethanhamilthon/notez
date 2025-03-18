import { Bold, Heading, Italic, Type } from "lucide-react";
import { styled } from "../style";

const ControlsContainer = styled("div", {
  position: "fixed",
  bottom: "$medium",
  left: "50%",
  display: "flex",
  gap: "$small",
  padding: "4px",
  backgroundColor: "$baseBack",
  borderRadius: "4px",
  boxShadow:
    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  zIndex: 1,

  // Animation properties
  opacity: 0,
  transition: "opacity 0.2s ease-out, transform 0.2s ease-out",
  transform: "translateX(-50%) translateY(20px)",

  "&.visible": {
    opacity: 1,
    transform: "translateX(-50%) translateY(0)",
  },
});

const ControlButton = styled("button", {
  all: "unset",
  cursor: "pointer",
  padding: "$small",
  borderRadius: "4px",
  color: "$text",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "&:hover": {
    backgroundColor: "$back",
  },
});

type EditorControlsProps = {
  onMakeTitle: () => void;
  onMakeBold: () => void;
  onMakeItalic: () => void;
  onMakeNormal: () => void;
  className?: string;
};

export const EditorControls = ({
  onMakeTitle,
  onMakeBold,
  onMakeItalic,
  onMakeNormal,
  className,
}: EditorControlsProps) => {
  return (
    <ControlsContainer className={className}>
      <ControlButton onClick={onMakeTitle}>
        <Heading size={16} />
      </ControlButton>
      <ControlButton onClick={onMakeBold}>
        <Bold size={16} />
      </ControlButton>
      <ControlButton onClick={onMakeItalic}>
        <Italic size={16} />
      </ControlButton>
      <ControlButton onClick={onMakeNormal}>
        <Type size={16} />
      </ControlButton>
    </ControlsContainer>
  );
};
