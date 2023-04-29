import { FC } from 'react';
import { Box, styled } from '@mui/material';
import MainHeader from '../header/MainHeader';
import Banner from '../../component/banner';

interface BilingualBoxProps {}

const BilingualBox: FC<BilingualBoxProps> = ({}) => {
  return (
    <StyledBilingualBox>
      <MainHeader />
      <Banner />
    </StyledBilingualBox>
  );
};

export default BilingualBox;

const StyledBilingualBox = styled(Box)(({ theme }) => ({
  background: theme.palette.warning.main,
}));
