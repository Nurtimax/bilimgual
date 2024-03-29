// @mui
import { SxProps, alpha } from '@mui/material/styles';
import React, { FC } from 'react';
import { Link, Stack, Button, Tooltip, IconButton, IconButtonProps } from '@mui/material';

import { ISocials } from '../../../types/team';
import { ISocialIcons, SOCIAL_ICONS } from '../../../utils/constants/icons';
//

// ----------------------------------------------------------------------
interface ISocialsButton {
   socials: ISocials[];
   initialColor?: boolean;
   simple?: boolean;
   sx?: SxProps;
   other?: IconButtonProps;
}

const SocialsButton: FC<ISocialsButton> = ({ socials, initialColor, simple, sx, ...other }) => {
   return (
      <Stack direction="row" flexWrap="wrap" alignItems="center">
         {socials.map((social) => {
            const { id, icon, link, socialColor } = social;

            return simple ? (
               <Link key={id} href={link}>
                  <Tooltip title={id} placement="top">
                     <IconButton
                        color="inherit"
                        sx={{
                           ...(initialColor && {
                              color: socialColor || '#fff',
                              '&:hover': {
                                 bgcolor: alpha(socialColor || '#fff', 0.08)
                              }
                           }),
                           ...sx
                        }}
                        {...other}
                     >
                        {SOCIAL_ICONS[icon as unknown as keyof ISocialIcons]}
                     </IconButton>
                  </Tooltip>
               </Link>
            ) : (
               <Button
                  key={id}
                  href={link}
                  color="inherit"
                  variant="outlined"
                  size="small"
                  startIcon={icon}
                  sx={{
                     m: 0.5,
                     flexShrink: 0,
                     ...(initialColor && {
                        color: socialColor || '#fff',
                        borderColor: socialColor || '#fff',
                        '&:hover': {
                           borderColor: socialColor || '#fff',
                           bgcolor: alpha(socialColor || '#fff', 0.08)
                        }
                     }),
                     ...sx
                  }}
                  {...other}
               >
                  {id}
               </Button>
            );
         })}
      </Stack>
   );
};

export default SocialsButton;
