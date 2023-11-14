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
   telegram: <TelegramIcon />,
   instagram: <InstagramIcon />,
   linkedIn: <LinkedInIcon />,
   portfolio: <OpenInNewIcon />,
   youtube: <YouTubeIcon />,
   facebook: <FacebookIcon />
};

export const SOCIAL_ICONS_KEYS = Object.keys(SOCIAL_ICONS);
