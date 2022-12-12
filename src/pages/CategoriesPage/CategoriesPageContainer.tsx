import { useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { CategoryModel } from '../../models/CategoryModel';
import CategoriesPageComponent from './CategoriesPageComponent';

export const CategoriesPageContainer = () => {
  const categories: CategoryModel[] = useAppSelector((state: RootState) =>
    state.catalog.categoryIds.map((id) => state.catalog.categories[id])
  );
  return (
    <CategoriesPageComponent
      categories = {categories}
    />
  );
};
