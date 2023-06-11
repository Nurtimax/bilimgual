import React, { FC } from 'react';

interface ITemProps {
   [key: string]: unknown;
}

const Item: FC<ITemProps> = () => {
   return <div>Item</div>;
};

export default Item;
