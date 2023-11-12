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

export default function stageColorSetter(stageName, index) {
  const colors = [
    "#3f81d6",
    "#5e77c6",
    "#746fbb",
    "#8d66ae",
    "#a75da1",
    "#c15493",
  ];
  const offerColor = "#e44981";
  const pausedColor = "#868e96";
  const rejectionColor = "#495866";
  const noReplyColour = "#67717c";

  switch (stageName) {
    case "Offer!":
      return offerColor;
    case "Rejection":
      return rejectionColor;
    case "Paused":
      return pausedColor;
    case "No reply":
      return noReplyColour;
    default:
      return colors[index % colors.length];
  }
}
