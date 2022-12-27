import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { RootState } from '../../../../app/store';
import { toggleDeleteModalStatus } from '../../../../slices/modalWindowSlice';
import DeleteCategoryColumnComponent from './DeleteCategoryColumnComponent';

const DeleteCategoryColumnContainer = () => {
  const dispatch = useAppDispatch();
  const deleteModalOpen = useAppSelector(
    (state: RootState) => state.modalWindow.deleteModalOpen,
  );
  return (
    <DeleteCategoryColumnComponent
      onToggleDeleteStatusClick={() => {
        dispatch(toggleDeleteModalStatus(!deleteModalOpen));
      }}
    />
  );
};

export default DeleteCategoryColumnContainer;
