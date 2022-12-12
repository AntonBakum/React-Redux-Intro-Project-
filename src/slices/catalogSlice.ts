import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductModel } from '../models/ProductModel';
import { getProductsThunkAction } from '../actions/getProductsThunkAction';
import { CategoryModel } from '../models/categories/CategoryModel';
import { CategoryProductModel } from '../models/CategoryProductModel';
import { deleteCategoryThunkAction } from '../actions/categories/deleteCategoryThunkAction';
import { getCategoriesThunkAction } from '../actions/categories/getCategoriesThunkAction';
import { createCategoryThunkAction } from '../actions/categories/createCategoryThunkAction';

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
        action.payload.forEach((product) => {
          state.products[product.id] = product;
        })
      },
    )
    .addCase(
      getCategoriesThunkAction.fulfilled,
      (state, action: PayloadAction<CategoryModel[]>) => {
        state.categoryIds = action.payload.map((category) => category.id)
        action.payload.forEach((category) => {
          state.categories[category.id] = category;
        })
      },
    )
    .addCase(
       createCategoryThunkAction.fulfilled,
       (state, action: PayloadAction<CategoryModel>) => {  
           const category = action.payload;
           state.categories[category.id] = category;
           state.categoryIds.push(category.id);
       },
    )
    .addCase(
      deleteCategoryThunkAction.fulfilled,
      (state, action: PayloadAction<number>) => {
         const categoryId = action.payload;
         delete state.categories[categoryId];
         state.categoryIds = state.categoryIds.filter((id) => id !== categoryId);
      }
    )
  },
});

export default catalogSlice.reducer;
