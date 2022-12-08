import { Button } from '@mui/material';
import { styles } from './styles';
import { Delete, Update, Add, GetApp } from '@mui/icons-material';
import { CategoryModel } from '../../models/CategoryModel';

interface Props {
  onGetCategoriesClick: () => void;
  categories: CategoryModel[];
}
const CategoriesPageComponent = (props: Props) => {
  return (
    <div>
      <div style={styles.buttonsWrapper}>
        <Button
          sx={styles.getButton}
          size="large"
          startIcon={<GetApp />}
          onClick={props.onGetCategoriesClick}
        >
          GET CATEGORIES
        </Button>
        <Button sx={styles.createButton} size="large" startIcon={<Add />}>
          CREATE CATEGORY
        </Button>
        <Button sx={styles.updateButton} size="large" startIcon={<Update />}>
          UPDATE CATEGORY
        </Button>
        <Button sx={styles.deleteButton} size="large" startIcon={<Delete />}>
          DELETE CATEGORY
        </Button>
      </div>
      <div>
        <ul>
          {props.categories.map((category) => (
            <li key={category.id}>{category.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoriesPageComponent;
