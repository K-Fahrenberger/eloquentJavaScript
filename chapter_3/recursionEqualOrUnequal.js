function isEqual(number) {
  if (number === 0) {
    return true;
  }
  if (number === 1) {
    return false;
  } else if (number < 0) {
    return isEqual(-number);
  } else {
    return isEqual(number - 2);
  }
}
console.log(isEqual(-10));
