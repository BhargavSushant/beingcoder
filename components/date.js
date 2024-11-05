// components/date.js
/**
 * Imports:
parseISO and format are functions from the date-fns library, which help parse and format dates.
Component Function:
The Date component receives a prop called dateString, which is the date in ISO format (e.g., '2023-10-20').
It parses the date string into a JavaScript Date object.
Formats the date into a human-readable string (e.g., 'October 20, 2023').
Renders a <time> HTML element with the formatted date.
 */
import { parseISO, format } from "date-fns";

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}
