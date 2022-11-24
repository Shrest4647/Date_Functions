/*
    pass any date of the week and the day index of the weekday to get that date (0-Sun to 6-Sat)
*/
export function getWeekDate(date_, weekDay_ = 0) {
    let tempDate = Date.parse(date_);
    let date = new Date(tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate());
    let day = date.getDay();
    let ux_s = date.getTime();
    let req_s = ux_s + (weekDay_ - day) * 24 * 60 * 60 * 1000;
    let req_date = new Date(req_s);
    return req_date;
}
