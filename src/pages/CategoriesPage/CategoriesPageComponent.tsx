import AddNewCategoryContainer from './AddCategory/AddNewCategoryContainer';
import NavigationButtonsContainer from './NavigationButtonsComponent/NavigationButtonsContainer';
import CategoriesTableContainer from './Table/CategoriesTableContainer';

const CategoriesPageComponent = () => {
  return (
    <>
      <NavigationButtonsContainer />
      <CategoriesTableContainer />
      <AddNewCategoryContainer/>
    </>
  );
};

export default CategoriesPageComponent;
