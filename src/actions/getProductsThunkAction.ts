import { createAsyncThunk } from '@reduxjs/toolkit';
import { ProductModel } from '../models/ProductModel';
import { productsAPIService } from '../services/productsAPIService';

export const getProductsThunkAction = createAsyncThunk(
  'catalog/getProductsThunkAction',
  async () => {
    const products = await productsAPIService.GetProducts();
    return products.data as ProductModel[];
  },
);
