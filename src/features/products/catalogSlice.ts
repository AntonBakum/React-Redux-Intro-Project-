import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';
import { ProductModel } from '../../models/ProductModel';
import { getProducts } from './CatalogApiService';

export interface State {
  products: {
    [productId: number]: ProductModel;
  };
  productsIds: number[];
}

const initialState: State = {
  products: {
    1: {
      name: 'Banana',
      description: 'From Gumboldt with love',
      price: '50,70',
      sale: '0%',
      image: '-',
      createdDate: '1/11/2022',
    },
    2: {
      name: 'Melon',
      description: 'From Kherson with love',
      price: '00,00',
      sale: '100%',
      image: '-',
      createdDate: '1/11/2022',
    },
  },
  productsIds: [1, 2],
};

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(isFulfilled(getProducts), () => {
        console.log('fulfilled');
      })
      .addMatcher(isPending(getProducts), () => {
        console.log('pending');
      })
      .addMatcher(isRejected(getProducts), () => {
        console.log('rejected');
      });
  },
});

export const { setProducts } = catalogSlice.actions;
export default catalogSlice.reducer;