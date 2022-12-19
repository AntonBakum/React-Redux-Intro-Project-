import { updateCategoryThunkAction } from '../../../actions/categories/updateCategoryThunkAction';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { RootState } from '../../../app/store';
import { CreateUpdateCategoryModel } from '../../../models/categories/CreateCategoryModel';
import { toggleUpdateModalStatus } from '../../../slices/modalWindowSlice';
import UpdateCategoryComponent from './UpdateCategoryComponent';

interface Props {
    id: number,
    name: string,
    description: string,
    
}

const UpdateCategoryContainer = (props: Props) => {
  const dispatch = useAppDispatch();
  const updateModalOpen = useAppSelector(
    (state: RootState) => state.modalWindow.updateModalOpen,
  );
  const onSubmit = (category: CreateUpdateCategoryModel) => {
     const updatedCategory = {
        id: props.id,
        updatedCategory: category
     }
     dispatch(updateCategoryThunkAction(updatedCategory))
  }
  return (
    <UpdateCategoryComponent
      updateModalOpen={updateModalOpen}
      onToggleUpdateStatusClick={() => {
        dispatch(toggleUpdateModalStatus(!updateModalOpen));
      }}
      onSubmit = {onSubmit}
      name = {props.name}
      description = {props.description}
    />
  );
};

export default UpdateCategoryContainer;
