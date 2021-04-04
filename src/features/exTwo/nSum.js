import { columnsExerciseTwoNew, DATA } from '../dataTableEx2';

export const nSumTwo = () => {
  let nnSum = 0;

  for (let i = 1; i < columnsExerciseTwoNew.length; i++) {
    nnSum += Object.values(DATA[0])[i];
  }

  return nnSum;
};
