import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { RootState } from '../../../../app/store';
import { toggleUpdateModalStatus } from '../../../../slices/modalWindowSlice';
import UpdateCategoryColumnComponent from './UpdateCategoryColumnComponent';


const UpdateCategoryColumnContainer = () => {
  const dispatch = useAppDispatch();
  const updateModalOpen = useAppSelector(
    (state: RootState) => state.modalWindow.updateModalOpen,
  );
  return (
    <UpdateCategoryColumnComponent
      onToggleUpdateStatusClick={() => {
        dispatch(toggleUpdateModalStatus(!updateModalOpen));
      }}
    />
  );
};

export default UpdateCategoryColumnContainer;
