import { formatDistanceToNow, parseISO } from "date-fns";

// Define a type for the time ago component
interface TimeAgoProps {
  timeStamp: string;
}

const TimeAgo = ({ timeStamp }: TimeAgoProps) => {
  let timeAgo = "";
  if (timeStamp) {
    const date = parseISO(timeStamp);
    const timePeriods = formatDistanceToNow(date); // eg. "about 5 minutes" or "about 1 month" or "about 1 year" etc.
    timeAgo = `${timePeriods} ago`; // eg. "about 5 minutes ago" or "about 1 month ago" or "about 1 year ago" etc.
  }
  return (
    <time dateTime={timeStamp} title={timeStamp}>
      &nbsp; <i>{timeAgo}</i>
    </time>
  );
};

export default TimeAgo;
