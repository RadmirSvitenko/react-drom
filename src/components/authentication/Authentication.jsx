import { Zoom } from "@mui/material";
import Authorization from "./authorization/Authorization";
import Registration from "./registration/Registration";
import { CustomDialog } from "./styles";

const Authentication = ({ open, onClose, authSwitch, toggleAuthSwitch }) => {
  return (
    <CustomDialog
      open={open}
      onClose={onClose}
      transitionDuration={300}
      TransitionComponent={Zoom}
    >
      {authSwitch ? (
        <Authorization toggleAuthSwitch={toggleAuthSwitch} />
      ) : (
        <Registration toggleAuthSwitch={toggleAuthSwitch} />
      )}
    </CustomDialog>
  );
};

export default Authentication;
