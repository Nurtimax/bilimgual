import { Grid } from '@mui/material';
import React, { FC } from 'react';
import { useFormik } from 'formik';

import { IVideoCardProps, saveUsefullVideoCardsThunk } from '../../store/slices/usefull';
import { useAppDispatch } from '../../store/hooks';

import AddVideoCard from './AddVideoCard';
import ChangeVideoCard from './ChangeVideoCard';

interface IMainAdminUsefullListProps {
   cards: IVideoCardProps[];
}

const MainAdminUsefullList: FC<IMainAdminUsefullListProps> = ({ cards }) => {
   const dispatch = useAppDispatch();

   const { values, errors, setValues } = useFormik<IVideoCardProps[]>({
      initialValues: cards,
      onSubmit: () => {}
   });

   const handleChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = (e) => {
      const key = e.target.name;
      const value = e.target.value;
      const id = e.target.id;

      setValues((prev) =>
         prev.map((el) => {
            if (el.id === id) {
               const newEl = { ...el, [key]: value };

               return newEl;
            }
            return el;
         })
      );
   };

   const handleChangeVideo = (id: string, value: string) => {
      setValues((prev) =>
         prev.map((el) => {
            if (el.id === id) {
               return { ...el, video: value };
            }
            return el;
         })
      );
   };

   const addNewFieldsVideoCards = async () => {
      await dispatch(
         saveUsefullVideoCardsThunk({ id: '', duration: 0, title: '', video: '', isSaved: false })
      ).unwrap();
   };

   return (
      <Grid container minHeight={350} spacing={8} pt={5}>
         {values.map((el, i) => (
            <Grid item xs={4} key={el.id}>
               <ChangeVideoCard
                  {...el}
                  errors={errors}
                  index={i}
                  handleChange={handleChange}
                  handleChangeVideo={handleChangeVideo}
               />
            </Grid>
         ))}
         <Grid item xs={4} onClick={addNewFieldsVideoCards}>
            <AddVideoCard />
         </Grid>
      </Grid>
   );
};

export default MainAdminUsefullList;
