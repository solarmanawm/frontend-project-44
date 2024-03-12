export const generateArithmeticProgression = (start, diff, count) => {
    const progression = [];

    for (let i = 0; i < count; i++) {
        progression.push(start + diff * i);
    }

    return progression;
};