import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import DescriptionIcon from '@mui/icons-material/Description';
import Box from '@mui/material/Box';
import { CardHeader, Grid } from '@mui/material';
import { ProductModel } from '../../models/ProductModel';

interface Props {
  product: ProductModel;
}

const ProductCardComponent = (props: Props) => {
  return (
    <Card
      sx={{
        maxWidth: 300,
        border: 'thick double lightblue',
        '&:hover': {
          backgroundColor: 'lightblue',
        },
      }}
    >
      <Box display="flex" justifyContent="center">
        <CardHeader title={props.product.createdDate} />
      </Box>
      <CardMedia
        component="img"
        alt={props.product.name}
        height="160"
        image="https://media.giphy.com/media/GDp7LycxkT3LG/giphy.gif"
      />
      <CardContent>
        <Box display="flex" justifyContent="center">
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontWeight: 'bolder' }}
          >
            {props.product.name}
          </Typography>
        </Box>
        <Grid container sx={{ marginBottom: '10px' }}>
          <Grid item xs={6}>
            <Typography variant="body2">{props.product.price}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">{props.product.sale}</Typography>
          </Grid>
        </Grid>
        <Box display="flex" justifyContent="center">
          <Typography variant="body2" color="black" sx={{ fontWeight: 'bold' }}>
            {props.product.description}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Box display="flex" justifyContent="flex-start" marginRight="150px">
          <Button size="small">
            <ShoppingBasketIcon />
          </Button>
        </Box>
        <Box display="flex" justifyContent="flex-end">
          <Button size="small">
            <DescriptionIcon />
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default ProductCardComponent;
