function formatDate(isoTimestamp) {
    const date = new Date(isoTimestamp);

    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();

    const formattedDay = getFormattedDay(day);

    return `${formattedDay} ${month} ${year}`;
}

function getFormattedDay(day) {
    if (day > 3 && day < 21) return `${day}th`;
    switch (day % 10) {
        case 1: return `${day}st`;
        case 2: return `${day}nd`;
        case 3: return `${day}rd`;
        default: return `${day}th`;
    }
}
export default formatDate