import styled from "@emotion/styled";
import { Box } from "@mui/material";
import theme from "theme";

export const ContactsPageContainer = styled(Box)(() => ({
  marginTop: "130px",
  padding: "50px 0px",
  width: "100%",
  height: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "30px",
  background: theme.palette.primary.main,
}));

export const ContactsPageInfoBox = styled(Box)(() => ({
  width: "500px",
  height: "500px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  background: theme.palette.primary.main,
  lineHeight: "50px",
}));

export const ContactsPageMapBox = styled(Box)(() => ({
  width: "500px",
  height: "500px",
  borderRadius: "20px",
  background: `url("https://tile3.maps.2gis.com/tiles?x=23172&y=12059&z=15&v=1&ts=online_hd")`,
  backgroundSize: "cover",
}));

export const ContactsPageText = styled(Box)(() => ({
  fontFamily: theme.fonts.Trebuchet,
  fontSize: "18px",
  fontWeight: "500",
  letterSpacing: "1px",
}));
