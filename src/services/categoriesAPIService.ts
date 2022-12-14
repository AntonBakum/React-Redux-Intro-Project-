import axios from 'axios';
import { CreateCategoryModel } from '../models/categories/CreateCategoryModel';

export const getCategories = () => {
    return axios.get(`${process.env.REACT_APP_API_URL}/api/categories`);
}

export const createCategory = (category: CreateCategoryModel) => {
    return axios.post(`${process.env.REACT_APP_API_URL}/api/categories`, category);
}

export const deleteCategory = (id: number) => {
    return axios.delete(`${process.env.REACT_APP_API_URL}/api/categories/${id}`);
}

export * as CategoriesAPIService from './categoriesAPIService';