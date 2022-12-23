import { Delete } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import { styles } from '../../styles';

interface Props {
  onToggleDeleteStatusClick: () => void
}

const DeleteCategoryColumnComponent = (props: Props) => {
  return (
    <Box>
      <Button
        sx={styles.tableButtons}
        onClick={props.onToggleDeleteStatusClick}
      >
        <Delete />
      </Button>
    </Box>
  );
};

export default DeleteCategoryColumnComponent;
