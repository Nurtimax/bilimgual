import { toast } from 'react-toastify';
import { AxiosError } from 'axios';

import { TUsersTimeChartTabValues } from '../../component/@root/root/UserChart';
import { IUsersChartData } from '../../store/slices/admin-users-chart';

import axiosInctanse from './axiosInstance';

export interface UsersChartData {
   [day: string]: string[];
}

interface IObj {
   [key: string]: string[] | IObj;
}

export const getFormattedDate = (timestamp: number): string => {
   const date = new Date(timestamp * 1000); // Convert seconds to milliseconds

   const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };

   return date.toLocaleString('en-US', options); // Adjust the format as needed
};

export const putUsersClickRequest = async (email: string) => {
   try {
      const year = new Date().getFullYear();
      const month = new Date().getMonth() + 1;
      const day = new Date().getDate();

      const url = `/usersChart/${year}/${month}.json`;

      const usersChartResponse = await axiosInctanse.get(url);

      const usersChartData = usersChartResponse.data;

      const newUsersChartData: UsersChartData = usersChartData
         ? {
              ...usersChartData,
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

export const customUrls = (param: TUsersTimeChartTabValues): string => {
   const year = new Date().getFullYear();
   const month = new Date().getMonth() + 1;
   const day = new Date().getDate();

   const lastMonth = month - 1 > 0 ? `${year}/${month - 1}` : `${year - 1}/${11 - 1}`;

   switch (param) {
      case '2_week':
         return `/usersChart/${year}/${month}.json`;

      case 'week':
         return `/usersChart/${year}/${month}.json`;

      case 'month':
         return `/usersChart/${year}/${month}.json`;

      case 'last_month':
         return `/usersChart/${lastMonth}.json`;

      case 'quarter':
         return `/usersChart/${year}.json`;

      case 'year':
         return `/usersChart/${year}.json`;

      default:
         return `/usersChart/${year}/${month}/${day}.json`;
   }
};

export const flattenNested = (obj: IObj): string[] => {
   const result = Object.values(obj).reduce<string[]>((acc: string[], value: string[] | IObj) => {
      if (Array.isArray(value)) {
         // If value is an array, you might need recursion
         acc.push(...value);
      } else {
         // If value is an object (IObj), apply recursion
         acc.push(...flattenNested(value));
      }

      return acc;
   }, []);

   return Array.isArray(result) ? result : [];
};

export const getWeeksDayWithArray = (week: number[], data: IUsersChartData | null): string[] | [] => {
   if (Array.isArray(week)) {
      const result: string[] = week.reduce((acc: string[], day: number) => {
         if (data) {
            const currentData: string[] = (data[day] as unknown as string[]) || [];

            return [...acc, ...currentData];
         }

         return acc;
      }, []);

      return result;
   }
   return [];
};

export const getWeekDays = () => {
   const days = [];
   const currentDate = new Date();

   currentDate.setDate(currentDate.getDate() - ((currentDate.getDay() + 6) % 7));

   for (let i = 0; i < 7; i++) {
      const day = new Date(currentDate);
      day.setDate(currentDate.getDate() + i);
      const weekDay = day.getDate();

      if (weekDay <= new Date().getDate()) {
         days.push(weekDay);
      }
   }

   return days;
};

export const getWeekInfo = () => {
   const currentDate = new Date();
   const currentDayOfWeek = currentDate.getDay(); // 0 (Sunday) to 6 (Saturday)

   const daysSinceMonday = currentDayOfWeek === 0 ? 6 : currentDayOfWeek - 1;

   const startOfCurrentWeek = new Date(currentDate);
   startOfCurrentWeek.setDate(currentDate.getDate() - daysSinceMonday);
   startOfCurrentWeek.setHours(0, 0, 0, 0);

   const startOfPreviousWeek = new Date(startOfCurrentWeek);
   startOfPreviousWeek.setDate(startOfCurrentWeek.getDate() - 7);

   const weekDays = [];

   for (let i = 0; i < 14; i++) {
      const day = new Date(startOfPreviousWeek);
      day.setDate(startOfPreviousWeek.getDate() + i);

      const weekDay = day.getDate();

      if (weekDay <= new Date().getDate()) {
         weekDays.push(weekDay);
      }
   }

   return weekDays;
};

export const getLastThreeMonths = () => {
   const currentDate = new Date();
   const currentMonth = currentDate.getMonth() + 1; // Adjusting to 1-indexed months
   const lastThreeMonths = [];

   for (let i = 0; i < 3; i++) {
      const month = (currentMonth - i + 12) % 12; // Handling wrap-around for the previous year
      lastThreeMonths.push(month || 12); // If month is 0 (January), use 12 instead
   }

   return lastThreeMonths;
};

export const customData = (param: TUsersTimeChartTabValues, data: IUsersChartData | null): string[] => {
   if (param === '2_week') {
      const twoWeekDays = getWeekInfo();

      const result: string[] | [] = getWeeksDayWithArray(twoWeekDays, data);

      return result;
   }

   if (param === 'week') {
      const weeks = getWeekDays();

      const result: string[] = getWeeksDayWithArray(weeks, data);

      return result;
   }

   if (param === 'month') {
      return flattenNested(data || {});
   }

   if (param === 'last_month') {
      return flattenNested(data || {});
   }

   if (param === 'quarter') {
      const months = getLastThreeMonths();

      const quarter = months.reduce<string[]>((acc: string[], curr: number) => {
         const month = data?.[curr] || [];

         const state = flattenNested((month as IObj) || {});

         return [...acc, ...state];
      }, []);

      return quarter;
   }

   if (param === 'year') {
      return flattenNested(data || {});
   }

   return (data as unknown as string[]) || [];
};
