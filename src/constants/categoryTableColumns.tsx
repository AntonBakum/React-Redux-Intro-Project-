import { GridColDef } from "@mui/x-data-grid";
import DeleteCategoryColumnContainer from "../pages/CategoriesPage/Table/DeleteCategoryColumn/DeleteCategoryColumnContainer";
import UpdateCategoryColumnContainer from "../pages/CategoriesPage/Table/UpdateCategoryColumn/UpdateCategoryColumnContainer";

export const categoryTableColumns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Category Name', width: 200 },
    { field: 'description', headerName: 'Description', width: 300 },
    {
      field: 'Edit',
      renderCell: (category) => {
        return (
          <UpdateCategoryColumnContainer category={category}/>
        );
      },
    },
    {
      field: 'Delete',
      renderCell: (category) => {
        return (
           <DeleteCategoryColumnContainer id = {category.row.id}/>
        );
      },
    },
  ];