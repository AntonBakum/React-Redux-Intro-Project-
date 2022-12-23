import { updateCategoryThunkAction } from '../../../actions/categories/updateCategoryThunkAction';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { RootState } from '../../../app/store';
import { CategoryModel } from '../../../models/categories/CategoryModel';
import { CreateUpdateCategoryModel } from '../../../models/categories/CreateCategoryModel';
import { toggleUpdateModalStatus } from '../../../slices/modalWindowSlice';
import UpdateCategoryComponent from './UpdateCategoryComponent';

interface Props {
    category: CategoryModel
    
}

const UpdateCategoryContainer = (props: Props) => {
  const dispatch = useAppDispatch();
  const updateModalOpen = useAppSelector(
    (state: RootState) => state.modalWindow.updateModalOpen,
  );
  const onSubmit = (category: CreateUpdateCategoryModel) => {
     const updatedCategory = {
        id: props.category.id,
        updatedCategory: category
     }
     dispatch(updateCategoryThunkAction(updatedCategory))
  }
  return (
    <UpdateCategoryComponent
      updateModalOpen={updateModalOpen}
      onToggleUpdateStatusAction={() => {
        dispatch(toggleUpdateModalStatus(!updateModalOpen));
      }}
      onSubmit = {onSubmit}
      name = {props.category.name}
      description = {props.category.description}
    />
  );
};

export default UpdateCategoryContainer;
