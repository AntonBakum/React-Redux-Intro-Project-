import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { CategoryModel } from '../../../models/categories/CategoryModel';
import { styles } from '../styles';

interface Props {
  categories: CategoryModel[];
  categoryTableColumns: GridColDef[]
}

const CategoriesTableComponent = (props: Props) => {
  return (
    <div style={styles.tableWrapper}>
      <DataGrid
        columns={props.categoryTableColumns}
        rows={props.categories}
        pageSize={5}
        sx = {{fontSize: "16px"}}
      />
    </div>
  );
};

export default CategoriesTableComponent;
