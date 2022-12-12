import { createAsyncThunk } from '@reduxjs/toolkit';
import { categoriesAPIService } from '../../services/categoriesAPIService';
import { CategoryModel } from '../../models/categories/CategoryModel';

export const getCategoriesThunkAction = createAsyncThunk(
    'catalog/getCategoriesThunkAction',
     async () => {
        const categories = await categoriesAPIService.GetCategories();
        return categories.data as CategoryModel [];
     }
)