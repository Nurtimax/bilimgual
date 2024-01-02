import React, { FC, ReactNode } from 'react';
import {
   CardActions,
   CardActionsProps,
   CardContent,
   CardContentProps,
   CardHeader,
   CardHeaderProps,
   CardMedia,
   CardMediaProps,
   CardProps,
   Card as MuiCard,
   PaperTypeMap
} from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

interface ICard {
   cardProps?: CardProps & { component?: 'form' | ReactNode | OverridableComponent<PaperTypeMap<object, 'div'>> };
   contentProps?: CardContentProps;
   actionProps?: CardActionsProps;
   headerProps?: CardHeaderProps;
   cardMediaProps?: CardMediaProps;
}

const Card: FC<ICard> = ({ actionProps, cardProps, contentProps, headerProps, cardMediaProps }) => {
   return (
      <MuiCard {...cardProps}>
         {cardMediaProps && <CardMedia {...cardMediaProps} />}
         {headerProps && <CardHeader {...headerProps} />}
         {contentProps && <CardContent {...contentProps} />}
         {actionProps && <CardActions {...actionProps} />}
      </MuiCard>
   );
};

export default Card;
