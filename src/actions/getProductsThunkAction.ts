import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ProductModel } from '../models/ProductModel';



export const getProductsThunkAction = createAsyncThunk(
  'catalog/getProductsThunkAction',
  async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/products`);
    return (await response.data) as ProductModel[];
  },
);
