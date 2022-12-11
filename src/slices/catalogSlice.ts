import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductModel } from '../models/ProductModel';
import { getProductsThunkAction } from '../actions/getProductsThunkAction';
import { CategoryModel } from '../models/CategoryModel';
import { getCategoriesAsyncThunk } from '../actions/categories/getCategoriesAsyncThunk';
import { CategoryProductModel } from '../models/CategoryProductModel';
import { createCategoryAsyncThunk } from '../actions/categories/createCategoryAsyncThunk';
import { deleteCategoryAsyncThunk } from '../actions/categories/deleteCategoryThunkAction';

export interface State {
  products: {
    [productId: number]: ProductModel;
  };
  productsIds: number[];

 categories: {
    [categoryId: number]: CategoryModel;
  };
  categoryIds: number [];

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
    )
    .addCase(
      getCategoriesAsyncThunk.fulfilled,
      (state, action: PayloadAction<CategoryModel[]>) => {
        state.categoryIds = action.payload.map((category) => category.id)
        state.categories = action.payload;
      },
    )
    .addCase(
       createCategoryAsyncThunk.fulfilled,
       (state, action: PayloadAction<CategoryModel>) => {  
          const category  = action.payload;     
          state.categories[category.id - 1] = category;
          state.categoryIds.push(category.id);
       },
    )
    .addCase(
      deleteCategoryAsyncThunk.fulfilled,
      (state, action: PayloadAction<number>) => {
         const categoryId = action.payload;
         delete state.categories[categoryId - 1];
         state.categoryIds = state.categoryIds.filter((id) => id !== categoryId);
      }
    )
  },
});

export default catalogSlice.reducer;
