import styled from "@emotion/styled";
import { Box, Button, Divider, Paper, Slider } from "@mui/material";
import theme from "theme";

export const FiltersCatalogContainer = styled(Paper)(() => ({
  height: "auto",
  padding: "30px",
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  justifyContent: "space-between",
  background: "#fff",
  borderRight: "1px solid gray",

  // "&::-webkit-scrollbar": {
  //   width: "10px",
  // },
  // "&::-webkit-scrollbar-track": {
  //   background: "#f5f3ee",
  // },
  // "&::-webkit-scrollbar-thumb": {
  //   background: "rgba(241, 0, 0, 0.952)",
  //   transition: "0.7s",
  //   borderRadius: "10px",
  //   border: "2px solid #f5f3ee",
  // },
  // "&::-webkit-scrollbar-thumb:hover": {
  //   background: "rgba(25, 25, 25, 1)",
  //   transition: "0.7s",
  //   borderRadius: "10px",
  //   border: "2px solid #f5f3ee",
  // },
}));

export const FiltersCatalogBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  width: "80%",
  margin: "30px 0px",
}));

export const FiltersColorBox = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
  justifyContent: "space-evenly",
  lineHeight: "30px",
  margin: "30px 0px",
}));

export const FiltersCatalogListTitle = styled(Box)(() => ({
  fontFamily: theme.fonts.Trebuchet,
  fontSize: "18px",
  letterSpacing: "2px",
  fontWeight: "700",
  color: "#000",
  display: "flex",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  textTransform: "uppercase",
  margin: "5px 0px",
}));

export const FiltersCatalogList = styled(Box)(() => ({}));

export const FiltersCatalogSection = styled(Box)(({ visibility }) => ({
  fontFamily: theme.fonts.Trebuchet,
  fontSize: "16px",
  letterSpacing: "1px",
  padding: "10px 20px",
  borderRadius: "8px",
  cursor: "pointer",
  color: visibility ? "#fff" : "#000",
  background: visibility ? "red" : "transparent",
  transition: "0.6s",
  ":hover": {
    background: "red",
    color: "#fff",
    cursor: "pointer",
    transition: "0.6s",
  },
}));

export const FiltersCatalogColorSection = styled(Box)(() => ({
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  ":hover": {
    cursor: "pointer",
  },
}));

export const FilterPriceBox = styled(Box)(() => ({
  width: "100%",
  margin: "30px 0px",
}));

export const CustomDivider = styled(Divider)(() => ({
  marginBottom: "20px",
}));

export const CustomSlider = styled(Slider)(() => ({
  color: "red",
}));

export const CustomButtonResetFilters = styled(Button)(() => ({
  color: "#000",
  background: theme.palette.secondary.main,
  transition: "0.6s",
  ":hover": {
    cursor: "pointer",
    transition: "0.6s",
    background: "red",
    color: "#fff",
  },
}));
