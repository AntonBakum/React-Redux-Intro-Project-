import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createCategoryThunkAction } from '../../actions/categories/createCategoryThunkAction';
import { deleteCategoryThunkAction } from '../../actions/categories/deleteCategoryThunkAction';
import { getCategoriesThunkAction } from '../../actions/categories/getCategoriesThunkAction';
import { updateCategoryThunkAction } from '../../actions/categories/updateCategoryThunkAction';
import { CategoryModel } from '../../models/categories/CategoryModel';

export interface State {
  categories: {
    [categoryId: number]: CategoryModel;
  };
  categoryIds: number[];
  status: string;
}

const initialState: State = {
  categories: {},
  categoryIds: [],
  status: 'pending',
};

export const categoriesSlice = createSlice({
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
        getCategoriesThunkAction.fulfilled,
        (state, action: PayloadAction<CategoryModel[]>) => {
          state.categoryIds = action.payload.map((category) => category.id);
          action.payload.forEach((category) => {
            state.categories[category.id] = category;
            state.status = 'fulfilled';
          });
        },
      )
      .addCase(getCategoriesThunkAction.rejected, (state) => {
        state.status = 'rejected';
      })
      .addCase(
        createCategoryThunkAction.fulfilled,
        (state, action: PayloadAction<CategoryModel>) => {
          const category = action.payload;
          state.categories[category.id] = category;
          state.categoryIds.push(category.id);
        },
      )
      .addCase(createCategoryThunkAction.rejected, (state) => {
        state.status = 'rejected';
      })
      .addCase(
        deleteCategoryThunkAction.fulfilled,
        (state, action: PayloadAction<number>) => {
          const categoryId = action.payload;
          delete state.categories[categoryId];
          state.categoryIds = state.categoryIds.filter(
            (id) => id !== categoryId,
          );
        },
      )
      .addCase(deleteCategoryThunkAction.rejected, (state) => {
        state.status = 'rejected';
      })
      .addCase(
        updateCategoryThunkAction.fulfilled,
        (state, action: PayloadAction<CategoryModel>) => {
          const category = action.payload;
          Object.assign(state.categories[category.id], category);
        },
      )
      .addCase(updateCategoryThunkAction.rejected, (state) => {
        state.status = 'rejected';
      });
  },
});
export const { changeStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
