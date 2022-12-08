import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CategoryModel } from '../../models/CategoryModel';



const requestUrl = "https://localhost:7284/categories"

export const getCategoriesAsyncThunk = createAsyncThunk(
    'catalog/getCategoriesAsyncThunk',
     async () => {
        const response = await axios.get(requestUrl);
        return response.data as CategoryModel[];
     }
)