import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Avatar,
  Badge,
  Grid,
  Box,
} from '@mui/material';
import {
  AddShoppingCart,
  FavoriteBorder,
  Share,
  Description,
} from '@mui/icons-material';
import { ProductModel } from '../../../models/ProductModel';
import { styles } from './styles';

interface Props {
  product: ProductModel;
}

const ProductCardComponent = (props: Props) => {
  return (
    <Card sx={styles.mainCardStyle}>
      <Grid container sx={styles.cardMediaContainer}>
        <CardMedia
          component="img"
          alt={props.product.name}
          height="200"
          image={props.product.image}
        />
        <Grid container sx={styles.cardMediaChildContainer}>
          <Grid item xs={6}>
            <Typography gutterBottom variant="h5" sx={styles.productName}>
              {props.product.name}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Box display="flex" justifyContent="flex-end">
              <Avatar sx={styles.productSaleAvatar} aria-label="sale">
                {`-${props.product.sale}`}
              </Avatar>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <CardContent>
        <Grid container>
          <Grid item xs={6} sx={styles.productPriceItem}>
            <Box display="flex" justifyContent="flex-start">
              {props.product.price}
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              display="flex"
              justifyContent="flex-end"
              sx={styles.productCardBadge}
            >
              <Badge>
                <Avatar sx={styles.productCardBadgeAvatar} aria-label="sale">
                  <Button sx={styles.addToFavouriteButton}>
                    <FavoriteBorder />
                  </Button>
                </Avatar>
                <Avatar sx={styles.productCardBadgeAvatar} aria-label="sale">
                  <Button sx={styles.shareButton}>
                    <Share />
                  </Button>
                </Avatar>
              </Badge>
            </Box>
          </Grid>
        </Grid>
        <Box display="flex" justifyContent="flex-end" sx={styles.productDate}>
          {props.product.createdDate}
        </Box>
        <Grid container>
          <Grid item xs={12}>
            <Typography
              gutterBottom
              variant="h6"
              sx={styles.productDescriptionHeader}
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
            <Button sx={styles.addToCartButton} startIcon={<AddShoppingCart />}>
              Add to cart
            </Button>
          </Grid>
          <Grid item xs={6} sx={styles.descriptionButtonItem}>
            <Button
              size="medium"
              sx={styles.descriptionButton}
              startIcon={<Description />}
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
