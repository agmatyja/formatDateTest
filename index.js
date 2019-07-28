const formatDate = (timeInSeconds) => {
    if (timeInSeconds === 0 || timeInSeconds === undefined) 
        return "0s";
     
    const hour = Math.floor(timeInSeconds / 3600);
    const min = Math.floor((timeInSeconds - 3600 * hour) / 60);
    const sec = timeInSeconds - (hour * 3600) - (min * 60);

    return (
        (hour !== 0 ? `${hour}h` : "") + 
        (min !== 0 ? ` ${min}m` : "") + 
        (sec !== 0 ? ` ${sec}s` : "")
    ).trim();
}

module.exports = formatDate;