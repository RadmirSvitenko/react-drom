import styled from "@emotion/styled";
import { Dialog } from "@mui/material";

export const CustomDialog = styled(Dialog)(() => ({
  "& .MuiDialog-paper": {
    background: "transparent",
    backdropFilter: "blur(5px)",
  },
}));
