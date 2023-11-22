import { IUsersChartData } from '../store/slices/admin-users-chart';

export type DateData = {
   [date: string]: number;
};

export type MonthData = {
   [month: string]: number;
};

export interface InitialStateData {
   data: IUsersChartData;
   loading: boolean;
   error: boolean;
   year: number;
}

export interface Month {
   date: string;
   alpha: number;
   value: number;
}

export interface ICardGraphList {
   id: number | string;
   color: string;
}
