export const checkArray = <T>(arr: T[]): [] | T[] => {
   if (Array.isArray(arr)) {
      return arr;
   }

   return [];
};
