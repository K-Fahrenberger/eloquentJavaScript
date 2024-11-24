function phi(table) {
  return (
    (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt(
      (table[0] + table[1]) *
        (table[2] + table[3]) *
        (table[0] + table[2]) *
        (table[1] + table[3])
    )
  );
}
console.log(phi([42, 0, 6, 9]));
