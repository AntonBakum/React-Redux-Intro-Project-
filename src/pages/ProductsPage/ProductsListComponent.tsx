import Grid from '@mui/material/Grid';
import { ProductModel } from '../../models/ProductModel';
import ProductCardComponent from './ProductCardComponent';

interface Props {
  products: ProductModel[];
}

const ProductsListComponent = (props: Props) => {
  return (
    <Grid container spacing={1} display = "flex">
      {props.products.map((product) => (
          <Grid item xs={4} justifyContent = "flex-center">
            <ProductCardComponent product={product} />
          </Grid>
      ))}
    </Grid>
  );
};
export default ProductsListComponent;
