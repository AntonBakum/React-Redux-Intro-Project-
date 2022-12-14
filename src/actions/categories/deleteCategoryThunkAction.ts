import { createAsyncThunk } from '@reduxjs/toolkit';
import { CategoriesAPIService } from '../../services/categoriesAPIService';


export const deleteCategoryThunkAction = createAsyncThunk(
    "catalog/deleteCategoryThunkAction",
    async(id: number) => {
        const response = await CategoriesAPIService.deleteCategory(id);
        return id;
    }

)