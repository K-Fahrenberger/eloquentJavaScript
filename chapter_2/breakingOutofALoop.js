for (let current = 20; ; current = current + 1) {
  if (current % 7 == 0 && current % 8 == 0 && current % 9 == 0) {
    console.log(current);
    break;
  }
}
