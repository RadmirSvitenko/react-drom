import styled from "@emotion/styled";
import { Box } from "@mui/material";
import theme from "theme";

export const ReviewsPageContainer = styled(Box)(() => ({
  width: "100%",
  height: "100vh",
  background: theme.palette.primary.main,
  marginTop: "130px",
}));

export const ReviewsPageReviewBox = styled(Box)(() => ({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  letterSpacing: "1.5px",
  color: "#000",
  fontFamily: theme.fonts.Trebuchet,
}));
