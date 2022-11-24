/*
    pass any date and no of days to be added to it
*/
export function addToDate(date_, days_ = 0) {
    let tempDate = Date.parse(date_);
    let date = new Date(tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate());
    let ux_s = date.getTime();
    let req_s = ux_s + days_ * 24 * 60 * 60 * 1000;
    let req_date = new Date(req_s);
    return req_date;
}
