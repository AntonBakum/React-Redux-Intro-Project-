import { createCategoryThunkAction } from '../../../actions/categories/createCategoryThunkAction';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { RootState } from '../../../app/store';
import { CreateCategoryModel } from '../../../models/categories/CreateCategoryModel';
import { toggleCreateModalStatus } from '../../../slices/modalWindowSlice';
import AddNewCategoryComponent from './AddNewCategoryComponent';

const AddNewCategoryContainer = () => {
  const dispatch = useAppDispatch();
  const createModalOpen = useAppSelector(
    (state: RootState) => state.modalWindow.createModalOpen,
  );
  return (
    <AddNewCategoryComponent
      createModalOpen={createModalOpen}
      onSubmit={(category: CreateCategoryModel) => {
        dispatch(createCategoryThunkAction(category));
      }}
      onToggleCreateStatusClick={() =>
        dispatch(toggleCreateModalStatus(!createModalOpen))
      }
    />
  );
};

export default AddNewCategoryContainer;
