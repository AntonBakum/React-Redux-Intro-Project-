import { Add } from '@mui/icons-material';
import { Button } from '@mui/material';
import { styles } from './styles';

interface Props {
  onToggleCreateStatusClick: () => void;
}

const NavigationButtonsComponent = (props: Props) => {
  return (
    <div style={styles.buttonsWrapper}>
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
