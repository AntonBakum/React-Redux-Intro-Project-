import MainLayout from '../components/MainLayout';
import PageTwo from '../pages/PageTwo';
import WelcomePage from '../pages/WelcomePage';
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';
import { ProductsPageContainer } from '../pages/ProductsPage/ProductsPageContainer';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="/" index element={<WelcomePage />} />
      <Route path="/productsPage" element={<ProductsPageContainer/>} />
      <Route path="/page2" element={<PageTwo />} />
    </Route>,
  ),
);
/**/