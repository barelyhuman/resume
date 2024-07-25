import { format } from "date-fns";

export function formatDate(date) {
  return format(new Date(date), "MMM yyyy");
}
export function getValueIfDiffFromPrevious(array, index, key) {
  return array[index - 1] && array[index][key] === array[index - 1][key]
    ? ""
    : array[index][key];
}
