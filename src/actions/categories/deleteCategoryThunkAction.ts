import { createAsyncThunk } from '@reduxjs/toolkit';
import { categoriesAPIService } from '../../services/categoriesAPIService';

export const deleteCategoryThunkAction = createAsyncThunk(
    "catalog/deleteCategoryThunkAction",
    async(id: number) => {
        const response = await categoriesAPIService.DeleteCategory(id);
        return id as number;
    }

)