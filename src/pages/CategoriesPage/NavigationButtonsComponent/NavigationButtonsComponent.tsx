import { Add, Delete, GetApp, Update } from '@mui/icons-material';
import { Button } from '@mui/material';
import { styles } from './styles';

interface Props {
  onGetCategoriesClick: () => void;
  onToggleCreateStatusClick: () => void;
}

const NavigationButtonsComponent = (props: Props) => {
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
        <Button
          sx={styles.createButton}
          size="large"
          startIcon={<Add />}
          onClick={props.onToggleCreateStatusClick}
        >
          CREATE CATEGORY
        </Button>
        <Button sx={styles.updateButton} size="large" startIcon={<Update />}>
          UPDATE CATEGORY
        </Button>
        <Button sx={styles.deleteButton} size="large" startIcon={<Delete />}>
          DELETE CATEGORY
        </Button>
      </div>
    </div>
  );
};

export default NavigationButtonsComponent;
