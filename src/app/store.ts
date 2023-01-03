import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import sidebarReducer from '../slices/sidebarSlice';
import modalWindowReducer from '../slices/modalWindowSlice'
import categoriesReducer from '../slices/catalog/categoriesSlice'
import productsReducer from '../slices/catalog/productsSlice'


export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    modalWindow: modalWindowReducer,
    categories: categoriesReducer,
    products: productsReducer,
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
