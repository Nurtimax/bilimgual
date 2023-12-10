import React, { FC, ReactNode } from 'react';
import {
   CardActions,
   CardActionsProps,
   CardContent,
   CardContentProps,
   CardHeader,
   CardHeaderProps,
   CardProps,
   Card as MuiCard
} from '@mui/material';

interface ICard {
   cardProps?: CardProps & { component?: 'form' | ReactNode };
   contentProps?: CardContentProps;
   actionProps?: CardActionsProps;
   headerProps?: CardHeaderProps;
}

const Card: FC<ICard> = ({ actionProps, cardProps, contentProps, headerProps }) => {
   return (
      <MuiCard {...cardProps}>
         <CardHeader {...headerProps} />
         <CardContent {...contentProps} />
         <CardActions {...actionProps} />
      </MuiCard>
   );
};

export default Card;
