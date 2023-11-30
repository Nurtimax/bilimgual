function truncate(inputString: string, maxLength: number): string {
   if (inputString.length <= maxLength) {
      return inputString;
   } else {
      return inputString.slice(0, maxLength) + '...';
   }
}

export default truncate;
