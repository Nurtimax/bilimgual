import React, { FC, SVGProps } from 'react';

const Paper: FC<SVGProps<SVGSVGElement>> = (props) => {
   return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="paper-plane" {...props}>
         <g data-name="Paper plane">
            <polygon
               fill="#d3ebe4"
               stroke="#231f20"
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth="15"
               points="484.76 8.5 161.45 339.03 161.3 339.03 9.24 287.81 484.76 8.5"
            ></polygon>
            <polygon
               fill="#d3ebe4"
               stroke="#231f20"
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth="15"
               points="484.76 8.5 492.13 450.56 300.09 385.77 235.03 363.84 484.76 8.5"
            ></polygon>
            <polygon
               fill="#454b80"
               points="484.76 8.5 235.03 363.84 209.06 503.5 161.45 339.17 161.45 339.03 484.76 8.5"
            ></polygon>
            <polygon
               fill="none"
               stroke="#231f20"
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth="15"
               points="484.76 8.5 235.03 363.84 209.06 503.5 161.45 339.17 161.45 339.03 484.76 8.5"
            ></polygon>
            <line
               x1="161.45"
               x2="161.3"
               y1="339.03"
               y2="339.03"
               fill="none"
               stroke="#231f20"
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth="15"
            ></line>
            <polygon fill="#454b80" points="300.09 385.77 209.06 503.5 235.03 363.84 300.09 385.77"></polygon>
            <polygon
               fill="none"
               stroke="#231f20"
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth="15"
               points="235.03 363.84 209.06 503.5 300.09 385.77 235.03 363.84"
            ></polygon>
         </g>
      </svg>
   );
};

export default Paper;
