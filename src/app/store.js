import { configureStore } from '@reduxjs/toolkit';

import startReducer from '../features/startSlice';
import endReducer from '../features/endSlice';

export default configureStore({
  reducer: {
    start: startReducer,
    end: endReducer,
  },
});
