import React, { FC } from 'react';
import { Box, BoxProps, Container, styled } from '@mui/material';
import { StaticImageData } from 'next/image';

import { BannerImage } from '../../assets';

import Headlines from './Headlines';

interface BannerProps {
   [key: string]: unknown;
}

interface StyledBannerProps extends BoxProps {
   src: StaticImageData;
}

const StyledBanner = styled(Box)<StyledBannerProps>(({ src }) => ({
   background: `url(${src.src})`,
   backgroundRepeat: 'no-repeat',
   backgroundPosition: 'center',
   width: '100%',
   backgroundSize: '100% 100%'
}));

const Banner: FC<BannerProps> = () => {
   return (
      <StyledBanner src={BannerImage}>
         <Container>
            <Headlines />
         </Container>
      </StyledBanner>
   );
};

export default Banner;
