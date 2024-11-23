let i;
for (let i = 10; i > 0; i--) {
  if (i == 7) {
    continue;
  }
  if (i == 8) {
    console.log("88");
    continue;
  }
  console.log(i);
}
