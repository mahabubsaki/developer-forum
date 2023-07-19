import { format } from "date-fns";

export default function formatDate(date: Date) {
    return format(new Date(date), 'MM.dd.yyyy');
};
