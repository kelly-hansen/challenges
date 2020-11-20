function growingPlant(upSpeed, downSpeed, desiredHeight) {
  var height = 0;
  var days = 0;
  while (height < desiredHeight) {
    days++;
    height += upSpeed;
    if (height >= desiredHeight) {
      return days;
    }
    height -= downSpeed;
  }
}
