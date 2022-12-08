import { getCategoriesAsyncThunk } from '../../actions/categories/getCategoriesAsyncThunk';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { CategoryModel } from '../../models/CategoryModel';
import CategoriesPageComponent from './CategoriesPageComponent';

export const CategoriesPageContainer = () => {
  const dispatch = useAppDispatch();
  const categories: CategoryModel[] = useAppSelector((state: RootState) =>
    state.catalog.categoryIds.map((id) => state.catalog.categories[id - 1])
  );
  return (
    <CategoriesPageComponent
      onGetCategoriesClick={() => dispatch(getCategoriesAsyncThunk())}
      categories = {categories}
    />
  );
};
