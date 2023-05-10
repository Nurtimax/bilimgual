import { FC, SVGProps } from 'react';

const GrayCrossIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
   return (
      <svg {...props} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
         <g clipPath="url(#clip0_210_8789)">
            <path
               d="M11 20.1667C16.0627 20.1667 20.1667 16.0627 20.1667 11C20.1667 5.93743 16.0627 1.83337 11 1.83337C5.93743 1.83337 1.83337 5.93743 1.83337 11C1.83337 16.0627 5.93743 20.1667 11 20.1667Z"
               stroke="#91969E"
               stroke-width="2"
               stroke-linecap="round"
               stroke-linejoin="round"
            />
            <path
               d="M13.75 8.25L8.25 13.75"
               stroke="#91969E"
               stroke-width="2"
               stroke-linecap="round"
               stroke-linejoin="round"
            />
            <path
               d="M8.25 8.25L13.75 13.75"
               stroke="#91969E"
               stroke-width="2"
               stroke-linecap="round"
               stroke-linejoin="round"
            />
         </g>
         <defs>
            <clipPath id="clip0_210_8789">
               <rect width="22" height="22" fill="white" />
            </clipPath>
         </defs>
      </svg>
   );
};

export default GrayCrossIcon;
