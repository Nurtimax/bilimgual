import dayjs from 'dayjs';
import { ThemeInput } from 'react-activity-calendar';

import { IUsersChartData } from '../../store/slices/admin-users-chart';

interface DayData {
   date: string;
   count: number; // Adjust the type here
   level: 0 | 1 | 2 | 3 | 4;
}

export const dateFormat = (date: Date): string => {
   return dayjs(date).format('YYYY-MM-DD');
};

export const DEFAULT_THEME: ThemeInput = {
   light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
   dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353']
};

export const chartBackground = (value: number): number => {
   if (value > 0 && value <= 10) {
      return 1;
   }
   if (value > 10 && value <= 30) {
      return 2;
   }
   if (value > 30 && value <= 50) {
      return 3;
   }
   if (value > 50 && value <= 70) {
      return 4;
   }

   return 0;
};

export function fillMissingDates(dataArray: IUsersChartData, year: number): DayData[] {
   const endDate = new Date();
   const startDate = new Date();
   startDate.setFullYear(endDate.getFullYear() - 1);
   startDate.setMonth(endDate.getMonth() + 1 <= 11 ? endDate.getMonth() + 1 : 0);
   startDate.setDate(endDate.getDate() + 2);

   const filledData: DayData[] = [];

   const array = Object.keys(dataArray)
      .map((month) => {
         return Object.keys(dataArray[month])
            .map(
               (day) =>
                  ({
                     date: dateFormat(new Date(`${year}.${month}.${day}`)),
                     count: Object.values(dataArray[month][day] || {}).flat().length, // Adjust the type here,
                     level: chartBackground(Object.values(dataArray[month][day] || {}).flat().length)
                  } as DayData)
            )
            .flat();
      })
      .flat();

   for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
      const dateString = dateFormat(date); // Convert to "YYYY-MM-DD" format

      const existingData = array.find((item) => item.date === dateString);

      if (existingData) {
         filledData.push(existingData);
      } else {
         filledData.push({ date: dateString, count: 0, level: 0 });
      }
   }

   return filledData;
}

export const createCalendarGrid = (date: IUsersChartData, year: number): DayData[][] => {
   const arrayWeek: DayData[][] = [[], [], [], [], [], [], []];

   const newDate = fillMissingDates(date, year);

   const array = newDate.reduce((acc, curr, i) => {
      const day = new Date(curr.date).getDay();

      if (i === 0 && day > 1) {
         const dummyArray = [...Array(day - 1)];

         const reversedIndexes = dummyArray.map((_, i) => i + 1).reverse();

         reversedIndexes.forEach((index, i) => {
            const dayBefore = dateFormat(new Date(new Date(curr.date).getTime() - 24 * index * 60 * 60 * 1000));

            acc[i]?.push({ date: dayBefore, count: 0, level: 0 } as DayData);
         });
      }

      acc[day === 0 ? 6 : day - 1]?.push({ ...curr } as DayData);

      return acc;
   }, arrayWeek);

   return array;
};
