import { styled } from "../style";

export const Flex = styled("div", {
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: "$small",
});

export const FlexCol = styled(Flex, {
  flexDirection: "column",
  alignItems: "flex-start",
});
