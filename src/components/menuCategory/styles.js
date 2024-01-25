import styled from "@emotion/styled";
import { Box, SwipeableDrawer } from "@mui/material";
import theme from "theme";

export const MenuCategoryContainer = styled(Box)(() => ({
  minWidth: "300px",
  height: "100vh",
  background: theme.palette.primary.second,
  transition: "0.4s",
}));

export const CustomSwipeableDrawer = styled(SwipeableDrawer)(() => ({
  width: "auto",
  minWidth: "300px",
}));

export const CustomSwipeableDrawerBox = styled(Box)(() => ({
  width: "100%",
  height: "100%",
  display: "flex",
}));

export const CustomUl = styled(Box)(() => ({
  listStyleType: "none",
  padding: "20px",
  lineHeight: "40px",
  transition: "0.6s",
  display: "block",
}));

export const CustomListBox = styled(Box)(({ visibilityDesignList }) => ({
  fontFamily: theme.fonts.Trebuchet,
  color: "#000",
  letterSpacing: "1.5px",
  fontSize: "14px",
  fontWeight: "500",
  justifyContent: "space-between",
  alignItems: "center",
  cursor: "pointer",
  display: "flex",
  padding: "5px 15px",
  transition: "0.6s",
  borderRadius: "15px",
  background: visibilityDesignList
    ? theme.palette.secondary.main
    : "transparent",
  ":hover": {
    background: theme.palette.secondary.main,
    transition: "0.6s",
  },
}));

export const CustomListImageBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  height: "100px",
}));

export const CustomListBoxIcon = styled(Box)(({ visibilityDesignList }) => ({
  alignItems: "center",
  paddingLeft: "20px",
  transition: "0.5s",
  display: visibilityDesignList ? "flex" : "none",
}));

export const CustomUlSubMenu = styled(Box)(({ type, visibility }) => ({
  lineHeight: "40px",
  padding: "20px",
  transition: "1s",
  // display: visibility ? "block" : "none",
  whiteSpace: "nowrap",
}));
