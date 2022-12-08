import { useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { ProductModel } from '../../models/ProductModel';
import ProductsListComponent from './ProductsListComponent';

const ProductsListContainer = () => {
  const products: ProductModel[] = useAppSelector((state: RootState) =>
    state.catalog.productsIds.map((id) => state.catalog.products[id - 1]),
  );
  return (
    <>
      <ProductsListComponent products={products} />
    </>
  );
};

export default ProductsListContainer;
