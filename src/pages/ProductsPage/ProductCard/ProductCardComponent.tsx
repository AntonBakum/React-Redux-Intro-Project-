import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DescriptionIcon from '@mui/icons-material/Description';
import Box from '@mui/material/Box';
import * as styles from "./styles"
import { Avatar, Badge, Grid} from '@mui/material';
import { ProductModel } from '../../../models/ProductModel';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';

interface Props {
  product: ProductModel;
}

const ProductCardComponent = (props: Props) => {
  return (
    <Card
      sx={styles.mainCardStyle}
    >
      <Grid container sx={styles.cardMediaContainer}>
        <CardMedia
          component="img"
          alt={props.product.name}
          height="200"
          image = {props.product.image}
        />
        <Grid
          container
          sx={styles.cardMediaChildContainer}
        >
          <Grid item xs={6}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={styles.productNameTypography}
              >
                {props.product.name}
              </Typography>
          </Grid>
          <Grid item xs={6}>
            <Box display="flex" justifyContent="flex-end">
              <Avatar
                sx={styles.productSaleAvatar}
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
          <Grid item xs={6} sx={styles.productPriceItem}>
            <Box display="flex" justifyContent="flex-start">
              {props.product.price}
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              display="flex"
              justifyContent="flex-end"
              sx={styles.productCardBadgeBox}
            >
              <Badge>
                <Avatar sx={styles.productCardBageAvatar} aria-label="sale">
                  <Button sx={styles.addToFavouriteButton}>
                    <FavoriteBorderIcon />
                  </Button>
                </Avatar>
                <Avatar sx={styles.productCardBageAvatar} aria-label="sale">
                  <Button sx={styles.shareButton}>
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
          sx={styles.productDateBox}
        >
          {props.product.createdDate}
        </Box>
        <Grid container>
          <Grid item xs={12}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
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
            <Button
              sx={styles.addToCartButton}
              startIcon={<AddShoppingCartIcon />}
            >
              Add to cart
            </Button>
          </Grid>
          <Grid item xs={6} sx={styles.descriptionButtonItem}>
            <Button
              size="medium"
              sx={styles.descriptionButton}
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
