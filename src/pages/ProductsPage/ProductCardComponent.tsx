import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DescriptionIcon from '@mui/icons-material/Description';
import Box from '@mui/material/Box';
import { Avatar, Badge, Grid} from '@mui/material';
import { ProductModel } from '../../models/ProductModel';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';

interface Props {
  product: ProductModel;
}

const ProductCardComponent = (props: Props) => {
  return (
    <Card
      sx={{
        maxWidth: 400,
      }}
    >
      <Grid container sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          alt={props.product.name}
          height="200"
          image = {props.product.image}
        />
        <Grid
          container
          sx={{ position: 'absolute', padding: '10px' }}
        >
          <Grid item xs={6}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontWeight: 'bolder' }}
              >
                {props.product.name}
              </Typography>
          </Grid>
          <Grid item xs={6}>
            <Box display="flex" justifyContent="flex-end">
              <Avatar
                sx={{
                  bgcolor: 'white',
                  color: 'black',
                  width: 45,
                  height: 45,
                  border: 'solid black',
                }}
                aria-label="sale"
              >
                {`-${props.product.sale}`}
              </Avatar>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <CardContent>
        <Grid container>
          <Grid item xs={6} sx={{ fontStyle: 'italic', fontWeight: "bold", fontSize: "25px"}}>
            <Box display="flex" justifyContent="flex-start">
              {props.product.price}
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              display="flex"
              justifyContent="flex-end"
              sx={{ marginBottom: '15px' }}
            >
              <Badge>
                <Avatar sx={{ width: 30, height: 30 }} aria-label="sale">
                  <Button sx={{ color: 'white', backgroundColor: '#F04254' }}>
                    <FavoriteBorderIcon />
                  </Button>
                </Avatar>
                <Avatar sx={{ width: 30, height: 30 }} aria-label="sale">
                  <Button sx={{ color: '#394254', backgroundColor: 'white' }}>
                    <ShareIcon />
                  </Button>
                </Avatar>
              </Badge>
            </Box>
          </Grid>
        </Grid>
        <Box
          display="flex"
          justifyContent="flex-end"
          sx={{ fontStyle: 'italic' }}
        >
          {props.product.createdDate}
        </Box>
        <Grid container>
          <Grid item xs={12}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ fontWeight: 'bolder' }}
            >
              Description:
            </Typography>
          </Grid>
          <Typography variant="body1">{props.product.description}</Typography>
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
