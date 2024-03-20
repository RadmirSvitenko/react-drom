import { IconButton, Zoom, useMediaQuery } from '@mui/material';
import Authorization from './authorization/Authorization';
import Registration from './registration/Registration';
import { CustomDialog } from './styles';
import theme from 'theme';
import { CloseRounded } from '@mui/icons-material';

const Authentication = ({ open, onClose, authSwitch, toggleAuthSwitch }) => {
  const sm = useMediaQuery(theme.breakpoints.down('sm'));
  const md = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <CustomDialog
      open={open}
      onClose={onClose}
      transitionDuration={300}
      TransitionComponent={Zoom}
      fullScreen={sm || md ? true : false}
    >
      <IconButton
        onClick={onClose}
        sx={{ position: 'absolute', right: '0', top: '0' }}
      >
        <CloseRounded />
      </IconButton>
      {authSwitch ? (
        <Authorization toggleAuthSwitch={toggleAuthSwitch} onClose={onClose} />
      ) : (
        <Registration toggleAuthSwitch={toggleAuthSwitch} />
      )}
    </CustomDialog>
  );
};

export default Authentication;
