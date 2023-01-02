import Grid from '@mui/material/Grid';
import { ProductModel } from '../../models/ProductModel';
import ProductCardComponent from './ProductCard/ProductCardComponent';
import { styles } from './styles';

interface Props {
  products: ProductModel[];
}

const ProductsListComponent = (props: Props) => {
  return (
    <Grid container spacing={1} sx = {styles.productsListWrapper}>
      {props.products.map((product) => (
        <Grid item xs={4}>
          <ProductCardComponent key={product.id} product={product} />
        </Grid>
      ))}
    </Grid>
  );
};
export default ProductsListComponent;
