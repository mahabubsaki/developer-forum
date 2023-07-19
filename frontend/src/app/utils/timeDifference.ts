import { formatDistanceToNow } from "date-fns";

export default function timeDifference(date: Date) {
    const timeDifference = formatDistanceToNow(new Date(date), { addSuffix: true });
    return timeDifference;
}
