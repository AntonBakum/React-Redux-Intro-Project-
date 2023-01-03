import { useEffect, useState } from 'react';
import { getCategoriesThunkAction } from '../../actions/categories/getCategoriesThunkAction';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { changeStatus } from '../../slices/catalog/categoriesSlice';
import CategoriesPageComponent from './CategoriesPageComponent';

const CategoriesPageContainer = () => {
  const [successOpen, setSuccessOpen] = useState(false);
  const [failureOpen, setFailureOpen] = useState(false);
  const [backdropOpen, setBackdropOpen] = useState(true);
  const status = useAppSelector((state: RootState) => state.categories.status);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (status === 'fulfilled') {
      setSuccessOpen(true)
      setBackdropOpen(false);
    } else if (status === 'rejected') {
      setFailureOpen(true);
      setTimeout(() => {
        dispatch(getCategoriesThunkAction());
      }, 5000);
    }
    dispatch(getCategoriesThunkAction())
  }, [dispatch, status]);
  return (
    <CategoriesPageComponent
      successOpen={successOpen}
      handleSuccessClick={() => {
        setSuccessOpen(false);
      }}
      failureOpen={failureOpen}
      handleFailureClick={() => {
        setFailureOpen(false);
        dispatch(changeStatus('pending'))
      }}
      backdropOpen = {backdropOpen}
    />
  );
};

export default CategoriesPageContainer;
