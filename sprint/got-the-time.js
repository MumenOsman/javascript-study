function printPrettyDate(date) {
    const dateObject = new Date(date);
    
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    const dayName = weekdays[dateObject.getUTCDay()];
    const monthName = months[dateObject.getUTCMonth()];
    const dayOfMonth = dateObject.getUTCDate();
    const year = dateObject.getUTCFullYear();

    const hours24 = dateObject.getUTCHours();
    const hours12 = String(hours24 % 12 || 12).padStart(2, '0');
    const minutes = String(dateObject.getUTCMinutes()).padStart(2, '0');
    const seconds = String(dateObject.getUTCSeconds()).padStart(2, '0');
    const ampm = hours24 >= 12 ? "PM" : "AM";

    console.log(`Today is ${dayName}, ${monthName} ${dayOfMonth}, ${year}, and the time is ${hours12}:${minutes}:${seconds} ${ampm}.`);
}

printPrettyDate("Sun Oct 20 2052 20:33:50 GMT+0000 (Coordinated Universal Time)");