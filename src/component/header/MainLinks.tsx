import { FC } from 'react';
import { Box, Button, styled } from '@mui/material';

interface MainLinksProps {}

const MainLinks: FC<MainLinksProps> = ({}) => {
  return (
    <StyledMainLinks>
      <Button variant="contained">TO COME IN</Button>
      <Button variant="outlined">REGISTER</Button>
    </StyledMainLinks>
  );
};

export default MainLinks;

const StyledMainLinks = styled(Box)(() => ({
  color: 'black',

  display: 'flex',
  justifyContent: 'flex-end',
  gap: '24px',

  width: '100%',
}));
