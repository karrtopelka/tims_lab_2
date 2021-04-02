import { createSlice } from '@reduxjs/toolkit';
import { combineIntervals } from './combineIntervals';
import { findA, findSigma, nSum } from './findAandSigmaEx1';
import { findTI } from './findTI';

export const inputsSlice = createSlice({
  name: 'inputs',
  initialState: {
    nSum: nSum(),
    a: findA(),
    sigma: findSigma(),
    p: findTI(),
    combined: combineIntervals(),
  },
  reducers: {},
});

export const selectNSum = (state) => state.inputs.nSum;
export const selectA = (state) => state.inputs.a;
export const selectSigma = (state) => state.inputs.sigma;
export const selectP = (state) => state.inputs.p;
export const selectCombined = (state) => state.inputs.combined;

export default inputsSlice.reducer;
