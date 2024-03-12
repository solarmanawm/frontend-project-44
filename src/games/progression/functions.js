export default (start, diff, count) => {
  const progression = [];

  for (let i = 0; i < count; i += 1) {
    progression.push(start + diff * i);
  }

  return progression;
};
