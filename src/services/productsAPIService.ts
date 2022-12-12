import axios from 'axios';

export const GetProducts = () => {
    return axios.get(`${process.env.REACT_APP_API_URL}/api/products`)
}

export * as productsAPIService from './productsAPIService';