import axios from 'axios';
import { CreateCategoryModel } from '../models/categories/CreateCategoryModel';

export const GetCategories = () => {
    return axios.get(`${process.env.REACT_APP_API_URL}/api/categories`);
}

export const CreateCategory = (category: CreateCategoryModel) => {
    return axios.post(`${process.env.REACT_APP_API_URL}/api/categories`, category);
}

export const DeleteCategory = (id: number) => {
    return axios.delete(`${process.env.REACT_APP_API_URL}/api/categories/${id}`);
}

export * as categoriesAPIService from './categoriesAPIService';