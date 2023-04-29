import { FC } from 'react';
import { Box, BoxProps, Container, styled } from '@mui/material';
import { BannerImage } from '../../assets';
import { StaticImageData } from 'next/image';
import Headlines from './Headlines';

interface BannerProps {}

interface StyledBannerProps extends BoxProps {
  src: StaticImageData;
}

const Banner: FC<BannerProps> = ({}) => {
  return (
    <StyledBanner src={BannerImage}>
      <Container>
        <Headlines />
      </Container>
    </StyledBanner>
  );
};

export default Banner;

const StyledBanner = styled(Box)<StyledBannerProps>(({ src }) => ({
  background: `url(${src.src})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  height: '80vh',
  width: '100%',
  backgroundSize: '100% 100%',
}));
