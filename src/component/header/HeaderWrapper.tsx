import { Box, styled } from '@mui/material';
import { FC } from 'react';
import { BilingualFullIcon } from '../../assets/icons/BilingualFullIcon';
import Navlinks from './Navlinks';

interface HeaderWrapperProps {}

const HeaderWrapper: FC<HeaderWrapperProps> = ({}) => {
  return (
    <StyledHeaderWrapper>
      <BilingualFullIcon className="logo" />
      <Navlinks role="" />
    </StyledHeaderWrapper>
  );
};

export default HeaderWrapper;

const StyledHeaderWrapper = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 0',
  '& .logo': {
    width: '174px',
    height: '42px',
  },
}));
