import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Button,
} from '@mui/material';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import { createCategoryAsyncThunk } from '../../../../actions/categories/createCategoryAsyncThunk';
import { useAppDispatch} from '../../../../app/hooks';
import { CategoryModel } from '../../../../models/CategoryModel';
import { deleteValidationSchema } from '../../../../validationSchemas/deleteValidationSchema';
import { styles } from './styles';

interface Props {
  createModalOpen: boolean;
  onToggleCreateStatusClick: () => void;
  newCategoryId: number;
}

const CreatingModalWindowComponent = (props: Props) => {
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      id: 0,
      name: '',
      description: '',
    },
    onSubmit: (values: CategoryModel) => {
      values.id = props.newCategoryId;
      dispatch(createCategoryAsyncThunk(values));
    },
    validationSchema: deleteValidationSchema
  });
  return (
    <>
      <Dialog open={props.createModalOpen}>
        <DialogTitle sx={styles.dialogTitle}>CREATE CATEGORY</DialogTitle>
        <DialogContent>
          <form onSubmit={formik.handleSubmit}>
            <div style={styles.fieldsWrapper}>
              <TextField
                id="name"
                label="Category Name"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.name}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </div>
            <div style={styles.fieldsWrapper}>
              <TextField
                id="description"
                label="Description"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.description}
                error={formik.touched.description && Boolean(formik.errors.description)}
                helperText={formik.touched.description && formik.errors.description}              
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
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreatingModalWindowComponent;
