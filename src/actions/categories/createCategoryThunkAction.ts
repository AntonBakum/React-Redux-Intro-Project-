import { createAsyncThunk } from '@reduxjs/toolkit';
import { CategoryModel } from '../../models/categories/CategoryModel';
import { CreateUpdateCategoryModel } from '../../models/categories/CreateCategoryModel';
import { CategoriesAPIService } from '../../services';

export const createCategoryThunkAction = createAsyncThunk(
  'catalog/createCategoryThunkAction',
  async (createCategory: CreateUpdateCategoryModel) => {
    const response = await CategoriesAPIService.createCategory(createCategory);
    const categoryId = response.data as number;
    const category: CategoryModel = {
      id: categoryId,
      name: createCategory.name,
      description: createCategory.description,
    };
    return category;
  },
);
