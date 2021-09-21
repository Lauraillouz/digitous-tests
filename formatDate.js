const formatDate = (date) => {
  const dateSchema = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;

  if (dateSchema.test(date)) {
    const myDate = date.replace(/-/g, "").split("");
    const year = myDate.slice(0, 4).join("");
    const month = myDate.slice(4, 6).join("");
    const day = myDate.slice(6, 8).join("");
    const newDate = `${day}/${month}/${year}`;
    return newDate;
  }

  return null;
};

module.exports = formatDate;
