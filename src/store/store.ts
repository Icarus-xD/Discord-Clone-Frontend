import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';


const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;