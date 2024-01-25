import styled from "@emotion/styled";
import { AppBar, Box, Button, TextField, Toolbar } from "@mui/material";
import theme from "theme";

export const HeaderAppBar = styled(AppBar)(() => ({
  width: "100%",
  height: "130px",
  display: "flex",
  position: "absolute",
  top: "0",
}));

export const HeaderToolbar = styled(Toolbar)(() => ({
  height: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "column",
}));

export const HeaderContentBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
}));

export const HeaderBox = styled(Box)(() => ({
  display: "flex",
  width: "100%",
  height: "100%",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const SearchBox = styled(Button)(() => ({
  background: "#fff",
  borderRadius: "25px",
  padding: "10px 20px",
  fontSize: "12px",
  width: "300px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "0px 15px",
  transition: "0.5s",
  ":hover": {
    transition: "0.5s",
    background: "#fff",
  },
}));

export const HeaderCustomSearchContainer = styled(Box)(() => ({
  width: "100%",
  height: "auto",
  minHeight: "400px",
  outline: "1px solid #000",
}));

export const SearchLabel = styled(Box)(() => ({
  color: "#000",
  fontSize: "12px",
  ":hover": {
    textDecoration: "underline",
  },
}));

export const LogoBox = styled(Box)(() => ({
  "&:hover": {
    cursor: "pointer",
  },
}));

export const HeaderButtonAccount = styled(Button)(() => ({
  margin: "0px 10px",
  transition: "0.5s",
  fontSize: "12px",
  borderRadius: "25px",
  display: "inline-block",
  padding: "0px 15px ",
  letterSpacing: "2px",
  ":hover": {
    transition: "0.5s",
  },
}));

export const HeaderButtonCart = styled(Button)(() => ({
  margin: "0px 10px",
  background: "#fff",
  boxShadow: "none",
  borderRadius: "25px",
  fontSize: "12px",
  display: "inline-block",
  padding: "0px 15px ",
  transition: "0.5s",
  ":hover": {
    transition: "0.5s",
    background: "#fff",
  },
}));

export const HeaderTextStyle = styled(Box)(() => ({
  fontFamily: theme.fonts.Trebuchet,
  letterSpacing: "1px",
  fontWeight: "500",
  fontSize: "14px",
  textTransform: "uppercase",
  borderRadius: "15px",
  padding: "10px 20px",
  transition: "0.7s",
  ":hover": {
    cursor: "pointer",
    background: "#fff",
    transition: "0.7s",
  },
}));

export const HeaderCategoryBox = styled(Box)(() => ({
  display: "flex",
  width: "100%",
  height: "100px",
  justifyContent: "space-evenly",
  alignItems: "center",
}));

export const HeaderContentText = styled(Box)(() => ({
  color: theme.palette.secondary.main,
}));

export const SearchField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    color: "#000",
    borderRadius: "25px",

    "& fieldset": {
      borderColor: theme.palette.secondary.main,
      transition: "0.5s",
    },
    "&:hover fieldset": {
      borderColor: "#000",
      transition: "0.5s",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#000",
      transition: "0.5s",
    },
    "& .MuiInputLabel-outlined": {
      color: "#000",
      background: theme.palette.secondary.second,
    },
  },
}));
