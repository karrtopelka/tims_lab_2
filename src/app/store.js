import { configureStore } from '@reduxjs/toolkit';
import inputsReducer from '../features/inputs';
import inputsTwoReducer from '../features/exTwo/inputs2';

export default configureStore({
  reducer: {
    inputs: inputsReducer,
    inputsTwo: inputsTwoReducer,
  },
});
