import React, { ReactNode } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export interface ISocialIcons {
   github: ReactNode;
   telegram: ReactNode;
   instagram: ReactNode;
   linkedIn: ReactNode;
   portfolio: ReactNode;
   youtube: ReactNode;
   facebook: ReactNode;
}

export const SOCIAL_ICONS: ISocialIcons = {
   github: <GitHubIcon sx={{ color: '#000' }} />,
   telegram: <TelegramIcon sx={{ color: '#28a5e1' }} />,
   instagram: <InstagramIcon sx={{ color: '#bd3593' }} />,
   linkedIn: <LinkedInIcon sx={{ color: '#0077B5' }} />,
   portfolio: <OpenInNewIcon sx={{ color: '#000' }} />,
   youtube: <YouTubeIcon sx={{ color: '#FF0000' }} />,
   facebook: <FacebookIcon sx={{ color: '#0165E1' }} />
};

export const SOCIAL_ICONS_KEYS = Object.keys(SOCIAL_ICONS);

export const socialHoverColors = (key: keyof ISocialIcons) => {
   const colors = {
      github: '#000',
      telegram: '#28a5e1',
      instagram: '#bd3593',
      linkedIn: '#0077B5',
      portfolio: '#000',
      youtube: '#FF0000',
      facebook: '#0165E1'
   };

   return colors[key];
};
