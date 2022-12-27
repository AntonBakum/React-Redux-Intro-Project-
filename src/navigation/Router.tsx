import MainLayout from '../components/MainLayout';
import WelcomePage from '../pages/WelcomePage';
import { ProductsPageContainer } from '../pages/ProductsPage';
import CategoriesPageComponent from '../pages/CategoriesPage/CategoriesPageComponent';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="/" index element={<WelcomePage />} />
      <Route path="/products" element={<ProductsPageContainer />} />
      <Route path="/categories" element={<CategoriesPageComponent />} />
    </Route>,
  ),
);
