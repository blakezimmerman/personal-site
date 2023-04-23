export const formatDate = (date: Date) => {
  return date.toLocaleDateString("en-us", {
    timeZone: "UTC",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
