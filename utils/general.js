import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import "dayjs/locale/de";

dayjs.extend(customParseFormat); // needed for parsing date formats, see: https://mantine.dev/dates/getting-started/

export const localiseDate = (date) => {
  if (!date) return;
  let originalDate = dayjs(date);
  originalDate = originalDate.locale("de"); // set locale to German
  return originalDate.format("DD.MM.YYYY"); // use German date format
};
