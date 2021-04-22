import { configureStore } from '@reduxjs/toolkit';

import startReducer from '../features/startSlice';
import endReducer from '../features/endSlice';
import searchReducer from '../features/searchSlice';

export default configureStore({
  reducer: {
    start: startReducer,
    end: endReducer,
    search: searchReducer,
  },
});
