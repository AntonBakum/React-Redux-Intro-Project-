import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ProductModel } from '../models/ProductModel';

const requestUrl =
"https://localhost:7284/products";

export const getProductsThunkAction = createAsyncThunk(
  'catalog/getProductsThunkAction',
  async () => {
    const response = await axios.get(requestUrl);
    return response.data as ProductModel [];
  },
);
