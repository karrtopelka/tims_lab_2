import { findTI } from './findTI';
import { nSum } from './findAandSigmaEx1';
import { columnsExerciseOne, DATA } from './dataTableEx1';
import _ from 'lodash';

export const combineIntervals = () => {
  const pi = findTI();
  const sum = nSum();

  let intervalsOrig = [];

  for (let i = 1; i < columnsExerciseOne.length; i++) {
    const [a, b] = columnsExerciseOne[i].header.split('-');
    intervalsOrig.push([
      parseInt(a),
      parseInt(b),
      Object.values(DATA[0])[i],
      pi[i - 1],
    ]);
  }

  let intervals = intervalsOrig.concat();

  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][3] * sum < 10 || intervals[i][2] < 5) {
      if (intervals[i + 1]) {
        intervals[i + 1][0] = intervals[i][0];
        intervals[i + 1][2] += intervals[i][2];
        intervals[i + 1][3] += intervals[i][3];
        intervals.splice(i, 1);
        i -= 1;
      } else {
        for (let u = intervals.length - 1; u >= 0; u--) {
          if (intervals[u][3] * sum < 10 || intervals[u][2] < 5) {
            intervals[u - 1][1] = intervals[u][1];
            intervals[u - 1][2] += intervals[u][2];
            intervals[u - 1][3] += intervals[u][3];
            intervals.splice(u, 1);
          } else {
            break;
          }
        }
      }
    }
  }

  return _.isEqual(intervals, intervalsOrig) ? [] : intervals;
};
