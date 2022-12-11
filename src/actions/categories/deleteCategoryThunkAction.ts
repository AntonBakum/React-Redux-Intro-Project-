import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CategoryModel } from '../../models/CategoryModel';




export const deleteCategoryAsyncThunk = createAsyncThunk(
    "catalog/deleteCategoryAsyncThunk",
    async(id: number) => {
        const response = await axios.delete(`${process.env.REACT_APP_API_URL}/api/categories/${id}`)
        return id as number;
    }

)