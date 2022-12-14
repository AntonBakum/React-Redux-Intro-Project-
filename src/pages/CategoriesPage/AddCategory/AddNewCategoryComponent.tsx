import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Button,
} from '@mui/material';
import TextField from '@mui/material/TextField';
import { Formik } from 'formik';
import { CreateCategoryModel } from '../../../models/categories/CreateCategoryModel';
import { createValidationSchema } from '../../../validationSchemas/createValidationSchema';
import { styles } from '../styles';

interface Props {
  createModalOpen: boolean;
  onSubmit: (values: CreateCategoryModel) => void;
  onToggleCreateStatusClick: () => void;
}

const AddNewCategoryComponent = (props: Props) => {
  return (
    <Dialog open={props.createModalOpen}>
      <DialogTitle sx={styles.dialogTitle}>CREATE CATEGORY</DialogTitle>
      <DialogContent>
        <Formik initialValues={{
          name: '',
          description: '',
        }} validationSchema = {createValidationSchema} onSubmit = {(values: CreateCategoryModel) => { props.onSubmit(values)}}>
          { formProps => (<form onSubmit={formProps.handleSubmit}>
            <div style={styles.fieldsWrapper}>
              <TextField
                id="name"
                label="Category Name"
                variant="outlined"
                onChange={formProps.handleChange}
                value={formProps.values.name}
                error={formProps.touched.name && Boolean(formProps.errors.name)}
                helperText={formProps.touched.name && formProps.errors.name}
              />
            </div>
            <div style={styles.fieldsWrapper}>
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
                  formProps.touched.description && formProps.errors.description
                }
              />
            </div>
            <Grid container>
              <Grid item xs={6}>
                <div style={styles.buttonsWrapper}>
                  <Button
                    sx={styles.closeButton}
                    onClick={props.onToggleCreateStatusClick}
                  >
                    Close
                  </Button>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div style={styles.buttonsWrapper}>
                  <Button type={'submit'} style={styles.createButton}>
                    Create
                  </Button>
                </div>
              </Grid>
            </Grid>
          </form>) }
        </Formik>
      </DialogContent>
    </Dialog>
  );
};

export default AddNewCategoryComponent;
