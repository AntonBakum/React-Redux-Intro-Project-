import { useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { CategoryModel } from '../../models/CategoryModel';
import { AddNewCategoryContainer } from './AddCategory/AddNewCategoryContainer';
import NavigationButtonsContainer from './NavigationButtonsComponent/NavigationButtonsContainer';

interface Props {
  categories: CategoryModel[];
}

const CategoriesPageComponent = (props: Props) => {
  const a = useAppSelector((state: RootState) => state.catalog.categoryIds.length)
  return (
    <>
      <NavigationButtonsContainer/>
      <div>
        <ul>
          {props.categories.map((category) => (
            <li key={category.id}>{category.id}     {category.name}</li>
          ))}
        </ul>
        <p>{a}</p>
      </div>
      <AddNewCategoryContainer/>
    </>
  );
};

export default CategoriesPageComponent;
