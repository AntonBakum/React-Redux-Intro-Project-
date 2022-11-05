import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DescriptionIcon from '@mui/icons-material/Description';
import Box from '@mui/material/Box';
import { Avatar, CardHeader, Grid, Paper } from '@mui/material';
import { ProductModel } from '../../models/ProductModel';

interface Props {
  product: ProductModel;
}

const ProductCardComponent = (props: Props) => {
  return (
    <Card
      sx={{
        maxWidth: 400,
        backgroundColor: 'primary.light',
      }}
    >
      <Grid container sx={{ textAlign: 'start' }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: 'red' }} aria-label="sale">
              {props.product.sale}
            </Avatar>
          }
        />
      </Grid>
      <Paper elevation={2}>
        <CardMedia
          component="img"
          alt={props.product.name}
          height="180"
          image="https://media.giphy.com/media/9xu5xmkt5IbXW/giphy.gif"
        />
      </Paper>
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
        <Grid
          container
          spacing={4}
          sx={{ textAlign: 'center', marginBottom: '20px' }}
        >
          <Grid item xs={6}>
            <Paper elevation={2} sx={{ width: '170px' }}>
              {props.product.price}
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={2} sx={{ width: '170px' }}>
              {props.product.createdDate}
            </Paper>
          </Grid>
        </Grid>
        <Grid display="flex" justifyContent="center">
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            {props.product.description}
          </Typography>
        </Grid>
      </CardContent>
      <CardActions>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Button
              sx={{
                backgroundColor: 'secondary.main',
                color: 'white',
                width: '170px',
                '&:hover': {
                  backgroundColor: 'green',
                },
              }}
              startIcon={<AddShoppingCartIcon />}
            >
              Add to cart
            </Button>
          </Grid>
          <Grid item xs={6} sx={{ textAlign: 'end' }}>
            <Button
              size="medium"
              sx={{
                backgroundColor: 'info.main',
                color: 'white',
                width: '170px',
                '&:hover': {
                  backgroundColor: 'green',
                },
              }}
              startIcon={<DescriptionIcon />}
            >
              Info
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default ProductCardComponent;
