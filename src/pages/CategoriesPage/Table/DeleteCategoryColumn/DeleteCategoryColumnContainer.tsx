import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { RootState } from '../../../../app/store';
import { toggleDeleteModalStatus } from '../../../../slices/modalWindowSlice';
import DeleteCategoryColumnComponent from './DeleteCategoryColumnComponent';

interface Props {
  id: number;
}

const DeleteCategoryColumnContainer = (props: Props) => {
  const dispatch = useAppDispatch();
  const deleteModalOpen = useAppSelector(
    (state: RootState) => state.modalWindow.deleteModalOpen,
  );
  return (
    <DeleteCategoryColumnComponent
      id={props.id}
      onToggleDeleteStatusClick={() => {
        dispatch(toggleDeleteModalStatus(!deleteModalOpen));
      }}
    />
  );
};

export default DeleteCategoryColumnContainer;
