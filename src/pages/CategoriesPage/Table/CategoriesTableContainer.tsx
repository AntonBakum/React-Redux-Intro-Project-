import {GridCellParams } from '@mui/x-data-grid';
import { useState } from 'react';
import { useAppSelector } from '../../../app/hooks';
import { RootState } from '../../../app/store';
import { categoryTableColumns } from '../../../constants/categoryTableColumns';
import { CategoryModel } from '../../../models/categories/CategoryModel';
import DeleteCategoryContainer from '../DeleteCategory/DeleteCategoryContainer';
import UpdateCategoryContainer from '../UpdateCategory/UpdateCategoryContainer';
import CategoriesTableComponent from './CategoriesTableComponent';

const CategoriesTableContainer = () => {
  const categories: CategoryModel[] = useAppSelector((state: RootState) =>
    state.categories.categoryIds.map((id) => state.categories.categories[id])
  );
  const [category, selectedCategory] = useState({} as CategoryModel);
  const [categoryId, selectedCategoryId] = useState(0);
  const categoryTableSelectedRow = (params: GridCellParams) => {
    const category: CategoryModel = {
      id: params.row.id,
      name: params.row.name,
      description: params.row.description,
    };
    const id: number = params.row.id;
    selectedCategory(category);
    selectedCategoryId(id);
  };
  return (
    <>
      <CategoriesTableComponent
        categories={categories}
        categoryTableColumns={categoryTableColumns}
        onCellClick = {categoryTableSelectedRow}
      />
      <DeleteCategoryContainer id={categoryId} />
      <UpdateCategoryContainer category={category}/>
    </>
  );
};

export default CategoriesTableContainer;
