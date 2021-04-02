import { DATA, columnsExerciseOne } from './dataTableEx1';

export const nSum = () => {
  let nnSum = 0;

  for (let i = 1; i < columnsExerciseOne.length; i++) {
    nnSum += Object.values(DATA[0])[i];
  }

  return nnSum;
};

export const findA = () => {
  const a = [];

  for (let i = 1; i < columnsExerciseOne.length; i++) {
    const [aa, b] = columnsExerciseOne[i].header.split('-');
    const dat = Object.values(DATA[0])[i];
    a.push(((parseInt(aa) + parseInt(b)) / 2) * dat);
  }

  return parseFloat((a.reduce((a, b) => a + b, 0) / nSum()).toFixed(2));
};

export const findSigma = () => {
  const a = findA();
  const arr = [];

  for (let i = 1; i < columnsExerciseOne.length; i++) {
    const [aa, b] = columnsExerciseOne[i].header.split('-');
    const dat = Object.values(DATA[0])[i];
    arr.push(dat * Math.pow(a - (parseInt(aa) + parseInt(b)) / 2, 2));
  }
  return parseFloat(
    Math.sqrt(arr.reduce((a, b) => a + b, 0) / nSum()).toFixed(2),
  );
};
