import { getCategoriesThunkAction } from '../../../actions/categories/getCategoriesThunkAction';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { RootState } from '../../../app/store';
import {
  toggleCreateModalStatus,
  toggleDeleteModalStatus,
} from '../../../slices/modalWindowSlice';
import NavigationButtonsComponent from './NavigationButtonsComponent';

const NavigationButtonsContainer = () => {
  const dispatch = useAppDispatch();
  const createModalOpen = useAppSelector(
    (state: RootState) => state.modalWindow.createModalOpen,
  );
  const deleteModalOpen = useAppSelector(
    (state: RootState) => state.modalWindow.deleteModalOpen,
  );
  return (
    <NavigationButtonsComponent
      onGetCategoriesClick={() => dispatch(getCategoriesThunkAction())}
      onToggleCreateStatusClick={() =>
        dispatch(toggleCreateModalStatus(!createModalOpen))
      }
      onToggleDeleteStatusClick={() =>
        dispatch(toggleDeleteModalStatus(!deleteModalOpen))
      }
    />
  );
};

export default NavigationButtonsContainer;
