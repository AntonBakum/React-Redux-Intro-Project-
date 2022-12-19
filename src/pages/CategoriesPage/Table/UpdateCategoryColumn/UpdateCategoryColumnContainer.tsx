import { GridRenderCellParams } from '@mui/x-data-grid';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { RootState } from '../../../../app/store';
import { toggleUpdateModalStatus } from '../../../../slices/modalWindowSlice';
import UpdateCategoryColumnComponent from './UpdateCategoryColumnComponent';

interface Props {
  category: GridRenderCellParams;
}

const UpdateCategoryColumnContainer = (props: Props) => {
  const dispatch = useAppDispatch();
  const updateModalOpen = useAppSelector(
    (state: RootState) => state.modalWindow.updateModalOpen,
  );
  return (
    <UpdateCategoryColumnComponent
      category={props.category}
      onToggleUpdateStatusClick={() => {
        dispatch(toggleUpdateModalStatus(!updateModalOpen));
      }}
    />
  );
};

export default UpdateCategoryColumnContainer;
