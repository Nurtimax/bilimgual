export const getFormattedDate = (timestamp: number): string => {
   const date = new Date(timestamp * 1000); // Convert seconds to milliseconds

   const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };

   return date.toLocaleString('en-US', options); // Adjust the format as needed
};
