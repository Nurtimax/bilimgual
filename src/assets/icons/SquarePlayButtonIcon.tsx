import React, { FC, SVGProps } from 'react';

const SquarePlayButtonIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
   return (
      <svg {...props} width="46" height="42" viewBox="0 0 46 42" fill="none" xmlns="http://www.w3.org/2000/svg">
         <rect width="46" height="42" rx="8" fill="#3A10E5" />
         <path
            d="M19 14.5L27 21L19 27.5V14.5Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
      </svg>
   );
};

export default SquarePlayButtonIcon;
