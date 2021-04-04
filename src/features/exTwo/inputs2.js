import { createSlice } from '@reduxjs/toolkit';
import { empirichneTwo } from './empirichneTwo';
import { kritichneTwo } from './kritichneTwo';
import { nSumTwo } from './nSum';

export const inputsTwoSlice = createSlice({
  name: 'inputsTwo',
  initialState: {
    nSum: nSumTwo(),
    empirichneTwo: empirichneTwo(),
    kritichneTwo: kritichneTwo(),
  },
  reducers: {},
});

export const selectNSumTwo = (state) => state.inputsTwo.nSum;
export const selectEmpirichneTwo = (state) => state.inputsTwo.empirichneTwo;
export const selectKritichneTwo = (state) => state.inputsTwo.kritichneTwo;

export default inputsTwoSlice.reducer;
