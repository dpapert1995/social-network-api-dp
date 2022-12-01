// Function to add date as either abbreviated or full string
const addDateShort = date => {
    let dateString = date.toString();
    // Determines proper abbreviation for day
    const lastChar = dateString.charAt(dateString.length - 1);
    if (lastChar === '1' && dateString !== '11') {
        dateString = `${dateString}st`;
    } else if (lastChar === '2' && dateString !== '12') {
        dateString = `${dateString}nd`;
    } else if (lastChar === '3' && dateString !== '13') {
        dateString = `${dateString}rd`;
    } else {
        dateString = `${dateString}th`;
    }
    return dateString;
};

// Determines abbreviation for month
module.exports = (
    timestamp,
    { monthLength = 'short', dateSuffix = true } = {}
) => {
    let monthList;
    if (monthLength === 'short') {
        monthList = {
            0: 'Jan', 1: 'Feb', 2: 'Mar', 3: 'Apr', 4: 'May', 5: 'Jun', 6: 'Jul', 7: 'Aug', 8: 'Sep', 9: 'Oct', 10: 'Nov', 11: 'Dec'
        };
    } else {
        monthList = {
            0: 'January', 1: 'February', 2: 'March', 3: 'April', 4: 'May', 5: 'June', 6: 'July', 7: 'August', 8: 'September', 9: 'October', 10: 'November', 11: 'December'
        };
    }

    const dateObject = new Date(timestamp);
    const formattedMonth = monthList[dateObject.getMonth()];
    let dayOfMonth;
    // Determines
    if (dateSuffix) {
        dayOfMonth = addDateShort(dateObject.getDate());
    } else {
        dayOfMonth = dateObject.getDate();
    }
    const year = dateObject.getFullYear();

    // Adjusts hour based on am or pm
    let hour;
    if (dateObject.getHours > 12) {
        hour = Math.floor(dateObject.getHours() / 2);
    } else {
        hour = dateObject.getHours();
    }
    if (hour === 0) {
        hour = 12;
    }
    const minutes = dateObject.getMinutes();

    // Sets to am or pm
    let dayPeriod;
    if (dateObject.getHours() >= 12) {
        dayPeriod = 'pm';
    } else {
        dayPeriod = 'am';
    }
    const formattedTimeStamp = `${formattedMonth} ${dayOfMonth}, ${year} at ${hour}:${minutes} ${dayPeriod}`;
    return formattedTimeStamp;
};