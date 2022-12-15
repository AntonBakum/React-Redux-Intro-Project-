import { createAsyncThunk } from '@reduxjs/toolkit';
import { CategoryModel } from '../../models/categories/CategoryModel';
import { CategoriesAPIService } from '../../services';

export const getCategoriesThunkAction = createAsyncThunk(
    'catalog/getCategoriesThunkAction',
     async () => {
        const categories = await CategoriesAPIService.getCategories();
        return categories.data as CategoryModel [];
     }
)