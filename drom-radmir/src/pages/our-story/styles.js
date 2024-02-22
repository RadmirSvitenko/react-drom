import styled from '@emotion/styled';
import { Box } from '@mui/material';
import theme from 'theme';
import storyImage from 'assets/images/img1_kare.webp';

export const OurStoryContainer = styled(Box)(() => ({
  height: 'auto',
  minHeight: '100vh',
  background: theme.palette.primary.main,
  padding: '30px',
  marginTop: '130px',
  outline: '1px solid #000',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const OurStoryInfographicContainer = styled(Box)(() => ({
  width: '100%',
  height: 'auto',
  minHeight: '100vh',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignContent: 'space-evenly',
  gap: '200px',
  margin: '100px 0px',
  position: 'relative',
}));

export const OurStoryInfographicImageBox = styled(Box)(() => ({
  width: '500px',
  height: '500px',
  outline: '1px solid #000',
  background: `url(${storyImage})`,
  backgroundSize: 'cover',
}));

export const OurStoryСhronologyVerticalLine = styled(Box)(() => ({
  width: '0px',
  height: '100%',
  border: '1px solid #000',
  position: 'absolute',
  transform: 'translate(-50%, 0%)',
  left: '50%',
}));

export const OurStoryСhronologyConnector = styled(Box)(() => ({
  border: '1px solid #000',
  background: '#000',
  borderRadius: '50%',
  padding: '10px',
  position: 'absolute',
  left: '50%',
}));

export const OurStoryСhronologyLine = styled(Box)(() => ({
  width: '450px',
  height: '0px',
  border: '1px solid #000',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'absolute',
  left: '50%',
}));

export const OurStoryСhronologyDescriptionBox = styled(Box)(() => ({
  width: '150px',
  height: '50px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: theme.palette.secondary.main,
  outline: '1px solid #000',
  zIndex: '30',
  borderRadius: '15px',
}));

export const OurStoryСhronologyDescriptionText = styled(Box)(() => ({
  fontFamily: theme.typography.fontFamily[1],
  fontSize: '16px',
  fontWeight: '500',
  letterSpacing: '1px',
}));
