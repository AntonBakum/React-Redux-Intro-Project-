import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getProductsThunkAction } from '../../actions/getProductsThunkAction';
import ProductsPageComponent from './ProductsPageComponent';
import { useEffect, useState } from 'react';
import { RootState } from '../../app/store';
import { changeStatus } from '../../slices/catalog/categoriesSlice';

export const ProductsPageContainer = () => {
  const dispatch = useAppDispatch();
  const [successOpen, setSuccessOpen] = useState(false);
  const [failureOpen, setFailureOpen] = useState(false);
  const [backdropOpen, setBackdropOpen] = useState(true);
  const status = useAppSelector((state: RootState) => state.products.status);
  useEffect(() => {
    if (status === 'fulfilled') {
      setSuccessOpen(true);
      setBackdropOpen(false);
    } else if (status === 'rejected') {
      setFailureOpen(true);
      setTimeout(() => {
        dispatch(getProductsThunkAction());
      }, 5000);
    }
    dispatch(getProductsThunkAction());
  }, [dispatch, status]);
  return (
    <ProductsPageComponent
      successOpen={successOpen}
      handleSuccessClick={() => {
        setSuccessOpen(false);
      }}
      failureOpen={failureOpen}
      handleFailureClick={() => {
        setFailureOpen(false);
        dispatch(changeStatus('pending'));
      }}
      backdropOpen={backdropOpen}
    />
  );
};
