const formatTime = (time: number): string => {
  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = time % 1000;

  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');
  const formattedMilliseconds = String(milliseconds)
    .padStart(3, '0')
    .slice(0, -1);
  return `${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;
};

export default formatTime;
