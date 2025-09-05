const parseFromIsoToDateString = (dateInIsoFormat) => {
  if (dateInIsoFormat === "current") {
    return "current";
  }
  const date = new Date(dateInIsoFormat);

  const mesAno = date.toLocaleDateString("en-US", {
    month: "2-digit",
    year: "numeric"
  })

  return mesAno;
}

export { parseFromIsoToDateString };