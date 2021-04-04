import { columnsExerciseTwoNew, DATA } from '../dataTableEx2';
import { nSumTwo } from './nSum';

export const empirichneTwo = () => {
  const len = columnsExerciseTwoNew.length - 1;
  let sum = 0;
  const npi = parseFloat((nSumTwo() / len).toFixed(2));
  debugger;
  for (let i = 1; i < len; i++) {
    sum += Math.pow(DATA[0][`m${i}`] - npi, 2) / npi;
  }

  return parseFloat(sum.toFixed(3));
};
