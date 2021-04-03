import { combineIntervals } from './combineIntervals';

// sum (i =1 -> r +1 ) (mi - npi)^2 / npi =
export const empirichne = () => {
  const combined = combineIntervals();
  let sum = 0;
  for (let i = 0; i < combined.length; i++) {
    const element = combined[i];
    sum += Math.pow(element[2] - element[4], 2) / element[4];
  }

  return parseFloat(sum.toFixed(3));
};
