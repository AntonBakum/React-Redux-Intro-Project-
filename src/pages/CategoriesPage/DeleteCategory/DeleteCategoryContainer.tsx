import { deleteCategoryThunkAction } from '../../../actions/categories/deleteCategoryThunkAction';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { RootState } from '../../../app/store';
import { toggleDeleteModalStatus } from '../../../slices/modalWindowSlice';
import DeleteCategoryComponent from './DeleteCategoryComponent';

interface Props {
  id: number;
}

const DeleteCategoryContainer = (props: Props) => {
  const dispatch = useAppDispatch();
  const deleteModalOpen = useAppSelector(
    (state: RootState) => state.modalWindow.deleteModalOpen,
  );
  return (
    <DeleteCategoryComponent
      deleteModalOpen={deleteModalOpen}
      onToggleDeleteStatusClick={() => {
        dispatch(toggleDeleteModalStatus(!deleteModalOpen));
      }}
      onSubmit={() => {
        dispatch(deleteCategoryThunkAction(props.id));
      }}
    />
  );
};

export default DeleteCategoryContainer;
