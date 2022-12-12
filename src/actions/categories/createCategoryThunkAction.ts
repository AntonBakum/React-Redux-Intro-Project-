import { createAsyncThunk } from '@reduxjs/toolkit';
import { CategoryModel } from '../../models/CategoryModel';
import { categoriesAPIService } from '../../services/categoriesAPIService';

export const createCategoryThunkAction = createAsyncThunk(
    'catalog/createCategoryThunkAction',
     async (category: CategoryModel) => {
        const response = await categoriesAPIService.CreateCategory(category)
        return category as CategoryModel;
     }
)