import { ParaglidingSharp } from "@mui/icons-material";
import { GridColDef } from "@mui/x-data-grid";
import { CategoryModel } from "../models/categories/CategoryModel";
import DeleteCategoryColumnContainer from "../pages/CategoriesPage/Table/DeleteCategoryColumn/DeleteCategoryColumnContainer";
import UpdateCategoryColumnContainer from "../pages/CategoriesPage/Table/UpdateCategoryColumn/UpdateCategoryColumnContainer";

export const categoryTableColumns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Category Name', width: 200 },
    { field: 'description', headerName: 'Description', width: 300 },
    {
      field: 'Edit',
      renderCell: () => {
        return (
          <UpdateCategoryColumnContainer/>
        );
      },
    },
    {
      field: 'Delete',
      renderCell: () => {
        return (
           <DeleteCategoryColumnContainer/>
        );
      },
    },
  ];