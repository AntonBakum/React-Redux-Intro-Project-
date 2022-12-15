import MainLayout from '../components/MainLayout';
import WelcomePage from '../pages/WelcomePage';
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';
import { ProductsPageContainer } from '../pages/ProductsPage';
import CategoriesPageComponent from '../pages/CategoriesPage/CategoriesPageComponent';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="/" index element={<WelcomePage />} />
      <Route path="/products" element={<ProductsPageContainer />} />
      <Route path="/categories" element={<CategoriesPageComponent />} />
    </Route>,
  ),
);
