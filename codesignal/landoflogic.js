function validTime(time) {
  let hour = parseInt(time.slice(0, 2));
  let min = parseInt(time.slice(3));
  return (hour < 24 && min < 60);
}
