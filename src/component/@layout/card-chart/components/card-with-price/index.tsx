import React, { FC } from 'react';

import { CardContent } from '../../../../UI';
import ZeroDollars from '../../../../../assets/icons/ZeroDollars';

import CoinContent from './components/coin-contant/CoinContent';

const CardWithPrice: FC = () => {
   return (
      <CardContent
         animateBackground={<CoinContent />}
         cardBoxItem={<ZeroDollars />}
         description="Eligible students can take <br /> the test with absolutely zero cost to them."
      />
   );
};

export default CardWithPrice;
