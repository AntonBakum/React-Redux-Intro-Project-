import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CategoryModel } from '../../models/CategoryModel';



export const createCategoryAsyncThunk = createAsyncThunk(
    'catalog/createCategoryAsyncThunk',
     async (category: CategoryModel) => {
         const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/categories`, category)
         return category as CategoryModel;
     }
)