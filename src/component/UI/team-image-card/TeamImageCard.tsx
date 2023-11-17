import { Avatar, Box, Card, Stack, Typography, styled } from '@mui/material';
import React, { FC } from 'react';

import { ITeamImageCard } from '../../../types/team';
import Image from '../Image';
import cssStyles from '../../../utils/helpers/cssStyle';

import SvgIconStyle from './SvgIconStyle';
import SocialsButton from './SocialsButton';

const OverlayStyle = styled('div')(({ theme }) => ({
   ...cssStyles(theme).bgBlur({ blur: 2, color: theme.palette.primary.dark }),
   top: 0,
   zIndex: 8,
   content: "''",
   width: '100%',
   height: '100%',
   position: 'absolute'
}));

const TeamImageCard: FC<ITeamImageCard> = ({ staticImage, position, socials, fullName }) => {
   return (
      <Card sx={{ textAlign: 'center', width: 350 }}>
         <Box sx={{ position: 'relative' }}>
            <SvgIconStyle
               src="https://minimal-assets-api-dev.vercel.app/assets/icons/shape-avatar.svg"
               sx={{
                  width: 144,
                  height: 62,
                  zIndex: 10,
                  left: 0,
                  right: 0,
                  bottom: -26,
                  mx: 'auto',
                  position: 'absolute',
                  background: 'white'
               }}
            />
            <Avatar
               alt={fullName}
               src={staticImage}
               sx={{
                  width: 64,
                  height: 64,
                  zIndex: 11,
                  left: 0,
                  right: 0,
                  bottom: -32,
                  mx: 'auto',
                  position: 'absolute'
               }}
            />
            <OverlayStyle />
            <Image src={staticImage} alt={fullName} ratio="16/9" />
         </Box>

         <Typography variant="subtitle1" sx={{ mt: 6 }}>
            {fullName}
         </Typography>

         <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {position}
         </Typography>

         <Stack alignItems="center">
            <SocialsButton initialColor simple sx={{ my: 2.5 }} socials={socials} />
         </Stack>
      </Card>
   );
};

export default TeamImageCard;
