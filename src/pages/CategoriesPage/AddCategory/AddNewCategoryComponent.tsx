import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Button,
  Box,
  DialogContentText,
} from '@mui/material';
import TextField from '@mui/material/TextField';
import { Formik } from 'formik';
import { CreateUpdateCategoryModel } from '../../../models/categories/CreateCategoryModel';
import { validationSchema } from '../../../validationSchemas/validationSchema';
import { styles } from '../styles';

interface Props {
  createModalOpen: boolean;
  onSubmit: (values: CreateUpdateCategoryModel) => void;
  onToggleCreateStatusAction: () => void;
}

const AddNewCategoryComponent = (props: Props) => {
  return (
    <Dialog open={props.createModalOpen}>
      <DialogTitle sx = {styles.dialogTitle}>
          CREATE CATEGORY
      </DialogTitle>
      <DialogContent>
        <DialogContentText sx = {styles.dialogContentText}>
            Click on the confirmation button to create the category
        </DialogContentText>
        <Formik
          initialValues={{
            name: '',
            description: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values: CreateUpdateCategoryModel) => {
            props.onSubmit(values);
          }}
        >
          {(formProps) => (
            <form onSubmit={formProps.handleSubmit}>
              <Box sx={styles.fieldsWrapper}>
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
              <Box sx={styles.fieldsWrapper}>
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
                <Grid item xs={6} >
                    <Button
                      sx={styles.closeButton}
                      onClick={props.onToggleCreateStatusAction}
                    >
                      Close
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button type={'submit'} sx ={styles.confirmButton}>
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

export default AddNewCategoryComponent;
