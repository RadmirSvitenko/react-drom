import styled from "@emotion/styled";
import { Box } from "@mui/material";
import theme from "theme";

export const FooterContainer = styled(Box)(() => ({
  width: "100%",
  height: "auto",
  minHeight: "300px",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "flex-start",
  background: theme.palette.primary.main,
  padding: "30px 0px",
}));

export const FooterContentBox = styled(Box)(() => ({
  width: "300px",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "flex-start",
  flexWrap: "wrap",
}));

export const FooterContentTitle = styled(Box)(() => ({
  fontFamily: theme.fonts.Trebuchet,
  fontSize: "16px",
  fontWeight: "500",
  letterSpacing: "1px",
  textTransform: "uppercase",
  marginBottom: "30px",
}));

export const FooterIconBox = styled(Box)(() => ({
  display: "flex",
  height: "50px",
  justifyContent: "space-evenly",
  padding: "10px 0px",
}));

export const FooterContentText = styled(Box)(() => ({
  fontFamily: theme.fonts.Trebuchet,
  fontSize: "14px",
  fontWeight: "400",
  letterSpacing: "1px",
  cursor: "pointer",
  margin: "8px 0px",
  "&:hover": {
    textDecoration: "underline",
  },
}));
