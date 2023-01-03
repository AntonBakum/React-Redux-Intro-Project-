import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getProductsThunkAction } from '../../actions/getProductsThunkAction';
import { ProductModel } from '../../models/ProductModel';

export interface State {
  products: {
    [productId: number]: ProductModel;
  };
  productsIds: number[];
  status: string;
}

const initialState: State = {
  products: {},
  productsIds: [],
  status: 'pending',
};

export const productsSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    changeStatus(state, action) {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        getProductsThunkAction.fulfilled,
        (state, action: PayloadAction<ProductModel[]>) => {
          state.productsIds = action.payload.map((product) => product.id);
          action.payload.forEach((product) => {
            state.products[product.id] = product;
          });
          state.status = 'fulfilled';
        },
      )
      .addCase(getProductsThunkAction.rejected, (state) => {
        state.status = 'rejected';
      });
  },
});
export const { changeStatus } = productsSlice.actions;
export default productsSlice.reducer;
