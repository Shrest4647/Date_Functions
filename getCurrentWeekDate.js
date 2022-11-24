import { getWeekDate } from "./getWeekDate";

export function getCurrentWeekDate(weekDay_ = 0) {
    return getWeekDate(new Date(), weekDay_);
}
