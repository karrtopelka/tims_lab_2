import { configureStore } from '@reduxjs/toolkit';
import inputsReducer from '../features/inputs';

export default configureStore({
  reducer: {
    inputs: inputsReducer,
  },
});
