import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import ProductsListContainer from './ProductsListContainer';

interface Props {
  onGetProductsClick: () => void;
}

export default function ProductsPageComponent(props: Props) {
  return (
    <>
      <Box marginBottom="8px">
        <Button
          variant="contained"
          onClick={props.onGetProductsClick}
          size="large"
        >
          Get Products
        </Button>
      </Box>
      <ProductsListContainer/>
    </>
  );
}
