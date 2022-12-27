import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
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
      <DialogTitle sx = {styles.dialogTitle}>
         DELETE CATEGORY
      </DialogTitle>
      <DialogContent>
        <DialogContentText sx = {styles.dialogContentText}>Click on the confirmation button to delete the category </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Grid container spacing={2} sx = {styles.buttonsContainer}>
          <Grid item xs={6}>
            <Button
              sx={styles.closeButton}
              onClick={props.onToggleDeleteStatusClick}
            >
              Close
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button sx={styles.confirmButton} onClick={props.onSubmit}>
              Confirm
            </Button>
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteCategoryComponent;
