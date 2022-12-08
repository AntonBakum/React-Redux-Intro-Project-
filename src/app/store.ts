import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import sidebarReducer from '../slices/sidebarSlice';
import catalogReducer from '../slices/catalogSlice';
import modalWindowSlice from '../slices/modalWindowSlice';

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    catalog: catalogReducer,
    modalWindow: modalWindowSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
