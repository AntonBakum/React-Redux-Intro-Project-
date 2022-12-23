import { DataGrid, GridCellParams, GridColDef } from '@mui/x-data-grid';
import { CategoryModel } from '../../../models/categories/CategoryModel';
import { styles } from '../styles';

interface Props {
  categories: CategoryModel[];
  categoryTableColumns: GridColDef[],
  onCellClick: (params: GridCellParams) => void
}

const CategoriesTableComponent = (props: Props) => {
  return (
    <div style={styles.tableWrapper}>
      <DataGrid
        columns={props.categoryTableColumns}
        rows={props.categories}
        pageSize={5}
        sx = {{fontSize: "16px"}}
        onCellClick = {props.onCellClick}
      />
    </div>
  );
};

export default CategoriesTableComponent;
