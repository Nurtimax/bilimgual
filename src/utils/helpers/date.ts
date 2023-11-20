import { toast } from 'react-toastify';
import { AxiosError } from 'axios';

import axiosInctanse from './axiosInstance';

export interface UsersChartData {
   [day: string]: string[];
}

export const getFormattedDate = (timestamp: number): string => {
   const date = new Date(timestamp * 1000); // Convert seconds to milliseconds

   const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };

   return date.toLocaleString('en-US', options); // Adjust the format as needed
};

export const putUsersClickRequest = async (email: string) => {
   try {
      const year = new Date().getFullYear();
      const month = new Date().getMonth();
      const day = new Date().getDate();

      const url = `/usersChart/${year}/${month}.json`;

      const usersChartResponse = await axiosInctanse.get(url);

      const usersChartData = usersChartResponse.data;

      const newUsersChartData: UsersChartData = usersChartData
         ? {
              [day]: [...(usersChartData?.[day] ?? []), email]
           }
         : {
              [day]: [email]
           };

      await axiosInctanse.put(url, newUsersChartData);
   } catch (error) {
      if (error instanceof Error) {
         toast.error(error.message);
      }
      if (error instanceof AxiosError) {
         toast.error(error.message);
      }
   }
};
