const FormatDate = (date) => {
  const d = new Date(date);
  let months = `${d.getMonth() + 1}`;
  let days = `${d.getDate()}`;
  let years = `${d.getFullYear()}`;
  if (months.length < 2) {
    months = `0${months}`;
  }
  if (days.length < 2) {
    days = `0${days}`;
  }

  return [years, months, days].join("-");
};

export default FormatDate;
