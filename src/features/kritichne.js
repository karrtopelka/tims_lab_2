import { combineIntervals } from './combineIntervals';

export const kritichne = () => {
  const alpha = 0.975;
  const df = combineIntervals().length - 1 - 2;

  console.log({ df, alpha });

  return 0.352;
};
