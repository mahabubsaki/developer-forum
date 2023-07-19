import { isWithinInterval, addHours, subHours } from 'date-fns';

export function postHourSpan(dateToCheck: Date, hour: number) {
    const currentDate = new Date();
    const hourAgo = subHours(currentDate, hour);
    const hourAhead = addHours(currentDate, hour);

    const condition = isWithinInterval(new Date(dateToCheck), { start: hourAgo, end: hourAhead });
    console.log(condition);
    return condition;
}
