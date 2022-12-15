import { DataGrid } from '@mui/x-data-grid';
import { categoryTableColumns } from '../../../constants/categoryTableColumns';
import { CategoryModel } from '../../../models/categories/CategoryModel';
import { styles } from '../styles';

interface Props {
  categories: CategoryModel[];
}

const CategoriesTableComponent = (props: Props) => {
  return (
    <div style={styles.tableWrapper}>
      <DataGrid
        columns={categoryTableColumns}
        rows={props.categories}
        pageSize={5}
        sx = {{fontSize: "16px"}}
      />
    </div>
  );
};

export default CategoriesTableComponent;
