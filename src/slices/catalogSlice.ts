import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductModel } from '../models/ProductModel';
import { getProductsThunkAction } from '../actions/getProductsThunkAction';
import { CategoryModel } from '../models/CategoryModel';
import { getCategoriesAsyncThunk } from '../actions/categories/getCategoriesAsyncThunk';
import { CategoryProductModel } from '../models/CategoryProductModel';


export interface State {
  products: {
    [productId: number]: ProductModel;
  };
  productsIds: number[];

 categories: {
    [categoryId: number]: CategoryModel;
  };
  categoryIds: number[];

  categoryProduct: {
   [productCategoryId: number]: CategoryProductModel;
  };
  categoryProductIds: number []
}

const initialState: State = {
  products: {},
  productsIds: [],
  categories: {},
  categoryIds: [],
  categoryProduct: {},
  categoryProductIds: [],
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
    builder.addCase(
      getCategoriesAsyncThunk.fulfilled,
      (state, action: PayloadAction<CategoryModel[]>) => {
        state.categoryIds = action.payload.map((category) => category.id)
        state.categories = action.payload;
      },
    );
  },
});

export default catalogSlice.reducer;
