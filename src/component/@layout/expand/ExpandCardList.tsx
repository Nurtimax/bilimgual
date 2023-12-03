import React, { ReactNode } from 'react';
import { SxProps } from '@mui/material';

import EarthWithPlaneExpand from '../../../assets/icons/EarthWithPlaneExpand';

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
      title: '',
      description: '',
      icon: <EarthWithPlaneExpand />,
      style: { gridTemplateColumns: '0.8fr 1fr 0.8fr', placeItems: 'center' }
   },
   {
      id: 2,
      title: '',
      description: '',
      icon: <></>,
      style: { gridTemplateColumns: '1fr 1fr 1fr', placeItems: 'flex-start' }
   },
   {
      id: 3,
      title: '',
      description: '',
      icon: <></>,
      style: { gridTemplateColumns: '1fr 1.2fr 0.8fr', placeItems: 'flex-end' }
   },
   {
      id: 4,
      title: '',
      description: '',
      icon: <></>,
      style: { gridTemplateColumns: '1fr 1fr 1fr', placeItems: 'flex-start' }
   },
   {
      id: 5,
      title: '',
      description: '',
      icon: <></>,
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
