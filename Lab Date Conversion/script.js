const currentDate = new Date();
const currentDateFormat = `Current Date and Time: ${currentDate}`;
console.log(currentDateFormat);

function formatDateMMDDYYYY(date){
  return `Formatted Date (MM/DD/YYYY): ${date.toLocaleDateString()}`;
}

console.log(formatDateMMDDYYYY(currentDate));
console.log(formatDateMMDDYYYY(new Date("Fri Sep 27 2024 16:16:11 GMT+0500 (Pakistan Standard Time)"))) ;

function formatDateLong(date){
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
return `Formatted Date (Month Day, Year): ${month[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}; 

console.log(formatDateLong(currentDate))
console.log(formatDateLong(new Date("Fri Sep 27 2024 16:16:11 GMT+0500 (Pakistan Standard Time)")))
