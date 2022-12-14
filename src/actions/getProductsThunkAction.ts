import { createAsyncThunk } from '@reduxjs/toolkit';
import { ProductModel } from '../models/ProductModel';
import { ProductsAPIService } from '../services';

export const getProductsThunkAction = createAsyncThunk(
  'catalog/getProductsThunkAction',
  async () => {
    const products = await ProductsAPIService.getProducts();
    return products.data as ProductModel[];
  },
);
