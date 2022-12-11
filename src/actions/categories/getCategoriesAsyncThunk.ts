import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CategoryModel } from '../../models/CategoryModel';


export const getCategoriesAsyncThunk = createAsyncThunk(
    'catalog/getCategoriesAsyncThunk',
     async () => {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/categories`);
        return response.data as CategoryModel [];
     }
)