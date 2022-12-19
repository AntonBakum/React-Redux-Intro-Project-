import { createAsyncThunk } from '@reduxjs/toolkit';
import { CategoryModel } from '../../models/categories/CategoryModel';
import { CreateUpdateCategoryModel } from '../../models/categories/CreateCategoryModel';
import { CategoriesAPIService } from '../../services';

export const updateCategoryThunkAction = createAsyncThunk(
    'catalog/updateCategoryThunkAction',
  async ({id, updatedCategory} : {id: number, updatedCategory: CreateUpdateCategoryModel}) => {
    const response = await CategoriesAPIService.updateCategory(id, updatedCategory)
    const category: CategoryModel = {
      id: id,
      name: updatedCategory.name,
      description: updatedCategory.description
    };
    return category;
  },
)