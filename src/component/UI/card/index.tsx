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
   Divider,
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
   divider?: boolean;
}

const Card: FC<ICard> = ({ actionProps, cardProps, contentProps, headerProps, cardMediaProps, divider }) => {
   return (
      <MuiCard {...cardProps}>
         {cardMediaProps && <CardMedia {...cardMediaProps} />}
         {headerProps && <CardHeader {...headerProps} />}
         {contentProps && <CardContent {...contentProps} />}
         {divider && <Divider />}
         {actionProps && <CardActions {...actionProps} />}
      </MuiCard>
   );
};

export default Card;
