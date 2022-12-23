import { Delete } from '@mui/icons-material';
import { Button } from '@mui/material';
import { styles } from '../../styles';

interface Props {
  onToggleDeleteStatusClick: () => void
}

const DeleteCategoryColumnComponent = (props: Props) => {
  return (
    <div>
      <Button
        sx={styles.tableButtons}
        onClick={props.onToggleDeleteStatusClick}
      >
        <Delete />
      </Button>
    </div>
  );
};

export default DeleteCategoryColumnComponent;
