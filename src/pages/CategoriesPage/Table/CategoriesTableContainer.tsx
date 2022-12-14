import { useAppSelector } from '../../../app/hooks';
import { RootState } from '../../../app/store';
import { CategoryModel } from '../../../models/categories/CategoryModel';
import CategoriesTableComponent from './CategoriesTableComponent';

const CategoriesTableContainer = () => {
  const categories: CategoryModel[] = useAppSelector((state: RootState) =>
    state.catalog.categoryIds.map((id) => state.catalog.categories[id]),
  );
  return <CategoriesTableComponent categories={categories} />;
};

export default CategoriesTableContainer;
