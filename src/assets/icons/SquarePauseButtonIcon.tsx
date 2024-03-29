import React, { FC, SVGProps } from 'react';

const SquarePauseButtonIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
   return (
      <svg width="46" height="42" viewBox="0 0 46 42" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
         <rect width="46" height="42" rx="8" fill="#3A10E5" />
         <path
            d="M20.625 14.5H17.375V27.5H20.625V14.5Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
         <path
            d="M28.625 14.5H25.375V27.5H28.625V14.5Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
      </svg>
   );
};

export default SquarePauseButtonIcon;
