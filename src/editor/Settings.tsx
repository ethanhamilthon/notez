import { Settings2, X } from "lucide-react";
import { styled } from "../style";
import { useSetting } from "./useSetting";

import { Flex, FlexCol } from "../shared/Flex";

import { NotesList } from "./NotesList";
import { ThemeSettings } from "./ThemeSettings";

export const SettingsLayout = styled("button", {
  all: "unset",
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  top: "$small",
  right: "$small",
  padding: "$small",
  backgroundColor: "$baseBack",
  color: "$text",
  fontSize: "$small",
  //   border: "1px solid $text",
  borderRadius: "4px",
  zIndex: 1,
});

export const SettingsMenu = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "$medium",
  position: "absolute",
  width: "300px",
  height: "calc(100dvh - 8px * 2)",
  backgroundColor: "$baseBack",
  top: "$small",
  right: "$small",
  padding: "$medium",
  transition: "0.2s ease-out",
  borderRadius: "8px",
  boxShadow:
    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  "&.hidden": {
    right: "-400px",
  },
  "& header": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& > .x-icon": {
      cursor: "pointer",
    },
  },

  zIndex: 2,
});

export const Setting = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$small",
  "& > label": {
    color: "$text",
  },

  variants: {
    alignContent: {
      start: {
        "& > div": {
          justifyContent: "flex-start",
        },
      },
      end: {
        "& > div": {
          justifyContent: "flex-end",
        },
      },
      between: {
        "& > div": {
          justifyContent: "space-between",
        },
      },
    },
  },
});

export const ThemeItem = styled("span", {
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  padding: "4px",
  borderRadius: "4px",
  backgroundColor: "$back",
  color: "$text",
});

export const ThemeContainer = styled("div", {
  display: "flex",
  gap: "$small",
  flexWrap: "wrap",
});

const Toggle = styled("div", {
  width: "40px",
  height: "20px",
  backgroundColor: "$back",
  borderRadius: "10px",
  position: "relative",
  cursor: "pointer",
  transition: "0.2s ease-out",

  "&::after": {
    content: "",
    position: "absolute",
    width: "16px",
    height: "16px",
    borderRadius: "50%",
    backgroundColor: "$text",
    top: "2px",
    left: "2px",
    transition: "0.2s ease-out",
  },

  variants: {
    active: {
      true: {
        "&::after": {
          left: "22px",
        },
      },
    },
  },
});

export const SettingComponent = () => {
  const { isMenuOpen, toggleMenu, showControls, toggleControls } = useSetting();

  return (
    <>
      <SettingsMenu className={isMenuOpen ? "" : "hidden"}>
        <FlexCol css={{ width: "100%", height: "100%" }}>
          <Flex
            css={{
              justifyContent: "space-between",
              width: "100%",
              marginBottom: "$small",
            }}
          >
            <span>Notez</span>
            <X className="x-icon" size={16} onClick={toggleMenu} />
          </Flex>
          <NotesList />
          <ThemeSettings />
          <Setting alignContent="between">
            <label>Formatting controls ⌘E</label>
            <Toggle active={showControls} onClick={toggleControls} />
          </Setting>
        </FlexCol>
        <div>
          <span>Help</span>
        </div>
      </SettingsMenu>
      <SettingsLayout onClick={toggleMenu}>
        <Settings2 size={16} fill="$back" />
      </SettingsLayout>
    </>
  );
};
