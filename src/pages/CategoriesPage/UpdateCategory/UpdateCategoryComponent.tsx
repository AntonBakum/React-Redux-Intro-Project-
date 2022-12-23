import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Button,
  DialogContentText,
  Box,
} from '@mui/material';
import TextField from '@mui/material/TextField';
import { Formik } from 'formik';
import { CreateUpdateCategoryModel } from '../../../models/categories/CreateCategoryModel';
import { validationSchema } from '../../../validationSchemas/validationSchema';
import { styles } from '../styles';

interface Props {
  updateModalOpen: boolean;
  onToggleUpdateStatusAction: () => void;
  onSubmit: (values: CreateUpdateCategoryModel) => void;
  name: string;
  description: string;
}

const UpdateCategoryComponent = (props: Props) => {
  return (
    <Dialog open={props.updateModalOpen}>
      <DialogTitle sx={styles.dialogTitle}>UPDATE CATEGORY</DialogTitle>
      <DialogContent>
        <DialogContentText sx={styles.dialogContentText}>
          Click on the confirmation button to update the category
        </DialogContentText>
        <Formik
          initialValues={{
            name: props.name,
            description: props.description,
          }}
          validationSchema={validationSchema}
          onSubmit={(values: CreateUpdateCategoryModel) => {
            props.onSubmit(values);
          }}
        >
          {(formProps) => (
            <form onSubmit={formProps.handleSubmit}>
              <Box sx ={styles.fieldsWrapper}>
                <TextField
                  id="name"
                  label="Category Name"
                  variant="outlined"
                  onChange={formProps.handleChange}
                  value={formProps.values.name}
                  error={
                    formProps.touched.name && Boolean(formProps.errors.name)
                  }
                  helperText={formProps.touched.name && formProps.errors.name}
                />
              </Box>
              <Box sx ={styles.fieldsWrapper}>
                <TextField
                  id="description"
                  label="Description"
                  variant="outlined"
                  onChange={formProps.handleChange}
                  value={formProps.values.description}
                  error={
                    formProps.touched.description &&
                    Boolean(formProps.errors.description)
                  }
                  helperText={
                    formProps.touched.description &&
                    formProps.errors.description
                  }
                />
              </Box>
              <Grid container spacing = {2} sx = {styles.buttonsContainer}>
                <Grid item xs={6}>
                    <Button
                      sx={styles.closeButton}
                      onClick={props.onToggleUpdateStatusAction}
                    >
                      Cancel
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button type={'submit'} sx={styles.confirmButton}>
                      Confirm
                    </Button>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateCategoryComponent;
