import { FC, SVGProps } from 'react';

const ArrowDownIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
   return (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
         <path
            d="M12.0644 13.3479L15.7402 9.27454C15.9101 9.08642 16 8.89688 16 8.73933C16 8.43475 15.6778 8.24634 15.1384 8.24634L7.19397 8.24634C6.65524 8.24634 6.33365 8.43451 6.33365 8.73838C6.33365 8.89617 6.42364 9.08268 6.59398 9.27121L10.2697 13.3465C10.5065 13.6086 10.8251 13.7537 11.1673 13.7537C11.5092 13.7538 11.8277 13.6103 12.0644 13.3479Z"
            fill="#4C4859"
         />
      </svg>
   );
};

export default ArrowDownIcon;
