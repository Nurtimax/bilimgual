import React, { FC } from 'react';

import { CardContent } from '../../../UI';
import TwoHundred from '../../../../assets/icons/TwoHundred';

import EarthContent from './components/EarthContent';

const CardWithEarth: FC = () => {
   return (
      <CardContent
         animateBackground={<EarthContent />}
         cardBoxItem={<TwoHundred />}
         description="Students from over 200 <br /> countries and territories have benefitted."
      />
   );
};

export default CardWithEarth;
