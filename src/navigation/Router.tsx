import MainLayout from '../components/MainLayout';
import WelcomePage from '../pages/WelcomePage/WelcomePage';
import { ProductsPageContainer } from '../pages/ProductsPage';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import CategoriesPageContainer from '../pages/CategoriesPage/CategoriesPageContainer';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="/" index element={<WelcomePage />} />
      <Route path="/products" element={<ProductsPageContainer />} />
      <Route path="/categories" element={<CategoriesPageContainer/>} />
    </Route>,
  ),
);
