function convertToYearMonthDay(dateString) {
    const originalDate = new Date(dateString);
  
    // Check if the date is valid
    if (isNaN(originalDate.getTime())) {
      // Try parsing with additional formats
      const alternativeDate = new Date(dateString.replace(/(\d{2})\.(\d{2})\.(\d{4})/, '$3-$2-$1'));
  
      if (isNaN(alternativeDate.getTime())) {
        return "Invalid date";
      }
  
      const formattedYear = alternativeDate.getFullYear();
      const formattedMonth = (alternativeDate.getMonth() + 1).toString().padStart(2, '0');
      const formattedDay = alternativeDate.getDate().toString().padStart(2, '0');
  
      return `${formattedYear}-${formattedMonth}-${formattedDay}`;
    }
  
    const formattedYear = originalDate.getFullYear();
    const formattedMonth = (originalDate.getMonth() + 1).toString().padStart(2, '0');
    const formattedDay = originalDate.getDate().toString().padStart(2, '0');
  
    return `${formattedYear}-${formattedMonth}-${formattedDay}`;
  }
  
module.exports =   convertToYearMonthDay