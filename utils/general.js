export const localiseDate = (date) => {
    if (!date) return
  let originalDate = new Date(date);
  let options = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };
  const dateFormatter = new Intl.DateTimeFormat("de", options);
  return dateFormatter.format(originalDate);
};
