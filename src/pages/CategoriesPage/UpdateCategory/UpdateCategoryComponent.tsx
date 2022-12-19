import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Button,
} from '@mui/material';
import TextField from '@mui/material/TextField';
import { Formik } from 'formik';
import { CreateUpdateCategoryModel } from '../../../models/categories/CreateCategoryModel';
import { validationSchema } from '../../../validationSchemas/validationSchema';
import { styles } from '../styles';

interface Props {
  updateModalOpen: boolean;
  onToggleUpdateStatusClick: () => void;
  onSubmit: (values: CreateUpdateCategoryModel) => void;
  name: string;
  description: string;
}

const UpdateCategoryComponent = (props: Props) => {
  return (
    <Dialog open={props.updateModalOpen}>
      <div style={styles.dialogTitleWrapper}>
        <DialogTitle sx={styles.dialogTitle}>
          Click on the confirmation button to update the category
        </DialogTitle>
      </div>
      <DialogContent>
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
              <div style={styles.fieldsWrapper}>
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
                    formProps.touched.description &&
                    formProps.errors.description
                  }
                />
              </div>
              <Grid container>
                <Grid item xs={6}>
                  <div style={styles.buttonsWrapper}>
                    <Button
                      sx={styles.closeButton}
                      onClick={props.onToggleUpdateStatusClick}
                    >
                      Cancel
                    </Button>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div style={styles.buttonsWrapper}>
                    <Button type={'submit'} sx ={styles.confirmButton}>
                      Confirm
                    </Button>
                  </div>
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
