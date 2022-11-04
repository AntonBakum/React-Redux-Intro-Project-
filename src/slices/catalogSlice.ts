import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductModel } from '../models/ProductModel';
import { getProductsThunkAction } from '../actions/getProductsThunkAction';

export interface State {
  products: {
    [productId: number]: ProductModel;
  };
  productsIds: number[];
}

const initialState: State = {
  products: {},
  productsIds: [],
};

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getProductsThunkAction.fulfilled,
      (state, action: PayloadAction<ProductModel[]>) => {
        state.productsIds = action.payload.map((product) => product.id);
        state.products = action.payload;
      },
    );
  },
});

export default catalogSlice.reducer;
