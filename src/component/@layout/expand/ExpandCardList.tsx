import React, { ReactNode } from 'react';
import { SxProps } from '@mui/material';

import EarthWithPlaneExpand from '../../../assets/icons/EarthWithPlaneExpand';
import LayoutExpandBuiltIcon from '../../../assets/icons/LayoutExpandBuiltIcon';
import LayoutExpandSecurityIcon from '../../../assets/icons/LayoutExpandSecurityIcon';
import LayoutExpandDashboardIcon from '../../../assets/icons/LayoutExpandDashboardIcon';
import LayoutExpandDesignIcon from '../../../assets/icons/LayoutExpandDesignIcon';

import ExpandCardItem from './ExpandCardItem';

export interface ExpandCardType {
   id: number;
   title: string;
   description: string;
   icon: ReactNode;
   style: SxProps;
}

const array: ExpandCardType[] = [
   {
      id: 1,
      title: 'Expand your applicant pool',
      description:
         'Tap into a diverse pool of candidates from 210+ countries and territories of origin, who have taken the Bilingual English Test because of its radical accessibility.',
      icon: <EarthWithPlaneExpand />,
      style: { gridTemplateColumns: '0.8fr 1fr 0.8fr', placeItems: 'center' }
   },
   {
      id: 2,
      title: 'Built on the latest assessment   sciencee',
      description:
         'The Duolingo English Test is a computer adaptive test backed by rigorous research, with results that are highly correlated with other major assessments such as the TOEFL and the IELTS.',
      icon: <LayoutExpandBuiltIcon />,
      style: { gridTemplateColumns: '1fr 1fr 1fr', placeItems: 'flex-start' }
   },
   {
      id: 3,
      title: 'Innovative test security',
      description:
         'Industry-leading security protocols, individual test proctoring, and computer adaptive technology help prevent fraud and cheating and ensure results you can trust.',
      icon: <LayoutExpandSecurityIcon />,
      style: { gridTemplateColumns: '1fr 1.2fr 0.8fr', placeItems: 'flex-end' }
   },
   {
      id: 4,
      title: 'Convenient results dashboard',
      description:
         'Access candidates’ certificates, video interviews, and writing samples through a free and secure dashboard. Quickly and easily view applicant data with filtering tools.',
      icon: <LayoutExpandDashboardIcon />,
      style: { gridTemplateColumns: '1fr 1fr 1fr', placeItems: 'flex-start' }
   },
   {
      id: 5,
      title: 'Secure Design',
      description:
         'Adaptive test engine dynamically administers test questions from a database of hundreds of thousands of items. Someone would have to take the test more than 1,000 times to see a question repeated.',
      icon: <LayoutExpandDesignIcon />,
      style: { gridTemplateColumns: '1fr 1fr 1fr', placeItems: 'flex-end' }
   }
];

const ExpandCardList = () => {
   return (
      <>
         {array.map((item) => (
            <ExpandCardItem key={item.id} {...item} />
         ))}
      </>
   );
};

export default ExpandCardList;
