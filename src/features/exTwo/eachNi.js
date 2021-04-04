import { DATA } from '../dataTableEx2';

export const eachNi = () => {
  let isOk = true;
  for (let i = 1; i < Object.values(DATA[0]).length; i++) {
    if (DATA[0][`m${i}`] <= 5) {
      isOk = false;
      break;
    }
  }

  return isOk ? 'Так' : 'Ні';
};
