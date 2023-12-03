import React, { FC } from 'react';

import { CardContent } from '../../../../UI';
import TenThousand from '../../../../../assets/icons/TenThousand';

import AirplaneList from './components/AirplaneList';

const CardWithAirplane: FC = () => {
   return (
      <CardContent
         animateBackground={<AirplaneList />}
         description="Over 10,000 fee waivers for <br /> the Bilingual English Test are offered annually."
         cardBoxItem={<TenThousand />}
      />
   );
};

export default CardWithAirplane;
