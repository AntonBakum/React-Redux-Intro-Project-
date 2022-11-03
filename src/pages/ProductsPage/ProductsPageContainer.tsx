import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { getProductsThunkAction } from '../../actions/getProductsThunkAction';
import { ProductModel } from '../../models/ProductModel';
import ProductsPageComponent from './ProductsPageComponent';

export const ProductsPageContainer = () => {
  const dispatch = useAppDispatch();
  const products: ProductModel[] = useAppSelector((state: RootState) =>
    state.catalog.productsIds.map((id) => state.catalog.products[id]),
  );
  const productIds = useAppSelector(
    (state: RootState) => state.catalog.productsIds,
  );
  return (
    <ProductsPageComponent
      onGetProductsClick={() => {
        dispatch(getProductsThunkAction());
      }}
      products={products}
      productIds={productIds}
    />
  );
};
