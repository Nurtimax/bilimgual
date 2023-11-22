import dayjs from 'dayjs';

import { IUsersChartData } from '../../store/slices/admin-users-chart';

interface DayData {
   date: string;
   value: string[]; // Adjust the type here
   alpha: string;
}

export const dateFormat = (date: Date): string => {
   return dayjs(date).format('YYYY-MM-DD');
};

export function fillMissingDates(dataArray: IUsersChartData, year: number): DayData[] {
   const endDate = new Date();
   const startDate = new Date(`${endDate.getFullYear() - 1}-${endDate.getMonth()}-${endDate.getDate() - 1}`);
   const filledData: DayData[] = [];

   const array = Object.keys(dataArray)
      .map((month) => {
         return Object.keys(dataArray[month])
            .map((day) => ({
               date: dateFormat(new Date(`${year}.${month}.${day}`)),
               value: Object.values(dataArray[month][day]).flat(), // Adjust the type here
               alpha: `${day},${month},`
            }))
            .flat();
      })
      .flat();

   for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
      const dateString = date.toISOString().split('T')[0]; // Convert to "YYYY-MM-DD" format

      const existingData = array.find((item) => item.date === dateString);
      if (existingData) {
         filledData.push(existingData);
      } else {
         filledData.push({ date: dateString, value: [], alpha: '0' });
      }
   }

   return filledData;
}

export const createCalendarGrid = (date: IUsersChartData, year: number): DayData[][] => {
   const arrayWeek: DayData[][] = [[], [], [], [], [], [], []];

   const newDate = fillMissingDates(date, year);

   const array = newDate.reduce((acc, curr, i) => {
      const day = new Date(curr.date).getDay();
      const alpha = `0.${curr.value.length}`;

      if (i === 0 && day > 1) {
         const dummyArray = [...Array(day - 1)];

         const reversedIndexes = dummyArray.map((_, i) => i + 1).reverse();

         reversedIndexes.forEach((index, i) => {
            const dayBefore = dateFormat(new Date(new Date(curr.date).getTime() - 24 * index * 60 * 60 * 1000));

            acc[i]?.push({ date: dayBefore, value: [], alpha } as DayData);
         });
      }

      acc[day === 0 ? 6 : day - 1]?.push({ ...curr, alpha } as DayData);

      return acc;
   }, arrayWeek);

   return array;
};

export const chartBackground = (value: number, alpha: string) => {
   // Ensure value is a number between 0 and maxValue
   const numericValue = parseFloat(String(value));
   if (isNaN(numericValue) || numericValue <= 0) {
      return { background: '#ccc' }; // Default color
   }

   return {
      background: `rgba(2, 170, 86, ${alpha})`
   };
};
