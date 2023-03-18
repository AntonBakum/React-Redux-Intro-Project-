import { createCategoryThunkAction } from '../../../actions/categories/createCategoryThunkAction';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { RootState } from '../../../app/store';
import { CreateUpdateCategoryModel } from '../../../models/categories/CreateCategoryModel';
import { changeStatus } from '../../../slices/catalog/categoriesSlice';
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
      onSubmit={(category: CreateUpdateCategoryModel) => {
        dispatch(createCategoryThunkAction(category));
        dispatch(changeStatus('pending'));
      }}
      onToggleCreateStatusAction={() =>
        dispatch(toggleCreateModalStatus(!createModalOpen))
      }
    />
  );
};

export default AddNewCategoryContainer;
