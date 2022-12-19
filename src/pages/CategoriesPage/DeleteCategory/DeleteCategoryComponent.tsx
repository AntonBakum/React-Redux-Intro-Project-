import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
} from '@mui/material';
import { styles } from '../styles';

interface Props {
  deleteModalOpen: boolean;
  onToggleDeleteStatusClick: () => void;
  onSubmit: () => void;
}

const DeleteCategoryComponent = (props: Props) => {
  return (
    <Dialog open={props.deleteModalOpen}>
      <div style = {styles.dialogTitleWrapper}>
        <DialogTitle style={styles.dialogTitle}>
          Click on the confirmation button to delete the category
        </DialogTitle>
      </div>
      <DialogContent>
        <Grid container>
          <Grid item xs={6}>
            <div style={styles.buttonsWrapper}>
              <Button
                sx={styles.closeButton}
                onClick={props.onToggleDeleteStatusClick}
              >
                Close
              </Button>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div style={styles.buttonsWrapper}>
              <Button sx={styles.confirmButton} onClick={props.onSubmit}>
                Confirm
              </Button>
            </div>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteCategoryComponent;
