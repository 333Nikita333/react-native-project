const months = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
];

const useCurrentData = date => {
  const DATE = new Date(date);
  const day = DATE.getDate().toString().padStart(2, '0');
  const month = months[DATE.getMonth()];
  const year = DATE.getFullYear();
  const hour = DATE.getHours().toString().padStart(2, '0');
  const minute = DATE.getMinutes().toString().padStart(2, '0');

  return `${day} ${month}, ${year} | ${hour}:${minute}`;
};

export default useCurrentData;
