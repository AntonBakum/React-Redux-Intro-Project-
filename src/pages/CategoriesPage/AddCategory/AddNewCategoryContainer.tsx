import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { RootState } from '../../../app/store';
import { toggleCreateModalStatus } from '../../../slices/modalWindowSlice';
import AddNewCategoryComponent from './AddNewCategoryComponent';

export const AddNewCategoryContainer = () => {
  const dispatch = useAppDispatch();
  const createModalOpen = useAppSelector(
    (state: RootState) => state.modalWindow.createModalOpen,
  );
  const newCategoryId = useAppSelector((state: RootState) => state.catalog.categoryIds.length + 1);

  return <AddNewCategoryComponent createModalOpen={createModalOpen} 
  onToggleCreateStatusClick = {() => dispatch(toggleCreateModalStatus(!createModalOpen))}
    newCategoryId = {newCategoryId}
  />;
};
