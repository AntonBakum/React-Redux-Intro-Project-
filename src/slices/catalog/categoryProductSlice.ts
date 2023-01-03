import { createSlice } from '@reduxjs/toolkit';
import { CategoryProductModel } from '../../models/CategoryProductModel';

export interface State {
  categoryProduct: {
   [productCategoryId: number]: CategoryProductModel;
  };
  categoryProductIds: number []
}

const initialState: State = {
  categoryProduct: {},
  categoryProductIds: [],
};

export const categoryProductSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    
  },
});

export default categoryProductSlice.reducer;
