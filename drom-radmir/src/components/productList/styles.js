import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const ProductListContainer = styled(Box)(() => ({
  minWidth: "70%",
  maxHeight: "100vh",
  height: "auto",
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  flexGrow: "1",
  gap: "50px",
  justifyContent: "space-evenly",
  padding: "20px",
  overflow: "auto",

  "&::-webkit-scrollbar": {
    width: "10px",
  },
  "&::-webkit-scrollbar-track": {
    background: "#f5f3ee",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "rgba(241, 0, 0, 0.952)",
    transition: "0.7s",
    borderRadius: "10px",
    border: "2px solid #f5f3ee",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: "rgba(25, 25, 25, 1)",
    transition: "0.7s",
    borderRadius: "10px",
    border: "2px solid #f5f3ee",
  },
}));
