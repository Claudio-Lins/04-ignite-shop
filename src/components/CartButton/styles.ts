import { styled } from "../../styles"

export const CartButtonContainer = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  borderRadius: 6,
  position: "relative",

  "&:disabled": {
    cursor: "not-allowed",
    opacity: 0.6,
  },

  backgroundColor: "$gray800",
  color: "$gray500",

  width: "3rem",
  height: "3rem",

  svg: {
    fontSize: 24,
  },
})
