
export function secondsToMinutes(sec: number): [string, number, number] {
  const minutes = Math.floor(sec / 60);
  const seconds = sec % 60;
  const formattedArr = [];
  const connector = "and";

  let minutesText = (minutes === 0)
    ? ''
    : (minutes > 1)
      ? `${minutes} mins`
      : `${minutes} min`;

  let secondsText = (seconds === 0)
    ? ''
    : (seconds > 1)
      ? `${seconds} secs`
      : `${seconds} sec`;

  formattedArr.push(minutesText);

  if (minutes > 0 && seconds > 0) {
    formattedArr.push(connector);
  }

  formattedArr.push(secondsText);

  return [formattedArr.join(" "), minutes, seconds];
}

export const getDate = () => {
  return (new Date()).toLocaleDateString();
};

export const getInitialSleepTime = () => {
  const eightHours = (8 * 60 * 60 * 1000);
  return new Date(Date.now() - eightHours);
};
