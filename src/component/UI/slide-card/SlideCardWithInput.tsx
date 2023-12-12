import React, { FC } from 'react';
import { Input } from '@mui/material';

import UploadImage from '../../@root/banner/UploadImage';
import { ISlidersInitialStateData, actionSliders } from '../../../store/slices/sliders';
import { useAppDispatch } from '../../../store/hooks';
import Card from '../card';

const SlideCardWithInput: FC<ISlidersInitialStateData> = ({ subTitle, title, id, url }) => {
   const dispatch = useAppDispatch();

   const handleChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = (e) => {
      const key = e.target.name;
      const value = e.target.value;

      if (id && key) {
         dispatch(actionSliders.changeArrayValuesWithKey({ id, key, value }));
      }
   };

   return (
      <Card
         cardProps={{
            elevation: 10,
            sx: {
               justifySelf: 'flex-end',
               width: '90%',
               borderRadius: '3.5rem 3.5rem 3.5rem 0',
               p: '3.5rem',
               display: 'grid',
               gridTemplateColumns: '1fr 1fr',
               background: '#212629'
            }
         }}
         headerProps={{
            title: (
               <Input
                  onChange={handleChange}
                  placeholder="Enter your title"
                  value={title}
                  name="title"
                  sx={{ fontSize: 38, color: '#FE9102' }}
                  fullWidth
                  multiline
               />
            ),
            subheader: (
               <Input
                  onChange={handleChange}
                  value={subTitle}
                  name="subTitle"
                  placeholder="Enter your sub title"
                  sx={{ fontSize: 24, pt: 5, color: 'white' }}
                  fullWidth
                  multiline
               />
            )
         }}
         contentProps={{ children: <UploadImage id={id} url={url} subTitle="" title="" /> }}
      />
   );
};

export default SlideCardWithInput;
