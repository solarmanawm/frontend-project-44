export default (a, b) => {
  let n1 = a;
  let n2 = b;

  while (n1 !== 0 && n2 !== 0) {
    if (n1 > n2) {
      n1 %= n2;
    } else {
      n2 %= n1;
    }
  }

  return n1 + n2;
};
