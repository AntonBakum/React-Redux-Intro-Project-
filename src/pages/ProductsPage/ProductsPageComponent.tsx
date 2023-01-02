import { Alert, Backdrop, CircularProgress, Snackbar } from '@mui/material';
import ProductsListContainer from './ProductsListContainer';

interface Props {
  successOpen: boolean;
  failureOpen: boolean;
  backdropOpen: boolean;
  handleSuccessClick: () => void;
  handleFailureClick: () => void;
}

export default function ProductsPageComponent(props: Props) {
  return (
    <>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={props.backdropOpen}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Snackbar
        open={props.successOpen}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        autoHideDuration={3000}
        onClose={props.handleSuccessClick}
      >
        <Alert
          onClose={props.handleSuccessClick}
          severity="success"
          sx={{ width: '100%' }}
        >
          Operation was successful!
        </Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        open={props.failureOpen}
        autoHideDuration={3000}
        onClose={props.handleFailureClick}
      >
        <Alert
          onClose={props.handleFailureClick}
          severity="error"
          sx={{ width: '100%' }}
        >
          This operation was unsuccessful!
        </Alert>
      </Snackbar>
      <ProductsListContainer />
    </>
  );
}
