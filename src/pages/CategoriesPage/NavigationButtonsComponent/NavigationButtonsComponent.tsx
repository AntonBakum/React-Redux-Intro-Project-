import { Add, GetApp } from '@mui/icons-material';
import { Button } from '@mui/material';
import { styles } from './styles';

interface Props {
  onGetCategoriesClick: () => void;
  onToggleCreateStatusClick: () => void;
  onToggleDeleteStatusClick: () => void;
}

const NavigationButtonsComponent = (props: Props) => {
  return (
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
    </div>
  );
};

export default NavigationButtonsComponent;
