import React, { FC, SVGProps } from 'react';

const ExpandLinearIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
   return (
      <svg width="398" height="1675" viewBox="0 0 398 1675" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
         <path
            d="M198.46 2C74.7011 327.114 391.289 137.776 394 319.697C369.278 485.448 -60.1965 401.285 31.3853 594.128C122.967 786.971 366.248 706.537 361.823 875.976C357.838 1028.53 14.4307 1017.92 4.15825 1170.19C-6.58138 1329.37 533.848 1311.11 242.704 1673"
            stroke="url(#paint0_linear_948_14298)"
            strokeWidth="6.18796"
            stroke-dasharray="18.56 18.56"
         />
         <defs>
            <linearGradient
               id="paint0_linear_948_14298"
               x1="206.298"
               y1="3.23618"
               x2="206.298"
               y2="1673"
               gradientUnits="userSpaceOnUse"
            >
               <stop stop-color="#00AAFF" />
               <stop offset="0.328125" stop-color="#FF6163" />
               <stop offset="0.682292" stop-color="#A169F7" />
               <stop offset="1" stop-color="#97CF26" />
            </linearGradient>
         </defs>
      </svg>
   );
};

export default ExpandLinearIcon;
