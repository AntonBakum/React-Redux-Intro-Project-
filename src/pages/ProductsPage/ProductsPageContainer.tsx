import { useAppDispatch} from '../../app/hooks';
import { getProductsThunkAction } from '../../actions/getProductsThunkAction';
import ProductsPageComponent from './ProductsPageComponent';

export const ProductsPageContainer = () => {
  const dispatch = useAppDispatch();
  return (
    <ProductsPageComponent
      onGetProductsClick={() => {
        dispatch(getProductsThunkAction());
      }}
    />
  );
};
