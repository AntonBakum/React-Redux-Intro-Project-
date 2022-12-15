import { GridColDef } from "@mui/x-data-grid";


export const categoryTableColumns: GridColDef[] = [
    {field: "id", headerName: "ID", width: 70 },
    {field: "name", headerName: "Category Name", width: 200 },
    {field: "description", headerName: "Description",  width: 300} 
]