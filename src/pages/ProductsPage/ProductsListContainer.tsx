import { useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { ProductModel } from '../../models/ProductModel';
import ProductsListComponent from './ProductsListComponent';

const ProductsListContainer = () => {
  const products: ProductModel[] = useAppSelector((state: RootState) =>
    state.products.productsIds.map((id) => state.products.products[id])
  );
  return <ProductsListComponent products={products} />
};

export default ProductsListContainer;
