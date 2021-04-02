import { findA, findSigma } from './findAandSigmaEx1';
import { laplas } from './laplas';
import { columnsExerciseOne } from './dataTableEx1';

const a = findA();
const sigma = findSigma();

const Fi = (t) => {
  return laplas[t];
};

const t = (x) => {
  const rez = parseFloat(((x - a) / sigma).toFixed(2));
  return rez < 0
    ? {
        minus: true,
        value: Fi(rez * -1),
      }
    : {
        minus: false,
        value: Fi(rez),
      };
};

export const findTI = () => {
  const results = [];
  for (let i = 1; i < 11; i++) {
    const [aa, bb] = columnsExerciseOne[i].header.split('-');

    const a = parseInt(aa);
    const b = parseInt(bb);

    const t1 = t(a).minus ? t(a).value * -1 : t(a).value;
    const t2 = t(b).minus ? t(b).value * -1 : t(b).value;

    if (i === 1) {
      results.push(parseFloat((t2 + 0.5).toFixed(5)));
    } else if (i === 10) {
      results.push(parseFloat((0.5 - t1).toFixed(5)));
    } else {
      results.push(parseFloat((t2 - t1).toFixed(5)));
    }
  }

  return results;
};
