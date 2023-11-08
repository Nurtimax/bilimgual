import React, { FC, SVGProps } from 'react';

const GrayPlayIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
   return (
      <svg {...props} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
         <g clipPath="url(#clip0_210_8805)">
            <path
               d="M11 20.1667C16.0627 20.1667 20.1667 16.0627 20.1667 11C20.1667 5.93743 16.0627 1.83337 11 1.83337C5.93743 1.83337 1.83337 5.93743 1.83337 11C1.83337 16.0627 5.93743 20.1667 11 20.1667Z"
               stroke="#91969E"
               strokeWidth="2"
               strokeLinecap="round"
               strokeLinejoin="round"
            />
            <path
               d="M9.16663 7.33337L14.6666 11L9.16663 14.6667V7.33337Z"
               stroke="#91969E"
               strokeWidth="2"
               strokeLinecap="round"
               strokeLinejoin="round"
            />
         </g>
         <defs>
            <clipPath id="clip0_210_8805">
               <rect width="22" height="22" fill="white" />
            </clipPath>
         </defs>
      </svg>
   );
};

export default GrayPlayIcon;
