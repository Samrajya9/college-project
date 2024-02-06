// File: dateUtils.js
function convertToYearMonthDay(dateString) {
    const originalDate = new Date(dateString);
  
    // Check if the date is valid
    if (!isNaN(originalDate.getTime())) {
      const formattedYear = originalDate.getFullYear();
      const formattedMonth = (originalDate.getMonth() + 1).toString().padStart(2, '0');
      const formattedDay = originalDate.getDate().toString().padStart(2, '0');
      return `${formattedYear}-${formattedMonth}-${formattedDay}`;
    }
  
    // Try parsing with additional formats
    const formats = [
      /(\d{1,2})\/(\d{1,2})\/(\d{4})/,   // Check for "dd/mm/yyyy"
      /(\d{4})-(\d{2})-(\d{2})/,         // Check for "yyyy-mm-dd"
      /(\d{4})\.(\d{2})\.(\d{2})/,       // Check for "yyyy.mm.dd"
      /(\d{4}) (\d{2}) (\d{2})/,         // Check for "yyyy mm dd"
      /(\d{2}) (\w{3}) (\d{4})/,         // Check for "dd MMM yyyy"
      /(\w{3}) (\d{2}) (\d{4})/,         // Check for "MMM dd yyyy"
      /(\d{2}) (\w{3,}) (\d{4})/,        // Check for "dd MMMM yyyy"
      /(\w{3,}) (\d{2}) (\d{4})/,        // Check for "MMMM dd yyyy"
      /(\d{4}) (\w{3,}) (\d{1,2})/       // Check for "yyyy MMMM dd"
    ];
  
    for (const format of formats) {
      const match = dateString.match(format);
      
      if (match) {
        const [, ...dateParts] = match.map((part, index) => (index === 2 ? +part : part));
        const [year, month, day] = dateParts;
        const formattedMonth = (isNaN(month) ? parseMonthName(month) : +month).toString().padStart(2, '0');
        const formattedDay = day.toString().padStart(2, '0');
        return `${year}-${formattedMonth}-${formattedDay}`;
      }
    }
  
    return "Invalid date";
  
  }
  
  export { convertToYearMonthDay };
  