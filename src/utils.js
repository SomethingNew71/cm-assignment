function convertCaloriesToKJ(value) {
  return Math.round(value * 4.184);
}

function calculateDuration(minutesValue) {
  const hours = minutesValue / 60;
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);

  if (rhours > 0) {
    return `${rhours} hour ${rminutes} min`;
  }
  return `${rminutes} min`;
}
export { convertCaloriesToKJ, calculateDuration };
